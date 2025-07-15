---
'@autoguru/overdrive': minor
---

**EditableText:** made the width more reliable in edit mode

**FlexInline/inline** adds `height` prop, **FlexStack/stack** adds `width` and
`minWidth` props

**NumberBubble:** simplified props to background and text colour

Most components refactored onto `inline`/`stack` style functions or `useBox`
internally to reduce component nesting depth. The updated components include:

- Button,
- Text
- Icon
- Inline
- Stack
- Columns
