---
'@autoguru/overdrive': minor
---

Add FilterChip component (DS-2026): interactive filter chip in select, numeric,
simple and add shapes, with hover/selected/focus states and a removable `×`.

Also overrides `color.focus.ring` in the `neutral` and `flat_red` themes so it
tracks each theme's existing focus colour, matching the ring every other
component draws through `focusOutlineStyle`.

FilterChip's own focus indicator draws in `color.info.foreground` instead: both
the ring and a border swap, so the two always agree. This is the first component
on the DS-2026 focus colour, so its focus reads blue where other components are
still theme-green. The shared token moves later, since retheming it shifts the
ring on everything at once.
