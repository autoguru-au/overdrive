---
'@autoguru/overdrive': minor
---

Add the two DS-2026 sizes to CheckBox, Radio and Switch

Figma publishes each selection control at two sizes (nodes `438:15383`,
`438:15441`, `462:2521`) that the components had no way to express. A new `size`
prop adds them:

| | `standard` | `large` | `small` |
| --- | --- | --- | --- |
| CheckBox box | 24px | 20px | 16px |
| Radio ring | 24px | 20px | 16px |
| Switch track | 46x24 | 38x20 | 30x16 |

`standard` is the pre-2026 control and stays the default, so **no existing
consumer changes**: it adds no class and no rules, and the only snapshot movement
is vanilla-extract's auto-incremented class suffix — the stripped-hash diff is
empty for all three components.

Every dimension comes from the existing space ladder rather than a literal: the
box and track heights are the `5` and `4` tokens, the CheckBox tick is the box
less the 2px inset Figma specifies (which is why today's 24px box already pairs
with a 20px tick), the Radio dot stays at half the ring, and the Switch track
width falls out of the `2 x height - 2px` formula the component already used —
it reproduces both Figma widths exactly. The new Switch sizes also carry the
`z2` handle shadow Figma binds.

The union ships as a shared `ControlSize` type from `lib/types`, so the three
controls reference one definition rather than importing from each other.

Set Radio's size once on `RadioGroup`; an individual `Radio` can still override
it for the rare mixed-size case.

Colour is unchanged and deliberately so — these controls already ride
`color.brand.{solid,onSolid}` from AG-20614, so the accent follows each tenant's
brand rather than a fixed green.

Note the row height is still 48px at every size: the hit area lives in the shared
`private/CheckableBase` and is not yet size-aware. That keeps every size above
the WCAG 2.5.5 target minimum, but means `small` does not yet tighten a dense
list.
