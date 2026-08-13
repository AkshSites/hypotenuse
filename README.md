# Hypotenuse

An open archive of proofs of the Pythagorean theorem — Euclid to Einstein,
each one with a diagram that lights up as you read.

Built with [Astro](https://astro.build), static output, deployed to
Cloudflare Pages.

## Commands

| Command             | Action                                             |
| :------------------- | :-------------------------------------------------- |
| `npm install`         | Install dependencies                                |
| `npm run dev`          | Start the dev server at `localhost:4321`             |
| `npm run build`        | Build the static site to `./dist/`                   |
| `npm run preview`      | Preview the production build locally                 |
| `npm run astro check`  | Type-check the project                               |

## How it's put together

```text
src/
├── content/proofs/*.md      one Markdown file per proof (frontmatter only)
├── content.config.ts        Zod schema for the proofs collection
├── lib/
│   ├── geometry.ts          coordinate-math helpers shared by every diagram
│   ├── markdown.ts          inline KaTeX rendering for frontmatter strings
│   └── proofs.ts            collection helpers, category labels
├── components/
│   ├── StepList.astro       renders steps + the hover/focus highlight script
│   └── figures/
│       ├── SquaresFigure.astro   the reusable "square on each side" base
│       ├── FigurePanel.astro     sticky panel chrome + the opacity/lit CSS contract
│       ├── index.ts              diagram key → component map
│       └── *Figure.astro         one component per proof's diagram
├── layouts/BaseLayout.astro  head, fonts, theme (no-FOUC), header/footer
└── pages/
    ├── index.astro            landing
    ├── proofs/[id].astro      proof page (dynamic route)
    ├── proofs/index.astro     filterable index
    ├── proofs.json.ts         static id list, used by the /random function
    ├── timeline.astro
    └── contribute.astro

functions/random.js           Cloudflare Pages Function — GET /random → 302
```

The site is fully static (`output: 'static'`, no adapter). The one
exception is `/random`, which needs to pick a different proof on every
request: it's a hand-written Cloudflare Pages Function that reads the
build-time-generated `/proofs.json` and issues a real 302 redirect, so it
never needs updating when a proof is added.

## The centerpiece: hover-to-highlight

Every proof step can name the parts of its diagram it's talking about.
Hovering or focusing a step lights those parts; moving away resets to the
resting state. This is generic, not hand-wired per proof:

- Each diagram element carries `data-figure-id="<id>"` and
  `data-kind="fill"` or `"line"`, plus a `--base-opacity` (and optionally
  `--lit-opacity`) custom property setting its resting appearance.
- Each step (`StepList.astro`) carries `data-highlights="id1,id2"`.
- A single script (in `StepList.astro`, `initProofInteractions`) walks up
  to the nearest `[data-proof-interactive]` section, and on hover/focus
  toggles an `.is-lit` class on every element whose id is listed. CSS in
  `FigurePanel.astro` does the rest: lit fills brighten, lit strokes
  thicken, everything else in an active figure dims slightly. Multiple
  elements are free to share one id (e.g. a triangle's fill and its
  outline stroke) — they light together.

Because this is a plain id contract rather than bespoke per-step opacity
values, `data-figure-id` never needs a special case in the shared script.

## Adding a proof

A proof is two files:

1. **A content entry** — `src/content/proofs/your-proof.md`. Frontmatter
   only (title, attribution, category, year, a named difficulty tier,
   the proposition, and an ordered `steps` list of `{ text, highlights }`).
   The Markdown body, if you include one, is optional closing commentary
   and is rendered through the same `remark-math` / `rehype-katex`
   pipeline configured in `astro.config.mjs`. Inline math in frontmatter
   strings (`$...$`) is rendered separately, by `renderInlineMath()` in
   `src/lib/markdown.ts`, since Astro's collection pipeline only touches
   the body. The schema lives in `src/content.config.ts` and is enforced
   by Zod at build time.

2. **A diagram component** — `src/components/figures/YourProofFigure.astro`.
   Render an SVG inside `<FigurePanel title={title} viewBox="...">`. Every
   part a step's `highlights` might reference needs a matching
   `data-figure-id` and `data-kind`. If your proof uses the three-squares-
   on-a-right-triangle motif (most do), call `rightTriangleLayout(legA,
   legB)` from `src/lib/geometry.ts` and pass the result straight into
   `<SquaresFigure layout={layout} />` rather than recomputing the square
   corners by hand — the helper also hands back the altitude foot,
   the hypotenuse's outward normal, and everything else the classic
   constructions need.

Then wire it up: add the diagram's key to `DIAGRAM_KEYS` in
`src/content.config.ts`, and add a matching entry to the `FIGURES` map in
`src/components/figures/index.ts`. Set the content entry's `diagram`
field to that key.

Two ground rules: write the exposition in your own words — no lifting
text or figures from other proof collections — and verify any dissection
numerically before trusting it looks right. A five-line Node script that
checks the piece areas sum correctly catches more mistakes than staring
at the SVG does.

## Fonts

Instrument Serif (display), Karla (body, via the variable
`@fontsource-variable` build), and JetBrains Mono (labels, step numbers,
metadata) — all free, self-hosted via `@fontsource`, no external font
requests at runtime.
