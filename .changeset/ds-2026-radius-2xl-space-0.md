---
"@autoguru/overdrive": minor
---

feat: align radius `2xl` and space `0` to the DS 2026 spec (AG-20609)

- **Radius `2xl` (24px)** is now an active DS 2026 token for modals — it was
  already 24px but flagged deprecated/pending; no value change.
- **Space `0` is now 2px** (was 0px), matching the Figma space scale where the
  smallest step is 2px.

BREAKING (behavioural) — space `0` was `0px` and is now `2px`. Every use of the
`0` spacing value (`padding="0"`, `gap="0"`, `margin="0"`, `--od-space-0`) now
renders 2px instead of nothing, across Overdrive and any MFE. Use the `none`
token for true zero. Snapshots are unaffected (atom class names are keyed by
value name, not px), so this won't surface in tests — audit `"0"` spacing usages
and switch true-zero cases to `none`.
