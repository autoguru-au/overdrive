---
'@autoguru/overdrive': minor
---

feat(TextLink): add linked-text variants

`TextLink` gains two new optional props:

- `variant?: 'primary' | 'secondary' | 'critical'` — opts into the linked-text
  appearance, wired to the existing `color.link.*` tokens. The underline is
  drawn in every state, including at rest. On hover and press, `primary` and
  `critical` move the label and underline together, while `secondary` holds its
  label and moves only the underline.
- `disabled?: boolean`

`disabled` applies to the `variant` appearance only.

Additive: with `variant` unset, `TextLink` renders exactly as before — same
hover-only underline, icon placement, default `weight` and size passthrough.
