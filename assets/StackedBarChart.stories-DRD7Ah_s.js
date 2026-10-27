import{t as ee,s as ae,n as te,u as se,b as oe,h as x,C as re,c as ne,d as ie,e as le,i as ce,j as K,w as N}from"./ChartTooltip-BgjV-Hoo.js";import{D as $,r as H,u as me,c as k,e as s,M as T,Q as B,E as q}from"./iframe-BqRRH7-4.js";import"./Text-Dqt-92eI.js";import"./preload-helper-PPVm8Dsz.js";var P="var(--_82mwzw0)",de="var(--_82mwzw1)",ue="var(--_82mwzw2)",he="var(--_82mwzw3)",pe="_82mwzw4",we="_82mwzw5",fe="_82mwzw6",ye="_82mwzw7",ve="_82mwzw8",be="_82mwzw9",ge=$({defaultClassName:"_82mwzwa",variantClassNames:{baseline:{true:"_82mwzwb",false:"_82mwzwc"}},defaultVariants:{},compoundVariants:[]}),xe="_82mwzwd",ke="_82mwzwe",Te="_82mwzwf",Ee="_82mwzwg",Ne="_82mwzwh",ze="_82mwzwi",_e=$({defaultClassName:"_82mwzwj",variantClassNames:{side:{end:"_82mwzwk",start:"_82mwzwl"}},defaultVariants:{},compoundVariants:[]}),Fe="_82mwzwm";const E=({data:r,series:o,"aria-label":b,formatValue:e,formatTick:z=e,totalLabel:_,tickCount:C=3,title:L,description:W,titleAs:O="h2",hideLegend:U=!1,className:Y,testId:M})=>{const{columns:g,max:F,ticks:S}=H.useMemo(()=>{const a=r.map(l=>{const n=o.map(u=>ee(l.values[u.key]??0)),m=ae(n),R=n.map(u=>e(u)),D=e(m);return{datum:l,values:n,total:m,formattedValues:R,formattedTotal:D,accessibleName:[l.label,`${_} ${D}`,...o.map((u,Z)=>`${u.label} ${R[Z]}`)].join(", ")}}),c=te(a.reduce((l,n)=>Math.max(l,n.total),0),C);return{columns:a,max:c.max,ticks:c.ticks}},[r,o,e,_,C]),{activeIndex:A,containerProps:G,getItemProps:j}=se(g.map(a=>a.datum.id),{hasTooltip:!0}),V=H.useRef(null),I=H.useRef(null);oe(I,[A,g],{areaRef:V});const{Component:Q,componentProps:J}=me({className:k(pe,Y),odComponent:"stacked-bar-chart",testId:M}),X=L?s.createElement(ie,{description:W,title:L,titleAs:O}):null;return s.createElement(Q,{...J},X,s.createElement("div",{ref:V,className:we},s.createElement("div",{"aria-hidden":!0,className:be},S.map(a=>s.createElement("span",{key:a,className:ge({baseline:a===0}),style:T({[P]:x(a,F)})}))),s.createElement("div",{"aria-hidden":!0,className:k(fe,B({size:"2",color:"secondary"}))},S.map(a=>s.createElement("span",{key:a,className:ye,style:T({[P]:x(a,F)})},z(a)))),s.createElement("div",{"aria-label":b,className:ve,role:"graphics-document",...q({hasActive:A!==null}),...G},g.map((a,c)=>{const l=c===A;return s.createElement("div",{key:a.datum.id,"aria-label":a.accessibleName,className:xe,role:"graphics-symbol",style:T({[de]:x(a.total,F)}),...j(c),...q({active:l})},s.createElement("div",{className:ke},s.createElement("span",{"aria-hidden":!0,className:k(Ne,B({size:"2",weight:"semiBold",color:"secondary"}))},a.formattedTotal),s.createElement("span",{"aria-hidden":!0,className:Te},o.map((n,m)=>s.createElement("span",{key:n.key,className:Ee,style:T({[he]:n.color,[ue]:x(a.values[m],a.total)})}))),l?s.createElement("span",{className:_e({side:c<g.length/2?"end":"start"})},s.createElement(re,{ref:I,className:Fe,title:a.datum.label,rows:o.map((n,m)=>({key:n.key,label:n.label,color:n.color,value:a.formattedValues[m]})).reverse(),total:{label:_,value:a.formattedTotal}})):null),s.createElement("span",{"aria-hidden":!0,className:k(ze,B(l?{size:"2",weight:"bold",color:"primary"}:{size:"2",color:"secondary"}))},a.datum.label))}))),U?null:s.createElement(ne,{items:o,layout:"horizontal"}))};E.displayName="StackedBarChart";try{E.displayName="StackedBarChart",E.__docgenInfo={description:`A column chart that stacks the values of each series, for example spend by
category for each week. Each column shows its total above it, and the Y axis
uses nice steps from 0.

The chart has three parts: a header with the \`title\`, the body with the
columns, and a footer with the legend. Without \`title\` there is no header,
and with \`hideLegend\` there is no footer. The chart has no border or card.

Hover or focus on a column shows a tooltip with each series value and the
total, and dims the bars of the other columns. The text does not dim. The
chart is one tab stop: the arrow keys move between the columns and Escape
closes the tooltip.

The component has no fixed text, locale or currency. Give all text and the
formatters in props. The width follows the container; the height follows
the container when it has a height, with a minimum.`,displayName:"StackedBarChart",props:{data:{defaultValue:null,description:"The columns, in display order.",name:"data",required:!0,type:{name:"StackedBarChartDatum<Key>[]"}},series:{defaultValue:null,description:"The stacked series. The first series is at the bottom of each column.",name:"series",required:!0,type:{name:"ChartSeries<Key>[]"}},"aria-label":{defaultValue:null,description:"The accessible name of the chart.",name:"aria-label",required:!0,type:{name:"string"}},formatValue:{defaultValue:null,description:"Formats the values in the total labels, the tooltip and the screen\nreader text, for example with `Intl.NumberFormat`.",name:"formatValue",required:!0,type:{name:"ChartFormatter"}},formatTick:{defaultValue:{value:"formatValue"},description:"Formats the Y axis ticks, for example with a compact currency format.",name:"formatTick",required:!1,type:{name:"ChartFormatter"}},totalLabel:{defaultValue:null,description:"The label of the total, in the tooltip and the screen reader text.",name:"totalLabel",required:!0,type:{name:"string"}},tickCount:{defaultValue:{value:"3"},description:`The approximate number of steps on the Y axis. The axis uses steps of 1,
2, 2.5 or 5 times a power of 10, so the exact number can change.`,name:"tickCount",required:!1,type:{name:"number"}},hideLegend:{defaultValue:{value:"false"},description:`Hides the legend in the footer. The column tooltip still gives the name
of each series.`,name:"hideLegend",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional class names for the root element.",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The chart title, in the header above the chart.",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Text under the title, for example the period of the data.",name:"description",required:!1,type:{name:"string"}},titleAs:{defaultValue:{value:"h2"},description:`The heading element of the title. Use the level that fits the outline
of the page.`,name:"titleAs",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}const{expect:t,userEvent:i,within:Ae}=__STORYBOOK_MODULE_TEST__,He="\n`StackedBarChart` shows the values of each series stacked in one column for\neach period, for example the spend by category for each week.\n\nThe component has **no fixed text, locale or currency**. Give the translated\ntext in props (`aria-label`, `totalLabel`, the series and column\nlabels), and give the formatters (`formatValue`, `formatTick`). Use\n`Intl.NumberFormat` for the values and `Intl.DateTimeFormat#formatRange` for\ndate ranges.\n\nGive the series colours as tokens, for example\n`tokens.color.gamut.green['900']`, so that they follow the theme.\n\nThe width follows the container. The height follows the container when the\ncontainer has a height, with a minimum.\n\nThe chart has three parts, as a modal does: a header with `title` and\n`description`, the body with the columns, and a footer with the legend.\nWithout `title` there is no header, and with `hideLegend` there is no\nfooter. The chart has no border or card. To show it in a card, put it in a\ncontainer with a border, for example a `Box`.\n\nScreen readers read the name of the chart, and the name of each column with\nits total and the value of each series.\n",Ve={title:"Components/Charts/Stacked Bar Chart",component:E,tags:["new"],parameters:{a11y:{test:"error"},docs:{description:{component:He}}},args:{data:N,series:K,"aria-label":"Weekly expenses by category",formatValue:ce,formatTick:le,totalLabel:"Total"},argTypes:{tickCount:{control:{type:"number",min:1,max:10}},formatValue:{table:{disable:!0}},formatTick:{table:{disable:!0}},className:{table:{disable:!0}},testId:{table:{disable:!0}}}},d=r=>r.querySelector("[data-chart-tooltip]"),h={},p={args:{title:"Expenses",description:"Weekly"}},w={args:{hideLegend:!0}},f={args:{series:K.map(r=>({...r,label:{maintenance:"Serwis",fuel:"Paliwo",tolls:"Opłaty"}[r.key]})),data:N.map((r,o)=>({...r,label:["1–7 sie","8–14 sie","15–21 sie","22–28 sie","29 sie – 4 wrz","5–11 wrz","12–18 wrz","19–23 wrz"][o]})),formatValue:new Intl.NumberFormat("pl-PL",{style:"currency",currency:"AUD",maximumFractionDigits:0}).format,formatTick:new Intl.NumberFormat("pl-PL",{style:"currency",currency:"AUD",notation:"compact",maximumFractionDigits:1}).format,totalLabel:"Razem","aria-label":"Wydatki tygodniowe według kategorii"}},y={args:{data:N.slice(0,3)}},v={tags:["test","!autodocs","skip-themes"],play:async({canvasElement:r,step:o})=>{const b=Ae(r),e=b.getAllByRole("graphics-symbol");await o("each column has a summary for screen readers",async()=>{await t(e).toHaveLength(N.length),await t(e[4]).toHaveAccessibleName("29 Aug – 4 Sep, Total $6,220, Maintenance $3,560, Fuel $1,900, Tolls $760")}),await o("the Y axis uses nice steps",async()=>{for(const z of["$0","$2.5K","$5K","$7.5K"])await t(b.getAllByText(z)[0]).toBeVisible()}),await o("Tab focuses the first column and shows its tooltip",async()=>{await i.tab(),await t(e[0]).toHaveFocus(),await t(d(e[0])).not.toBeNull()}),await o("the arrow keys move between the columns and wrap",async()=>{await i.keyboard("{ArrowRight}"),await t(e[1]).toHaveFocus(),await t(d(e[1])).not.toBeNull(),await t(d(e[0])).toBeNull(),await i.keyboard("{End}"),await t(e.at(-1)).toHaveFocus(),await i.keyboard("{ArrowRight}"),await t(e[0]).toHaveFocus(),await i.keyboard("{ArrowLeft}"),await t(e.at(-1)).toHaveFocus(),await i.keyboard("{Home}"),await t(e[0]).toHaveFocus()}),await o("Escape closes the tooltip and keeps focus",async()=>{await i.keyboard("{Escape}"),await t(d(e[0])).toBeNull(),await t(e[0]).toHaveFocus()}),await o("hover shows the tooltip of the hovered column",async()=>{await i.hover(e[4]),await t(d(e[4])).not.toBeNull(),await t(e[4]).toHaveAttribute("data-active"),await t(e[3]).not.toHaveAttribute("data-active")}),await o("the chart returns to its default state",async()=>{await i.unhover(e[4]),await i.tab(),await t(d(r)).toBeNull()})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source},description:{story:`Eight weeks of expenses from the design. The Y axis uses nice steps: the
largest column is $6,220, so the axis goes to $7.5K in steps of $2.5K.`,...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Expenses',
    description: 'Weekly'
  }
}`,...p.parameters?.docs?.source},description:{story:"A header with a title and a description.",...p.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    hideLegend: true
  }
}`,...w.parameters?.docs?.source},description:{story:"No legend. The column tooltip still gives the name of each series.",...w.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    series: expenseSeries.map(item => ({
      ...item,
      label: {
        maintenance: 'Serwis',
        fuel: 'Paliwo',
        tolls: 'Opłaty'
      }[item.key]
    })),
    data: weeklyExpenses.map((datum, index) => ({
      ...datum,
      label: ['1–7 sie', '8–14 sie', '15–21 sie', '22–28 sie', '29 sie – 4 wrz', '5–11 wrz', '12–18 wrz', '19–23 wrz'][index]
    })),
    formatValue: new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0
    }).format,
    formatTick: new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'AUD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format,
    totalLabel: 'Razem',
    'aria-label': 'Wydatki tygodniowe według kategorii'
  }
}`,...f.parameters?.docs?.source},description:{story:`The Y axis column is as wide as the widest tick label, so longer formats
from other locales fit without a fixed margin.`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: weeklyExpenses.slice(0, 3)
  }
}`,...y.parameters?.docs?.source},description:{story:"Each column fills the band up to 64px, so a few periods still read as columns.",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const columns = canvas.getAllByRole('graphics-symbol');
    await step('each column has a summary for screen readers', async () => {
      await expect(columns).toHaveLength(weeklyExpenses.length);
      await expect(columns[4]).toHaveAccessibleName('29 Aug – 4 Sep, Total $6,220, Maintenance $3,560, Fuel $1,900, Tolls $760');
    });
    await step('the Y axis uses nice steps', async () => {
      for (const tick of ['$0', '$2.5K', '$5K', '$7.5K']) {
        await expect(canvas.getAllByText(tick)[0]).toBeVisible();
      }
    });
    await step('Tab focuses the first column and shows its tooltip', async () => {
      await userEvent.tab();
      await expect(columns[0]).toHaveFocus();
      await expect(tooltipIn(columns[0])).not.toBeNull();
    });
    await step('the arrow keys move between the columns and wrap', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await expect(columns[1]).toHaveFocus();
      await expect(tooltipIn(columns[1])).not.toBeNull();
      await expect(tooltipIn(columns[0])).toBeNull();
      await userEvent.keyboard('{End}');
      await expect(columns.at(-1)).toHaveFocus();
      await userEvent.keyboard('{ArrowRight}');
      await expect(columns[0]).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      await expect(columns.at(-1)).toHaveFocus();
      await userEvent.keyboard('{Home}');
      await expect(columns[0]).toHaveFocus();
    });
    await step('Escape closes the tooltip and keeps focus', async () => {
      await userEvent.keyboard('{Escape}');
      await expect(tooltipIn(columns[0])).toBeNull();
      await expect(columns[0]).toHaveFocus();
    });
    await step('hover shows the tooltip of the hovered column', async () => {
      await userEvent.hover(columns[4]);
      await expect(tooltipIn(columns[4])).not.toBeNull();
      await expect(columns[4]).toHaveAttribute('data-active');
      await expect(columns[3]).not.toHaveAttribute('data-active');
    });
    await step('the chart returns to its default state', async () => {
      await userEvent.unhover(columns[4]);
      await userEvent.tab();
      await expect(tooltipIn(canvasElement)).toBeNull();
    });
  }
}`,...v.parameters?.docs?.source},description:{story:`Keyboard and pointer behaviour. Tab moves focus to the first column, the
arrow keys move between the columns and wrap at the ends, and Escape closes
the tooltip. Hover shows the tooltip and dims the bars of the other columns.`,...v.parameters?.docs?.description}}};const Ie=["Standard","WithHeader","WithoutLegend","OtherLocale","FewPeriods","Interaction"];export{y as FewPeriods,v as Interaction,f as OtherLocale,h as Standard,p as WithHeader,w as WithoutLegend,Ie as __namedExportsOrder,Ve as default};
