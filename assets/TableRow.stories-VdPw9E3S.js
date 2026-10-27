import{e}from"./iframe-BqRRH7-4.js";import{D as E}from"./DataTable-M-CR0qmr.js";import{a as n,T as c,b as t,c as a,r as v,d as y,e as H}from"./Table-CZuwjP0z.js";import"./preload-helper-PPVm8Dsz.js";import"./ScrollPane-DF7bHaTY.js";import"./Text-Dqt-92eI.js";import"./flex-D9g5rmKz.js";import"./Icon-BR2ApMHv.js";import"./resolveResponsiveProps-B6qdBE_5.js";import"./ArrowsDownUpIcon-CIpuBMV3.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Table/TableRow",component:n,parameters:{docs:{description:{component:["`TableRow` is the row primitive used inside `Table` and `DataTable`.","","It renders as a native `<tr>` with `display: contents`, so the row participates in the parent grid layout without adding a layout box of its own. The row also opts into a staggered entrance animation via the `staggerIndex` prop."].join(`
`)}}},argTypes:{staggerIndex:{control:{type:"number",min:0,max:20,step:1},description:"Opt-in entrance animation. Pass the row index to cascade a slide-up-and-fade across rows (delay = `staggerIndex * 50ms`). Omit to disable.",table:{type:{summary:"number"},defaultValue:{summary:"undefined (no animation)"}}},hover:{control:"boolean",description:"Controls whether hovering a cell in this row paints the hover background across the whole row. Defaults to `true`. Cells can override it with their own `hover` prop.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},onClick:{action:"click",description:"Click handler fired when the row is clicked.",table:{type:{summary:"MouseEventHandler<HTMLTableRowElement>"}}},className:{control:"text",description:"Custom className applied to the underlying `<tr>`."},style:{control:"object",description:"Inline style applied to the underlying `<tr>`."},children:{control:!1}}},u={args:{},render:l=>e.createElement(y,{columnTemplate:"auto 1fr auto"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,e.createElement(n,{...l},e.createElement(a,null,"100001"),e.createElement(a,null,"My Auto Service"),e.createElement(a,{align:"right"},"$99.00"))))},p={args:{hover:!1},render:l=>e.createElement(y,{columnTemplate:"auto 1fr auto"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,e.createElement(n,{...l},e.createElement(a,null,"100001 (Row hover=false)"),e.createElement(a,null,"Disabled row hover"),e.createElement(a,{align:"right"},"$99.00")),e.createElement(n,null,e.createElement(a,{hover:!1},"100002 (Cell hover=false)"),e.createElement(a,null,"Cell with hover=true"),e.createElement(a,{align:"right"},"$120.00")),e.createElement(n,{hover:!1},e.createElement(a,null,"100003 (Row hover=false)"),e.createElement(a,{hover:!0},"Cell hover=true (cell-only wash)"),e.createElement(a,{align:"right"},"$150.00"))))},S=[100001,100002,100003,100004,100005].map(l=>({id:l})),g={args:{staggerIndex:0},render:l=>e.createElement(E,{columnTemplate:"auto 1fr auto",minWidth:"500px"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,S.map(({id:r},s)=>e.createElement(n,{key:r,staggerIndex:typeof l.staggerIndex=="number"?l.staggerIndex+s:void 0},e.createElement(a,null,r),e.createElement(a,null,"Row ",s+1),e.createElement(a,{align:"right"},"$",(99+s*10).toFixed(2))))))},w=[{asset:"Mitsubishi Triton",rego:"DB40ZI",year:2021,id:1523036,supplier:"Ultra Tune Beenleigh",price:"1,284.00"},{asset:"Mitsubishi Outlander",rego:"CX72RM",year:2019,id:1522939,supplier:"Kmart Tyre & Auto Slacks Creek",price:"642.50"},{asset:"Toyota HiLux",rego:"FA18PQ",year:2022,id:1522871,supplier:"Midas Underwood",price:"918.25"}],C=l=>Array.from(l.querySelectorAll('[role="gridcell"]')),f=l=>{const{left:r,top:s,width:d,height:i}=l.getBoundingClientRect();return document.elementFromPoint(r+d/2,s+i/2)?.closest('[role="gridcell"]')},h={tags:["test","!autodocs","skip-themes"],parameters:{chromatic:{disable:!0}},render:()=>e.createElement(y,{columnTemplate:"1.4fr auto auto auto 1.4fr auto"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"Asset"),e.createElement(t,null,"Rego"),e.createElement(t,null,"Year"),e.createElement(t,null,"Booking ID"),e.createElement(t,null,"Supplier"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,w.map((l,r)=>e.createElement(n,{key:l.id,staggerIndex:r},e.createElement(a,null,l.asset),e.createElement(a,null,l.rego),e.createElement(a,null,l.year),e.createElement(a,null,"#",l.id),e.createElement(a,null,l.supplier),e.createElement(a,{align:"right"},"$",l.price))))),play:async({canvasElement:l,step:r})=>{const s=Array.from(l.querySelectorAll(`.${H}`)),d=C(s[0]),i=d.at(-1);await r("the entrance animation settles",async()=>{await m(s.length).toBe(w.length),await Promise.all(s.flatMap(o=>C(o)).flatMap(o=>o.getAnimations()).map(({finished:o})=>o))}),await r("every cell owns its own area",async()=>{for(const o of d)await m(f(o)).toBe(o)}),await r("a sticky cell does not cover its row",async()=>{i.style.position="sticky",i.style.right="0",i.style.zIndex="1";for(const o of d)await m(f(o)).toBe(o);i.removeAttribute("style")})}},b={tags:["test","!autodocs","skip-themes"],parameters:{chromatic:{disable:!0}},render:()=>e.createElement(E,{columnTemplate:"1fr auto auto","aria-label":"Containment"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"Supplier"),e.createElement(t,null,"Rego"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,w.map(l=>e.createElement(n,{key:l.id},e.createElement(a,null,l.supplier),e.createElement(a,null,l.rego),e.createElement(a,{align:"right"},"$",l.price))))),play:async({canvasElement:l,step:r})=>{const s=l.querySelector('[data-od-component="data-table"]');await r("the wash adds no scrollable overflow",async()=>{await m(s.scrollWidth).toBe(s.clientWidth)})}},R="rgb(255, 235, 200)",k=`
    .selected > td {
        background-color: ${R};
    }
`,T={tags:["test","!autodocs","skip-themes"],parameters:{chromatic:{disable:!0}},render:()=>e.createElement(e.Fragment,null,e.createElement("style",null,k),e.createElement(y,{columnTemplate:"1fr auto auto"},e.createElement(c,null,e.createElement(n,null,e.createElement(t,null,"Supplier"),e.createElement(t,null,"Rego"),e.createElement(t,{align:"right"},"Price"))),e.createElement(c,null,w.map((l,r)=>e.createElement(n,{key:l.id,className:r===1?"selected":void 0},e.createElement(a,null,l.supplier),e.createElement(a,null,l.rego),e.createElement(a,{align:"right"},"$",l.price)))))),play:async({canvasElement:l,step:r})=>{const s=C(l.querySelector("tr.selected"));await r("the consumer background applies",async()=>{for(const d of s)await m(getComputedStyle(d).backgroundColor).toBe(R)}),await r("the wash is confined to the component layer",async()=>{const d=Array.from(document.styleSheets).flatMap(i=>Array.from(i.cssRules)).filter(i=>i instanceof CSSLayerBlockRule).filter(i=>Array.from(i.cssRules).some(o=>o instanceof CSSStyleRule&&o.selectorText.includes(v)&&o.selectorText.includes(":hover"))).map(i=>i.name);await m(d.length).toBeGreaterThan(0),await m(Array.from(new Set(d))).toEqual(["component"])})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Default, non-animated row. The row renders as a native `<tr>` with\n`display: contents`, so its cells become direct grid children of the\n`<table>`.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Rows and cells have hover enabled by default (`hover={true}`).\nPass `hover={false}` to `TableRow` to switch the hover wash off for the\nwhole row, or to an individual `TableCell` to stop that cell from\ntriggering it. A cell always wins over its row: `hover` on a cell inside a\n`hover={false}` row paints the wash over just that cell.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                {animatedRows.map(({
        id
      }, i) => <TableRow key={id} staggerIndex={typeof args.staggerIndex === 'number' ? args.staggerIndex + i : undefined}>
                        <TableCell>{id}</TableCell>
                        <TableCell>Row {i + 1}</TableCell>
                        <TableCell align="right">
                            \${(99 + i * 10).toFixed(2)}
                        </TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </DataTable>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  parameters: {
    chromatic: {
      disable: true
    }
  },
  render: () => <Table columnTemplate="1.4fr auto auto auto 1.4fr auto">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>Asset</TableHeadCell>
                    <TableHeadCell>Rego</TableHeadCell>
                    <TableHeadCell>Year</TableHeadCell>
                    <TableHeadCell>Booking ID</TableHeadCell>
                    <TableHeadCell>Supplier</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                {hoverRows.map((row, i) => <TableRow key={row.id} staggerIndex={i}>
                        <TableCell>{row.asset}</TableCell>
                        <TableCell>{row.rego}</TableCell>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>#{row.id}</TableCell>
                        <TableCell>{row.supplier}</TableCell>
                        <TableCell align="right">\${row.price}</TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </Table>,
  play: async ({
    canvasElement,
    step
  }) => {
    const rows = Array.from(canvasElement.querySelectorAll<HTMLElement>(\`.\${rowEntering}\`));
    const cells = gridcells(rows[0]);
    const lastCell = cells.at(-1)!;
    await step('the entrance animation settles', async () => {
      await expect(rows.length).toBe(hoverRows.length);
      await Promise.all(rows.flatMap(row => gridcells(row)).flatMap(cell => cell.getAnimations()).map(({
        finished
      }) => finished));
    });
    await step('every cell owns its own area', async () => {
      for (const cell of cells) {
        await expect(cellAtCentreOf(cell)).toBe(cell);
      }
    });
    await step('a sticky cell does not cover its row', async () => {
      lastCell.style.position = 'sticky';
      lastCell.style.right = '0';
      lastCell.style.zIndex = '1';
      for (const cell of cells) {
        await expect(cellAtCentreOf(cell)).toBe(cell);
      }
      lastCell.removeAttribute('style');
    });
  }
}`,...h.parameters?.docs?.source},description:{story:`Regression guard: no cell may cover its neighbours.

The wash used to be a \`z-index: -1\` pseudo-element stretched to
\`left/right: -1000%\`, painted unconditionally on every cell of a hover row.
A cell that formed a stacking context trapped it, and it then covered the
columns beside it — blanking their text and swallowing their pointer events.

Hit-testing is the assertion because it catches the bug without needing a
real pointer: the covering element was there whether or not anything was
hovered. Hover the right-hand cells by hand to check the wash itself.`,...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  parameters: {
    chromatic: {
      disable: true
    }
  },
  render: () => <DataTable columnTemplate="1fr auto auto" aria-label="Containment">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>Supplier</TableHeadCell>
                    <TableHeadCell>Rego</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                {hoverRows.map(row => <TableRow key={row.id}>
                        <TableCell>{row.supplier}</TableCell>
                        <TableCell>{row.rego}</TableCell>
                        <TableCell align="right">\${row.price}</TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </DataTable>,
  play: async ({
    canvasElement,
    step
  }) => {
    const pane = canvasElement.querySelector<HTMLElement>('[data-od-component="data-table"]')!;
    await step('the wash adds no scrollable overflow', async () => {
      await expect(pane.scrollWidth).toBe(pane.clientWidth);
    });
  }
}`,...b.parameters?.docs?.source},description:{story:"Regression guard: the wash must stay inside the table.\n\nIt used to be a pseudo-element stretched to `left/right: -1000%`, which\ninflated the scroll container's `scrollWidth` by thousands of pixels and\nproduced phantom horizontal scroll.",...b.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  parameters: {
    chromatic: {
      disable: true
    }
  },
  render: () => <>
            <style>{consumerStylesheet}</style>
            <Table columnTemplate="1fr auto auto">
                <TableRowGroup>
                    <TableRow>
                        <TableHeadCell>Supplier</TableHeadCell>
                        <TableHeadCell>Rego</TableHeadCell>
                        <TableHeadCell align="right">Price</TableHeadCell>
                    </TableRow>
                </TableRowGroup>
                <TableRowGroup>
                    {hoverRows.map((row, i) => <TableRow key={row.id} className={i === 1 ? 'selected' : undefined}>
                            <TableCell>{row.supplier}</TableCell>
                            <TableCell>{row.rego}</TableCell>
                            <TableCell align="right">\${row.price}</TableCell>
                        </TableRow>)}
                </TableRowGroup>
            </Table>
        </>,
  play: async ({
    canvasElement,
    step
  }) => {
    const selectedCells = gridcells(canvasElement.querySelector<HTMLElement>('tr.selected')!);
    await step('the consumer background applies', async () => {
      for (const cell of selectedCells) {
        await expect(getComputedStyle(cell).backgroundColor).toBe(SELECTED_BACKGROUND);
      }
    });
    await step('the wash is confined to the component layer', async () => {
      const layersHoldingTheWash = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules)).filter((rule): rule is CSSLayerBlockRule => rule instanceof CSSLayerBlockRule).filter(layer => Array.from(layer.cssRules).some(rule => rule instanceof CSSStyleRule && rule.selectorText.includes(tableCellRoot) && rule.selectorText.includes(':hover'))).map(layer => layer.name);
      await expect(layersHoldingTheWash.length).toBeGreaterThan(0);
      await expect(Array.from(new Set(layersHoldingTheWash))).toEqual(['component']);
    });
  }
}`,...T.parameters?.docs?.source},description:{story:`Regression guard: a consumer's own cell background outranks the wash.

The wash sets \`background-color\` on the cell itself, replacing whatever the
cell already had — the old \`::before\` painted behind it and never did. A
selected or status row styled from an MFE stylesheet would therefore turn
gray on hover, because the row-wide selector is (0,6,1) and an ordinary
\`.selected > td\` is (0,1,1).

The fix is layer order, not specificity: the wash lives in \`component\`, and
unlayered consumer CSS beats every layer regardless of how specific either
side is.

The assertion checks the cascade rather than the painted hover state —
\`userEvent.hover\` dispatches pointer events but never triggers CSS \`:hover\`,
so hover paint cannot be read back in a play function. Hover the selected
row by hand to see it hold its colour.`,...T.parameters?.docs?.description}}};const N=["Standard","WithoutHover","Animated","StaggeredWithHover","HoverStaysWithinTable","ConsumerBackgroundBeatsWash"];export{g as Animated,T as ConsumerBackgroundBeatsWash,b as HoverStaysWithinTable,h as StaggeredWithHover,u as Standard,p as WithoutHover,N as __namedExportsOrder,O as default};
