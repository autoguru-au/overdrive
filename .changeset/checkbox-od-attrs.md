---
'@autoguru/overdrive': minor
---

`CheckBox` now supports the shared `testId` prop and stamps
`data-od-component="check-box"` on its root element.

`CheckboxProps` extends `TestIdProp`, threading `testId` through the private
`CheckableBase` to the root `Box` as `data-testid`. All props now carry JSDoc.
`CheckableBase` gained optional `odComponent`/`testId` pass-through props;
`Radio` does not use them, so its markup is unchanged.
