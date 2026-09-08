---
'@autoguru/overdrive': major
---

`color.brand.solid` / `color.brand.subtle` are re-seeded to the Figma selection
colours.

**Breaking — selection controls are green by default.** The brand pair was
seeded to `gray-900` / `gray-200` so that introducing it in the multi-brand work
was a zero-visual-change addition. The DS 2026 spec drives selection controls
off `color/selection/active` (`#01c68c`) and `color/selection/hover-bg`
(`#e3f8f0`), so the seed now matches: `solid` is `green-600` and `subtle` is
`green-200`.

Every unbranded consumer of the pair changes colour — `Switch`, `Radio`,
`CheckBox` and `FilterChip` render green where they rendered near-black. Only
the default moves; a tenant supplying `colorOverrides.primaryBackground` still
overrides `brand.solid` at runtime exactly as before, and `onSolid` / `subtle`
are still derived from whatever they supply.

`brand.onSolid` stays white, per the spec's `color/foreground/reverse`. White on
`green-600` is 2.2:1, so the pair is now a documented exception in the theme
contrast audit rather than a silent pass.
