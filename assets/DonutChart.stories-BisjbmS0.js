import{D as ve,r as f,L as ye,u as fe,c as ge,e as n,E as J,M as be,N as Q,B as xe}from"./iframe-BqRRH7-4.js";import{t as Te,p as Ee,s as ke,a as He,u as Ae,b as Ce,C as Le,c as Ne,d as Ie,f as Se,e as Be,g as C}from"./ChartTooltip-BgjV-Hoo.js";import{T as D}from"./Text-Dqt-92eI.js";import"./preload-helper-PPVm8Dsz.js";var Fe="var(--_1i0d8wc0)",_e="_1i0d8wc1",Re="_1i0d8wc2",Ve="_1i0d8wc3",De="_1i0d8wc4",$e="_1i0d8wc5",Me="_1i0d8wc6",ee="var(--_1i0d8wc7)",te="var(--_1i0d8wc8)",qe=ve({defaultClassName:"_1i0d8wc9",variantClassNames:{placement:{"bottom-end":"_1i0d8wca","bottom-start":"_1i0d8wcb","top-end":"_1i0d8wcc","top-start":"_1i0d8wcd"}},defaultVariants:{},compoundVariants:[]}),We="_1i0d8wce";const v=1,ae=.75,Ke=`${-v} ${-v} ${v*2} ${v*2}`,oe=["8","7","6","5"],Oe=.9,Pe=e=>{const s=Math.cos(e)>0,i=Math.sin(e)<0;return s?i?"top-start":"top-end":i?"bottom-start":"bottom-end"},_=({data:e,"aria-label":s,formatValue:i,formatPercent:o,totalLabel:h,emptyLabel:se,valueLabel:M,shareLabel:q,title:W,description:ne,titleAs:re="h2",hideLegend:R=!1,hideTooltip:ie=!1,className:le,testId:ce})=>{const{slices:he,marks:L,total:de,formattedTotal:w}=f.useMemo(()=>{const a=e.map(m=>Te(m.value)),r=Ee(a),d=ke(a),S=e.map((m,p)=>{const B=i(a[p]),F=o(d>0?a[p]/d:0),y=(r[p].startAngle+r[p].endAngle)/2;return{datum:m,value:B,share:F,path:He(r[p],ae,v),accessibleName:`${m.label}, ${B}, ${F}`,anchorX:(1+Math.sin(y))/2,anchorY:(1-Math.cos(y))/2,placement:Pe(y)}});return{slices:S,marks:S.filter((m,p)=>a[p]>0),total:d,formattedTotal:i(d)}},[e,i,o]),V=R||!ie,{activeIndex:N,focusedIndex:K,containerProps:ue,getItemProps:pe}=Ae(L.map(a=>a.datum.key),{hasTooltip:V}),c=N===null?null:L[N],O=f.useRef(null),me=a=>{const r=O.current?.getBoundingClientRect();if(!r||!c)return;a.style.removeProperty("transform"),Q(a,{[ee]:"0px",[te]:"0px"});const d=a.getBoundingClientRect(),{marginLeft:S,marginTop:m}=getComputedStyle(a),[p,B]=c.placement.split("-"),F=r.left+r.width*c.anchorX-(d.left-Number.parseFloat(S))-(B==="start"?d.width:0),y=r.top+r.height*c.anchorY-(d.top-Number.parseFloat(m))-(p==="top"?d.height:0);Q(a,{[ee]:`${F}px`,[te]:`${y}px`})},P=f.useRef(null);Ce(P,[c,V,R,M,q],{place:me});const U=f.useRef(null),[X,we]=f.useState({text:w,step:0}),I=X.text===w?X.step:0;ye(()=>{const a=U.current,r=a?.firstElementChild;if(!a||!r||I===oe.length-1)return;const d=a.clientWidth*(ae/v);r.getBoundingClientRect().width>d*Oe&&we({text:w,step:I+1})},[w,I]);const{Component:Y,componentProps:z}=fe({className:ge(_e,le),odComponent:"donut-chart",testId:ce}),G=W?n.createElement(Ie,{description:ne,title:W,titleAs:re}):null,Z=`${s}, ${h} ${w}`;if(de===0)return n.createElement(Y,{...z},G,n.createElement("div",{"aria-label":Z,className:We,role:"img"}),n.createElement(D,{align:"center",as:"p",color:"secondary",size:"3"},se));const j=K===null?null:L[K];return n.createElement(Y,{...z},G,n.createElement("div",{ref:O,className:Re},n.createElement("svg",{"aria-label":Z,className:Ve,role:"graphics-document",viewBox:Ke,...J({hasActive:N!==null}),...ue},L.map((a,r)=>n.createElement("path",{key:a.datum.key,"aria-label":a.accessibleName,className:De,d:a.path,fillRule:"evenodd",role:"graphics-symbol",style:be({[Fe]:a.datum.color}),...pe(r),...J({active:r===N})})),j?n.createElement("path",{"aria-hidden":!0,className:$e,d:j.path,fillRule:"evenodd"}):null),n.createElement("div",{ref:U,"aria-hidden":!0,className:Me},n.createElement(D,{size:oe[I],weight:"bold",color:"primary"},w),n.createElement(D,{size:"3",weight:"bold",color:"secondary"},h)),V&&c?n.createElement(Le,{ref:P,className:qe({placement:c.placement}),color:c.datum.color,rows:[{key:"value",label:M,value:c.value},{key:"share",label:q,value:c.share}],title:c.datum.label}):null),R?null:n.createElement(Ne,{activeKey:c?.datum.key,items:he.map(a=>({key:a.datum.key,label:a.datum.label,color:a.datum.color,detail:`${a.value} (${a.share})`})),layout:"vertical"}))};_.displayName="DonutChart";try{_.displayName="DonutChart",_.__docgenInfo={description:`A ring chart that shows the share of each category, with the total in the
centre and a legend with the value and the share of each slice. A tooltip
gives the details of the active slice. With \`hideLegend\`, only the ring
shows. \`hideTooltip\` removes the tooltip, but only when the legend shows.

The chart has three parts: a header with the \`title\`, the body with the
ring, and a footer with the legend or \`emptyLabel\`. Without \`title\` there is
no header. The chart has no border or card.

Hover or focus on a slice dims the other slices and their legend swatches.
The text does not dim. The chart is one tab stop: the arrow keys move between
the slices and Escape closes the tooltip.

The component has no fixed text, locale or currency. Give all text and the
formatters in props.`,displayName:"DonutChart",props:{data:{defaultValue:null,description:"The slices, clockwise from the 12 o'clock position.",name:"data",required:!0,type:{name:"DonutChartDatum<Key>[]"}},"aria-label":{defaultValue:null,description:`The accessible name of the chart. The chart adds the total, so a screen
reader hears, for example, "Spend by category, Total $26.4K".`,name:"aria-label",required:!0,type:{name:"string"}},formatValue:{defaultValue:null,description:`Formats the values in the centre, the legend, the tooltip and the screen
reader text, for example with a compact currency format.`,name:"formatValue",required:!0,type:{name:"ChartFormatter"}},formatPercent:{defaultValue:null,description:"Formats the share of a slice. The value is from 0 to 1, for example with `Intl.NumberFormat` and `style: 'percent'`.",name:"formatPercent",required:!0,type:{name:"ChartFormatter"}},totalLabel:{defaultValue:null,description:"The caption under the total in the centre.",name:"totalLabel",required:!0,type:{name:"string"}},emptyLabel:{defaultValue:null,description:"The text that shows in place of the chart when all values are 0.",name:"emptyLabel",required:!0,type:{name:"string"}},valueLabel:{defaultValue:null,description:`The label of the value row in the tooltip, for example "Spend". Without
a label, the row shows the value only.`,name:"valueLabel",required:!1,type:{name:"string"}},shareLabel:{defaultValue:null,description:`The label of the share row in the tooltip, for example "Share". Without
a label, the row shows the share only.`,name:"shareLabel",required:!1,type:{name:"string"}},hideLegend:{defaultValue:{value:"false"},description:"Hides the legend in the footer, so that only the ring shows.",name:"hideLegend",required:!1,type:{name:"boolean"}},hideTooltip:{defaultValue:{value:"false"},description:"Hides the tooltip. If `false`, hover or focus on a slice shows a tooltip\nwith the name, the value and the share of the slice. With `hideLegend`,\nthe tooltip always shows, because it is then the only text for the\nslices.",name:"hideTooltip",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional class names for the root element.",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The chart title, in the header above the chart.",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Text under the title, for example the period of the data.",name:"description",required:!1,type:{name:"string"}},titleAs:{defaultValue:{value:"h2"},description:`The heading element of the title. Use the level that fits the outline
of the page.`,name:"titleAs",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}const{expect:t,userEvent:l,within:$}=__STORYBOOK_MODULE_TEST__,Ue=`
\`DonutChart\` shows the share of each category in a ring, with the total in
the centre and a legend with the value and the share of each slice. Reach for
it when the parts of a whole matter more than the trend over time — if the
question is "how did this change?", use \`StackedBarChart\` instead.

### Usage

\`\`\`tsx
const currency = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    notation: 'compact',
    maximumFractionDigits: 1,
});
const percent = new Intl.NumberFormat('en-AU', { style: 'percent' });

<DonutChart
    title="Spend by category"
    description="Monthly"
    aria-label="Spend by category"
    data={[
        { key: 'maintenance', label: 'Maintenance', value: 11970, color: tokens.color.gamut.green['900'] },
        { key: 'fuel', label: 'Fuel', value: 10250, color: tokens.color.gamut.red['700'] },
        { key: 'tolls', label: 'Tolls', value: 4180, color: tokens.color.gamut.yellow['500'] },
    ]}
    formatValue={(value) => currency.format(value)}
    formatPercent={(value) => percent.format(value)}
    totalLabel="Total"
    emptyLabel="No spend data"
/>
\`\`\`

### You supply every string and every number format

> ⚠️ The component has **no fixed text, locale or currency**, and it never
> calls \`Intl\` for you. Every label is a prop, and \`formatValue\` and
> \`formatPercent\` do all the formatting.

The centre has room for a short value only, so give \`formatValue\` a compact
format (\`notation: 'compact'\`). The same formatter runs in the centre, the
legend, the tooltip and the screen reader text, so a long format breaks the
layout of the centre.

Give \`color\` as a token, for example \`tokens.color.gamut.green['900']\`, so
the slices follow the theme. Hard-coded hex values will not.

### Anatomy

\`\`\`
┌──────────────────────────────────┐
│ title / description              │  header — omitted without \`title\`
├──────────────────────────────────┤
│            ╭─────╮               │
│           │ $26.4K │             │  body — ring + total in the centre
│            ╰─────╯               │
├──────────────────────────────────┤
│ ● Maintenance   $12.0K (45%)     │  footer — legend, or \`emptyLabel\`
│ ● Fuel          $10.3K (39%)     │
└──────────────────────────────────┘
\`\`\`

The ring is a fixed 160px and the chart has **no border or card**. To put it
in a card, wrap it in a bordered container, for example a \`Box\`.

### Legend and tooltip

Hovering or focusing a slice dims the others and shows a tooltip with the
name, the value and the share. Two props turn the two readouts off.

| | Shows | Use when |
| --- | --- | --- |
| Default | Legend in the footer, tooltip on the active slice | The values matter and there is room |
| \`hideLegend\` | The ring and the tooltip alone | Space is tight, or the ring sits beside its own key |
| \`hideTooltip\` | The legend alone | The legend already answers it and the tooltip is noise |

\`hideTooltip\` is ignored under \`hideLegend\`: with neither, the slices
would have no text at all, so the tooltip always wins.

The tooltip labels its two rows with \`valueLabel\` and \`shareLabel\` (for
example "Spend" and "Share"). Leave them out and the rows show the numbers
alone.

### Keyboard and screen readers

The whole chart is **one tab stop**.

| Key | Does |
| --- | --- |
| <kbd>Tab</kbd> | Enters the chart at the last-used slice |
| <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> | Moves between slices, wrapping at the ends |
| <kbd>Home</kbd> / <kbd>End</kbd> | First / last slice |
| <kbd>Esc</kbd> | Dismisses the tooltip, until the next hover or focus |

Screen readers hear the chart name followed by the total (\`aria-label\` +
\`totalLabel\` + the formatted total), then each slice as "name, value, share".
The centre is hidden from them, so it is not read twice.

### Edge cases

- **Every value 0** — \`emptyLabel\` replaces the ring and the legend. The
  chart keeps its accessible name, so two empty charts are still tellable apart.
- **Negative, \`NaN\` or \`Infinity\`** — counts as 0. The slice is not drawn
  and takes no tab stop, but it stays in the legend. One bad number costs you
  one slice, not the chart.
- **One slice** — draws a complete ring at 100%.
`,Ze={title:"Components/Charts/Donut Chart",component:_,tags:["new"],parameters:{a11y:{test:"error"},docs:{description:{component:Ue}}},decorators:[e=>n.createElement(xe,{maxWidth:"fit-content"},n.createElement(e,null))],args:{data:C,title:"Spend by category",description:"Monthly","aria-label":"Spend by category",formatValue:Be,formatPercent:Se,totalLabel:"Total",emptyLabel:"No spend data",valueLabel:"Spend",shareLabel:"Share"},argTypes:{formatValue:{table:{disable:!0}},formatPercent:{table:{disable:!0}},className:{table:{disable:!0}},testId:{table:{disable:!0}}}},u=e=>e.querySelector("[data-chart-tooltip]"),g={},b={args:{title:void 0,description:void 0}},x={args:{data:C.filter(e=>e.key!=="fuel")}},T={args:{data:C.slice(0,1)}},E={args:{data:C.map(e=>({...e,value:0}))}},k={args:{hideLegend:!0},play:async({canvasElement:e,step:s})=>{const i=$(e),o=i.getAllByRole("graphics-symbol");await s("the legend does not show",async()=>{await t(i.queryAllByRole("listitem")).toHaveLength(0),await t(u(e)).toBeNull()}),await s("hover on a slice shows its tooltip",async()=>{await l.hover(o[1]);const h=u(e);await t(h).toHaveTextContent("Fuel"),await t(h).toHaveTextContent("$10.3K"),await t(h).toHaveTextContent("39%"),await l.unhover(o[1]),await t(u(e)).toBeNull()}),await s("keyboard focus shows the tooltip of the slice",async()=>{await l.tab(),await t(o[0]).toHaveFocus(),await t(u(e)).toHaveTextContent("Maintenance"),await l.keyboard("{Escape}"),await t(u(e)).toBeNull()}),await s("the chart returns to its default state",async()=>{await l.tab(),await t(o[0]).not.toHaveFocus()})}},H={tags:["skip-themes"],args:{hideTooltip:!0},play:async({canvasElement:e,step:s})=>{const i=$(e),[o]=i.getAllByRole("graphics-symbol");await s("hover on a slice shows no tooltip",async()=>{await l.hover(o),await t(o).toHaveAttribute("data-active"),await t(u(e)).toBeNull(),await l.unhover(o)}),await s("keyboard focus shows no tooltip",async()=>{await l.tab(),await t(o).toHaveFocus(),await t(o).toHaveAttribute("data-active"),await t(u(e)).toBeNull()}),await s("the chart returns to its default state",async()=>{await l.tab(),await t(o).not.toHaveFocus()})}},A={tags:["test","!autodocs","skip-themes"],play:async({canvasElement:e,step:s})=>{const i=$(e),o=i.getAllByRole("graphics-symbol"),h=i.getAllByRole("listitem");await s("each slice has a summary for screen readers",async()=>{await t(o).toHaveLength(C.length),await t(o[0]).toHaveAccessibleName("Maintenance, $12K, 45%")}),await s("Tab focuses the first slice, shows its tooltip and dims the others",async()=>{await l.tab(),await t(o[0]).toHaveFocus(),await t(o[0]).toHaveAttribute("data-active"),await t(u(e)).toHaveTextContent("Maintenance"),await t(h[0]).not.toHaveAttribute("data-dimmed"),await t(h[1]).toHaveAttribute("data-dimmed")}),await s("the arrow keys move between the slices",async()=>{await l.keyboard("{ArrowRight}"),await t(o[1]).toHaveFocus(),await t(u(e)).toHaveTextContent("Fuel"),await t(h[1]).not.toHaveAttribute("data-dimmed"),await l.keyboard("{ArrowLeft}{ArrowLeft}"),await t(o.at(-1)).toHaveFocus()}),await s("Escape closes the tooltip and removes the highlight",async()=>{await l.keyboard("{Escape}"),await t(u(e)).toBeNull(),await t(h[0]).not.toHaveAttribute("data-dimmed"),await t(o.at(-1)).toHaveFocus()}),await s("the chart returns to its default state",async()=>{await l.tab(),await t(o.at(-1)).not.toHaveFocus()})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source},description:{story:"Three categories from the design data, with the header from the design.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined
  }
}`,...b.parameters?.docs?.source},description:{story:"Without `title`, the chart has no header.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: expensesByCategory.filter(item => item.key !== 'fuel')
  }
}`,...x.parameters?.docs?.source},description:{story:"Two categories.",...x.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: expensesByCategory.slice(0, 1)
  }
}`,...T.parameters?.docs?.source},description:{story:"One category takes the full ring.",...T.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: expensesByCategory.map(item => ({
      ...item,
      value: 0
    }))
  }
}`,...E.parameters?.docs?.source},description:{story:"All values are 0: the chart shows `emptyLabel`.",...E.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    hideLegend: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const slices = canvas.getAllByRole('graphics-symbol');
    await step('the legend does not show', async () => {
      await expect(canvas.queryAllByRole('listitem')).toHaveLength(0);
      await expect(tooltipIn(canvasElement)).toBeNull();
    });
    await step('hover on a slice shows its tooltip', async () => {
      await userEvent.hover(slices[1]);
      const tooltip = tooltipIn(canvasElement);
      await expect(tooltip).toHaveTextContent('Fuel');
      await expect(tooltip).toHaveTextContent('$10.3K');
      await expect(tooltip).toHaveTextContent('39%');
      await userEvent.unhover(slices[1]);
      await expect(tooltipIn(canvasElement)).toBeNull();
    });
    await step('keyboard focus shows the tooltip of the slice', async () => {
      await userEvent.tab();
      await expect(slices[0]).toHaveFocus();
      await expect(tooltipIn(canvasElement)).toHaveTextContent('Maintenance');
      await userEvent.keyboard('{Escape}');
      await expect(tooltipIn(canvasElement)).toBeNull();
    });
    await step('the chart returns to its default state', async () => {
      await userEvent.tab();
      await expect(slices[0]).not.toHaveFocus();
    });
  }
}`,...k.parameters?.docs?.source},description:{story:`Only the ring. Hover or focus on a slice shows a tooltip with its name,
value and share. The tooltip goes away from the centre of the ring.`,...k.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['skip-themes'],
  args: {
    hideTooltip: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const [first] = canvas.getAllByRole('graphics-symbol');
    await step('hover on a slice shows no tooltip', async () => {
      await userEvent.hover(first);
      await expect(first).toHaveAttribute('data-active');
      await expect(tooltipIn(canvasElement)).toBeNull();
      await userEvent.unhover(first);
    });
    await step('keyboard focus shows no tooltip', async () => {
      await userEvent.tab();
      await expect(first).toHaveFocus();
      await expect(first).toHaveAttribute('data-active');
      await expect(tooltipIn(canvasElement)).toBeNull();
    });
    await step('the chart returns to its default state', async () => {
      await userEvent.tab();
      await expect(first).not.toHaveFocus();
    });
  }
}`,...H.parameters?.docs?.source},description:{story:"Without the tooltip. Hover or focus on a slice dims the other slices and\ntheir legend swatches, and the legend gives the details. With `hideLegend`,\nthe tooltip always shows.",...H.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const slices = canvas.getAllByRole('graphics-symbol');
    const legendItems = canvas.getAllByRole('listitem');
    await step('each slice has a summary for screen readers', async () => {
      await expect(slices).toHaveLength(expensesByCategory.length);
      await expect(slices[0]).toHaveAccessibleName('Maintenance, $12K, 45%');
    });
    await step('Tab focuses the first slice, shows its tooltip and dims the others', async () => {
      await userEvent.tab();
      await expect(slices[0]).toHaveFocus();
      await expect(slices[0]).toHaveAttribute('data-active');
      await expect(tooltipIn(canvasElement)).toHaveTextContent('Maintenance');
      await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
      await expect(legendItems[1]).toHaveAttribute('data-dimmed');
    });
    await step('the arrow keys move between the slices', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await expect(slices[1]).toHaveFocus();
      await expect(tooltipIn(canvasElement)).toHaveTextContent('Fuel');
      await expect(legendItems[1]).not.toHaveAttribute('data-dimmed');
      await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
      await expect(slices.at(-1)).toHaveFocus();
    });
    await step('Escape closes the tooltip and removes the highlight', async () => {
      await userEvent.keyboard('{Escape}');
      await expect(tooltipIn(canvasElement)).toBeNull();
      await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
      await expect(slices.at(-1)).toHaveFocus();
    });
    await step('the chart returns to its default state', async () => {
      await userEvent.tab();
      await expect(slices.at(-1)).not.toHaveFocus();
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`Keyboard and pointer behaviour. Tab moves focus to the first slice and the
arrow keys move between the slices. The other slices and their legend
swatches dim; the text does not dim. The tooltip shows the details of the
active slice.`,...A.parameters?.docs?.description}}};const je=["Standard","WithoutHeader","TwoSlices","OneSlice","Empty","WithoutLegend","WithoutTooltip","Interaction"];export{E as Empty,A as Interaction,T as OneSlice,g as Standard,x as TwoSlices,b as WithoutHeader,k as WithoutLegend,H as WithoutTooltip,je as __namedExportsOrder,Ze as default};
