---
name: weevi-design
description: Use this skill to generate well-branded interfaces and assets for Weevi (a F&B commerce platform), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/` for foundations, `components/` for reusable primitives, `guidelines/` for specimen cards, `assets/` for logo and icons).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view, linking `styles.css` for the real tokens. If working on production code, copy assets and read the rules here to become an expert in designing with the Weevi brand.

Key rules to honour:
- Emerald `#09D18C` is a sparing accent (one per surface); charcoal `#2E2E2F` carries text/structure; backgrounds stay quiet.
- Quicksand for display/numbers, Manrope for UI/body/data (tabular-nums for figures).
- Lead with metrics; product names take a ™ in pills; no emoji.
- Financial tables: grey = actuals, mint = projections, negatives red.
- Rounded shapes (18px cards, 999px pills), near-flat shadows except the green button glow.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
