---
'@autoguru/overdrive': major
---

DS-2026 v5: remove the deprecated legacy `colours.*` colour contract, the
numeric elevation aliases, the redundant radius aliases, and the `black900`
background alias (AG-20568). This is a **migration guide for MFE developers**
— read the affected section(s) below before bumping to v5.

## 1. `colours.*` contract removed → `color.*`

The legacy `colours.*` theme contract (`gamut` / `foreground` / `background` /
`intent`) is deleted from `THEME_CONTRACT` and every `*/tokens.ts`. Use the
semantic `color.*` contract instead.

| Legacy (`colours.*`) | Semantic replacement (`color.*`) |
| --- | --- |
| `colours.gamut.gray900` (flat key) | `color.gamut.gray['900']` (nested) |
| `colours.foreground.body` | `color.foreground.primary` |
| `colours.foreground.link` | `color.interactive.link` |
| `colours.background.body` | `color.background.default` |
| `colours.background.light` | `color.background.emphasisInactive` |
| `colours.background.neutral` | `color.background.inactive` |
| `colours.background.neutralDark` | **no replacement** — removed with no equivalent |
| `colours.intent.*` | `color.intent.*` (same shape; CSS variable names have changed) |

**Silent-failure warning:** hand-authored CSS that references the derived
`--od-colours-*` custom properties directly (rather than importing the token
object) will **fail silently** — the properties no longer exist, so the
browser just ignores the declaration. Grep your app for `--od-colours-` and
switch to `--od-color-*`.

**`OverdriveProvider` `colorOverrides`:** the prop itself is unchanged, but the
CSS variables it writes underneath have been renamed to
`--od-color-intent-primary-bg-*` (previously under the `colours` namespace).
If you read those variables directly anywhere, update the names.

**Tenant themes:** custom tenant theme packages MUST override `color.*` now.
Overriding `colours.*` no longer does anything — your customisation will
silently revert to the base/DS-2026 palette.

## 2. Elevation `'1'`–`'5'` removed → `z1`–`z4`

The numeric elevation aliases are removed from `vars.elevation`, the
`--od-elevation-1`…`-5` CSS variables, and the `<Box boxShadow="1".."5">` prop
values.

| Legacy | Replacement | Note |
| --- | --- | --- |
| `'1'` | `z1` | identical value |
| `'2'` | `z2` | identical value |
| `'3'` | `z3` | identical value |
| `'4'` | `z4` | identical value |
| `'5'` | `z4` | **no exact counterpart** — `z4` is the closest, slightly smaller shadow |

## 3. `typography.colour.*` removed (14 keys)

The `typography.colour.*` token group and its `--od-typography-colour-*` CSS
variables are removed from the contract and tokens.

**The deprecated `colour` prop on `Text`/`Heading` and the `colour` sprinkles
prop are UNCHANGED and keep accepting all 14 legacy names** — they now
resolve through `color.*` instead. You do not need to touch call sites that
use `colour="..."` for this removal alone.

| `colour` value | Now resolves to |
| --- | --- |
| `dark` | `color.foreground.primary` |
| `white` | `color.foreground.reverse` |
| `muted` | `color.foreground.tertiary` |
| `neutral` | `color.foreground.secondary` |
| `danger` | `color.alert.foreground` |
| `warning` | `color.warning.foreground` |
| `success` | `color.success.foreground` |
| `shine` | `color.intent.shine.foreground` |
| `brand` | `color.success.foreground` |
| `link` | `color.interactive.link` |
| `secondary` | `color.foreground.secondary` |
| `primary` | `color.intent.primary.background.standard` |
| `light` | `color.interactive.contentDisabled` |
| `information` | `color.gamut.blue['500']` |

> ⚠️ **Do not mechanically rename `colour` → `color`.** `colour="primary"`
> is the brand green intent colour; `color="primary"` is `gray900`. These are
> different values under the same name — a find/replace will silently change
> the rendered colour.

## 4. `border.radius.sm` / `border.radius['1']` removed → `xsmall`

Both aliased the same 4px value as `xsmall`. Affects
`<Box borderRadius="sm">` / `<Box borderRadius="1">` and the corresponding
CSS variables.

## 5. `backgroundColour="black900"` removed → `"gray900"`

Identical value; only the name changes.

## 6. Behaviour changes (values shifted, not just names)

- **`neutral` theme, legacy text `colour` prop:** `primary` shifts `gray800` →
  `gray900`, and `secondary` shifts `gray600` → `gray700` (one shade darker in
  each case).
- **`flat_red` theme:** `colour="link"` and `colour="information"` retint to
  the theme's palette instead of the base green/blue.

## 7. Unchanged — no action needed

- The `space` scale (`none`, `0`–`12`).
- `border.radius.min` / `md` / `lg` / `xl` — these are legacy aliases, but
  are **not** deprecated and **not** removed here. `min` has no 2px
  replacement in the named scale; removing `md`/`lg`/`xl` is tracked as a
  separate, future ticket.
- `border.width['3']` — same status as above (legacy, not removed).
- The deprecated `colour` / `backgroundColour` / `border*Colour` sprinkles
  props — still fully functional (see §3).
- `Box` / sprinkles value strings for `color` / `backgroundColor` — unaffected.
