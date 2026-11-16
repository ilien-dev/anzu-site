// Starts the real Anzu window (public/demo, built from crates/anzu-web by
// `bun run demo:build`) and moves the strip above it on the window's events.

interface AnzuDemo {
  start(canvas: HTMLCanvasElement, lang: string, theme: string, onEvent: (event: string) => void): Promise<void>;
  set_language(lang: string): void;
  set_theme(theme: string): void;
}
interface AnzuModule {
  default: (input?: unknown) => Promise<unknown>;
  Demo: new () => AnzuDemo;
}

const DEMO_URL = "/demo/anzu_web.js";
const WIDTH = 1180;
const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";

// The demo is a static file in public/, outside the bundle: a module script loads it.
function loadModule(): Promise<AnzuModule> {
  return new Promise((resolve, reject) => {
    const key = "__anzuDemo";
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `import init, { Demo } from ${JSON.stringify(DEMO_URL)}; window.${key} = { default: init, Demo }; dispatchEvent(new Event("${key}"));`;
    script.onerror = () => reject(new Error("the demo could not be loaded"));
    addEventListener(key, () => resolve((window as unknown as Record<string, AnzuModule>)[key]!), { once: true });
    document.head.append(script);
  });
}

function themeNow(media: MediaQueryList): string {
  return media.matches ? "dark" : "light";
}

/** Scales the window as a whole to the room there is, never above its real size. */
function fit(stage: HTMLElement, viewport: HTMLElement): void {
  const apply = () => {
    if ("full" in stage.dataset) return;
    const scale = Math.min(1, viewport.clientWidth / WIDTH);
    stage.style.setProperty("--s", String(scale));
    stage.toggleAttribute("data-small", scale < 0.75);
  };
  new ResizeObserver(apply).observe(viewport);
  apply();
}

/** A dot running along a line of the strip: across a flow, or down/up the hub. */
function run(template: Element | null, axis: "x" | "y", reverse = false, delay = 0): Promise<void> {
  if (!(template instanceof HTMLElement) || !template.parentElement) return Promise.resolve();
  const line = template.parentElement;
  // A dot of its own for every run, so runs that overlap never hide each other.
  const dot = template.cloneNode() as HTMLElement;
  line.append(dot);
  const length = axis === "x" ? line.clientWidth - dot.offsetWidth : line.clientHeight / 2 + 12;
  const move = (d: number) => (axis === "x" ? `translateX(${d}px)` : `translateY(${d}px)`);
  const frames = [
    { transform: move(0), opacity: 0 },
    { opacity: 1, offset: 0.15 },
    { opacity: 1, offset: 0.85 },
    { transform: move(length), opacity: 0 },
  ];
  const animation = dot.animate(frames, {
    duration: 700,
    delay,
    easing: EASE,
    fill: "backwards",
    direction: reverse ? "reverse" : "normal",
  });
  const done = () => dot.remove();
  return animation.finished.then(done, done);
}

function onEvents(stage: HTMLElement): (event: string) => void {
  let saved = 0;
  const outputs = stage.querySelectorAll<HTMLElement>(".chip-out[data-saved]");
  const dot = (name: string) => stage.querySelector(`[data-dot="${name}"]`);
  return (event) => {
    switch (event) {
      case "download":
        stage.dataset.phase = "download";
        // The two files leave the Kindle app for the window.
        for (const delay of [1500, 2100]) {
          void run(dot("in"), "x", false, delay).then(() => run(dot("down"), "y"));
        }
        break;
      case "saved": {
        saved += 1;
        stage.dataset.phase = "saved";
        const chip = outputs[saved - 1];
        // Each EPUB comes out of the window and lands in its folder.
        void run(dot("up"), "y", true)
          .then(() => run(dot("out"), "x"))
          .then(() => chip?.classList.add("on"));
        break;
      }
      case "loop":
        saved = 0;
        stage.dataset.phase = "idle";
        outputs.forEach((chip) => chip.classList.remove("on"));
        break;
    }
  };
}

/** On small screens, the window can be opened at its real size, to pan around. */
function fullSize(stage: HTMLElement): void {
  const open = stage.querySelector<HTMLButtonElement>("[data-open-full]");
  const close = stage.querySelector<HTMLButtonElement>("[data-close-full]");
  if (!open || !close) return;
  const exit = () => {
    delete stage.dataset.full;
    document.documentElement.style.overflow = "";
    removeEventListener("keydown", onKey);
    open.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") exit();
  };
  open.addEventListener("click", () => {
    stage.dataset.full = "";
    document.documentElement.style.overflow = "hidden";
    addEventListener("keydown", onKey);
    close.focus();
  });
  close.addEventListener("click", exit);
}

async function start(stage: HTMLElement): Promise<void> {
  const canvas = stage.querySelector<HTMLCanvasElement>("[data-canvas]");
  if (!canvas) return;
  const dark = window.matchMedia("(prefers-color-scheme: dark)");
  try {
    const module = await loadModule();
    await module.default();
    const demo = new module.Demo();
    await demo.start(canvas, stage.dataset.lang ?? "en", themeNow(dark), onEvents(stage));
    dark.addEventListener("change", () => demo.set_theme(themeNow(dark)));
    // Reachable from the console, to try languages and themes by hand.
    (window as unknown as { anzuDemo: AnzuDemo }).anzuDemo = demo;
    // Let the first frames land before the window shows.
    requestAnimationFrame(() => requestAnimationFrame(() => (stage.dataset.ready = "")));
  } catch (error) {
    console.error("Anzu demo:", error);
    stage.dataset.failed = "";
    const text = stage.querySelector<HTMLElement>("[data-veil-text]");
    const failed = stage.querySelector<HTMLTemplateElement>("template[data-failed]");
    if (text && failed) text.textContent = failed.content.textContent;
  }
}

function init(): void {
  const stage = document.querySelector<HTMLElement>("[data-stage]");
  const viewport = stage?.querySelector<HTMLElement>("[data-viewport]");
  if (!stage || !viewport) return;
  fit(stage, viewport);
  fullSize(stage);

  // Who asked for less motion starts the demo themselves.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const play = stage.querySelector<HTMLButtonElement>("[data-play]");
    const text = stage.querySelector<HTMLElement>("[data-veil-text]");
    stage.dataset.waiting = "";
    if (text) text.hidden = true;
    if (play) {
      play.hidden = false;
      play.addEventListener(
        "click",
        () => {
          play.hidden = true;
          if (text) text.hidden = false;
          delete stage.dataset.waiting;
          void start(stage);
        },
        { once: true },
      );
    }
    return;
  }

  // Load the window when it is about to be seen.
  const seen = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        seen.disconnect();
        void start(stage);
      }
    },
    { rootMargin: "200px" },
  );
  seen.observe(stage);
}

init();
