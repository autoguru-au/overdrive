import{e,c,B as k,r as w}from"./iframe-2_OBRyy2.js";import{s as E,l as S,a as i,t as A,b as f,c as B,d as N,e as G,f as H}from"./styles.css-IovqQo3l.js";import{R as y,a as l,s as T}from"./Radio-CFgwIB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckableBase-BNE59rRA.js";import"./Text-CcYhOnVD.js";const{expect:d,fn:$,within:x}=__STORYBOOK_MODULE_TEST__,L=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],W={title:"Forms & Input Fields/Radio",component:y,tags:[],decorators:[(a,{parameters:t})=>t.fullWidth?e.createElement(a,null):e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(a,null))],args:{name:void 0,value:void 0,size:"medium",onChange:$()},argTypes:{size:{control:"select",options:["medium","small"],description:"Ring size for every radio in the group, per the DS-2026 selection-control spec. An individual `Radio` can override it."}},render:a=>e.createElement(D,{...a})},D=({name:a,...t})=>e.createElement(y,{...t,name:`${a}-${w.useId()}`}),v={render:({...a})=>{const[t,n]=e.useState(a.value),r=w.useId(),o=s=>{n(s),a.onChange?.(s)};return e.createElement(y,{...a,name:`${a.name}-${r}`,value:t,onChange:o},L.map(s=>e.createElement(l,{key:s.value,value:s.value,disabled:s.value==="disabled"},s.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"},play:async({canvasElement:a,userEvent:t,step:n})=>{const r=a.querySelector('[data-od-component="radio-group"]'),o=x(r instanceof HTMLElement?r:a),s=o.getByRole("radio",{name:"Avocado"}),p=o.getByRole("radio",{name:"Blueberries"});await n("starts on the value the group was given",async()=>{await d(s).toBeChecked()}),await n("moves the selection on arrow keys",async()=>{s.focus(),await t.keyboard("{ArrowDown}"),await d(p).toBeChecked(),await d(p).toHaveFocus()})}},R=[{label:"Default",selected:!1,disabled:!1,code:"value"},{label:"Hover",selected:!1,disabled:!1,code:":hover"},{label:"Selected",selected:!0,disabled:!1,code:"selected"},{label:"Disabled",selected:!1,disabled:!0,code:"disabled"},{label:"Disabled selected",selected:!0,disabled:!0,code:"selected disabled"}],C=[{size:"medium",dimensions:"20 × 20",tag:"default"},{size:"small",dimensions:"16 × 16"}],M=["Size","Px","State","Preview","Props","Tag"],b=()=>e.createElement("span",{className:i,"aria-hidden":"true"}),F=({size:a,label:t,selected:n,disabled:r})=>e.createElement(y,{name:`matrix-${a}-${t}-${w.useId()}`,size:a,value:n?"on":""},e.createElement(l,{value:"on",disabled:r,"aria-label":`${a} ${t}`})),m={parameters:{controls:{disable:!0},fullWidth:!0},render:()=>e.createElement("div",{className:E},e.createElement("div",{className:S},M.map(a=>e.createElement("span",{className:c(f,i,B),key:a},a))),C.flatMap(({size:a,dimensions:t,tag:n},r)=>R.map(({label:o,selected:s,disabled:p,code:z},h)=>e.createElement("div",{className:c(S,r>0&&h===0&&N),key:`${a}-${o}`},h===0?e.createElement("span",{className:c(i,f)},a):e.createElement(b,null),h===0?e.createElement("span",{className:i},t):e.createElement(b,null),e.createElement("span",{className:i},o),e.createElement(k,{className:c(G,o==="Hover"&&T)},e.createElement(F,{size:a,label:o,selected:s,disabled:p})),e.createElement("code",{className:A},z),h===0&&n?e.createElement("span",{className:c(i,H)},n):e.createElement(b,null))))),play:async({canvasElement:a,step:t})=>{const n=a.querySelector(`.${E}`),r=x(n instanceof HTMLElement?n:a),o=r.getAllByRole("radio",{name:/^(medium|small) /});await t("renders every state at both sizes",async()=>{await d(o).toHaveLength(R.length*C.length)}),await t("sizes the ring per the spec",async()=>{const[s]=o;await d(s.parentElement?.querySelector("[data-size]")).toHaveAttribute("data-size","medium")}),await t("marks the selected states with the accent",async()=>{const s=r.getByRole("radio",{name:"medium Selected"});await d(s.parentElement?.querySelector("[data-size]")).toHaveAttribute("data-active")})}},u={args:{name:"radio-group-size-override",value:"small-one",size:"small",children:e.createElement(e.Fragment,null,e.createElement(l,{value:"small-one"},"Small, from the group"),e.createElement(l,{value:"small-two"},"Also small"),e.createElement(l,{value:"medium-one",size:"medium"},"Medium, overriding the group"))}},g={args:{name:"radio-group-multi-line",value:"multi1",children:e.createElement(e.Fragment,null,e.createElement(l,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),e.createElement(l,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    const [selectedValue, setSelectedValue] = React.useState(args.value);
    const uid = useId();
    const handleChange = (value: string) => {
      setSelectedValue(value);
      args.onChange?.(value);
    };
    return <RadioGroupComponent {...args as ComponentProps<typeof RadioGroupComponent>} name={\`\${args.name}-\${uid}\`} value={selectedValue} onChange={handleChange}>
                {listData.map(item => <Radio key={item.value} value={item.value} disabled={item.value === 'disabled'}>
                        {item.label}
                    </Radio>)}
            </RadioGroupComponent>;
  },
  args: {
    name: 'radio-group-favourite-fruit',
    value: 'avocado'
  },
  play: async ({
    canvasElement,
    userEvent,
    step
  }) => {
    // The story is rendered more than once per document — once per theme in
    // Chromatic, twice on the autodocs page — so scope to one group rather
    // than reaching into the canvas and picking up a sibling copy.
    const firstGroup = canvasElement.querySelector('[data-od-component="radio-group"]');
    const group = within(firstGroup instanceof HTMLElement ? firstGroup : canvasElement);
    const avocado = group.getByRole('radio', {
      name: 'Avocado'
    });
    const blueberries = group.getByRole('radio', {
      name: 'Blueberries'
    });
    await step('starts on the value the group was given', async () => {
      await expect(avocado).toBeChecked();
    });
    await step('moves the selection on arrow keys', async () => {
      avocado.focus();
      await userEvent.keyboard('{ArrowDown}');
      await expect(blueberries).toBeChecked();
      await expect(blueberries).toHaveFocus();
    });
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    fullWidth: true
  },
  render: () => <div className={switchLadderGrid}>
            <div className={ladderRow}>
                {COL.map(heading => <span className={clsx(labels, small, spaceLadderHeaderCell)} key={heading}>
                        {heading}
                    </span>)}
            </div>
            {SIZES.flatMap(({
      size,
      dimensions,
      tag
    }, group) => STATES.map(({
      label,
      selected,
      disabled,
      code
    }, index) => <div className={clsx(ladderRow, group > 0 && index === 0 && ladderGroupStart)} key={\`\${size}-\${label}\`}>
                        {index === 0 ? <span className={clsx(small, labels)}>{size}</span> : <EmptyCell />}
                        {index === 0 ? <span className={small}>{dimensions}</span> : <EmptyCell />}
                        <span className={small}>{label}</span>
                        <Box className={clsx(ladderPreviewCell, label === 'Hover' && storyForceHover)}>
                            <Specimen size={size} label={label} selected={selected} disabled={disabled} />
                        </Box>
                        <code className={tokenCode}>{code}</code>
                        {index === 0 && tag ? <span className={clsx(small, tokenDescription)}>
                                {tag}
                            </span> : <EmptyCell />}
                    </div>))}
        </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    // Chromatic renders the story once per viewport into the same root, so
    // the canvas holds a grid per capture. Scope to one of them, or an
    // exact count sees every copy at once.
    const firstGrid = canvasElement.querySelector(\`.\${switchLadderGrid}\`);
    const grid = within(firstGrid instanceof HTMLElement ? firstGrid : canvasElement);
    const radios = grid.getAllByRole('radio', {
      name: /^(medium|small) /
    });
    await step('renders every state at both sizes', async () => {
      await expect(radios).toHaveLength(STATES.length * SIZES.length);
    });
    await step('sizes the ring per the spec', async () => {
      const [radio] = radios;
      await expect(radio.parentElement?.querySelector('[data-size]')).toHaveAttribute('data-size', 'medium');
    });
    await step('marks the selected states with the accent', async () => {
      const selected = grid.getByRole('radio', {
        name: 'medium Selected'
      });
      await expect(selected.parentElement?.querySelector('[data-size]')).toHaveAttribute('data-active');
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`Both sizes across every state in the Figma spec.

The Hover row forces its own appearance through \`storyForceHover\`, so the
state Chromatic cannot otherwise reach is still snapshot.

Both sizes keep the same 48px row and hit area: only the ring shrinks, so a
\`small\` radio stays above the WCAG 2.5.8 target minimum.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radio-group-size-override',
    value: 'small-one',
    size: 'small',
    children: <>
                <Radio value="small-one">Small, from the group</Radio>
                <Radio value="small-two">Also small</Radio>
                <Radio value="medium-one" size="medium">
                    Medium, overriding the group
                </Radio>
            </>
  }
}`,...u.parameters?.docs?.source},description:{story:"`size` is set once on the group, and an individual `Radio` can still opt out\nof it. Mixing sizes inside one group is not something the spec asks for —\nthis is here to document that the override exists.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radio-group-multi-line',
    value: 'multi1',
    children: <>
                <Radio value="multi1">
                    There is a very good reason why this thing is a multi-line,
                    sometimes we need to show people a lot of things. And thus
                    this exists.
                </Radio>
                <Radio value="single" disabled>
                    Some options are just a single line, like this one.
                </Radio>
            </>
  }
}`,...g.parameters?.docs?.source}}};const Z=["RadioGroup","AllStates","SizeOverride","MultipleLines"];export{m as AllStates,g as MultipleLines,v as RadioGroup,u as SizeOverride,Z as __namedExportsOrder,W as default};
