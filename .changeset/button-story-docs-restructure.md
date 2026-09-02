---
'@autoguru/overdrive': major
---

feat(Button)!: restyle the DS-2026 variants to match Figma, and restructure the
stories (AG-20713)

**Breaking: `primary`, `secondary` and `danger` change appearance everywhere.**
No API changes — no prop removed, renamed or retyped — but the rendered output
of three variants moves onto the Figma DS-2026 button classes.

| `variant`   | Figma class        | before → after                                                                              |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------- |
| `primary`   | Primary Solid      | dark green `#01C68C` fill / white label → mint `#71EDC2` fill / near-black `#212338` label  |
| `secondary` | Secondary Outlined | white fill → transparent, border holds `#D4D9DD` through hover instead of tracking the fill |
| `danger`    | Critical Solid     | `#D42B26` → `#E12E28`                                                                       |

`primary` is the dramatic one: it inverts from a dark fill with a light label to
a light fill with a dark label.

**Hover and press are now separate states.** They were collapsed into one
selector, so pressed looked identical to hover. Each now takes its own fill.

**Buttons gain elevation**, which they never had: `z2` at rest, `z3` hovered,
`z1` pressed, none once disabled — matching Figma, and mapping onto the existing
`elevation.z*` tokens. `outlined` and `minimal` carry no elevation, per Figma.

The loading spinner on `primary` now uses the dark treatment. On the old dark
fill a white spinner was correct; on the new mint fill it measured about 1.4:1
and was effectively invisible.

`brand`, `information`, `warning` and `success` are untouched — they have no
Figma counterpart and keep their pre-DS-2026 colours.

Also restructures the variant stories to follow the Figma classes, adds a
**Critical Set** story for `variant="danger"` (previously the only variant with
no story), and documents when to reach for each.
