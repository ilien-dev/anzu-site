// Starts the real Anzu window (public/demo, built from crates/anzu-web by
// `bun run demo:build`).

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
// The smallest the real window can be made (`MIN_WIDTH` in crates/anzu/src/ui/mod.rs):
// narrower than this, the app scales itself down instead of laying out again.
const MIN_WIDTH = 820;

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

/** Offers the window at full size when the app has scaled itself well down to fit. */
function fit(stage: HTMLElement, viewport: HTMLElement): void {
  const apply = () => {
    if ("full" in stage.dataset) return;
    stage.toggleAttribute("data-small", viewport.clientWidth / MIN_WIDTH < 0.8);
  };
  new ResizeObserver(apply).observe(viewport);
  apply();
}

/**
 * The demo plays itself and ignores what the visitor does, but eframe listens for the
 * wheel and for touches on its canvas and cancels them, so the page stopped scrolling over
 * the window. Stopped here, on the way down to the canvas, those gestures scroll the page.
 */
function passThrough(viewport: HTMLElement): void {
  for (const type of ["wheel", "touchstart", "touchmove", "touchend", "touchcancel"]) {
    viewport.addEventListener(type, (event) => event.stopPropagation(), { capture: true, passive: true });
  }
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
    await demo.start(canvas, stage.dataset.lang ?? "en", themeNow(dark), () => {});
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
  passThrough(viewport);

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
