# Anzu site

The product page of [Anzu](https://github.com/ilien-dev/anzu): Astro, Tailwind and
TypeScript, built with Bun. English at `/`, Spanish at `/es/`. The theme follows the
system.

The window at the top of the page is the app itself: the real interface of Anzu,
compiled to WebAssembly from `crates/anzu-web` and played by a script
(`crates/anzu/src/ui/demo.rs`) with sample books. Only the Windows caption and the two
folders beside it are HTML.

## Work on it

This repository is a submodule of the app repository, at `site/`. Work from there, so
the demo can be rebuilt from the app's sources.

```sh
bun install
bun run dev          # http://localhost:4321
bun run check        # types
bun run build        # static site in dist/
```

## Update the demo

After a change to the app's interface:

```sh
bun run demo:build
```

It builds `crates/anzu-web` for `wasm32-unknown-unknown` with the `web` profile, runs
`wasm-bindgen` and `wasm-opt`, and writes `public/demo/` (with `version.json`). Commit
that folder: Cloudflare builds the site without Rust.

Needs, once:

```sh
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli --version 0.2.130 --locked   # the version in crates/anzu-web/Cargo.toml
```

To see the same demo in a native window, for comparison: `cargo run -p anzu -- --demo`
(debug builds only).

## Cloudflare Pages

- Framework preset: Astro
- Build command: `bun run build`
- Output directory: `dist`
- Environment variable: `BUN_VERSION` = `1.4.0`

`public/_headers` serves the WebAssembly with its type and caches the fonts.

## License

GPL-3.0-or-later, like the app. JetBrains Mono (`public/fonts`) is under the SIL Open
Font License, `public/fonts/OFL.txt`.
