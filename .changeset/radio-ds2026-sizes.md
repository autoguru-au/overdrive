---
'@autoguru/overdrive': major
---

feat(Radio)!: adopt the DS-2026 spec, add a `size` prop and layer the styles
(AG-21696)

**Breaking: every existing Radio changes appearance.** No prop is removed or
renamed — the rendered output moves onto
[Figma's Radio button spec](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=438-15441).

What moves for a consumer who changes nothing:

|                    | before                                | after                                  |
| ------------------ | ------------------------------------- | -------------------------------------- |
| Ring               | 24px (`space.6`), 12px dot            | **20px (`space.5`), 10px dot**         |
| Border, unselected | `colours.background.neutral` (legacy) | **`color.border.default`**             |
| Hover, unselected  | grey fill with a white dot            | **`color.brand.subtle`, brand border** |
| Unselected dot     | white, hidden against the ring        | **`transparent`**                      |
| Disabled           | row opacity only                      | **fill + border of its own**           |

The 48px row and 48×44 hit area are unchanged, so nothing reflows around a radio
— only the ring inside the well is smaller.

The selected fill is **not** changing here. Radio already read
`color.brand.solid`, and that token was re-seeded from navy to green `#01c68c`
by Switch's AG-21694 — so the green lands with that change, not this one. What
changes is everything around it: the unselected border, the hover wash and both
disabled states.

### The new `size` prop

`size="small"` adds Figma's 16px ring (8px dot). `medium` is the default and the
size an unqualified radio renders at.

**`size` sits on `RadioGroup`, not on each `Radio`** — a group is one size in
practice, and repeating the prop on every child would be the wrong ergonomics.
An individual `Radio` can still override its group, which is what the
`SizeOverride` story documents. This is a deliberate divergence from `CheckBox`
and `Switch`, where `size` is per-component because there is no group to hang it
on.

The dot is derived rather than tabulated: Figma draws it at exactly half the
ring at both sizes — 10px inside 20, 8px inside 16 — so one CSS variable holds
the ring and the dot is `calc(ring / 2)`. There is no 10px step on the space
ladder to name instead.

### No new tokens

The accent is `color.brand.solid` and the unselected hover wash is
`color.brand.subtle` — the pair `Switch` and `CheckBox` already read, seeded to
Figma's `#01c68c` / `#e3f8f0`. Branding therefore works the same way it does for
those two: a tenant's `primaryBackground` drives the fill verbatim and
`brand.subtle` derives the wash, with no Radio-specific derivation.

The dot reads `color.brand.onSolid` rather than Figma's
`color/foreground/reverse` directly. Both resolve to white unbranded, but
`onSolid` is derived against the fill, so a tenant on a pale brand (amber) gets
dark ink instead of an invisible white dot.

### Breaking: `Radio.css.ts` moves into `cssLayerComponent`

Every rule in the file now sits in the `component` cascade layer, matching
`Switch` and `CheckBox`. **An unlayered MFE override that used to lose to Radio
will now win**, because unlayered author styles outrank every layered one. That
is the intended direction — it is what makes the component themable without
`!important` — but it is a cascade change, so an MFE that was fighting these
rules may find its override suddenly taking effect.

State is now expressed as data attributes on the ring — `data-active`,
`data-disabled`, `data-size` — rather than through `clsx` class toggles and
`:checked` sibling combinators. Same rendered result, and
`[data-disabled][data-active]` outranks `[data-active]` structurally, so the
specificity juggling the old selectors needed is gone. These attributes are a
styling and test hook, not API.

The two circles became one: the ring is a single element containing the dot,
instead of two absolutely-positioned circles stacked in the well. The exported
class names changed with it — `radio` / `radioSelected` / `inner` /
`innerSelected` are now `ring` / `dot` / `size`.

### Breaking: disabled selection controls are no longer faded

`CheckableBase` used to drop `opacity: 0.6` on the whole disabled row, so a
control's own disabled fill composited against the page and came out ~60% paler
than the spec — Figma's `#eef0f2` reading as roughly `#f5f6f7`. The fade now
sits on the label only. The label looks exactly as it did; the control paints
its tokens neat.

**This affects `CheckBox` as well as `Radio`.** A disabled checkbox now renders
the specified `#eef0f2` fill with a `#d4d9dd` border and tick, rather than the
washed-out version. It closes the known limitation recorded against AG-21695,
which parked the fix here because the file is shared.

### Other fixes

- **`aria-label` and `aria-labelledby` now reach the native input.** They were
  silently dropped, so a `Radio` rendered without `children` had no accessible
  name at all — including the two in the branding story, which were already
  passing `aria-label` and getting nothing.
- `testId` and `odComponent` reach both roots, which now carry
  `data-od-component="radio"` and `data-od-component="radio-group"`.
  `odComponent` is an overridable prop, as it is on `CheckBox` and `Switch`.
- `RadioProps` and `RadioGroupProps` are exported from the package. They were
  declared but never exported, so a consumer could not type a wrapper.
- Every prop on both components now carries JSDoc, so the Storybook controls and
  the emitted types describe themselves.

### Known limitations

- **The focus ring is the same green as the selected fill**, so it is invisible
  on a selected radio. It comes from `colours.foreground.link` through the
  shared `focusOutline`, which every focus ring in the library reads — not
  something Radio can fix alone. Unchanged by this release.
- **A radio group still has no `role="radiogroup"`.** Arrow-key roving focus
  works because the native inputs share a `name`, and that is untouched and now
  covered by a play test. Adding the role changes the accessibility tree, which
  is breaking for MFEs, so it needs its own ticket.

### Also in this release

- The `AllStates` story renders all ten Figma variants — both sizes across
  default, hover, selected, disabled and disabled-selected — with the hover row
  forcing its own appearance so Chromatic can snapshot the state it cannot
  otherwise reach.
- `Radio.spec.jsx` is now `Radio.spec.tsx`, and the snapshot for "a checked
  radio" actually renders a checked radio; it never did before, because the test
  passed a `checked` prop `Radio` does not have while leaving the group unset.
