---
'@autoguru/overdrive': patch
---

Table: Introduces Tables

Implemented as a css-grid, so column widths are to be defined in
gridTemplateColumns. All components in this scope accept a ref property.

Please note! In order to remain structurally WAI-ARIA compliant; the
`TableRowGroup` must be placed around the _traditional_ `tbody` and `thead`.

**FEATURES**

### Example

```jsx
<Table columnTemplate="repeat(2, auto)">
	<TableRowGroup>
		<TableRow>
			<TableHeadCell>Col 1</TableHeadCell>
			<TableHeadCell>Col 2</TableHeadCell>
		</TableRow>
	</TableRowGroup>
	<TableRowGroup>
		<TableRow>
			<TableCell>Row 1, Col 1</TableCell>
			<TableCell>Row 1, Col 2</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Row 2, Col 1</TableCell>
			<TableCell>Row 2, Col 2</TableCell>
		</TableRow>
	</TableRowGroup>
</Table>
```

### Sticky Header

```diff
-<Table columnTemplate="repeat(2, auto)">
+<Table stickyHead columnTemplate="repeat(2, auto)">
    <TableRowGroup>
        <TableRow>
            <TableHeadCell>Col 1</TableHeadCell>
```

### Sorting Columns

```diff
<Table columnTemplate="repeat(2, auto)">
    <TableRowGroup>
        <TableRow>
-            <TableHeadCell>Col 1</TableHeadCell>
+            <TableHeadCell sort="asc" onSortChange={}>Col 1</TableHeadCell>
```

A column can only have _sort_ functionality when the `sort` prop is set to
either `asc | desc | none`. An `onSortChange` callback when applied to the cell
that allows observing this. This callback will send the _new_ sort to have
applied to it. This is a stateless component, so make sure you wire the value
back into `sort`.

### Row Clicking

```diff
<Table columnTemplate="repeat(2, auto)">
    <TableRowGroup>
-        <TableRow>
+        <TableRow onClick={}>
            <TableHeadCell>Col 1</TableHeadCell>
```

Please note; that if you're also tracking clicks of cell buttons, to check the
currentTarget of whether to apply the callback.
