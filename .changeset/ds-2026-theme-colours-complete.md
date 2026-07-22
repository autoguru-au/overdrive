---
"@autoguru/overdrive": minor
---

feat: complete DS 2026 theme colour tokens to match Figma (AG-20362)

Fills the gaps between the code's `color.*` theme tokens and the Figma
"Theme colours" collection, and rebuilds the Foundation → Theme Colours
Storybook page to mirror Figma's groups 1:1.

- `color.background`: added `emphasisLight` and `modal`.
- `color.button`: expanded from a partial set to the full Figma set —
  `primary.solid`/`primary.outlined`, `critical.solid`/`critical.outlined`,
  `secondary`, and `linkedText`. The two previously-divergent, unused keys were
  renamed to match Figma (`primary.solid.border` → `borderPressed`,
  `primary.outlined.{border,text}` → `borderText`).
- `color.illustration`: new group (bright/dark side, fills, outline, shadow,
  white, yellow accents).

All additions are additive theme CSS vars. `emphasisLight` and `modal` also
become available as `backgroundColor` sprinkle values (component snapshots
updated for the regenerated atom class names — no behavioural change).
