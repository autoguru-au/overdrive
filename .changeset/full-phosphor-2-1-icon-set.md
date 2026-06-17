---
"@autoguru/overdrive": minor
---

- Upgrade `@autoguru/icons` to `2.1.0`
- Full Phosphor 2.1 regular-weight set + AutoGuru's custom icons:
  **1,576 icons (up from 203)**. Preserves every existing export name —
  **purely additive, no public component or icon-import API change**.
- Regenerated `lib/stories/iconCategories.ts`: all 1,576 icons mapped across
  20 categories (0 unmapped); added the new "Health & Wellness" category and
  kept the synthetic "Filled" group.
- `Icon` component and `IconType` unchanged — existing imports keep working.
