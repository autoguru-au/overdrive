---
"@autoguru/overdrive": patch
---

Fix DateInput, Calendar, and DateTimeField showing US date format (MM/DD/YYYY) instead of locale-appropriate format. OverdriveProvider now wraps children with React Aria's I18nProvider, auto-detecting locale from i18next or accepting an explicit `locale` prop.
