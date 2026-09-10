---
'@autoguru/overdrive': major
---

**Unbranded selection controls are green now.** `Switch`, `Radio` and `CheckBox`
render `#01c68c` where they used to render near-black.

The design system had been disagreeing with itself. When runtime tenant branding
landed, `color.brand.solid` was seeded to the near-black those components
already rendered, so adding the token changed nothing on screen — deliberately,
to keep that release safe. It was always meant to move onto the DS 2026
selection colour afterwards. Nobody moved it. This moves it.

**If you don't set `colorOverrides`, this affects you.** Every checkbox, radio
and switch in your app changes colour in one release. Nothing else moves — the
token only feeds selection controls.

**If you do set `colorOverrides`, this doesn't affect you.** Tenant branding is
untouched: `colorOverrides.primaryBackground` still overrides `brand.solid` at
runtime, and the tick, dot and handle on top of it are still derived from your
colour for contrast. Only the fallback changed.

**`FilterChip` is deliberately not on that list.** A selected filter chip stays
near-black with white text, and now reads `color.foreground.primary` /
`color.background.default` instead of the brand pair. The chip is the one
surface that paints _label text_ on the fill, and white on `#01c68c` is 2.2:1
against the 4.5:1 WCAG AA asks of text — it was 15:1 before. Selection accent
and selected chip surface happened to hold the same value while the brand pair
was seeded to near-black; they are separate design roles, and this release is
where they stop sharing a token.

The trade-off is that a tenant's `primaryBackground` no longer tints a selected
filter chip. Nothing regresses today, because the only consumer mounts
`OverdriveProvider` without overrides — but a branded filter chip needs its own
contrast-derived pair rather than borrowing the selection accent.

One thing to be aware of on the controls that did move: the handle, tick and dot
sitting on the green are white, which is what the Figma spec calls for, but
white on `#01c68c` is 2.2:1 — short of the 3:1 that WCAG asks for a non-text UI
boundary. It is recorded as a named exception in the theme contrast audit rather
than quietly passing, so it stays visible if design wants to revisit the fill.
