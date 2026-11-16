// The latest release of the app on GitHub. The page is built with the release of
// the moment, and in the browser it asks GitHub again, so it names a newer release
// without a rebuild of the site.

const API = "https://api.github.com/repos/ilien-dev/anzu/releases/latest";

export interface Release {
  version: string;
  /** When it was published, as GitHub writes it (ISO 8601). */
  date: string;
}

export function parseRelease(json: unknown): Release | null {
  if (typeof json !== "object" || json === null) return null;
  const { tag_name: tag, published_at: date } = json as Record<string, unknown>;
  if (typeof tag !== "string" || typeof date !== "string" || Number.isNaN(Date.parse(date))) return null;
  return { version: tag.replace(/^v/, ""), date };
}

/** "Version 0.8.1 · Nov 16, 2026", in the language of the page. */
export function releaseLabel(release: Release, prefix: string, locale: string): string {
  const day = new Date(release.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return `${prefix} ${release.version} · ${day}`;
}

let pending: Promise<Release | null> | undefined;

/** The latest release, or null when GitHub does not answer in time. Asked once. */
export function fetchRelease(): Promise<Release | null> {
  pending ??= ask(5000);
  return pending;
}

async function ask(timeout: number): Promise<Release | null> {
  // A timer of its own, cleared at the end, so nothing is left running.
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), timeout);
  try {
    const response = await fetch(API, {
      headers: { Accept: "application/vnd.github+json" },
      signal: abort.signal,
    });
    return response.ok ? parseRelease(await response.json()) : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
