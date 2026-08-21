---
'@autoguru/overdrive': patch
---

OverdriveProvider: gate the primary button label on contrast.

A tenant's `primaryForeground` was written to
`colours.intent.primary.foreground` — the solid primary Button's label —
verbatim, with no contrast check, while the same value was gated at 3:1 before
reaching `color.brand.onSolid` (the Switch knob, Radio dot, CheckBox tick and
selected FilterChip label). That inverted WCAG: a label is text under 1.4.3 and
needs 4.5:1, an icon is a UI component under 1.4.11 and needs 3:1, so the
stricter requirement was the unguarded one.

`resolveOnBrand` now takes a `usage` of `text` or `icon-only` — the design
system's own `ContrastUsage` vocabulary — and both call sites go through it.
When a supplied foreground misses its floor it is replaced by whichever of the
theme's own inks contrasts better with the fill, `white` or `gray-900`. The
tenant's brand fill is never altered.

A foreground that clears 3:1 but not 4.5:1 now yields different colours for the
label and the icon. That is correct — they are different success criteria — but
it is visible. A pairing that already clears 4.5:1 is returned byte-identically,
so a compliant tenant sees no change at all.

Blast radius: only renders where the supplied pair already failed WCAG.
Unbranded consumers never reach this code.
