---
'@autoguru/overdrive': patch
---

**Tabs**: Adds new renderInactivePanes prop to render tabs that are inactive.

By default, TabPanes themselves only render when they are active. Sometimes in
certain cases you'd want to preserve the local state within those tabs as a user
switches between tabs. Setting `renderInactivePanes` on TabPanes will be
rendered but visually hidden.

```jsx
<Tabs active={0}>
	<TabList>
		<Tab>tab 1</Tab>
		<Tab>tab 2</Tab>
	</TabList>
	<TabPanes>
		<TabPane>tab 1 content</TabPane>
		<TabPane>
			{/* Will still be in the DOM, and React comeponet to have state retained */}
			tab 2 content
		</TabPane>
	</TabPanes>
</Tabs>
```
