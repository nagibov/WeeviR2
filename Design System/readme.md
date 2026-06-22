# Weevi Design System

A reusable visual system for **Weevi** — a F&B (food & beverage) commerce platform for restaurants. The system was distilled from the *2026 Investors Report* (the only source material available), so its centre of gravity is investor / executive communication: financial dashboards, metric snapshots, and brand-forward cover surfaces. It extends cleanly to product UI.

> **Source:** `uploads/document_pdf.pdf` — Weevi 2026 Investors Report (26 pp). Brand colours, logo, iconography and the pastel cover gradient were extracted directly from the embedded artwork; type was matched to the closest faithful Google Fonts pairing (see Caveats).

---

## Content fundamentals

- **Voice:** confident, factual, growth-oriented. Written in third person about the company ("Weevi has reached break-even", "Weevi is evolving from a pure SaaS platform…"). Not chatty, not "we/you" marketing speak.
- **Tone:** measured optimism backed by numbers. Claims are always paired with a figure or a date.
- **Casing:** Title Case for section headers and product names; sentence case for body. Eyebrows are ALL-CAPS with wide tracking.
- **Numbers are the message.** Lead with the metric (`$929K`, `75% YoY`, `1.3M orders`). Always tabular, thousands-separated, negatives in parentheses `(445,815)`.
- **Product names** carry a ™ and are set in pills: *Weevi Pay™*, *Smart Dispatch™*, *Weevi Loyalty™*, *AI Ordering™*.
- **No emoji.** Status and emphasis come from colour + the icon set, never from emoji.

## Visual foundations

- **Colour:** a disciplined, mostly-neutral palette with a single loud accent. **Weevi Green `#09D18C`** is the signal colour — used sparingly for action, growth and the one hero metric. **Charcoal `#2E2E2F`** carries text and structure. Everything else is quiet: airy off-whites, a surface grey, and a soft mint for "success / projection". A text-safe **Deep Green `#0A8F63`** replaces the bright emerald wherever green text sits on white.
- **The pastel gradient** (`--wv-gradient`, cream → mint → aqua → lavender at 118°) is reserved for hero / cover surfaces. It is frequently overlaid with a faint **dotted growth motif** (a radial-dot pattern masked along a diagonal) — a brand signature worth reusing.
- **Type:** two voices. **Quicksand** (rounded, geometric, optimistic) for display headlines and large numbers; **Manrope** for all working surfaces — UI, body copy and dense financial tables (with `tabular-nums`). Body is 16px / line-height 1.6; eyebrows are 12px uppercase tracked `.18em`.
- **Shape language:** rounded and friendly. Cards use an 18px radius; hero surfaces 28px; pills are fully round (999px). Inner media/swatches sit at 12px.
- **Elevation:** very restrained. Resting cards take a near-flat `0 1px 2px rgba(0,0,0,.06)`. The only pronounced shadow is a **green glow** under primary buttons and the hero green metric (`0 8px 22px rgba(9,209,140,.26)`). No heavy drop shadows.
- **Borders:** hairline `#E3E6E4`, used for secondary buttons and subtle dividers — never as a loud framing device.
- **Cards** are white, rounded (18px), with the soft resting shadow and generous 26px padding. The emphasis card flips to solid emerald (or charcoal) with white text.
- **Data styling:** a signature convention — in financial tables, **grey columns are reported actuals, mint columns are forward projections.** Totals are bold; negative values render red `#C0392B`.
- **Backgrounds:** app/page background is a barely-there `#F1F3F2`, not pure white, so white cards lift off it.
- **Hover / press:** subtle. Buttons lighten slightly (`filter`) on hover and nudge down 1px on press; no colour inversions, no bounces.
- **Animation:** minimal and functional — short fades/eases (~150ms). No elaborate motion.

## Iconography

- **Style:** two-tone **rounded outline** icons — a charcoal stroke with a *single* emerald accent per icon. Friendly geometry, generous corner radii, never more than one green.
- **Icon set: [Lucide](https://lucide.dev)** (2px rounded strokes) is the wired-up production set — its weight and roundness match the brand. Render glyphs in charcoal (`--text-strong`) and apply exactly one emerald accent via the accent dot. Use **lucide-react** in production, or the CDN UMD build (`<i data-lucide="store">` + `lucide.createIcons()`) for static artifacts.
- **`IconTile` component** packages this treatment: pass any Lucide glyph as children and it applies the charcoal stroke, soft rounded tile, and emerald accent dot. See `components/core/IconTile`.
- **Reference specimens:** five raster icons from the original report live in `assets/` (`icon-0…4.jpg`) documenting the intended hand-drawn style; the Lucide set is the reproducible substitute. Do **not** hand-draw icons or use emoji.
- **Logo:** the lowercase **weevi** wordmark with an emerald "drop" above the first *e* (`assets/weevi-logo.png`, transparent PNG). The drop is always emerald; on dark surfaces the letters go white, the drop stays green. Clearspace = cap-height on all sides. Never recolour the letters or detach the drop.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the four token files.
- `readme.md` — this file.
- `SKILL.md` — downloadable Agent-Skill manifest.

**`tokens/`** — CSS custom properties
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css`

**`components/`** — reusable React primitives (`.jsx` + `.d.ts` + `.prompt.md`)
- `core/Button` — pill button, 5 variants
- `core/Badge` — trademark & status pills
- `core/IconTile` — Lucide icon treatment (charcoal + emerald accent)
- `data/KPICard` — metric tile, 4 variants
- `data/FinancialTable` — actuals-vs-projections table

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colours: brand · neutrals · status · gradient
- Type: display · text · scale
- Spacing: radii · elevation
- Brand: logo · iconography (Lucide)

**`slides/`** — investor-report slide kit (Design System tab, "Slides" group). 1280×720 brand slides built from the real 2026 Investors Report content:
- `01-cover` · `02-kpis` (by the numbers) · `03-financial-outlook` (actuals vs projections) · `04-revenue-engine` (Pay / Dispatch / Loyalty / AI) · `05-market-traction` (141 projects across KSA/Lebanon/UK) · `06-closing` (key highlights)

**`assets/`** — `weevi-logo.png`, `hero-2026.png`, `icon-0…4.jpg`

**`templates/`** — reusable starting points (Design Components consuming projects can copy or follow). Each folder has its own `ds-base.js` that links `styles.css` + the compiled `_ds_bundle.js`.
- `hero/Hero.dc.html` — pastel-gradient cover hero with the dotted growth motif, eyebrow / headline / tag pills (editable via Tweaks).
- `investor-one-pager/InvestorOnePager.dc.html` — the flagship: brand header, gradient hero, a KPI row and the financials table composed from the real `KPICard` + `FinancialTable` bundle components, a highlights panel, and footer. This replicates the actual source artifact (the 2026 Investors Report one-pager).

> **Scope note:** the only source material was the 2026 Investors Report (investor/executive communication). There is no product application UI in the source, so no speculative product UI kit is included — the templates replicate what actually exists. Add a UI kit later if/when real product screens (Figma or code) become available.

---

## Caveats
- **Fonts are a best-match substitution.** No font binaries shipped with the PDF; Quicksand + Manrope (Google Fonts) closely match the rounded-display / clean-text pairing in the report. Swap in the licensed brand fonts as `@font-face` rules in `tokens/fonts.css` if they differ.
- **Icons are raster specimens, not a vector set.** They document the *style*; wire up a real vector set per the Iconography notes for production.
- Palette and gradient were sampled from compressed embedded images, so hex values are accurate to ~±1.
