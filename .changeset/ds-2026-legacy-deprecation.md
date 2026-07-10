---
'@autoguru/overdrive': minor
---

Deprecate the legacy colour surface (`colours.*`, `typography.colour`, legacy sprinkles colour props, redundant radius keys) — exported and functional until the DS-2026 major. ESLint now warns on new internal legacy usage (`docs/ds2026-plan/track-c.md` §"Lint rule proposal"); it will flip to `error` once the Track C burn-down reaches zero.
