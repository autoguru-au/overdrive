---
'@autoguru/overdrive': major
---

feat(CheckBox)!: adopt the DS-2026 spec, add a `small` size and layer the styles
(AG-21695)

**Breaking: every existing CheckBox changes appearance.** No prop is removed or
renamed — the rendered output moves onto
[Figma's Check box spec](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=438-15383).

What moves for a consumer who changes nothing:

|                    | before                                   | after                                  |
| ------------------ | ---------------------------------------- | -------------------------------------- |
| Box                | 24px (`space.6`), 20px tick              | **20px (`space.5`), 16px tick**        |
| Corner             | `border.radius.sm`                       | **`border.radius.xsmall`**             |
| Border, unselected | `colours.background.neutral` (legacy)    | **`color.border.default`**             |
| Hover, unselected  | grey wash (`colours.background.neutral`) | **`color.brand.subtle`, brand border** |
| Unchecked tick     | white, hidden against the page           | **`transparent`**                      |
| Disabled           | row opacity only                         | **fill + border of its own**           |

The 48px row and 48×44 hit area are unchanged, so nothing reflows around a
checkbox — only the box inside the well is smaller.

The checked fill is **not** changing here. CheckBox already read
`color.brand.solid`, and that token was re-seeded from navy to green `#01c68c`
by Switch's AG-21694 — so the green fill lands with that change, not this one.

### The new `size` prop

`size="small"` adds Figma's 16px box (12px tick). `medium` is the default and
the size an unqualified CheckBox renders at, so the scale reads `small` <
`medium`, consistent with Badge and the rest of the library.

Every dimension comes off the space ladder rather than a literal: the box is the
`5` (20px) and `4` (16px) tokens, and the tick steps down one token from its box
— which is exactly Figma's 2px inset on each side. The corner is
`border.radius.xsmall` at both sizes; the small box does not step its radius
down.

### No new tokens

The accent is `color.brand.solid` and the unselected hover wash is
`color.brand.subtle` — the pair Switch already reads, seeded to Figma's
`#01c68c` / `#e3f8f0`. Branding therefore works the same way it does for Switch:
a tenant's `primaryBackground` drives the fill verbatim and `brand.subtle`
derives the wash, with no CheckBox-specific derivation.

The tick reads `color.brand.onSolid` rather than Figma's
`color/foreground/reverse` directly. Both resolve to white unbranded, but
`onSolid` is derived against the fill, so a tenant on a pale brand (amber) gets
dark ink instead of an invisible white tick.

### Breaking: `CheckBox.css.ts` moves into `cssLayerComponent`

Every rule in the file now sits in the `component` cascade layer, matching
Switch. **An unlayered MFE override that used to lose to CheckBox will now
win**, because unlayered author styles outrank every layered one. That is the
intended direction — it is what makes the component themable without
`!important` — but it is a cascade change, so an MFE that was fighting these
rules may find its override suddenly taking effect.

One rule is deliberately left unlayered: the glyph sizing in `icon`. `Icon`
sizes itself through `makeResponsiveStyle`, which emits a plain unlayered
`style`, so a layered glyph rule would lose to it and the tick would render at
Icon's own size rather than the spec's 16/12px. There is no 12px `icon.size`
token to pass instead.

State is now expressed as data attributes on the box — `data-active`,
`data-disabled`, `data-indeterminate`, `data-size` — rather than through
`:checked`/`:disabled` sibling combinators. Same rendered result, and the
specificity juggling the old selectors needed is gone:
`[data-disabled][data-active]` outranks `[data-active]` structurally. These
attributes are a styling and test hook, not API.

### Other fixes

- **`aria-label` and `aria-labelledby` now reach the native input.** They were
  silently dropped, so a CheckBox rendered without `children` had no accessible
  name at all — including the six in the branding story, which were already
  passing `aria-label` and getting nothing.
- The unchecked tick is `transparent` rather than page-background-coloured. The
  old trick painted a white tick, which became visible once hover gained a fill.
- `testId` and `odComponent` reach the root, which now carries
  `data-od-component="checkbox"`. `odComponent` is an overridable prop
  defaulting to `checkbox`, as it is on Switch.
- `displayName` corrected from `Checkbox` to `CheckBox`, matching the export.

### Known limitations

- **The two disabled states render ~60% opacity paler than Figma.** The shared
  `CheckableBase` fades the whole disabled row, so Figma's `#eef0f2` fill
  composites to roughly `#f5f6f7` and its `#d4d9dd` border to `#e5e8ea`. The
  fill and border tokens themselves are correct; unfading the box means changing
  a file Radio also renders through, so it belongs with Radio's own ticket.
- **Radio still draws its dot from its own styles**, so unbranded it does not
  yet match CheckBox and Switch. That closes with AG-21696.

### Confirmed with design

- **Indeterminate has no frame in the Figma spec, and that was an oversight
  rather than a removal.** Design confirmed the current behaviour is right and
  is backfilling the spec, so it is retained unchanged and now appears in the
  `AllStates` story at both sizes — the selected fill carrying a minus instead
  of a tick. The native `indeterminate` flag is still set on the input, so it
  announces as `mixed`.
