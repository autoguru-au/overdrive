---
'@autoguru/overdrive': major
---

Renumber the `space` scale into a clean, contiguous DS-2026 ladder (`0`–`12`, in pixel order) plus `none`.

**Breaking** — two existing keys change value:

| Intended px | Old key | New key |
| --- | --- | --- |
| 40px | — | `8` |
| 48px | `8` | `9` |
| 64px | — | `10` |
| 80px | — | `11` |
| 96px | `9` | `12` |

Steps `0`–`7` (2px→32px) and `none` (0px) are unchanged. All Overdrive components have been migrated to preserve their rendered sizes, so the library itself is visually identical. Consumers that reference `space="8"` / `space="9"` (or the equivalent `gap`/`padding*`/`margin*`/`width`/`height` props, or `vars.space['8'|'9']`) must repoint by intended pixel value: `8`→`9` for 48px, `9`→`12` for 96px.
