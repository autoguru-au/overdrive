---
'@autoguru/overdrive': major
---

Renumber the `space` scale into a clean, contiguous DS-2026 ladder (`0`–`12`, in pixel order) plus `none`. Tracking: **AG-20128** (this change) · consumer/MFE migration: **AG-20161**.

**Breaking** — two existing keys change their pixel value:

| Intended px | Old key | New key |
| --- | --- | --- |
| 40px | — (new) | `8` |
| 48px | `8` | `9` |
| 64px | — (new) | `10` |
| 80px | — (new) | `11` |
| 96px | `9` | `12` |

Keys `1`–`7` (4px→32px) and `none` (0px) are unchanged. `0` is a **new** key that resolves to `0px` (a numeric alias of `none`); there is intentionally no 2px step.

All Overdrive components have been migrated to preserve their rendered sizes, so the library itself is visually identical. **Consumers** that reference the changed keys via `space`, `gap`, `columnGap`, `rowGap`, `padding*`, `margin*`, `width`, `height` (or `vars.space['8'|'9']`) must repoint by intended pixel value:

- `8` → `9` (keep 48px)
- `9` → `12` (keep 96px)

A best-effort codemod is provided — review its diff, as it can't tell a deliberate `8`/`9` from one that needs repointing:

```
npx jscodeshift -t node_modules/@autoguru/overdrive/scripts/codemods/space-renumber.js --extensions=ts,tsx src/
```
