---
'@autoguru/overdrive': major
---

feat(CheckBox)!: adopt the DS-2026 spec, add a `small` size and brand the
selection accent (AG-21695)

**Breaking: every existing CheckBox changes appearance.** No prop is removed,
renamed or retyped — the rendered output moves onto
[Figma's Check box spec](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=438-15383).

Two things move for consumers who change nothing:

| | before | after |
| --- | --- | --- |
| Default box | 24px, 20px tick | **20px, 16px tick** (Figma `Medium`) |
| Selected fill, unbranded | `#212338` navy (`color.brand.solid` seed) | **`#01c68c` green** (`color.selection.active`) |

The 48px row and 48×44 hit area are unchanged, so nothing reflows around a
checkbox — only the box inside the well is smaller.

### The new `size` prop

`size="small"` adds Figma's 16px box (12px tick). `medium` is the default and
the size an unqualified CheckBox renders at, so the scale reads
`small` < `medium`, consistent with Badge and the rest of the library.

Every dimension comes off the space ladder rather than a literal: the box is the
`5` (20px) and `4` (16px) tokens, and the tick steps down one token from its box
— which is exactly Figma's 2px inset on each side. The corner is
`border.radius.xsmall` at both sizes; the small box does not step its radius
down.

### Two new theme tokens

Figma binds the selection accent as its own pair, and neither existed:

- `color.selection.active` — the checked fill and its border. Seeded to
  green-600 `#01c68c`.
- `color.selection.hoverBg` — the wash behind an unchecked box on hover. Seeded
  to green-200 `#e3f8f0`.

Both are branded: a tenant's `primaryBackground` drives `active` verbatim, and
`hoverBg` derives as that hue at 12% alpha. Alpha rather than a `lighten()`
because Figma's `#e3f8f0` *is* its green at ~12% over white (within 2/255 per
channel), and because lightening a bright brand far enough to match that value
takes it to pure white — no wash at all. Verified in the branding story: violet
`#6d39a8` and amber `#e5bc01` each produce their own accent and their own wash,
and amber's tick derives as dark ink rather than an invisible white.

`flat_red` overrides the pair onto its own green ramp, for the same reason it
already overrides `focus.ring` — base's literals would check a box in base green
beside that theme's flat-red green everywhere else.

### Other fixes

- **`aria-label` and `aria-labelledby` now reach the native input.** They were
  silently dropped, so a CheckBox rendered without `children` had no accessible
  name at all — including the six in the branding story, which were already
  passing `aria-label` and getting nothing.
- The unchecked tick is `transparent` rather than page-background-coloured. The
  old trick painted a white tick, which became visible once hover gained a fill.
- `testId` and `odComponent` reach the root, which now carries
  `data-od-component="checkbox"`; the box carries `data-size`.
- `displayName` corrected from `Checkbox` to `CheckBox`, matching the export.

### Known limitations

- **The two disabled states render ~60% opacity paler than Figma.** The shared
  `CheckableBase` fades the whole disabled row, so Figma's `#eef0f2` fill
  composites to roughly `#f5f6f7` and its `#d4d9dd` border to `#e5e8ea`. The
  fill and border tokens themselves are correct; unfading the box means changing
  a file Radio also renders through, so it belongs with Radio's own ticket.
- **Unbranded, a checked CheckBox is now green while Switch and Radio are still
  navy**, because those two still read `color.brand.solid`. A tenant brand
  drives all three identically, so only the unbranded theme looks mixed. This
  closes when Switch and Radio move onto the same pair.
- `CheckBox.css.ts` is still outside `cssLayerComponent`. Converting it shifts
  specificity for every rule in the file, which is a cascade change for MFEs, so
  it is deliberately not in this change.
- No indeterminate state appears in the Figma spec. The current behaviour is
  kept as-is pending confirmation from design — nothing about it changed here.
