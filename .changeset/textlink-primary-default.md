---
'@autoguru/overdrive': major
---

feat(TextLink)!: make DS-2026 linked text the default appearance (AG-20713)

`variant` now defaults to `'primary'`, so every `TextLink` renders the DS-2026
linked-text appearance without opting in. **This changes how every link in every
consuming app looks.** No API is removed and no layout shifts — the change is
visual.

What changes for a link with no props set:

|           | before               | after                            |
| --------- | -------------------- | -------------------------------- |
| Colour    | `#01C68C` (green600) | `#18856F` (`color.link.primary`) |
| Weight    | 500                  | 600                              |
| Underline | on hover only        | drawn in every state             |
| Pressed   | none                 | `color.link.pressed`             |
| Focus     | browser default      | the shared Overdrive focus ring  |

The new resting colour also fixes an accessibility defect: `#01C68C` on white is
**2.22:1**, below the WCAG AA 4.5:1 minimum for body text. `#18856F` is
**4.54:1** and passes. Note that `link.hover` (2.81:1) and `link.pressed`
(1.62:1) remain below AA — they are transient states, and the resting colour is
the one that carries the text.

`muted` is **deprecated** and will be removed in v5. It is the only remaining
route to the pre-DS-2026 appearance and still works, so nothing breaks silently;
setting it opts out of `variant`.

To keep a link on the old look for now, set `muted`. There is otherwise no
opt-out — this is a deliberate clean break rather than a parallel legacy path
that would need unpicking later.
