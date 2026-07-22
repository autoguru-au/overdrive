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

Most changes are additive theme CSS vars, and `emphasisLight`/`modal` also
become available as `backgroundColor` sprinkle values (component snapshots were
regenerated for the shifted atom class names — no behavioural change).

Note — the `color.button` expansion renames/removes four CSS custom properties
that shipped in v4.60.0: `--od-color-button-primary-solid-border` →
`…-border-pressed`, `--od-color-button-primary-outlined-border` and
`…-outlined-text` → `…-outlined-border-text`, and `--od-color-button-primary-solid-pressed`
is removed. These button tokens have no consumers in this repo and are one
release old, so this is shipped as a `minor`; call it out here so downstream
MFEs that adopted them can remap.
