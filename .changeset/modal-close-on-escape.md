---
'@autoguru/overdrive': minor
---

`Modal`: add opt-in `closeOnEscapeKeyDown`.

`Modal`, `MinimalModal` and `StandardModal` are the library's only
`aria-modal="true"` dialogs, and none of them closed on `Escape` — the WAI-ARIA
dialog convention, and the one dismissal route a keyboard user has.
`onRequestClose` has always declared an `'escapeKeyDown'` reason; nothing ever
dispatched it.

- `closeOnEscapeKeyDown` (default `false`) attaches a document-level `keydown`
  listener while the modal is open and fires `onRequestClose('escapeKeyDown')`
  on `Escape`. The listener is detached on close and on unmount.
- Only the top-most open modal responds, so one keypress can't dismiss a stack.
- `StandardModal` and `MinimalModal` forward the prop. Neither turns it on.

Existing consumers see no behavioural change: the prop defaults to `false`, and
the rendered DOM is unchanged.
