---
'@autoguru/overdrive': patch
---

Flatten fragments when provided as children

Will now support fragments and otherwise boolean children that previously would
not have worked:

```jsx
<Stack>
	<p>line 0</p>
	{isEnabled && (
		<>
			<p>Line 1</p>
			<p>Line 2</p>
			<p>Line 3</p>
		</>
	)}
	<p>line 4</p>
</Stack>
```

> which would have the past not had lines 1-3 spaced evenly.

this was also true for: `Actions`, `Inline`, `TabList`, `TabPanes` and `Stack`.
Which have been rectified.
