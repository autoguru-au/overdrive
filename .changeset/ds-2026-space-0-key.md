---
'@autoguru/overdrive': minor
---

Rename the DS-2026 `space['2px']` token to `space['0']` (value unchanged at 2px) so the Figma index-0 spacing step is keyed `0`. The `2px` key was added this session and never released, so this is not a breaking change.
