---
'@autoguru/overdrive': patch
---

fix(StepProgress): make the current step's number readable on a dark surface

In the `onDark` variant the selected circle fills with `green-500` (`#00dda5`)
and sets its number to `color.foreground.reverse` - white. That pair measures
1.77:1, well under the 4.5:1 AA floor for text, and on a 32px circle it is the
one glyph in the sequence a user cannot read.

The contrast guide already in the repo names the answer:
`lib/themes/base/contrastGuide.ts` lists `gray-900` as the only approved
foreground on `green-500`, `green-600`, `green-400` and `green-300`. The
selected circle now takes `color.foreground.primary`, which resolves to that
same `gray-900` and measures 8.73:1.

Nothing else moves. The light-mode selected circle is unchanged - white on
`background.reverse`, around 15:1 - as are the unselected circles, the labels,
the connectors and the `stages` variant. `neutral` and `flat_red` override
neither token, so the fix carries to every theme.

Visual only - no prop, type or DOM change. Any MFE rendering
`StepProgress onDark` picks it up on upgrade with no code change; the one
visible difference is that the current step's number goes from white to dark
navy.
