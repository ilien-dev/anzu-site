/// <reference types="bun" />
// Builds the real Anzu window for the web and puts it in public/demo.
//
// Runs from the site folder inside the app repository (the site is a submodule at
// `site/`). Needs the Rust target `wasm32-unknown-unknown` and `wasm-bindgen-cli` at the
// version pinned in `crates/anzu-web/Cargo.toml`. The output is committed, so the site
// builds without Rust.

import { $ } from "bun";
import { existsSync, mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const site = resolve(import.meta.dir, "..");
const app = resolve(site, "..");
const out = join(site, "public", "demo");
const wasm = join(app, "target", "wasm32-unknown-unknown", "web", "anzu_web.wasm");

if (!existsSync(join(app, "crates", "anzu-web"))) {
  console.error("The app sources were not found next to the site: run this from the anzu repository.");
  process.exit(1);
}

await $`cargo build -p anzu-web --lib --profile web --target wasm32-unknown-unknown`.cwd(app);

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
await $`wasm-bindgen --target web --no-typescript --out-dir ${out} ${wasm}`;

// wasm-opt comes from the `binaryen` dev dependency.
const bg = join(out, "anzu_web_bg.wasm");
await $`bun x wasm-opt -Os --strip-debug --strip-producers -o ${bg} ${bg}`.cwd(site);

const cargo = readFileSync(join(app, "Cargo.toml"), "utf8");
const version = /\[workspace\.package\][^[]*?version\s*=\s*"([^"]+)"/s.exec(cargo)?.[1] ?? "unknown";
writeFileSync(join(out, "version.json"), JSON.stringify({ version }) + "\n");
console.log(`Demo of Anzu ${version} written to public/demo`);
