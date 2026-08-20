import{D as V,r as se,u as A,e as t,c as re,S as B,B as G}from"./iframe-DGCWEvN6.js";import{F as I}from"./FlexInline-tapVR-tM.js";import{T as ie}from"./Text-ao7EXZo6.js";import{u as U,I as P}from"./Icon-72km-RG4.js";import{I as le}from"./PlusIcon-BQxku1Qd.js";import{I as ce}from"./XIcon-DS_Qaa0Q.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-ReQCT27X.js";import"./resolveResponsiveProps-Bwlb5skK.js";var de=V({defaultClassName:"_1gngjae0",variantClassNames:{variant:{filter:"_1gngjae1",add:"_1gngjae2"},selected:{true:"_1gngjae3",false:"_1gngjae4"},interactive:{true:"_1gngjae5",false:"_1gngjae6"}},defaultVariants:{variant:"filter",selected:!1,interactive:!1},compoundVariants:[[{variant:"filter",interactive:!0},"_1gngjae7"],[{variant:"add",interactive:!0},"_1gngjae8"],[{variant:"filter",selected:!0},"_1gngjae9"]]}),W=V({defaultClassName:"_1gngjaea",variantClassNames:{withRemove:{true:"_1gngjaeb",false:"_1gngjaec"}},defaultVariants:{withRemove:!1},compoundVariants:[]}),F="_1gngjaed",O="_1gngjaee",pe="_1gngjaef",Q="_1gngjaeg",he="_1gngjaeh",ue=V({defaultClassName:"_1gngjaei",variantClassNames:{selected:{true:"_1gngjaej",false:"_1gngjaek"}},defaultVariants:{selected:!1},compoundVariants:[]});const a=se.forwardRef(({type:e="select",label:n,value:o,operator:s,selected:d=!1,pressed:p,expanded:i,onClick:l,onRemove:u,removeLabel:C,className:$,testId:z,"aria-haspopup":K,..._},Y)=>{const m=e==="add",D=!m&&d,y=!m&&typeof u=="function",J=typeof l=="function"||y;U(!m||typeof l=="function",'FilterChip: an "add" chip needs an onClick — without one it renders as static text that still looks like a button.'),U(typeof l=="function"||i===void 0&&p===void 0,'FilterChip: "expanded" and "pressed" describe the chip body, which is only a button when onClick is supplied. Without one they are dropped.');const X=[n.replace(/:\s*$/,""),s,o].filter(Boolean).join(" "),Z={"aria-expanded":i,"aria-haspopup":K??(i===void 0?void 0:!0),"aria-pressed":m?void 0:p},T=typeof l=="function",L=T?{...Z,onClick:l,ref:Y,type:"button"}:{},j=T?"button":"span",ee=y?"div":j,{Component:H,componentProps:N}=A({as:ee,className:[de({variant:m?"add":"filter",selected:D,interactive:J}),!y&&W(),!y&&T&&F,$],odComponent:"filter-chip",testId:z,...y?{}:{..._,...L}}),{Component:te,componentProps:ae}=A({as:j,className:[W({withRemove:!0}),O,T&&F],..._,...L}),{Component:ne,componentProps:oe}=A({as:"button",className:[F,O,pe],"aria-label":C??`Remove ${X} filter`,onClick:u,type:"button"}),q=t.createElement(t.Fragment,null,m&&t.createElement(P,{icon:le,size:"small"}),t.createElement("span",{className:re(Q,(e==="select"||e==="numeric")&&ue({selected:D}))},n),e==="numeric"&&s?t.createElement("span",{className:Q},s):null,(e==="select"||e==="numeric")&&o?t.createElement("span",{className:he,title:o},o):null);return y?t.createElement(H,{...N},t.createElement(te,{...ae},q),t.createElement(ne,{...oe},t.createElement(P,{icon:ce,size:"small"}))):t.createElement(H,{...N},q)});a.displayName="FilterChip";try{a.displayName="FilterChip",a.__docgenInfo={description:"A filter chip represents one active filter in a filter bar. The body opens an\neditor for the filter's value and the trailing `×` clears it.\n\nDistinct from `Badge`, which is a static, non-interactive label.\n\nThe forwarded `ref` lands on the chip body, which is what a `Popover` anchors\nto. It is attached only when the body is a button — that is, when `onClick` is\nsupplied. A chip without one has an inert `<span>` body and receives no ref,\nwhether or not it has a `×`.\n\nRemoval is by the `×` button only — the WAI-ARIA APG chip pattern also removes\na focused chip on `Backspace`/`Delete`, which this component does not\nimplement.",displayName:"FilterChip",props:{type:{defaultValue:{value:"select"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"add"'},{value:'"numeric"'},{value:'"simple"'}]}},value:{defaultValue:null,description:"The chosen value.",name:"value",required:!1,type:{name:"string"}},operator:{defaultValue:null,description:"The comparison word, e.g. `over`.",name:"operator",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The category name, or the chip's only text for `simple` and `add`.",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Override class name with additional styles",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Reflects the persistent chosen state as an inverted surface. Purely\nvisual — the chip's own text is what tells a screen reader which filter is\napplied. Use `pressed` if the chip is a toggle.",name:"selected",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Marks the chip as an on/off toggle and reports `aria-pressed`. Only set\nthis when clicking the chip applies and unapplies the filter in place; a\nchip whose body opens an editor is not a toggle and must leave it unset.",name:"pressed",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"Whether the popover or dropdown this chip controls is open. When\nsupplied the chip is exposed as a disclosure rather than a toggle, and\n`aria-haspopup` is set unless you specify it yourself. Pair it with\n`aria-controls` and the forwarded `ref`, which `Popover` needs to anchor\nitself to the chip.",name:"expanded",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Activates the chip body. Omit to render the chip non-interactively.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onRemove:{defaultValue:null,description:"Removes the filter. Supplying this renders the trailing `×` button.",name:"onRemove",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},removeLabel:{defaultValue:null,description:"Accessible name for the `×` button. Defaults to naming the filter and its\nvalue — `Remove State QLD filter` — so that two chips from the same\ncategory are distinguishable. Any trailing colon is stripped.",name:"removeLabel",required:!1,type:{name:"string"}}}}}catch{}const{expect:r,fn:M}=__STORYBOOK_MODULE_TEST__,S="2",me=`
A filter chip shows one filter the user has already applied. Clicking the body
opens an editor for that filter's value, and the trailing \`×\` clears it.

> ⚠️ **A chip is not a label.** If the user cannot change it or clear it, it is
> not a filter. Reach for [Badge](/docs/content-badge--docs) instead.

## Choosing a type

| \`type\` | Shows | Use it for | Example |
| --- | --- | --- | --- |
| \`select\` *(default)* | category and value | A filter with one chosen value | Vehicle type: Truck |
| \`numeric\` | category, operator and value | A comparison the user set up | Usage (km): over 100,000 km |
| \`simple\` | a single label | A filter that is either on or off | Serviced |
| \`add\` | dashed pill with a \`+\` | The button that opens the filter picker | + Add Filter |

An \`add\` chip does not hold a filter, so it takes no value, no state and nothing
to remove. The four types are a discriminated union, so a combination that makes
no sense will not compile.

## Anatomy

A pill with a 1px border and a fully rounded radius. From left to right: a \`+\`
icon on \`add\` chips, the category label in secondary text, an operator if there
is one, the value in primary text, then the \`×\` button. Text is 16px regular,
and nothing is ever bold, including when the chip is selected.

Only the value truncates. The category and operator keep their width so you can
still tell which filter it is, and the full value stays in a \`title\` attribute.
Let it truncate rather than shortening the text yourself.

## What the handlers decide

There is no \`interactive\` prop. What the chip becomes depends on which handlers
you give it:

| \`onClick\` | \`onRemove\` | You get |
| --- | --- | --- |
| yes | yes | The usual chip: a body you can click and a \`×\` that clears it |
| yes | no | Clickable, with nothing to clear |
| no | yes | The body is plain text and only the \`×\` works |
| no | no | Static text, nothing focusable |

Two actions cannot nest inside one button, so a chip with a \`×\` is a container
holding a body button and a remove button side by side.

## States

There are four: default, hover, focus and selected.

Hover follows whichever button the pointer is over rather than the whole pill.
A chip with only a \`×\` therefore lights up over the \`×\` and not over its label,
so it never suggests a click the body cannot handle.

Focus rings the whole pill rather than the button inside it, so a removable chip
does not draw an outline through its own fill. Tab to a chip in any story to see
it. There is no separate Focus story: the ring needs genuine keyboard focus, and
a story cannot fake that — synthetic key events do not put the browser into
keyboard mode, so \`:focus-visible\` never matches and nothing draws.

The ring appears for keyboard focus only, never on a mouse click, which is why
the styles key off \`:focus-visible\` rather than \`:focus-within\`. The border
swaps to the same colour at the same time, so the two never disagree.

Focus draws in \`color.info.foreground\` rather than the shared \`color.focus.ring\`,
which still resolves green in some themes. This component is the first to move to
the DS-2026 focus colour; the shared token follows later, since changing it shifts
the ring on every component at once.

There is no disabled state. Filters are added, edited or removed. If a filter
does not apply right now, leave it out of the bar.

## Do and don't

Let a full bar wrap onto a second line. Do not make it scroll sideways or stack
into a column.

Put a filter count next to the bar if you need one, not on the chip itself.

Use \`selected\` for a filter that is currently applied. Only reach for \`pressed\`
when clicking the chip switches the filter on and off in place. A chip that opens
an editor is not a toggle, and announcing it as one is misleading.

## Accessibility

The \`×\` names itself from the filter and its value, so you get
*"Remove State QLD filter"*. That keeps two chips from the same category apart
when a screen reader lists the buttons. Pass \`removeLabel\` if the generated name
reads badly.

Use \`expanded\` when the chip owns a popover. It sets \`aria-expanded\` and
\`aria-haspopup\`, and you should pair it with \`aria-controls\` and the forwarded
\`ref\`, which is what \`Popover\` anchors to. \`pressed\` is the only prop that sets
\`aria-pressed\`; \`selected\` on its own is purely visual.

Both of these describe the chip body, which is only a button when you pass
\`onClick\`. Without one they are dropped and the component warns you.

The \`×\` is the only way to remove a chip. The WAI-ARIA pattern also clears a
focused chip on Backspace or Delete, which is not built yet.
`,Ee={title:"Components/FilterChip",component:a,tags:["new"],parameters:{docs:{description:{component:me}}},args:{label:"Vehicle type:",value:"Truck",onClick:M(),onRemove:M()},argTypes:{type:{control:"select",options:["select","numeric","simple","add"]},operator:{if:{arg:"type",eq:"numeric"}},selected:{if:{arg:"type",neq:"add"}},pressed:{if:{arg:"type",neq:"add"}},expanded:{if:{arg:"type",neq:"add"}},onRemove:{if:{arg:"type",neq:"add"},table:{category:"Events"}},removeLabel:{if:{arg:"type",neq:"add"}},onClick:{table:{category:"Events"}},className:{table:{disable:!0}},testId:{table:{disable:!0}}}},c=({onClick:e,onRemove:n})=>({onClick:e,onRemove:n}),h=({caption:e,children:n})=>t.createElement(B,{space:"2"},t.createElement(ie,{size:"2",color:"secondary"},e),t.createElement(I,{justify:"center",gap:S},n)),x={},v={render:e=>t.createElement(B,{space:"4"},t.createElement(h,{caption:"Default"},t.createElement(a,{...c(e),type:"select",label:"Vehicle type:",value:"Truck"}),t.createElement(a,{...c(e),type:"numeric",label:"Usage (km):",operator:"over",value:"100,000 km"}),t.createElement(a,{...c(e),type:"simple",label:"Serviced"}),t.createElement(a,{type:"add",label:"Add Filter",onClick:e.onClick??(()=>{})})),t.createElement(h,{caption:"Selected (no add chip, it has no selected state)"},t.createElement(a,{...c(e),type:"select",label:"Vehicle type:",value:"Truck",selected:!0}),t.createElement(a,{...c(e),type:"numeric",label:"Usage (km):",operator:"over",value:"100,000 km",selected:!0}),t.createElement(a,{...c(e),type:"simple",label:"Serviced",selected:!0})))},g={render:e=>t.createElement(B,{space:"4"},t.createElement(h,{caption:"onClick and onRemove: click to edit, × to clear"},t.createElement(a,{...c(e),label:"Vehicle type:",value:"Truck"})),t.createElement(h,{caption:"onClick only: clickable, nothing to clear"},t.createElement(a,{onClick:e.onClick,label:"State:",value:"QLD"})),t.createElement(h,{caption:"onRemove only: the body is plain text"},t.createElement(a,{onRemove:e.onRemove,label:"Usage (km):",value:"100,000 km"})),t.createElement(h,{caption:"Neither: static text, nothing focusable"},t.createElement(a,{label:"Fuel:",value:"Diesel"}))),play:async({canvas:e,step:n})=>{await n("makes the body a button only with an onClick",async()=>{await r(e.getAllByRole("button",{name:/State/})[0]).toBeInTheDocument()}),await n("leaves a remove-only body outside any button",async()=>{const o=e.getAllByText("Usage (km):")[0];await r(o.closest("button")).toBeNull(),await r(e.getAllByRole("button",{name:/^Remove Usage/})[0]).toBeInTheDocument()}),await n("renders no buttons at all without handlers",async()=>{await r(e.queryAllByRole("button",{name:/Fuel/})).toHaveLength(0)})}},E=[{id:"vehicle",label:"Vehicle type:",value:"Truck"},{id:"usage",label:"Usage (km):",operator:"over",value:"100,000 km"},{id:"state",label:"State:",value:"QLD"}],ye=({onClick:e,onRemove:n})=>{const[o,s]=t.useState(E),d=i=>s(l=>l.filter(u=>u.id!==i)),p=i=>l=>{d(i),n?.(l)};return t.createElement(I,{justify:"center",gap:S},o.map(({id:i,label:l,operator:u,value:C})=>u?t.createElement(a,{key:i,type:"numeric",label:l,operator:u,value:C,onClick:e,onRemove:p(i)}):t.createElement(a,{key:i,label:l,value:C,onClick:e,onRemove:p(i)})),t.createElement(a,{type:"add",label:o.length>0?"Add Filter":"Restore filters",onClick:()=>s(E)}))},b={tags:["skip-themes"],render:e=>t.createElement(ye,{onClick:e.onClick,onRemove:e.onRemove}),play:async({canvas:e,userEvent:n,step:o})=>{const s=()=>e.queryAllByRole("button",{name:/^Remove /});await o("starts with a remove button per filter",async()=>{await r(s()).toHaveLength(E.length)}),await o("removing a filter takes its chip away",async()=>{await n.click(e.getAllByRole("button",{name:"Remove Vehicle type Truck filter"})[0]),await r(e.queryByRole("button",{name:"Remove Vehicle type Truck filter"})).not.toBeInTheDocument(),await r(s()).toHaveLength(E.length-1)})}},f={decorators:[e=>t.createElement(G,{maxWidth:"small"},e())],render:e=>t.createElement(I,{justify:"center",gap:S},t.createElement(a,{...c(e),type:"select",label:"Vehicle type:",value:"Truck",selected:!0}),t.createElement(a,{...c(e),type:"numeric",label:"Usage (km):",operator:"over",value:"100,000 km"}),t.createElement(a,{...c(e),type:"simple",label:"Serviced"}),t.createElement(a,{...c(e),type:"select",label:"State:",value:"QLD"}),t.createElement(a,{type:"add",label:"Add Filter",onClick:e.onClick??(()=>{})}))},w={decorators:[e=>t.createElement(G,{maxWidth:"small"},e())],args:{type:"numeric",label:"Usage (km):",operator:"over",value:"100,000 km since the last major logbook service was carried out"}},k={render:e=>t.createElement(B,{space:"4"},t.createElement(h,{caption:"expanded: a chip that owns a popover"},t.createElement(a,{...c(e),label:"Vehicle type:",value:"Truck",expanded:!0})),t.createElement(h,{caption:"pressed: a chip that toggles its filter in place"},t.createElement(a,{onClick:e.onClick,type:"simple",label:"Serviced",pressed:!0,selected:!0})))},R={tags:["!autodocs","skip-themes"],args:{removeLabel:"Remove vehicle type filter"},play:async({args:e,canvas:n,userEvent:o,step:s})=>{const d=n.getAllByRole("button",{name:/Vehicle type/})[0],p=n.getAllByRole("button",{name:"Remove vehicle type filter"})[0];await s("renders the category and its value",async()=>{await r(d).toHaveTextContent("Vehicle type:"),await r(d).toHaveTextContent("Truck")}),await s("is announced as a plain button, not a toggle",async()=>{await r(d).not.toHaveAttribute("aria-pressed")}),await s("activates the chip body on click",async()=>{await o.click(d),await r(e.onClick).toHaveBeenCalled()}),await s("removes the filter without activating the body",async()=>{await o.click(p),await r(e.onRemove).toHaveBeenCalled(),await r(e.onClick).toHaveBeenCalledTimes(1)}),await s("reaches both actions by keyboard",async()=>{d.focus(),await r(d).toHaveFocus(),await o.tab(),await r(p).toHaveFocus()})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Stack space="4">
            <VariantRow caption="Default">
                <FilterChip {...handlers(args)} type="select" label="Vehicle type:" value="Truck" />
                <FilterChip {...handlers(args)} type="numeric" label="Usage (km):" operator="over" value="100,000 km" />
                <FilterChip {...handlers(args)} type="simple" label="Serviced" />
                <FilterChip type="add" label="Add Filter" onClick={args.onClick ?? (() => {})} />
            </VariantRow>
            <VariantRow caption="Selected (no add chip, it has no selected state)">
                <FilterChip {...handlers(args)} type="select" label="Vehicle type:" value="Truck" selected />
                <FilterChip {...handlers(args)} type="numeric" label="Usage (km):" operator="over" value="100,000 km" selected />
                <FilterChip {...handlers(args)} type="simple" label="Serviced" selected />
            </VariantRow>
        </Stack>
}`,...v.parameters?.docs?.source},description:{story:"The four shapes, first at rest and then selected.\n\n`select` and `numeric` grey out the category so it reads apart from the value.\n`simple` has no category, so its label uses the value colour. `add` is the only\ndashed chip and the only one without a selected state, since it has no filter\nto apply.",...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Stack space="4">
            <VariantRow caption="onClick and onRemove: click to edit, × to clear">
                <FilterChip {...handlers(args)} label="Vehicle type:" value="Truck" />
            </VariantRow>
            <VariantRow caption="onClick only: clickable, nothing to clear">
                <FilterChip onClick={args.onClick} label="State:" value="QLD" />
            </VariantRow>
            <VariantRow caption="onRemove only: the body is plain text">
                <FilterChip onRemove={args.onRemove} label="Usage (km):" value="100,000 km" />
            </VariantRow>
            <VariantRow caption="Neither: static text, nothing focusable">
                <FilterChip label="Fuel:" value="Diesel" />
            </VariantRow>
        </Stack>,
  play: async ({
    canvas,
    step
  }) => {
    await step('makes the body a button only with an onClick', async () => {
      await expect(canvas.getAllByRole('button', {
        name: /State/
      })[0]).toBeInTheDocument();
    });
    await step('leaves a remove-only body outside any button', async () => {
      const label = canvas.getAllByText('Usage (km):')[0];
      await expect(label.closest('button')).toBeNull();
      await expect(canvas.getAllByRole('button', {
        name: /^Remove Usage/
      })[0]).toBeInTheDocument();
    });
    await step('renders no buttons at all without handlers', async () => {
      await expect(canvas.queryAllByRole('button', {
        name: /Fuel/
      })).toHaveLength(0);
    });
  }
}`,...g.parameters?.docs?.source},description:{story:"The handlers you pass decide what the chip becomes.\n\nThe body is a `<button>` only when there is an `onClick`, and the `×` only\nappears when there is an `onRemove`. Pass both and you get a container with two\nbuttons inside it, because two actions cannot nest in one button. Pass neither\nand the chip is static text.\n\nThe remove-only chip is the subtle one. Hover follows the button the pointer is\nover, so it highlights on the `×` and not on the label.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['skip-themes'],
  render: args => <RemovableFilterBar onClick={args.onClick} onRemove={args.onRemove} />,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const removeButtons = () => canvas.queryAllByRole('button', {
      name: /^Remove /
    });
    await step('starts with a remove button per filter', async () => {
      await expect(removeButtons()).toHaveLength(INITIAL_FILTERS.length);
    });
    await step('removing a filter takes its chip away', async () => {
      await userEvent.click(canvas.getAllByRole('button', {
        name: 'Remove Vehicle type Truck filter'
      })[0]);
      await expect(canvas.queryByRole('button', {
        name: 'Remove Vehicle type Truck filter'
      })).not.toBeInTheDocument();
      await expect(removeButtons()).toHaveLength(INITIAL_FILTERS.length - 1);
    });
  }
}`,...b.parameters?.docs?.source},description:{story:"Removal working end to end. Click a `×` and the chip goes, because the owner\ndrops it from the list. In the other stories `onRemove` is only a spy, so the\nchip stays put. Clear them all and the add chip offers them back.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [story => <Box maxWidth="small">{story()}</Box>],
  render: args => <FlexInline justify="center" gap={CHIP_GAP}>
            <FilterChip {...handlers(args)} type="select" label="Vehicle type:" value="Truck" selected />
            <FilterChip {...handlers(args)} type="numeric" label="Usage (km):" operator="over" value="100,000 km" />
            <FilterChip {...handlers(args)} type="simple" label="Serviced" />
            <FilterChip {...handlers(args)} type="select" label="State:" value="QLD" />
            <FilterChip type="add" label="Add Filter" onClick={args.onClick ?? (() => {})} />
        </FlexInline>
}`,...f.parameters?.docs?.source},description:{story:`A bar wraps onto a new line instead of scrolling or stacking. The container
here is deliberately narrow so you can see it happen.`,...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [story => <Box maxWidth="small">{story()}</Box>],
  args: {
    type: 'numeric',
    label: 'Usage (km):',
    operator: 'over',
    value: '100,000 km since the last major logbook service was carried out'
  }
}`,...w.parameters?.docs?.source},description:{story:"A value with nowhere to go truncates instead of pushing the chip past its\ncontainer, and keeps the full text in a `title`. The category and operator hold\ntheir width so you can still tell which filter it is.",...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Stack space="4">
            <VariantRow caption="expanded: a chip that owns a popover">
                <FilterChip {...handlers(args)} label="Vehicle type:" value="Truck" expanded />
            </VariantRow>
            <VariantRow caption="pressed: a chip that toggles its filter in place">
                <FilterChip onClick={args.onClick} type="simple" label="Serviced" pressed selected />
            </VariantRow>
        </Stack>
}`,...k.parameters?.docs?.source},description:{story:"Two ARIA states that look the same but mean different things, so choose by\nbehaviour rather than by eye.\n\nUse `expanded` when the chip owns a popover. It reports `aria-expanded` and\n`aria-haspopup`, and pairs with `aria-controls` and the forwarded `ref` that\n`Popover` anchors to.\n\nUse `pressed` when clicking the chip applies and unapplies the filter in place.\nIt is the only prop that sets `aria-pressed`. On its own, `selected` is just a\nvisual state, because a chip that opens an editor is not a toggle.\n\nBoth describe the chip body, which is only a button when you pass `onClick`.",...k.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', 'skip-themes'],
  args: {
    removeLabel: 'Remove vehicle type filter'
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    const body = canvas.getAllByRole('button', {
      name: /Vehicle type/
    })[0];
    const remove = canvas.getAllByRole('button', {
      name: 'Remove vehicle type filter'
    })[0];
    await step('renders the category and its value', async () => {
      await expect(body).toHaveTextContent('Vehicle type:');
      await expect(body).toHaveTextContent('Truck');
    });
    await step('is announced as a plain button, not a toggle', async () => {
      await expect(body).not.toHaveAttribute('aria-pressed');
    });
    await step('activates the chip body on click', async () => {
      await userEvent.click(body);
      await expect(args.onClick).toHaveBeenCalled();
    });
    await step('removes the filter without activating the body', async () => {
      await userEvent.click(remove);
      await expect(args.onRemove).toHaveBeenCalled();
      await expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('reaches both actions by keyboard', async () => {
      body.focus();
      await expect(body).toHaveFocus();
      await userEvent.tab();
      await expect(remove).toHaveFocus();
    });
  }
}`,...R.parameters?.docs?.source},description:{story:`Behaviour coverage. Kept off the docs page but left in the sidebar, so you can
watch the steps run in the Interactions panel.`,...R.parameters?.docs?.description}}};const Be=["Standard","Types","Interactivity","Removable","FilterBar","LongValue","DisclosureAndToggle","InteractionTest"];export{k as DisclosureAndToggle,f as FilterBar,R as InteractionTest,g as Interactivity,w as LongValue,b as Removable,x as Standard,v as Types,Be as __namedExportsOrder,Ee as default};
