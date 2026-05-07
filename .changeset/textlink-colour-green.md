---
'@autoguru/overdrive': minor
---

Update TextLink and other link-coloured tokens from blue to green to match the AutoGuru brand. The `interactive.link` (modern), `foreground.link` (legacy), and `typography.colour.link` tokens now resolve to `colourMap.green['600']`; `interactive.linkVisited` resolves to `colourMap.green['700']`.

This is a visual change that affects every consumer using `TextLink` or any text styled with `colour="link"` / the `info`-derived link tokens. Components that intentionally need the old blue link colour can opt out by overriding the `colour` prop or applying a local style.
