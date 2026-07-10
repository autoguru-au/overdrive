---
'@autoguru/overdrive': minor
---

Internalise Track C (C-P4): repoint the text-flow components and the
library-wide default text-colour path onto semantic `color.*` tokens
(pixel-identical on the base theme; off legacy `colours.*` / `typography.colour`).

- **Library-wide default text path** (`lib/styles/typography.ts`): `typography()`
  and `textStyles()` now route their *default* colour through the semantic
  `color` sprinkles — body `neutral`→`foreground.secondary`, `strong`/heading
  `dark`→`foreground.primary`. These are value-identical to the legacy defaults
  in every theme (base, `flat_red`, `neutral`, and the MFE tenant themes), so
  the base render is unchanged. An explicitly-supplied legacy `colour` prop
  still resolves through `sprinklesLegacyText` (its intent-named keys are
  theme-overridden and are never repointed). `sprinklesLegacyText` and the
  legacy `colour` argument remain exported and functional.
- **BulletText / BulletList / EditableText**: `typography.colour.dark`→
  `color.foreground.primary`, `typography.colour.muted`→
  `color.foreground.tertiaryInactive`.
- **ScrollPane**: `colours.gamut.gray{300,400}`→`color.gamut.gray['{300,400}']`.

Retained on the legacy contract until the major (theme-variant / intent /
public-API): BulletText's `colours.intent.primary.*` and `colours.background.light`
refs, EditableText's pass-through `colour` prop, and `Stack`'s
`colours.background.neutral` (the `neutral` theme overrides it to a different
grade than the semantic target).
