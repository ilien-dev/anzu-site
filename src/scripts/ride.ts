// Scroll-driven motion of "From the Kindle app to your reader" and "Where your EPUB ends
// up". Each block plays as it comes into view and is complete once the whole block is on
// screen, with its bottom edge at least END_MARGIN px above the bottom of the window.
// Without this script, or with reduced motion, both blocks show their final state.

/** Where a block starts to play: its top edge at this fraction of the window height. */
const START = 0.95;
/** The block is complete when its bottom edge is this far above the bottom of the window. */
const END_MARGIN = 20;
/** Share of the progress spent on the book's way down; the rest fills the EPUB stage. */
const TRAVEL = 0.88;

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/** 0 while the block is below START, 1 once all of it is on screen above END_MARGIN. */
function progress(block: HTMLElement): number {
  const rect = block.getBoundingClientRect();
  const view = innerHeight;
  const begin = START * view;
  // The top of the block where it ends: its bottom edge END_MARGIN px above the window's.
  const end = view - END_MARGIN - rect.height;
  if (begin - end <= 1) return rect.top <= begin ? 1 : 0;
  return clamp((begin - rect.top) / (begin - end));
}

/** The book of the step list rides the spine, lighting each step and the track it reaches. */
function ride(list: HTMLElement): () => void {
  const section = list.closest("section");
  const token = list.querySelector<HTMLElement>("[data-token]");
  const spine = list.querySelector<HTMLElement>("[data-spine]");
  const steps = [...list.querySelectorAll<HTMLElement>("li[data-stage]")];
  const bars = [...(section?.querySelectorAll<HTMLElement>("[data-bar]") ?? [])];
  if (!token || !spine || steps.length === 0 || bars.length !== 3) return () => {};
  list.toggleAttribute("data-on", true);

  return () => {
    // The centre of each step's dot, from the top of the list: `top: 2.15rem` and 13 px tall.
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const dots = steps.map((step) => step.offsetTop + 2.15 * rem + 6.5);
    const p = progress(list);

    const first = dots[0]!;
    const last = dots[dots.length - 1]!;
    const y = first + (last - first) * clamp(p / TRAVEL);
    token.style.translate = `0 ${y - token.offsetHeight / 2}px`;
    // Clipped rather than scaled, so each colour of the spine stays beside its own steps.
    const shown = clamp((y - spine.offsetTop) / spine.offsetHeight);
    spine.style.clipPath = `inset(0 0 ${(1 - shown) * 100}% 0)`;

    let stage = 0;
    steps.forEach((step, i) => {
      const lit = dots[i]! <= y + 1;
      step.toggleAttribute("data-lit", lit);
      if (lit) stage = Number(step.dataset.stage);
    });
    token.dataset.stage = String(stage);

    // The stages of the track fill as the book crosses them: DRM up to the unlocking step,
    // Unlocked up to the converting step, EPUB in the last stretch.
    const unlockAt = dots[steps.findIndex((s) => s.dataset.stage === "1")] ?? last;
    const fills = [
      clamp((y - first) / (unlockAt - first)),
      clamp((y - unlockAt) / (last - unlockAt)),
      clamp((p - TRAVEL) / (1 - TRAVEL)),
    ];
    bars.forEach((bar, i) => (bar.style.transform = `scaleX(${fills[i]})`));
  };
}

/** The path, the file and the facts play on their own stretch of the block's progress. */
function reveal(block: HTMLElement): () => void {
  return () => block.style.setProperty("--p", progress(block).toFixed(4));
}

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const updates = [
    ...[...document.querySelectorAll<HTMLElement>("[data-ride]")].map(ride),
    ...[...document.querySelectorAll<HTMLElement>("[data-reveal]")].map(reveal),
  ];
  const update = () => updates.forEach((run) => run());
  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };
  update();
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
}
