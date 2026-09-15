---
'@autoguru/overdrive': major
---

feat(TextLink)!: drop the legacy link token

`TextLink` no longer reads `typography.colour.link`. The label, the resting
underline and the `muted` hover flood all come from `color.link.primary`, and
the muted label from `color.foreground.tertiary`.

**The default link colour changes from green-600 `#01C68C` to green-800
`#18856F`.** This affects every `TextLink` that does not pass `variant`, with no
opt-out — the legacy token is gone rather than deprecated.

Why: `#01C68C` is 2.22:1 on white and fails WCAG AA (4.5:1) for body text.
`#18856F` clears it, and is the value `--od-color-link-primary` already holds.

No API change — nothing to migrate, but link colour shifts wherever `TextLink`
is used, including every markdown link rendered through `MarkdownRenderer`.
