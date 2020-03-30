---
'@autoguru/overdrive': patch
---

Tabs: Support stretching tablist items to the width of the container

**FEATURES**

**`<TabList />`**

In small contexts, like sidebars, or mobile viewports with minimal tablist items. It makes sense to stretch items to meet the width of the container.

eg:

```
<Tabs>
    <TabList stretch>
        <Tab>Tab a</Tab>
        <Tab>Tab b</Tab>
    </TabList>
</Tabs>
```
