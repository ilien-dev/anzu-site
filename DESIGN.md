---
name: Anzu site
description: The product site of Anzu, built from the app's own world, with the real app window running at its true size.
colors:
  bg: "#f3f5f7"
  panel: "#ffffff"
  line: "#cbd2d9"
  fg: "#14171a"
  muted: "#55606b"
  accent: "#b25e00"
  on-accent: "#ffffff"
  shell: "#14171a"
  on-shell: "#f3f5f7"
  shell-muted: "#a9b3bd"
  shell-line: "#3a424a"
  shell-accent: "#ffb000"
  on-shell-accent: "#14171a"
  ok: "#1f6b3a"
  warn: "#a63a12"
  select: "#fff1d6"
  caption: "#f3f3f3"
  caption-fg: "#1b1b1b"
  bg-dark: "#0e0f0c"
  panel-dark: "#161812"
  line-dark: "#34382b"
  fg-dark: "#e9e6d6"
  muted-dark: "#a7a48f"
  accent-dark: "#ffb000"
  on-accent-dark: "#1a1200"
  shell-dark: "#1c1f17"
  on-shell-dark: "#e9e6d6"
  shell-muted-dark: "#a7a48f"
  shell-line-dark: "#3b4031"
  on-shell-accent-dark: "#1a1200"
  ok-dark: "#a2d975"
  warn-dark: "#ff9166"
  select-dark: "#2a2410"
  caption-dark: "#202020"
  caption-fg-dark: "#ffffff"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(2.4rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline-closing:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  path:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(1rem, 2.3vw, 1.75rem)"
    fontWeight: 700
  title:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.015em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "tnum"
  body-small:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  wordmark:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "17px"
    fontWeight: 700
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
  note:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.7
  micro:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
rounded:
  hairline: "1px"
  track: "2px"
  app: "3px"
  window: "8px"
  dot: "50%"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  section-y: "96px"
  section-y-sm: "128px"
  closing-y: "112px"
  closing-y-sm: "144px"
  header-height: "64px"
  strip-gap: "12px"
  block: "40px"
  block-wide: "56px"
  container: "1240px"
components:
  header-band:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.on-shell}"
    height: "{spacing.header-height}"
  nav-link:
    textColor: "{colors.shell-muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.on-shell}"
  lang-switch:
    textColor: "{colors.shell-muted}"
    rounded: "{rounded.app}"
    padding: "6px 10px"
    typography: "{typography.note}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.app}"
    padding: "0 20px"
    height: "48px"
  button-primary-band:
    backgroundColor: "{colors.shell-accent}"
    textColor: "{colors.on-shell-accent}"
    rounded: "{rounded.app}"
    padding: "0 20px"
    height: "48px"
  button-primary-header:
    backgroundColor: "{colors.shell-accent}"
    textColor: "{colors.on-shell-accent}"
    rounded: "{rounded.app}"
    padding: "0 14px"
    height: "36px"
  link-secondary:
    textColor: "{colors.fg}"
    typography: "{typography.body-small}"
  button-quiet:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.fg}"
    rounded: "{rounded.app}"
    padding: "0 16px"
    height: "44px"
  strip-tile:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.fg}"
    rounded: "{rounded.app}"
    padding: "0 9.6px"
    height: "40px"
    typography: "{typography.micro}"
  chip-in:
    textColor: "{colors.warn}"
    typography: "{typography.micro}"
  chip-out:
    textColor: "{colors.ok}"
    typography: "{typography.micro}"
  window-frame:
    backgroundColor: "{colors.caption}"
    rounded: "{rounded.window}"
    width: "1182px"
  window-caption:
    backgroundColor: "{colors.caption}"
    textColor: "{colors.caption-fg}"
    height: "32px"
  path-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
    rounded: "{rounded.app}"
    padding: "24px 32px"
    typography: "{typography.path}"
  track:
    textColor: "{colors.line}"
    rounded: "{rounded.track}"
    height: "10px"
    typography: "{typography.note}"
  flow-step:
    textColor: "{colors.muted}"
    padding: "28px 0"
    typography: "{typography.title}"
  closing-band:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.on-shell}"
    padding: "{spacing.closing-y-sm} {spacing.gutter-sm}"
  footer:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.shell-muted}"
    padding: "32px {spacing.gutter-sm}"
    typography: "{typography.note}"
---

# Design System: Anzu site

## Overview

**Creative North Star: "Amber console"**

The site is the app's own world, not a marketing skin over it. Every voice is JetBrains Mono, the same two weights the app ships; the palette is the app's two palettes token for token (`crates/anzu/src/ui/theme.rs`), "Cold paper" in light and charcoal in dark, switched by the system preference alone. Surfaces are flat panels on a cool or charcoal ground, divided by 1 px lines and nearly square 3 px corners. Amber is the only accent and it is spent sparingly: the primary action, the logo badge, thin lines and running dots, one phrase of the headline.

The page has one object of weight, the real Anzu window compiled to WebAssembly, inside an HTML Windows 11 frame. It is the only lifted thing on the page and the only place the site borrows another system's look (the Windows caption). Around it the app's three-stage track (DRM, unlocked, EPUB in warn, accent and ok) is the recurring device: it marks the files in the strip above the window, runs down the flow section as its spine, and closes the page as three filled bars.

The page is framed top and bottom by the ink band, dark in both themes, as the app's own header is. Motion is entrance and narration, never ambience: each element arrives once through one of a few named movements, and the strip above the window moves only when the running app reports an event.

**Key Characteristics:**
- One family, JetBrains Mono 400 and 700, tabular numerals everywhere.
- Ink band header and closing band in both themes; content between them on bg with panel surfaces.
- 3 px corners and 1 px lines; the 8 px Windows 11 frame is the only rounder shape.
- One shadow in the whole system, under the window.
- The three-stage track in warn, accent, ok as the signature device.
- Motion arrives once and is tied to what the element is.

## Colors

The app's palette, unchanged: cool paper or charcoal grounds, ink or bone text, a single amber accent and two status colors that double as the track.

### Primary
- **Toasted Amber** (accent, light) / **Console Amber** (accent-dark): the primary action fill on content ground, the second phrase of the hero headline, the focus ring, the text caret, the loading line of the window veil, the dots that run the strip, and the middle (unlocked) stage of the track. As text, light accent passes only at display size or on panel ground (#B25E00 on bg is about 4.27:1).
- **Band Amber** (shell-accent, same in both themes): the primary action fill on the ink band (header Download, closing Download), the logo badge tile, and the hover underline and border on the band.

### Secondary
- **Ledger Green** (ok / ok-dark): the EPUB stage. Output chips, the third track segment, the receiving tile's border when a book is saved, the outgoing dots, the final file in the path, the closing band's finished track.
- **Rust** (warn / warn-dark): the DRM stage. Incoming locked chips, the first track segment, the top of the flow spine. It is never used for errors on the site; it means "still locked".

### Neutral
- **Cold Paper** (bg) / **Charcoal** (bg-dark): page ground and the window viewport behind the canvas.
- **Panel White** (panel) / **Panel Charcoal** (panel-dark): strip tiles, the path panel, quiet buttons, the skip link.
- **Hairline** (line / line-dark): every divider, section top rule, table row rule, tile border, empty track segment, dashed flow line, and the frame's 1 px border.
- **Ink** (fg) / **Bone** (fg-dark): headings and primary text.
- **Slate** (muted) / **Moss Grey** (muted-dark): lead paragraphs, body copy in sections, notes, kept files.
- **Ink Band** (shell) / **Charcoal Band** (shell-dark), with on-shell, shell-muted and shell-line: the header and the closing band plus footer. Dark ink in both themes.
- **Selection Wash** (select / select-dark): text selection only.
- **Windows Caption** (caption, caption-fg and their dark pairs): the window frame's caption bar and the full-size bar. Borrowed from Windows 11; never used elsewhere.

### Named Rules
**The App Palette Rule.** The site's colors are the app's palette. A new color enters the site only after it enters `theme.rs`.

**The Small Amber Rule.** Amber is never a ground or a large surface. It fills only the primary action, the small logo badge tile and the logo mark itself at any size; everywhere else it is a line, a dot, a ring or a phrase of text.

**The Track Colors Rule.** Warn means "still locked" and ok means "EPUB"; neither carries any other meaning on the site. Inside a track, accent stands for the unlocked stage; outside a track it keeps its accent roles.

## Typography

**Display Font:** JetBrains Mono (with ui-monospace, Cascadia Mono, Consolas, monospace)
**Body Font:** JetBrains Mono, the same family
**Label/Mono Font:** JetBrains Mono, the same family

**Character:** The app's own type, self-hosted at 400 and 700 only. Large sizes are bold and tightly tracked so the monospace reads as a headline, not as code; body stays regular with generous leading.

### Hierarchy
- **Display** (700, clamp(2.4rem, 5vw, 4.25rem), 1.02, -0.035em): the hero headline only; its second phrase is accent.
- **Headline closing** (700, clamp(2rem, 4.6vw, 3.75rem), 1.05, -0.035em, max 20ch): the closing band's headline.
- **Headline** (700, clamp(1.75rem, 3.4vw, 2.75rem), 1.1, -0.03em, balanced): every section title.
- **Path** (700, clamp(1rem, 2.3vw, 1.75rem)): the output path panel, broken anywhere.
- **Title** (700, 19px, 1.375, -0.015em): step titles in the flow.
- **Body** (400, 15px, 1.75; 1.7 and 16px from 640px in the hero lead): leads and section copy, 58 to 66ch.
- **Body small** (400, 14px, 1.65): table rows, fact descriptions, secondary links.
- **Label** (400, 13px): navigation, quiet buttons, the veil text. Bold at 15px for primary actions, 17px for the wordmark.
- **Note** (400, 12px, 1.7): hero facts, the figure caption, the footer, the language switch.
- **Micro** (400 and 700, 11px): the strip above the window, matching the app's small size.

### Named Rules
**The One Family Rule.** Every site voice is JetBrains Mono at 400 or 700. No second family, no other weights. The Segoe UI in the window caption belongs to the Windows frame, not to the site.

**The No Shouting Rule.** No uppercase labels and no wide letter-spacing; tracking only ever tightens, and only on bold sizes.

## Layout

One centered column, max 1240px, with 16px gutters that become 32px from 640px. Sections are full-width bands separated by a 1 px top rule, padded 96px vertically (128px from 640px); the closing band takes 112px (144px). Inside sections, blocks separate by 40px or 56px, and titles sit 16 to 20px above their lead.

The hero is left-aligned: headline, then from 1024px a two-column row (lead 1.35fr, actions and facts 1fr). The window sits below in its own column, max 1214px with gutters, so the 1180 x 760 canvas plus frame shows at true size wherever there is room. Other two-column sections open at 1024px (who does what: 1fr / 1.25fr), 768px (the name: 0.85fr / 1.15fr) and 640px (flow steps and facts).

Responsive rules as found in code:
- **1100px and below:** the strip above the window drops its flow lines and hub and becomes a two-column grid of wrapping tiles.
- **1024px (lg):** hero and "what" sections go two-column.
- **768px (md):** the header navigation appears; the name section goes two-column.
- **640px (sm):** gutters, section padding, body size and the step dot position step up.
- **560px and below:** the strip becomes one column and the window caption hides its title.
- **Whole-window scaling:** the canvas is never reflowed. It is scaled as a whole to the viewport width, never above 1. When the scale falls below 0.75 (a viewport under about 885px wide), a "full size" button appears that opens the window at its real size in a fixed, pannable layer under a 56px bar, closed by its button or Escape.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (bg, panel, the ink band) and 1 px lines. Exactly one shadow exists: the window's, a long soft drop plus a tight contact shadow, stronger in dark.

### Shadow Vocabulary
- **Window lift** (`box-shadow: var(--window-shadow)`, values per theme in the sidecar): the app window frame only.

### Named Rules
**The One Lifted Object Rule.** Only the app window casts a shadow. Panels, tiles, buttons and bands stay flat; hover lifts a primary action by 1 to 2 px of translation, not by shadow.

## Shapes

Nearly square. The system radius is 3px (app), shared with the app's `RADIUS`, on buttons, tiles, the path panel, the language switch and the skip link. Track segments take 2px and the small closing bars 1px. The Windows 11 frame is 8px because Windows draws it so. Dots (strip runners, step markers) and the flow spine are fully round. The name section's logo tile is a one-off at 6px.

Lines are the other half of the form: 1px solid for structure, and a dashed 1px line (6px dash, 4px gap) for the path books travel in the strip. The logo is geometric, two wings and a tablet on a 64 grid, in two forms: ink tile with amber mark (favicon, app icon, and the large tile of the name section) and amber badge tile with ink mark (header, window caption, footer).

## Components

### Buttons
- **Shape:** nearly square (3px).
- **Primary:** accent fill with on-accent text on content ground, shell-accent with on-shell-accent on the ink band; bold 15px, 48px tall, 20px sides, a download glyph in line SVG at 18px. The header's is the compact form: 13px, 36px tall, 14px sides.
- **Hover / Focus:** 300ms expo-out lift of 2px (1px in the header) and brightness 110%. Focus is the global 2px accent ring, offset 3px.
- **Secondary:** an underlined text link (14px), underline in line color turning accent on hover; on the band, shell-line turning shell-accent.
- **Quiet:** panel fill, 1px line border, 13px, 44px tall (the close button of the full-size view is 40px). Used for "full size" and its close.
- **Play:** accent fill, bold, 44px tall, shown in the window veil when reduced motion is requested.

### Chips
- **Style:** text-only, no fill or border, 11px with a 11 to 13px line icon and the mini track (three 8 x 4px segments, 2px gap, 1px line borders).
- **Incoming:** warn text, first mini segment filled warn: a locked Kindle file.
- **Outgoing:** ok text in bold, all three segments ok: an EPUB that has arrived. A kept, earlier file sits in muted regular weight.

### Cards / Containers
- **Strip tiles:** panel, 1px line border, 3px, 40px tall, an icon plus bold head. The incoming tile's border turns accent while downloading, the outgoing tile's turns ok when a book is saved (600ms).
- **Path panel:** panel, 1px line border, 3px, 24 x 32px padding, path segments muted and the final EPUB ok with a 26px file icon.
- **No shadow** on any container (see Elevation).

### Navigation
- **Header band:** ink band, 64px, wordmark at 17px bold beside a 28px badge, product subtitle at 11px from 640px. Links 13px shell-muted turning on-shell on hover, shown from 768px. The language switch is a 3px outlined button (shell-line border turning shell-accent). The compact Download closes the row.
- **Footer:** the same ink band, 12px shell-muted text with on-shell links, a 20px badge, a shell-line top rule.

### The Window (signature)
The real app, untouched, in an HTML Windows 11 frame: 1px line border, 8px corners, the one shadow, a 32px caption in caption colors with the 16px badge, the window title in Segoe UI 12px, and three 46px caption buttons drawn as 10px line glyphs. The viewport holds the 1180 x 760 aspect ratio on bg; while loading, a veil shows muted 13px text over a 2px accent line that sweeps in and out. The canvas fades in once the first frames land.

### The Strip (signature)
Above the window, on one line: the Kindle tile with its download bar, a dashed flow line, the hub that turns down into the window's caption and back up, a second flow line, the EPUB folder tile. Driven only by the app's events: on download the bar fills (1.4s) and the locked chips drop in staggered by 0.18s; 5px accent dots run 700ms along the line into the window; on each save a 5px ok dot climbs out and runs to the folder, then the EPUB chip appears. Once saved, the incoming chips fold away. The loop resets to idle.

### The Track and Spine (signature)
Three bordered 10px bars in warn, accent, ok with bold 12px labels in the same colors, filling in turn as they scroll into view. The flow list hangs on a 3px round-ended spine graded in the same three colors, with a 13px ring dot per step (2px border in the step's stage color over bg). The closing band repeats the track as three filled ok bars: the book done.

## Do's and Don'ts

### Do:
- **Do** take every color from the app's palette, in both themes, with the ink band dark in both.
- **Do** keep JetBrains Mono at 400 and 700 as the only family, tightening tracking (-0.015em to -0.035em) only on bold sizes.
- **Do** use 3px corners and 1px lines for every site surface; reserve 8px for the Windows frame.
- **Do** keep the window at its real 1180 x 760 size where it fits and scale it as a whole below that, with a full-size view when it drops under 0.75.
- **Do** bring each element in once, through rise, unveil, fade, window-open, draw or slide-in, on the expo-out curve; tie scroll entrances to the section kind.
- **Do** keep content visible without animation support and let reduced motion skip time-based entrances and wait for Play before starting the window.
- **Do** size primary actions at 48px (36px for the compact header Download), button controls around the window at 44px, and keep the 2px accent focus ring on everything focusable.

### Don't:
- **Don't** build an HTML lookalike of the app's interface; the window is the app itself.
- **Don't** fill a ground or a large surface with amber; it fills only the primary action, the badge tile and the logo mark.
- **Don't** add shadows beyond the window's.
- **Don't** use warn or ok for anything but the locked and EPUB stages of a book.
- **Don't** use uppercase labels, wide letter-spacing or a second typeface on the site.
- **Don't** add motion that loops for its own sake; the only repeating movements are the loading line and the strip, which follows the app.
