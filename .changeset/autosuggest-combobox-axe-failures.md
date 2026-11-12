---
'@autoguru/overdrive': patch
---

Fix three critical axe failures on `AutoSuggest`:

- The element holding `role="combobox"` now carries `aria-controls` alongside
  `aria-owns`, satisfying `aria-required-attr`.
- The suggestion flyout's `Positioner` no longer duplicates the list's `id` and
  `role="listbox"`. The `<ul>` is now the only listbox and the only element with
  that id, so `aria-owns` and `aria-controls` resolve to the real list instead of
  its wrapper.
- The clear button and the fullscreen close button have accessible names, and the
  clear button is explicitly `type="button"` so it cannot submit a surrounding
  form.

No public API change.
