---
'@autoguru/overdrive': minor
---

Add the two DS-2026 sizes to CheckBox, Radio and Switch

Figma publishes each selection control at two sizes the components had no way to
express. A new `size` prop adds them, every dimension taken from the space
ladder rather than a literal:

|              | `large` | `medium` | `small` |
| ------------ | ------- | -------- | ------- |
| CheckBox box | 24px    | 20px     | 16px    |
| Radio ring   | 24px    | 20px     | 16px    |
| Switch track | 46x24   | 38x20    | 30x16   |

`large` is the pre-2026 control and stays the default, so **existing sizing is
unchanged** — it adds no class and no rules. The scale reads `small` < `medium`
< `large`, matching Badge and the rest of the library. Set Radio's size once on
`RadioGroup`; an individual `Radio` can still override it. The union ships as a
shared `ControlSize` from `lib/types`. The new Switch sizes carry the `z2`
handle shadow Figma binds.

**One visual change:** Switch's label is now centred against its track. Its
wrapper was `inline-block`, so a label passed as children sat 32px out of line
with the track — worse now the track can be 20px or 16px tall. Pass a
`className` with your own `align-items` to override.

Colour is untouched: these controls already ride `color.brand.{solid,onSolid}`,
so the accent follows each tenant's brand.

Known gap: the row height stays 48px at every size, because the hit area lives
in the shared `private/CheckableBase` and is not yet size-aware. Every size
clears the WCAG 2.5.5 target minimum, but `small` does not yet tighten a dense
list.
