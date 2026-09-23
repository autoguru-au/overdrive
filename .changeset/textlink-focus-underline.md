---
'@autoguru/overdrive': minor
---

fix(TextLink): draw the underline on focus, not only on hover

The established appearance rests with an invisible `inset 0 0 0 0` box-shadow
and grows it to `-2px` on `:hover`. There was no `:focus-visible` in that rule,
so the non-colour cue a pointer user gets for free never reached the keyboard.

WCAG technique **F73** permits identifying a link by colour alone only where the
link clears 3:1 against the surrounding body text **and** a non-colour cue
appears on both hover and focus. At `color.link.primary` the link measures
3.39:1 against body text, so the first half held — the missing focus cue is what
broke it (SC 1.4.1).

The hover rule now also matches focus, via the shared `selectors.hover` and
`selectors.focusVisible` patterns rather than a bare `:hover`. Two consequences
beyond the fix itself: the hover state is now forceable from a story with
`data-hover`, and `[data-hover]` / `[data-focus-visible]` from React Aria are
honoured the same way every other component honours them.

Visible change is limited to the focused state of a link that was previously
drawn with no underline at all. The resting and hover appearances are unchanged,
and the linked-text `variant` path is untouched — it draws its underline in
every state already.

Covered by the `FocusUnderline` interaction story, which asserts the resting
link has no `-2px` shadow and the focused one does.
