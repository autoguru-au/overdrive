---
'@autoguru/overdrive': patch
---

Alert: migrate the intent text colour from the legacy `typography.colour` ramp
(`sprinklesLegacyText`) to the semantic
`color.{info,success,warning,alert}.foreground` tokens, and replace the
deprecated `borderRadius="1"` with `xsmall` (same 4px).

Rendered output is unchanged except `information`, which moves from blue500 to
blue600 (`color.info.foreground`). Alert was the last direct consumer of
`sprinklesLegacyText`; the utility itself remains exported until v5.
