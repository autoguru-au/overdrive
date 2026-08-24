---
'@autoguru/overdrive': minor
---

feat(TextLink): add the DS-2026 linked-text variants (AG-20713)

`TextLink` gains the `Style=Linked text` variations from the Figma Button
component (node `362:2275`), as three new optional props:

- `variant?: 'primary' | 'secondary' | 'critical'` — opts into the DS-2026
  appearance, wired to the existing `color.link.*` tokens. The underline is
  drawn in every state, including at rest. On hover and press, `primary` and
  `critical` move the label and underline together, while `secondary` holds its
  label and moves only the underline.
- `iconPosition?: 'left' | 'right'` (default `'right'`)
- `disabled?: boolean`

`iconPosition` and `disabled` apply to the `variant` appearance only.

Additive: with `variant` unset, `TextLink` renders exactly as before — same
legacy link colour, hover-only underline and icon placement. No colour tokens
changed.
