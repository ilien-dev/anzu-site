---
name: Anzu site
description: The product site of Anzu, built from the app's own world, with the real app window running at its true size.
colors:
  ink: "#15161a"
  drm: "#ffb4a2"
  unlocked: "#c9b8ff"
  epub: "#c8f0a0"
  info: "#a8e1f5"
  butter: "#fff27a"
  bg: "#f4f5f7"
  panel: "#ffffff"
  line: "#e4e7ec"
  line-strong: "#c9cdd5"
  fg: "#15161a"
  muted: "#565a64"
  quiet: "#edeff2"
  accent: "#15161a"
  on-accent: "#ffffff"
  shell: "#15161a"
  shell-chip: "#26282e"
  on-shell: "#ffffff"
  shell-muted: "#c9ccd3"
  shell-line: "#3a3d45"
  shell-accent: "#fff27a"
  on-shell-accent: "#15161a"
  ok: "#2f7a1f"
  warn: "#8a2e14"
  warn-bg: "#fff4f1"
  drm-tint: "#ffe3db"
  epub-tint: "#e6f8d4"
  select: "#fffbd6"
  caption: "#f3f3f3"
  caption-fg: "#1b1b1b"
  bg-dark: "#0e0f12"
  panel-dark: "#16171b"
  line-dark: "#2a2c33"
  line-strong-dark: "#3a3d45"
  fg-dark: "#ecedef"
  muted-dark: "#a3a7b0"
  quiet-dark: "#1e2025"
  accent-dark: "#fff27a"
  on-accent-dark: "#15161a"
  shell-dark: "#060708"
  shell-chip-dark: "#1e2025"
  shell-muted-dark: "#a3a7b0"
  ok-dark: "#a9e57a"
  warn-dark: "#ffb4a2"
  warn-bg-dark: "#331c17"
  drm-tint-dark: "#3a2620"
  epub-tint-dark: "#22301b"
  select-dark: "#24220f"
  caption-dark: "#202020"
  caption-fg-dark: "#ffffff"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  headline-closing:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    letterSpacing: "-0.03em"
  button:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  path:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(1rem, 2.3vw, 1.75rem)"
    fontWeight: 700
  title:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  note:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  micro:
    fontFamily: "Inter, ui-sans-serif, Segoe UI, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
rounded:
  app: "10px"
  action: "14px"
  card: "16px"
  logo-tile: "28px"
  window: "8px"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  section-y: "96px"
  section-y-sm: "128px"
  closing-y: "112px"
  closing-y-sm: "144px"
  header-height: "64px"
  block: "40px"
  block-wide: "56px"
  container: "1240px"
components:
  header-band:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.on-shell}"
    height: "{spacing.header-height}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.action}"
    padding: "0 24px"
    height: "52px"
    typography: "{typography.button}"
  button-primary-band:
    backgroundColor: "{colors.shell-accent}"
    textColor: "{colors.on-shell-accent}"
    rounded: "{rounded.action}"
    padding: "0 24px"
    height: "52px"
    typography: "{typography.button}"
  button-primary-header:
    backgroundColor: "{colors.shell-accent}"
    textColor: "{colors.on-shell-accent}"
    rounded: "{rounded.app}"
    padding: "0 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.action}"
    padding: "0 20px"
    height: "52px"
  fact-chip:
    backgroundColor: "{colors.quiet}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
    typography: "{typography.note}"
  path-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
    rounded: "{rounded.card}"
    padding: "24px 32px"
    typography: "{typography.path}"
  window-frame:
    backgroundColor: "{colors.caption}"
    rounded: "{rounded.window}"
    width: "1182px"
  footer:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.shell-muted}"
    padding: "32px {spacing.gutter-sm}"
    typography: "{typography.note}"
---

# Design System: Anzu site

## Overview

**Creative North Star: "Coloured paper"**

The site is the app's own world, not a marketing skin over it. Its palette is the app's,
token for token (`crates/anzu/src/ui/theme.rs`): ink on cool white in light, light ink on
night in dark, switched by the system preference. Four pastels name the state of a book
everywhere they appear: peach for DRM, lilac for unlocked, mint for EPUB, and butter for
what is chosen or running. A fifth, sky, marks information. Pastels are fills only, never
the colour of text; text on a pastel is always ink, in both themes.

Type is the app's: Space Grotesk for headings, the name and the main actions, Inter for
everything that is read. Corners are soft (10 px controls, 14 px main actions, 16 px
cards). The page has one object of weight, the real Anzu window compiled to WebAssembly,
inside an HTML Windows 11 frame; it is the only lifted thing on the page.

The page is framed top and bottom by the ink band, dark in both themes, as the app's own
header is.

**Key Characteristics:**
- Space Grotesk 700 for headings, Inter 400 and 600 for text; JetBrains Mono only for the
  output path.
- Ink band header and closing band in both themes; content between them on bg with panel
  surfaces.
- Four state pastels as fills, always with ink on top.
- The tricolour logo: a lilac wing, a peach wing and a butter tablet on an ink tile.
- Drawn line icons beside actions; the Windows mark on every download button.
- One shadow in the whole system, under the window.

## Colors

### State pastels (same in both themes)
- **Peach** (drm): with DRM. First track stage, the top of the flow spine, the right wing.
- **Lilac** (unlocked): unlocked. Second track stage, the left wing.
- **Mint** (epub): EPUB. Third track stage, the highlighted phrase of the hero, the final
  file of the path.
- **Butter** (butter, shell-accent): chosen or running. Primary action on the ink band, the
  tablet of the logo.
- **Sky** (info): information. A fact chip, the update notice in the app.

### Neutral
- **Cool paper** (bg) / **Night** (bg-dark): page ground.
- **Panel** (panel / panel-dark): cards and the path panel.
- **Hairline** (line, line-strong and their dark pairs): dividers and control borders.
- **Ink** (fg) / **Light ink** (fg-dark): headings and primary text.
- **Slate** (muted / muted-dark): leads, body copy in sections, notes.
- **Quiet** (quiet / quiet-dark): chips and empty track stages.
- **Ink band** (shell, shell-chip, on-shell, shell-muted, shell-line): header, closing band
  and footer. Dark in both themes.
- **Windows caption** (caption, caption-fg and their dark pairs): the window frame only.

### Named Rules
**The App Palette Rule.** The site's colours are the app's palette. A new colour enters the
site only after it enters `theme.rs`.

**The Pastel Rule.** Pastels fill; they never colour text. Labels next to a pastel are ink
(or light ink in dark) with a small pastel square beside them.

**The Main Action Rule.** The main action is ink with white text in light and butter with
ink text in dark, on content ground; on the ink band it is butter in both themes.

## Typography

- **Display** (Space Grotesk 700, clamp(2.6rem, 6vw, 5.25rem), 0.98, -0.05em): the hero
  headline; its second phrase sits on a mint highlight.
- **Headline closing** and **Headline** (Space Grotesk 700): the closing band and every
  section title.
- **Wordmark** (Space Grotesk 700, 20px): "Anzu" beside the 32px logo tile.
- **Button** (Space Grotesk 700, 16px): download buttons.
- **Title** (Inter 600, 19px): step titles.
- **Body**, **Body small**, **Label**, **Note** (Inter 400): copy, navigation, chips.
- **Path** (JetBrains Mono 700): the output path panel, broken anywhere.

## Layout

One centred column, max 1240px, with 16px gutters that become 32px from 640px. Sections are
full-width bands separated by a 1px top rule, padded 96px vertically (128px from 640px).
The window keeps its real 1180 x 760 size where it fits and is scaled as a whole below.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (bg, panel, the ink band) and 1px lines.
Exactly one shadow exists: the window's.

## Shapes

10px on controls (the language switch, the header Download, strip tiles), 14px on the main
actions, 16px on cards and the path panel, 28px on the large logo tile of the name section,
full pills on fact chips and track bars. The Windows 11 frame is 8px because Windows draws
it so.

## Components

### Buttons
- **Primary:** accent fill (see The Main Action Rule), Space Grotesk 16px, 52px tall, 14px
  corners, the four-pane Windows mark at 18px before "Download for Windows". The header's
  is the compact form: Inter 600 14px, 40px tall, 10px corners, the Windows mark at 15px.
- **Secondary:** bordered (line-strong), 52px tall, with a down-arrow icon: "See how it
  works".
- **Hover / Focus:** 300ms expo-out lift of 2px (1px in the header). Focus is the global
  2px accent ring, offset 3px.

### Chips
Hero facts are pills on quiet with a small pastel square each.

### The Track and Spine (signature)
Three pill bars in peach, lilac and mint, with ink labels beside a pastel square, filling in
turn as they scroll into view. The flow list hangs on a 3px spine graded in the same three
pastels, with a filled dot per step in its stage pastel. The closing band repeats the track
as three filled pills.

### The Window (signature)
The real app, untouched, in an HTML Windows 11 frame. See `Stage.astro`.

## Do's and Don'ts

### Do:
- **Do** take every colour from the app's palette, in both themes, with the ink band dark in
  both.
- **Do** put a drawn icon beside actions and the Windows mark on every download button.
- **Do** keep text on pastels ink, in both themes.
- **Do** keep content visible without animation support and let reduced motion skip
  time-based entrances.

### Don't:
- **Don't** build an HTML lookalike of the app's interface; the window is the app itself.
- **Don't** colour text with a pastel.
- **Don't** add shadows beyond the window's.
- **Don't** use emoji or text glyphs as icons.
