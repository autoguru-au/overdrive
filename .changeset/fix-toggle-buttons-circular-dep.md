---
'@autoguru/overdrive': patch
---

Fix circular dependency between ToggleButtons.css.ts and ToggleButtons.tsx that
caused a Rolldown TDZ error in Vite 8
