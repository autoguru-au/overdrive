import{e}from"./iframe-Bgojgvh3.js";import{D as d}from"./DataTable-BtyJv-l-.js";import{a as o,T as s,b as a,c as t,d as m}from"./Table-RYIJGisY.js";import"./preload-helper-PPVm8Dsz.js";import"./ScrollPane-W0cAWfYK.js";import"./Text-B_BF7zuX.js";import"./flex-BQOk51AP.js";import"./Icon-C6zvq-dF.js";import"./resolveResponsiveProps-bZ1ETmzV.js";import"./SortIcon-BiiFTKb9.js";const E={title:"Components/Table/TableRow",component:o,parameters:{docs:{description:{component:["`TableRow` is the row primitive used inside `Table` and `DataTable`.","","It renders as a native `<tr>` with `display: contents`, so the row participates in the parent grid layout without adding a layout box of its own. The row also opts into a staggered entrance animation via the `staggerIndex` prop."].join(`
`)}}},argTypes:{staggerIndex:{control:{type:"number",min:0,max:20,step:1},description:"Opt-in entrance animation. Pass the row index to cascade a slide-up-and-fade across rows (delay = `staggerIndex * 50ms`). Omit to disable.",table:{type:{summary:"number"},defaultValue:{summary:"undefined (no animation)"}}},onClick:{action:"click",description:"Click handler fired when the row is clicked.",table:{type:{summary:"MouseEventHandler<HTMLTableRowElement>"}}},className:{control:"text",description:"Custom className applied to the underlying `<tr>`."},style:{control:"object",description:"Inline style applied to the underlying `<tr>`."},children:{control:!1}}},r={args:{},render:i=>e.createElement(m,{columnTemplate:"auto 1fr auto"},e.createElement(s,null,e.createElement(o,null,e.createElement(a,null,"ID"),e.createElement(a,null,"Name"),e.createElement(a,{align:"right"},"Price"))),e.createElement(s,null,e.createElement(o,{...i},e.createElement(t,null,"100001"),e.createElement(t,null,"My Auto Service"),e.createElement(t,{align:"right"},"$99.00"))))},n={args:{staggerIndex:0},render:i=>e.createElement(d,{columnTemplate:"auto 1fr auto",minWidth:"500px"},e.createElement(s,null,e.createElement(o,null,e.createElement(a,null,"ID"),e.createElement(a,null,"Name"),e.createElement(a,{align:"right"},"Price"))),e.createElement(s,null,Array.from({length:5}).map((c,l)=>e.createElement(o,{key:l,staggerIndex:typeof i.staggerIndex=="number"?i.staggerIndex+l:void 0},e.createElement(t,null,100001+l),e.createElement(t,null,"Row ",l+1),e.createElement(t,{align:"right"},"$",(99+l*10).toFixed(2))))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Default, non-animated row. The row renders as a native `<tr>` with\n`display: contents`, so its cells become direct grid children of the\n`<table>`.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                        <TableCell>{100001 + i}</TableCell>
                        <TableCell>Row {i + 1}</TableCell>
                        <TableCell align="right">
                            \${(99 + i * 10).toFixed(2)}
                        </TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </DataTable>
}`,...n.parameters?.docs?.source},description:{story:`When \`staggerIndex\` is a number, the row's cells animate in with a
staggered slide-up-and-fade. Each row waits \`staggerIndex * 50ms\`
before animating, so mapping over a list and passing the array index
produces a cascade.

Tune the **staggerIndex** control to see individual rows animate with
a different delay. Change the value and re-render the story from the
toolbar to replay the animation.`,...n.parameters?.docs?.description}}};const x=["Standard","Animated"];export{n as Animated,r as Standard,x as __namedExportsOrder,E as default};
