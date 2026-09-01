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

The handle's hover travel is per-size too — the shared hover rule out-specified
the resting size rules, so a hovered `medium` or `small` handle took the legacy
20px travel and overshot its narrower track.

Colour is untouched: these controls already ride `color.brand.{solid,onSolid}`,
so the accent follows each tenant's brand.

Known gaps, all pre-existing or deferred:

- **Switch** keeps its `inline-block` wrapper, so a label passed as children
  sits below the track rather than beside it. Wrap it in your own flex container
  for a side-by-side layout.

- **CheckBox and Radio** keep a 48px row at every size — the hit area lives in
  the shared `private/CheckableBase` and is not yet size-aware, so `small` does
  not yet tighten a dense list. The whitespace between control and label drifts
  slightly as a result (12px at `large`, 14px `medium`, 16px `small`), so a
  column mixing sizes will not align perfectly.
- **Switch** does not use that shared hit area; its target is the track itself.
  At `small` that is 30x16, under the 24x24 minimum of WCAG 2.2 SC 2.5.8. It can
  still meet that criterion through the _spacing_ exception where targets are
  well separated, but not in a dense list — so prefer `medium` or `large` where
  targets are tightly packed.
