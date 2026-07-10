---
'@autoguru/overdrive': minor
---

Internalise Track C (folded purge F-2): repoint Button/Tabs/Tooltip/Pagination/ProgressSpinner/Alert
safe internals onto semantic `color.*` tokens (pixel-identical on the base theme; off legacy
`colours.*` / `typography.colour`). Intent systems and theme-variant refs are retained until the major.

- **Button**: `typography.colour.neutral`→`color.foreground.secondary` (minimal appearance text).
- **Tabs**: `colours.foreground.body`→`color.foreground.primary`, `colours.gamut.gray200`→
  `color.gamut.gray['200']`, `colours.background.body`→`color.background.default`,
  `border.colours.gray`→`color.border.default` (`TabList`), and the internal `backgroundColour="transparent"`
  / `colour={isActive ? 'white' : 'dark'}` literals →`backgroundColor`/`color`.
- **Tooltip**: `useTooltip`'s `backgroundColour="gray900"`→`backgroundColor="gray900"`,
  `colour="white"`→`color="white"` (pure ramp/white values, bridge-safe).
- **Pagination**: `colours.background.body`→`color.background.default`; `Bubble`'s
  `backgroundColour` prop (ramp literals `green900`/`gray200`/`transparent`)→`backgroundColor`.
- **ProgressSpinner**: `colours.foreground.body`→`color.foreground.primary`,
  `typography.colour.white`→`color.foreground.reverse`.
- **Alert**: `backgroundColour="white"`→`backgroundColor="white"`, `borderColour="gray"`→
  `borderColor="default"`, and the internal `sprinkles({colour:'dark'|'muted'})` calls→
  `color:'primary'|'tertiaryInactive'`.

Retained on the legacy contract until the major (intent / theme-variant / public-API pass-through,
verified against `flat_red`, `neutral`, and the MFE tenant theme packages):

- Button's `colours.intent.*` (its whole colour system) and `typography.colour.secondary`
  (the `neutral` theme overrides `secondary` to a different grade than `foreground.secondary`);
  the `Spinner`'s `colour={isInverse ? 'secondary' : 'light'}` pass-through.
- Tabs' `colours.intent.neutral.background.strong`, `colours.background.light`, and
  `colours.background.neutral` (tenant/theme-variant); the internal `textStyles({colour:'light'})`
  (`light`/gray600 diverges from the semantic gamut under `flat_red` and its tenant derivatives,
  which re-tint the legacy gamut without touching `typography.colour.light`).
- TextLink's `typography.colour.link` and its `colour` prop pass-throughs (theme-overridden:
  `neutral`→blue500, `fleetGuru`→yellow500).
- DropDown's `colours.background.light` (tenant-variant: smartFleet/ampol→gray100) and
  `DropDownOption`'s public, intent-capable `iconColour` prop pass-through.
- Pagination's `colours.background.neutral` and `colours.intent.primary.background.strong`;
  `NavButton`'s and `Bubble`'s `textStyles({colour:'light'|'white'})` (same `light`-key drift as Tabs).
- ProgressSpinner's `typography.colour.{danger,primary,secondary,warning}` (`primary`/`secondary`
  are theme-overridden; `danger`/`warning` are unoverridden but drift from the semantic gamut under
  `flat_red`/`ampol`/`smartFleet`, which re-tint the legacy red/yellow ramps without touching those
  `typography.colour` keys).
- Alert's `sprinklesLegacyText({color: intent})` (intent-derived).
