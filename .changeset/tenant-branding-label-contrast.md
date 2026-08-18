---
'@autoguru/overdrive': patch
---

OverdriveProvider: gate the primary button label on contrast, and stop non-hex
brand colours being measured as black.

A tenant's `primaryForeground` was written to
`colours.intent.primary.foreground` — the solid primary Button's label —
verbatim, with no contrast check, while the same value was gated at 3:1 before
reaching `color.brand.onSolid` (the Switch knob, Radio dot, CheckBox tick and
selected FilterChip label). That inverted WCAG: a label is text under 1.4.3 and
needs 4.5:1, a glyph is a UI component under 1.4.11 and needs 3:1, so the
stricter requirement was the unguarded one. `resolveOnBrand` now takes the floor
it is checking against and both call sites go through it.

A foreground that clears 3:1 but not 4.5:1 now yields different colours for the
label and the glyph. That is correct — they are different success criteria — but
it is visible. A pairing that already clears 4.5:1 is returned byte-identically,
so a compliant tenant sees no change at all.

`getRGBValues` now parses through `colord` rather than a hex/`rgb()`-only regex.
Previously `hsl()`, named colours and 8-digit hex returned `null`, which
`getColourLuminance` reads as `0` — the colour was silently treated as black and
every contrast decision built on it was confidently wrong. Results are
bit-identical for every hex and `rgb()` input; invalid input still yields
`null`.

`getContrastRatio` and `passesAccessibilityContrast` are now exported from the
package root, so consumers can pre-check a brand without deep-importing
`@autoguru/overdrive/themes/helpers`. Both keep their existing signatures,
including `getContrastRatio`'s reciprocal return value.

Blast radius: only renders where the supplied pair already failed WCAG.
Unbranded consumers never reach this code.
