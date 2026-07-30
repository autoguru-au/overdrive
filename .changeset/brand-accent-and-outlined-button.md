---
'@autoguru/overdrive': minor
---

feat: let a tenant brand colour reach selection controls, links and an outlined
button (AG-20614)

Extends the existing `OverdriveProvider` `colorOverrides` mechanism so a
tenant's brand colour reaches the surfaces that should carry it, instead of
adding a second theming system alongside it. Additive throughout — with no
`colorOverrides` supplied, every theme renders exactly as before.

**New tokens** — `color.brand.{solid,onSolid}`. `solid` is the accent behind a
selection control's on-state; `onSolid` is the contrast-safe glyph placed on it.
Both are seeded to the values their consumers already rendered
(`color.foreground.primary` and `color.background.default`), so the base,
`flat_red` and `neutral` themes are byte-identical. They exist as their own pair
rather than reusing `color.foreground.primary`, which is body-text ink shared
with nine unrelated components — branding it would recolour every piece of
primary text.

**Selection controls** — Switch's toggled track, Radio's selected ring and
CheckBox's checked box now read `color.brand.solid`, and their handle / dot /
tick read `color.brand.onSolid`. Previously all three were hard-wired to the
body-text colour and could not follow a brand at all.

**New `outlined` prop on `Button`** — transparent fill, brand border, brand
label, for `variant="primary"`. It reads the `color.button.primary.outlined.*`
tokens shipped in AG-20609, which no component consumed until now. Ignored when
`minimal` is set, since the two are opposites.

**New `linkColor` override key** — brands `TextLink`, `Anchor` and every focus
ring in the library. Deliberately separate from `primaryBackground` rather than
derived from it: a colour chosen as a fill behind white text is often illegible
as link text, and link colour also drives the focus ring across 14+ components.
Pass it explicitly to opt in.

**Fixes**

- `primaryBackgroundMild` and `primaryBackgroundStrong` were derived with
  identical arguments and resolved to the same colour, so a branded button's
  hover and active states were indistinguishable from its resting state. They
  now move in opposite directions.
- `OverdriveProvider` passed `theme.vars.mode` — the CSS var _reference_ string
  `var(--od-mode)`, never `'light'` — into the shade derivation, so its
  light/dark branch was dead code. It now passes the resolved
  `theme.tokens.mode`.
- `useColorOverrides` pruned invalid colours by `delete`-ing keys off the
  caller's prop object, mutating state that consumers commonly hold in a GraphQL
  cache. It now copies first.

Consumers already passing `primaryBackground` without an explicit
`primaryBackgroundStrong` — the branded MFEs — will see their primary button's
hover and active states become a genuinely deeper shade rather than matching the
resting fill. That is the intended behaviour of the code being fixed.
