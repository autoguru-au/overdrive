---
'@autoguru/overdrive': patch
---

Restore the build output in the published package. 6.0.0 shipped without `dist/`
because Changesets 3 publishes through `yarn npm publish`, which does not run
`prepublishOnly`. The build now runs from `prepack`, and the publish job refuses
to publish a tarball that is missing `dist/`.
