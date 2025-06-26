---
'@autoguru/overdrive': patch
---

Introduces specialised TooltipOnComponent to specifically handle nested React
components (Box, TextInput, Button, etc) inside the Tooltip trigger as per the
classic implentation.

- Tooltip: for simpler use cases like text or icons.
- TooltipOnComponent: for more complex nested components.
