import{e,c as m,B as L,r as w,H as $}from"./iframe-2_OBRyy2.js";import{s as S,l as B,a as d,t as D,b as T,c as G,d as I,e as R,f as O}from"./styles.css-IovqQo3l.js";import{B as z}from"./Badge-D-Nv2VyC.js";import{S as M}from"./StarRating-DCYoq0tq.js";import{T as E}from"./Text-CcYhOnVD.js";import{C,s as P}from"./CheckBox-BWAFrUIc.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BHhm1BOo.js";import"./Icon-B7Jtgc51.js";import"./resolveResponsiveProps--pBJpF8q.js";import"./StarIcon-BUcvInuV.js";import"./StarHalfIcon-B9e70cC6.js";import"./CheckableBase-BNE59rRA.js";import"./MinusIcon-D2o4QkVk.js";import"./CheckIcon-aiqbr5dd.js";const{expect:c,fn:N,within:U}=__STORYBOOK_MODULE_TEST__,W=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],le={title:"Forms & Input Fields/CheckBox",component:C,tags:[],decorators:[(a,{parameters:t})=>t.fullWidth?e.createElement(a,null):e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(a,null))],args:{name:"demo-checkbox",children:"Check me!",value:"1",isIndeterminate:!1,disabled:void 0,size:"medium",onChange:N(),onClick:N()},argTypes:{size:{control:"select",options:["medium","small"],description:"Box size, per the DS-2026 selection-control spec."}},render:({isIndeterminate:a,...t})=>{const[r,n]=w.useState(!1),[l,s]=w.useState(a),[i,o]=w.useState(a);return i!==a&&(o(a),s(a)),e.createElement(C,{...t,isIndeterminate:l,checked:r,onClick:u=>{a&&s(!1),t.onClick?.(u)},onChange:u=>{n(u),t.onChange?.(u)}})}},b={play:async({canvas:a,userEvent:t,step:r})=>{const[n]=a.getAllByRole("checkbox",{name:"Check me!"});await r("starts unchecked and is reachable by keyboard",async()=>{await c(n).not.toBeChecked(),await c(n).toBeEnabled()}),await r("takes its accessible name from its children",async()=>{await c(n).toHaveAccessibleName("Check me!")}),await r("ticks on click and again on space",async()=>{await t.click(n),await c(n).toBeChecked(),n.focus(),await t.keyboard(" "),await c(n).not.toBeChecked()})}},A=[{label:"Default",props:{},code:a=>`size="${a}"`},{label:"Hover",props:{},code:()=>":hover"},{label:"Selected",props:{checked:!0},code:()=>"checked"},{label:"Indeterminate",props:{isIndeterminate:!0},code:()=>"isIndeterminate"},{label:"Disabled",props:{disabled:!0},code:()=>"disabled"},{label:"Disabled selected",props:{checked:!0,disabled:!0},code:()=>"checked disabled"}],H=[{size:"medium",dimensions:"20 × 20",tag:"default"},{size:"small",dimensions:"16 × 16"}],_=["Size","Px","State","Preview","Props","Tag"],f=()=>e.createElement("span",{className:d,"aria-hidden":"true"}),p={parameters:{controls:{disable:!0},fullWidth:!0},render:()=>e.createElement("div",{className:S},e.createElement("div",{className:B},_.map(a=>e.createElement("span",{className:m(T,d,G),key:a},a))),H.flatMap(({size:a,dimensions:t,tag:r},n)=>A.map(({label:l,props:s,code:i},o)=>e.createElement("div",{className:m(B,n>0&&o===0&&I),key:`${a}-${l}`},o===0?e.createElement("span",{className:m(d,T)},a):e.createElement(f,null),o===0?e.createElement("span",{className:d},t):e.createElement(f,null),e.createElement("span",{className:d},l),e.createElement(L,{className:m(R,l==="Hover"&&P)},e.createElement(C,{...s,size:a,value:l,name:`matrix-${a}-${l}`,"aria-label":`${a} ${l}`})),e.createElement("code",{className:D},i(a)),o===0&&r?e.createElement("span",{className:m(d,O)},r):e.createElement(f,null))))),play:async({canvasElement:a,step:t})=>{const r=a.querySelector(`.${S}`),n=U(r instanceof HTMLElement?r:a),l=n.getAllByRole("checkbox",{name:/^(medium|small) /});await t("renders every state at both sizes",async()=>{await c(l).toHaveLength(A.length*H.length)}),await t("sizes the box per the spec",async()=>{const[s]=l;await c(s.parentElement?.querySelector("[data-size]")).toHaveAttribute("data-size","medium")}),await t("marks the selected states with the accent",async()=>{const s=n.getByRole("checkbox",{name:"medium Selected"});await c(s.parentElement?.querySelector("[data-size]")).toHaveAttribute("data-active")})}},g={args:{disabled:!0,children:"Can't check me"}},h={args:{isIndeterminate:!0,children:"Not sure"}},v={render:({disabled:a,onChange:t})=>{const[r,n]=w.useState(()=>({avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1})),l=(s,i)=>{n(o=>({...o,[i]:s})),t?.(s)};return e.createElement(e.Fragment,null,W.map(s=>e.createElement(C,{key:s.value,disabled:a,value:s.value,name:`checkbox-${s.value}`,checked:r[s.value],onChange:i=>l(i,s.value)},s.label)))},args:{disabled:!1}},k={args:{checked:!1,disabled:!1,children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},F=({label:a,rating:t})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(E,null,a),e.createElement(M,{rating:t})),x={args:{checked:!1,disabled:!1,children:e.createElement(F,{label:"Avocados",rating:4.3}),value:"1"}},y={args:{checked:!1,disabled:!1,children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement($,{as:"h5"},"Your last order"),e.createElement(z,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(z,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(E,{size:"2"},"Ending in 5678"),e.createElement(E,{size:"2"},"Updated 12 Dec 2018"))),value:"1"}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    // The autodocs page renders the primary story twice, so take the first
    // match rather than asserting there is only one.
    const [box] = canvas.getAllByRole('checkbox', {
      name: 'Check me!'
    });
    await step('starts unchecked and is reachable by keyboard', async () => {
      await expect(box).not.toBeChecked();
      await expect(box).toBeEnabled();
    });
    await step('takes its accessible name from its children', async () => {
      await expect(box).toHaveAccessibleName('Check me!');
    });
    await step('ticks on click and again on space', async () => {
      await userEvent.click(box);
      await expect(box).toBeChecked();
      box.focus();
      await userEvent.keyboard(' ');
      await expect(box).not.toBeChecked();
    });
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      props,
      code
    }, index) => <div className={clsx(ladderRow, group > 0 && index === 0 && ladderGroupStart)} key={\`\${size}-\${label}\`}>
                        {index === 0 ? <span className={clsx(small, labels)}>{size}</span> : <EmptyCell />}
                        {index === 0 ? <span className={small}>{dimensions}</span> : <EmptyCell />}
                        <span className={small}>{label}</span>
                        <Box className={clsx(ladderPreviewCell, label === 'Hover' && storyForceHover)}>
                            {/* No children, so the box stands alone — hence the explicit name. */}
                            <CheckBox {...props} size={size} value={label} name={\`matrix-\${size}-\${label}\`} aria-label={\`\${size} \${label}\`} />
                        </Box>
                        <code className={tokenCode}>{code(size)}</code>
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
    const boxes = grid.getAllByRole('checkbox', {
      name: /^(medium|small) /
    });
    await step('renders every state at both sizes', async () => {
      await expect(boxes).toHaveLength(STATES.length * SIZES.length);
    });
    await step('sizes the box per the spec', async () => {
      const [box] = boxes;
      await expect(box.parentElement?.querySelector('[data-size]')).toHaveAttribute('data-size', 'medium');
    });
    await step('marks the selected states with the accent', async () => {
      const selected = grid.getByRole('checkbox', {
        name: 'medium Selected'
      });
      await expect(selected.parentElement?.querySelector('[data-size]')).toHaveAttribute('data-active');
    });
  }
}`,...p.parameters?.docs?.source},description:{story:`Both sizes across every state in the Figma spec.

The Hover row forces its own appearance through \`storyForceHover\`, so the
state Chromatic cannot otherwise reach is still snapshot.

Both sizes keep the same 48px row and hit area: only the box shrinks, so a
\`small\` checkbox stays above the WCAG 2.5.8 target minimum.`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't check me"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    children: 'Not sure'
  }
}`,...h.parameters?.docs?.source},description:{story:"The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.\nThe indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle\nthe checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    disabled,
    onChange
  }) => {
    const [selected, setSelected] = useState<Record<string, boolean>>(() => ({
      avocado: true,
      blueberries: true,
      cherries: false,
      coconut: true,
      strawberries: false
    }));
    const handleChange = (checked: boolean, value: string) => {
      setSelected(prev => ({
        ...prev,
        [value]: checked
      }));
      onChange?.(checked);
    };
    return <>
                {listData.map(item => <CheckBox key={item.value} disabled={disabled} value={item.value} name={\`checkbox-\${item.value}\`} checked={selected[item.value]} onChange={checked => handleChange(checked, item.value)}>
                        {item.label}
                    </CheckBox>)}
            </>;
  },
  args: {
    disabled: false
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <Item label="Avocados" rating={4.3} />,
    value: '1'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <div style={{
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: '1fr auto auto'
    }}>
                <Heading as="h5">Your last order</Heading>
                <Badge colour="neutral" label="SUBSCRIBE" />
                <Badge colour="neutral" label="AUTO TOP-UP" />
                <div style={{
        gridColumn: '1/4',
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: '1fr auto'
      }}>
                    <Text size="2">Ending in 5678</Text>
                    <Text size="2">Updated 12 Dec 2018</Text>
                </div>
            </div>,
    value: '1'
  }
}`,...y.parameters?.docs?.source}}};const oe=["Default","AllStates","Disabled","Indeterminate","List","MultipleLines","WithComponent","WithMultiLineComponent"];export{p as AllStates,b as Default,g as Disabled,h as Indeterminate,v as List,k as MultipleLines,x as WithComponent,y as WithMultiLineComponent,oe as __namedExportsOrder,le as default};
