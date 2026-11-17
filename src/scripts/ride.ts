// The book of "From the Kindle app to your reader" rides the spine of the step list as the
// list scrolls into view. It starts when the top of the list reaches the lower part of the
// window and reaches the last step when the list is centred, so the motion is over by then.
// Without this script, or with reduced motion, the list shows complete and the track full.

/** Where the movement starts: the top of the list at this fraction of the window height. */
const START = 0.85;
/** Share of the scroll spent on the book's way down; the rest fills the EPUB stage. */
const TRAVEL = 0.88;

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function ride(list: HTMLElement): void {
  const section = list.closest("section");
  const token = list.querySelector<HTMLElement>("[data-token]");
  const spine = list.querySelector<HTMLElement>("[data-spine]");
  const steps = [...list.querySelectorAll<HTMLElement>("li[data-stage]")];
  const bars = [...(section?.querySelectorAll<HTMLElement>("[data-bar]") ?? [])];
  if (!token || !spine || steps.length === 0 || bars.length !== 3) return;

  // The centre of each step's dot, from the top of the list: `top: 2.15rem` and 13 px tall.
  let dots: number[] = [];
  const measure = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    dots = steps.map((step) => step.offsetTop + 2.15 * rem + 6.5);
  };

  const update = () => {
    const rect = list.getBoundingClientRect();
    const view = innerHeight;
    // 0 when the top of the list reaches START, 1 when the list is centred in the window.
    const span = START * view - (view - rect.height) / 2;
    const progress = span > 0 ? clamp((START * view - rect.top) / span) : 1;

    const first = dots[0]!;
    const last = dots[dots.length - 1]!;
    const y = first + (last - first) * clamp(progress / TRAVEL);
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
    // Unlocked up to the converting step, EPUB in the last stretch of the scroll.
    const unlockAt = dots[steps.findIndex((s) => s.dataset.stage === "1")] ?? last;
    const fills = [
      clamp((y - first) / (unlockAt - first)),
      clamp((y - unlockAt) / (last - unlockAt)),
      clamp((progress - TRAVEL) / (1 - TRAVEL)),
    ];
    bars.forEach((bar, i) => (bar.style.transform = `scaleX(${fills[i]})`));
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };

  measure();
  list.toggleAttribute("data-on", true);
  update();
  addEventListener("scroll", schedule, { passive: true });
  new ResizeObserver(() => {
    measure();
    schedule();
  }).observe(list);
}

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll<HTMLElement>("[data-ride]").forEach(ride);
}
