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
  identical arguments and resolved to the same colour. `OverdriveProvider` also
  passed `theme.vars.mode` into that derivation — the CSS var _reference_ string
  `var(--od-mode)`, never `'light'` — so the light/dark branch was dead and both
  shades came out 10% _darker_ than the brand. `mild` and `strong` now move in
  opposite directions, and the provider passes the resolved `theme.tokens.mode`.
- The DOM colour validation used `Option`, a browser global, and failed closed
  when it threw. Under SSR that stripped every override, so a branded page
  shipped no inline custom properties and only picked up its brand on hydration.
  Off the browser the value is now accepted and left to the browser to parse.
- An explicit `primaryForeground` is no longer used for the selection controls'
  tick/dot/knob when it fails 3:1 against the brand fill. A tenant pairing a
  light brand with white button text would otherwise have got a white tick on a
  light checkbox — worse than the fixed dark ink those controls had before they
  followed the brand at all. Buttons still use the supplied colour, since that
  is the tenant's stated pairing.
- When `primaryForeground` is omitted, the primary button's label now takes the
  derived on-brand colour instead of the theme's own foreground. A tenant
  passing only `primaryBackground` previously kept a white label, which is
  unreadable on a light brand — and contradicted the prop's own documentation.
- Contrast decisions are made against the active theme's page background and
  body ink rather than the base theme's white/near-black pair, so a theme that
  changes either gets decisions made against what it actually renders.
- An unrecognised theme `mode` now degrades to light rather than dark.
- `StyledButtonProps.isLoading` was typed as `ButtonIsFullWidth`. It is now
  `ButtonIsLoading`. Both resolve to `boolean`, so this is a documentation fix
  rather than a behavioural one.
- `useColorOverrides` pruned invalid colours by `delete`-ing keys off the
  caller's prop object, mutating state that consumers commonly hold in a GraphQL
  cache. It now copies first. As a side effect the provider's memo is no longer
  permanently busted by an invalid override.
- Contrast and validation warnings are deduplicated. The provider is memoised on
  a deep compare that includes `children`, so they previously repeated for the
  life of the page.

**What actually changes for consumers already passing `primaryBackground`**

`strong` is byte-identical, so the solid primary Button's hover and active
states do not move. The one changed legacy value is `mild`, which flips from 10%
darker to 10% lighter. Its consumers are `<Button variant="primary" minimal>`'s
hover background — where `strong` text on a `mild` fill was previously a 1:1
contrast ratio, i.e. an invisible label — plus `BulletText`'s background. No
branded app currently renders either.

The visible change for branded tenants is the intended one: Switch, Radio and
CheckBox on-states now follow the brand instead of staying a fixed dark ink.
That applies wherever `primaryBackground` is already supplied, without those
apps opting in, so it is worth flagging to the tenant owners before release.
