import{e}from"./iframe-DUkgvalV.js";import{D as m}from"./DataTable-CoLUXkcn.js";import{a,T as n,b as t,c as l,d}from"./Table-ovwG5c6t.js";import"./preload-helper-PPVm8Dsz.js";import"./ScrollPane-C5RVOzBL.js";import"./Text-DzL8dYyv.js";import"./flex-Nu99tQh2.js";import"./Icon-CZlUp0F_.js";import"./resolveResponsiveProps-B8iv0r4y.js";import"./ArrowsDownUpIcon-6rAa8Kmz.js";const R={title:"Components/Table/TableRow",component:a,parameters:{docs:{description:{component:["`TableRow` is the row primitive used inside `Table` and `DataTable`.","","It renders as a native `<tr>` with `display: contents`, so the row participates in the parent grid layout without adding a layout box of its own. The row also opts into a staggered entrance animation via the `staggerIndex` prop."].join(`
`)}}},argTypes:{staggerIndex:{control:{type:"number",min:0,max:20,step:1},description:"Opt-in entrance animation. Pass the row index to cascade a slide-up-and-fade across rows (delay = `staggerIndex * 50ms`). Omit to disable.",table:{type:{summary:"number"},defaultValue:{summary:"undefined (no animation)"}}},hover:{control:"boolean",description:"Controls whether hovering a cell in this row paints the hover background across the whole row. Defaults to `true`. Cells can override it with their own `hover` prop.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},onClick:{action:"click",description:"Click handler fired when the row is clicked.",table:{type:{summary:"MouseEventHandler<HTMLTableRowElement>"}}},className:{control:"text",description:"Custom className applied to the underlying `<tr>`."},style:{control:"object",description:"Inline style applied to the underlying `<tr>`."},children:{control:!1}}},i={args:{},render:r=>e.createElement(d,{columnTemplate:"auto 1fr auto"},e.createElement(n,null,e.createElement(a,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(n,null,e.createElement(a,{...r},e.createElement(l,null,"100001"),e.createElement(l,null,"My Auto Service"),e.createElement(l,{align:"right"},"$99.00"))))},s={args:{hover:!1},render:r=>e.createElement(d,{columnTemplate:"auto 1fr auto"},e.createElement(n,null,e.createElement(a,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(n,null,e.createElement(a,{...r},e.createElement(l,null,"100001 (Row hover=false)"),e.createElement(l,null,"Disabled row hover"),e.createElement(l,{align:"right"},"$99.00")),e.createElement(a,null,e.createElement(l,{hover:!1},"100002 (Cell hover=false)"),e.createElement(l,null,"Cell with hover=true"),e.createElement(l,{align:"right"},"$120.00")),e.createElement(a,{hover:!1},e.createElement(l,null,"100003 (Row hover=false)"),e.createElement(l,{hover:!0},"Cell hover=true (cell-only wash)"),e.createElement(l,{align:"right"},"$150.00"))))},c={args:{staggerIndex:0},render:r=>e.createElement(m,{columnTemplate:"auto 1fr auto",minWidth:"500px"},e.createElement(n,null,e.createElement(a,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(n,null,Array.from({length:5}).map((b,o)=>e.createElement(a,{key:o,staggerIndex:typeof r.staggerIndex=="number"?r.staggerIndex+o:void 0},e.createElement(l,null,100001+o),e.createElement(l,null,"Row ",o+1),e.createElement(l,{align:"right"},"$",(99+o*10).toFixed(2))))))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Table columnTemplate="auto 1fr auto">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                <TableRow {...args}>
                    <TableCell>100001</TableCell>
                    <TableCell>My Auto Service</TableCell>
                    <TableCell align="right">$99.00</TableCell>
                </TableRow>
            </TableRowGroup>
        </Table>
}`,...i.parameters?.docs?.source},description:{story:"Default, non-animated row. The row renders as a native `<tr>` with\n`display: contents`, so its cells become direct grid children of the\n`<table>`.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hover: false
  },
  render: args => <Table columnTemplate="auto 1fr auto">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                <TableRow {...args}>
                    <TableCell>100001 (Row hover=false)</TableCell>
                    <TableCell>Disabled row hover</TableCell>
                    <TableCell align="right">$99.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell hover={false}>
                        100002 (Cell hover=false)
                    </TableCell>
                    <TableCell>Cell with hover=true</TableCell>
                    <TableCell align="right">$120.00</TableCell>
                </TableRow>
                <TableRow hover={false}>
                    <TableCell>100003 (Row hover=false)</TableCell>
                    <TableCell hover>
                        Cell hover=true (cell-only wash)
                    </TableCell>
                    <TableCell align="right">$150.00</TableCell>
                </TableRow>
            </TableRowGroup>
        </Table>
}`,...s.parameters?.docs?.source},description:{story:"Rows and cells have hover enabled by default (`hover={true}`).\nPass `hover={false}` to `TableRow` to switch the hover wash off for the\nwhole row, or to an individual `TableCell` to stop that cell from\ntriggering it. A cell always wins over its row: `hover` on a cell inside a\n`hover={false}` row paints the wash over just that cell.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    staggerIndex: 0
  },
  render: args => <DataTable columnTemplate="auto 1fr auto" minWidth="500px">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                {Array.from({
        length: 5
      }).map((_, i) => <TableRow key={i} staggerIndex={typeof args.staggerIndex === 'number' ? args.staggerIndex + i : undefined}>
                        <TableCell>{100_001 + i}</TableCell>
                        <TableCell>Row {i + 1}</TableCell>
                        <TableCell align="right">
                            \${(99 + i * 10).toFixed(2)}
                        </TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </DataTable>
}`,...c.parameters?.docs?.source},description:{story:`When \`staggerIndex\` is a number, the row's cells animate in with a
staggered slide-up-and-fade. Each row waits \`staggerIndex * 50ms\`
before animating, so mapping over a list and passing the array index
produces a cascade.

Tune the **staggerIndex** control to see individual rows animate with
a different delay. Change the value and re-render the story from the
toolbar to replay the animation.`,...c.parameters?.docs?.description}}};const y=["Standard","WithoutHover","Animated"];export{c as Animated,i as Standard,s as WithoutHover,y as __namedExportsOrder,R as default};
