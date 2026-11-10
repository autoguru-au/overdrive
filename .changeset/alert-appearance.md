---
'@autoguru/overdrive': minor
---

Add an opt-in `appearance` prop to `Alert`, wiring the DS-2026 Toast & alert
design, and pass it through `useToast()`.

`appearance` takes `detail` or `message`, the two layouts the 2026 frame
specifies. `detail` is the bordered card — `z3`, `border.default`,
`radius.xsmall`, a 6px left tab in the intent foreground, 16/20px padding, an
optional `title` and an optional `action` slot. `message` is the tinted
single-line layout — intent `backgroundSubtle`, no border, no shadow, no close,
12px padding, p2 body. Both draw body copy in `foreground.primary` on every
intent.

**Nothing renders differently until a call site passes the prop.** With
`appearance` absent the render is byte-identical — the committed `Alert`
snapshot is unchanged, and so is every other snapshot in the library. The
established path keeps `IntentStripe`, `z4`, the per-intent icon colour and the
`Button minimal rounded secondary small` close control.

`IntentStripe` is untouched and still exported. The 2026 tab is a flow child
rather than `IntentStripe`, because that one is `position="absolute"` +
`height="full"` and will not stretch alongside a heading and an action row.

`useToast()` takes an optional third argument, so a toast can opt in per call:
`toast.success(message, duration, { appearance: 'message' })`. The two existing
arguments are unchanged, so every current call site compiles and renders as
before. `ToastOptions` is exported for consumers typing their own wrappers. That
additive export surface, plus the new props, is what makes this a minor.

`AlertProps` now extends `TestIdProp`, so `Alert` accepts `testId` like the rest
of the library.

Three things the 2026 frame asks for that this does not yet give it, each
waiting on a decision rather than on code:

- **The filled status icons do not exist.** The frame binds
  `AG-InfoCircleFIlled`, `AG-CheckCircleFilled`, `AG-XCircleFilled` and
  `AG-WarningTriangleFilled`; `@autoguru/icons@2.2.0` ships no filled status
  icons, and neither does that package's `main`. Both layouts use the existing
  outline icons, through the single `iconMapForIntent` lookup, so the swap is a
  four-line change once the icons ship.
- **`color.info.backgroundSubtle` does not match the frame.** The token is
  `#e1edfe` and carries a comment asserting it is deliberately not blue-200; the
  small Info message in the frame is `#bad4ff` (Blue/200). The token wins here —
  hardcoding the frame's swatch would put a raw hex in the component and leave
  the token wrong for everyone else.
- **The 24px detail icon has no token.** `icon.size` runs 16 / 20 / 32, so the
  detail layout uses `medium` (20px) like the message layout rather than the
  frame's 24px.

The `message` layout is given `role="status"` rather than `role="alert"`, since
the frame uses it for passive copy ("You have 1 new notification"). `detail`
keeps `role="alert"`.
