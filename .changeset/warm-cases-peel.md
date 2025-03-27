---
'@autoguru/overdrive': minor
---

This release updates the visual appearance of the following components: Button,
Checkbox, Radio, Switch, TextInput, NumberInput, DateInput, ColourInput,
AutoSuggest, Select, Tabs and Table. A consistent keyboard focus outline has
also been applied except for input fields. Accessibility issues fixed relating
to labelling on Button and aria attributes on Checkbox, Radio and Tabs.

Border radius tokens have been updated to named-sizes. The new values are `sm`
`md` `lg` `xl` `2xl`. Radius `1` remains for backwards compatbility.

Input fields: TextInput, NumberInput, DateInput, Select, and AutoSuggest now
have `large` size via the shared InputBase.

Tabs: A new `appearance` prop has been added to configure a Pill look-and-feel.

Button: Addition of size `xsmall`.

Checkbox: Added support for an indeterminate state.
