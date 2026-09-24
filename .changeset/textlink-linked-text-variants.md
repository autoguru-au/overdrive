---
'@autoguru/overdrive': minor
---

feat(TextLink)!: add linked-text variants, and move the link colour onto
`color.link.primary`

`TextLink` gains two new optional props:

- `variant?: 'primary' | 'secondary' | 'critical'` — opts into the linked-text
  appearance, wired to the existing `color.link.*` tokens. The underline is
  drawn in every state, including at rest. On hover and press, `primary` and
  `critical` move the label and underline together, while `secondary` holds its
  label and moves only the underline.
- `disabled?: boolean`

`disabled` applies to the `variant` appearance only. It now also prevents
activation: `aria-disabled` and `tabIndex={-1}` are advisory, and the
stylesheet's `pointer-events: none` stops only the mouse, so a programmatic
click previously still navigated and still ran the handler.

**Linked text is opt-in.** With `variant` unset, `TextLink` keeps its previous
shape — same hover-only underline, trailing icon, default `weight` and size
passthrough.

⚠️ **Breaking: every existing `TextLink` changes colour.** The default path no
longer reads `typography.colour.link`; its label, resting underline and `muted`
hover flood now come from `color.link.primary`:

|        | colour              | contrast on white           |
| ------ | ------------------- | --------------------------- |
| before | green-600 `#01C68C` | 2.22:1 — **failed** WCAG AA |
| after  | green-800 `#18856F` | 4.54:1 — passes             |

This is an accessibility fix rather than a restyle, but it is visible on every
link in every consuming app, so it ships as a major. Nothing needs to change at
the call site.

`color.link.primary`, `secondary`, `hover` and `pressed` are surface-aware: a
painted `Box` repoints each at the value that suits its own fill, so linked text
inside a dark `Box` clears AA without an opt-in.

`critical` is the exception — red-700 `#B51E1A` is 2.32:1 on `#212338`, and it
has no dark counterpart yet. Prefer `primary` or the default appearance for a
destructive link on a painted dark surface.
