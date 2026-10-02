---
'@autoguru/overdrive': minor
---

`Modal`: close on `Escape`, with a `closeOnEscapeKeyDown` opt-out.

`Modal`, `MinimalModal` and `StandardModal` are the library's only
`aria-modal="true"` dialogs, and none of them closed on `Escape` — the WAI-ARIA
dialog convention, and the one dismissal route a keyboard user has.
`onRequestClose` has always declared an `'escapeKeyDown'` reason; nothing ever
dispatched it.

- While a modal is open, a document-level `keydown` listener fires
  `onRequestClose('escapeKeyDown')` on `Escape`. The listener is detached on
  close and on unmount.
- Only the top-most open modal responds, so one keypress can't dismiss a stack.
- `closeOnEscapeKeyDown` defaults to `true`. Set it to `false` on a modal the
  user must not be able to dismiss with the keyboard.
- `StandardModal` and `MinimalModal` forward the prop.

The rendered DOM is unchanged, and no API was removed or renamed — `Escape`
simply reaches the `onRequestClose` handler consumers already pass.
