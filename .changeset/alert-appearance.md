---
'@autoguru/overdrive': major
---

Add an opt-in `appearance` prop to `Alert`, wiring the DS-2026 Toast & alert
design, pass it through `useToast()`, and bring the established `Alert` render
up to the same alignment and spacing.

`appearance` takes `detail` or `message`, the two layouts the 2026 frame
specifies. `detail` is the bordered card — `z3`, `border.default`,
`radius.xsmall`, a 6px left tab in the intent foreground, 16/20px padding, an
optional `title` and an optional `action` slot. `message` is the tinted
single-line layout — intent `backgroundSubtle`, no border, no shadow, no close,
12px padding, p2 body. Both draw body copy in `foreground.primary` on every
intent.

## Breaking

**`AlertProps` is no longer an interface.** It is now
`AlertBaseProps & (AlertActionProps | AlertDismissProps)`, so that an alert
carries either an action or a dismiss control and never both. An interface
cannot extend a union, so `interface MyProps extends AlertProps {}` stops
compiling; take `AlertBaseProps` or the arm you want instead — all three are
exported. Note the exclusion only holds for object literals and inferred
spreads: `Omit<AlertProps, …>` collapses the union and lets both through again.

**Every existing `Alert` renders differently, with no opt-in.** The established
path now matches the 2026 spacing:

- container padding goes from 8px to 16px, so an alert is roughly 8px taller and
  sits 8px wider inside
- the status icon aligns to the first line of body copy instead of sitting below
  it, and body copy top-aligns instead of centring
- the close control is a bare 24px button rather than the 36px
  `Button minimal rounded secondary small`, with a hover colour change in place
  of the minimal-secondary hover fill
- `success` and `warning` use filled status glyphs instead of outline ones

`Toast` renders `Alert` with no `appearance`, so every toast inherits all of the
above whether or not a call site opts in. That is the widest surface here.

## Filled status icons

The 2026 frame binds `AG-CheckCircleFilled` and `AG-WarningTriangleFilled`;
`@autoguru/icons@2.2.0` is the latest published and ships no filled status
icons. `success` and `warning` are vendored locally in
`lib/components/Alert/intentIcons.tsx` from Phosphor Icons (MIT, fill weight) —
the same family the package's own regular-weight icons come from, so they match
the optical size of the icons they replace. Delete that file and point
`iconMapForIntent` back at the package once it ships them. `information` and
`danger` were already filled and are untouched.

## Toaster

`useToast()` takes an optional third argument, so a toast can opt in per call:
`toast.success(message, duration, { appearance: 'message' })`. The two existing
arguments are unchanged, so every current call site compiles. `ToastOptions` is
exported for consumers typing their own wrappers.

Note `appearance="message"` renders no close control at all, so a toast opted
into it can only disappear on its duration timer — `dismissible` and
`onRequestClose` are ignored there.

## Accessibility

The close control's hit target was 36x36 under the old `Button` and is now a
24x24 minimum, which meets WCAG 2.5.8 but is smaller than it was. Its glyph
stays on `foreground.tertiary`, which is 2.81:1 on `background.default` and
below the 3:1 that 1.4.11 asks for — unchanged from the previous control, and
left for the token to fix rather than hardcoding a colour here.

`detail` keeps `role="alert"` and `message` is given `role="status"`, since the
frame uses it for passive copy. An alert carrying an `action` cannot also carry
a close control, so it stays on screen until the action is taken.

## Not done

- **`color.info.backgroundSubtle` does not match the frame.** The token is
  `#e1edfe` and carries a comment asserting it is deliberately not blue-200; the
  small Info message in the frame is `#bad4ff` (Blue/200). The token wins —
  hardcoding the frame's swatch would put a raw hex in the component and leave
  the token wrong for everyone else.
- **The 24px detail icon has no token.** `icon.size` runs 16 / 20 / 32, so both
  layouts use `medium` (20px) rather than the frame's 24px.
- `IntentStripe` is untouched and still exported. The 2026 tab is a flow child
  rather than `IntentStripe`, because that one is `position="absolute"` +
  `height="full"` and will not stretch alongside a heading and an action row.

`AlertProps` now extends `TestIdProp`, so `Alert` accepts `testId` like the rest
of the library.
