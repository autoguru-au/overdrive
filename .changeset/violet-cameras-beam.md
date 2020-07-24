---
'@autoguru/overdrive': patch
---

BulletText: Now accepts an `is` prop, such that it's element can be changed.
This is really because 9/10 times you'd be rendering this in a `Stack`, which
already handles the `ul/li` couple.

**FEATURES**

```jsx
<Stack is="ul">
	<BulletText>Point A</BulletText>
	<BulletText>Point B</BulletText>
</Stack>
```

which already wraps each child in an `li`.
