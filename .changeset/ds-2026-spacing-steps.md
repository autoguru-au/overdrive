---
'@autoguru/overdrive': minor
---

Add DS-2026 spacing steps to the `space` scale: `space['0']` (2px), `space['40px']`, `space['64px']` and `space['80px']`. These are purely additive — the existing `1`–`9` ordinal keys and `none` are unchanged, so every current `space="…"` usage renders identically.
