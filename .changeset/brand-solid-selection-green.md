---
'@autoguru/overdrive': major
---

**Unbranded selection controls are green now.** `Switch`, `Radio`, `CheckBox`
and `FilterChip` render `#01c68c` where they used to render near-black.

The design system had been disagreeing with itself. When runtime tenant branding
landed, `color.brand.solid` was seeded to the near-black those components
already rendered, so adding the token changed nothing on screen — deliberately,
to keep that release safe. It was always meant to move onto the DS 2026
selection colour afterwards. Nobody moved it. This moves it.

**If you don't set `colorOverrides`, this affects you.** Every checkbox, radio,
switch and selected filter chip in your app changes colour in one release.
Nothing else moves — the token only feeds selection controls.

**If you do set `colorOverrides`, this doesn't affect you.** Tenant branding is
untouched: `colorOverrides.primaryBackground` still overrides `brand.solid` at
runtime, and the tick, dot and handle on top of it are still derived from your
colour for contrast. Only the fallback changed.

One thing to be aware of: the handle and tick sitting on the green are white,
which is what the Figma spec calls for, but white on `#01c68c` is 2.2:1 — short
of the 3:1 that WCAG asks for a non-text UI boundary. It is recorded as a named
exception in the theme contrast audit rather than quietly passing, so it stays
visible if design wants to revisit the fill.
