// The latest release, asked while the site is built. It uses node:https without a
// shared agent, so the socket closes with the answer: a socket that fetch keeps open
// makes Node and Bun on Windows crash when the build exits.

import { get } from "node:https";
import { parseRelease, type Release } from "./release";

const URL = "https://api.github.com/repos/ilien-dev/anzu/releases/latest";

let pending: Promise<Release | null> | undefined;

/** The latest release, or null when GitHub does not answer in time. Asked once per build. */
export function releaseAtBuild(): Promise<Release | null> {
  pending ??= new Promise((resolve) => {
    const request = get(
      URL,
      { agent: false, timeout: 5000, headers: { Accept: "application/vnd.github+json", "User-Agent": "anzu-site" } },
      (response) => {
        if (response.statusCode !== 200) {
          response.resume();
          resolve(null);
          return;
        }
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk: string) => (body += chunk));
        response.on("end", () => {
          try {
            resolve(parseRelease(JSON.parse(body)));
          } catch {
            resolve(null);
          }
        });
      },
    );
    request.on("timeout", () => request.destroy());
    request.on("error", () => resolve(null));
  });
  return pending;
}
