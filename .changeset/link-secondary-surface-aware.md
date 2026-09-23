---
'@autoguru/overdrive': minor
---

fix(tokens): give `color.link.secondary` a dark-surface value

`secondary` linked text held its label in `color.link.secondary`, which is
gray900 `#212338` in every theme. On a painted dark surface the label is the
fill: **1:1**, invisible, against the 4.5:1 WCAG 1.4.3 asks of body text. Only
`primary` (and the two state colours) followed the surface.

`color.link.secondaryOnLight` and `color.link.secondaryOnDark` are added
alongside the existing `primaryOn*` pair, and a painted `Box` now repoints
`color.link.secondary` at whichever suits its own fill — the same mechanism,
with no opt-in and no class to remember.

| theme      | on light              | on dark         |
| ---------- | --------------------- | --------------- |
| `base`     | gray900 `#212338`     | white `#ffffff` |
| `neutral`  | inherits base         | inherits base   |
| `flat_red` | its gray900 `#263238` | white `#ffffff` |

Both measure 15.42:1 in `base` and 13.16:1 in `flat_red` on the surface they
serve. The dark value is white because `secondary` is body ink rather than a
brand colour, and white is the ink a dark surface already draws its body text in
— it is not tenant-brandable, for the same reason `secondary` never was.

Additive: two new tokens, and a value that was unreadable becomes readable.
Nothing changes on a light surface, and no call site changes.

`critical` still has no dark counterpart — red-700 `#B51E1A` is 2.32:1 on
gray900. That one needs a rung from design rather than a value invented here.
