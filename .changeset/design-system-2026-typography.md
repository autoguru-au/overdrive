---
'@autoguru/overdrive': minor
---

feat: Design System 2026 named text styles (opt-in)

Adds the Design System 2026 typography styles (AG-19972) as **new, opt-in
tokens — nothing existing changes visually**:

- New named text styles `h1`–`h4` (line-height ratio 1.25) and `p1`–`p4`
  (ratio 1.4), accepted by the `size` prop of `<Text>`, `<Heading>`,
  `textStyles()` and `typography()` — e.g. `<Text size="p2">`,
  `<Heading as="h2" size="h2">`. Values: h1 40/50, h2 32/40, h3 24/30,
  h4 20/25, p1 16/22.4, p2 14/19.6, p3 12/16.8, p4 10/14 (no semiBold at p4).
  Named styles apply a default weight (bold for headings, regular for
  paragraphs) unless `weight`/`strong` is set. Exported as `TEXT_STYLES`,
  `NamedTextStyle` and `namedTextStyleMap`.
- The legacy numeric size scale (`'1'`–`'9'`), heading defaults, and font
  weights are **unchanged** — adopt the 2026 styles screen by screen.
- New Storybook page `Foundation/Typography` and typography usage guidelines.
