import{e,c as i,B as y}from"./iframe-2_OBRyy2.js";import{i as S,s as N,l as v,a as r,t as T,b as E,c as D,d as L,e as H,f as I}from"./styles.css-IovqQo3l.js";import{T as C}from"./Text-CcYhOnVD.js";import{S as x,s as R}from"./Switch-DetdlAzd.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-BmfLZAWg.js";import"./index-DhJCT5uY.js";import"./index-BrD3Qbyl.js";import"./useFocusRing-dDRhv8wd.js";import"./VisuallyHidden-BCCshAPs.js";const{expect:s,fn:A,userEvent:u,within:k}=__STORYBOOK_MODULE_TEST__,Y={title:"Forms & Input Fields/Switch",component:x,tags:[],args:{name:"switch",value:"yes",isSelected:void 0,isDisabled:void 0,onChange:A()},argTypes:{children:{control:!1},isSelected:{control:"boolean"},size:{control:"inline-radio",options:["medium","small"]},disabled:{control:!1},toggled:{control:!1}}},d={args:{children:e.createElement(C,null,"Text description for the switch"),className:S,testId:"switch"},play:async({args:t,canvasElement:a,step:o})=>{const n=k(a),[l]=n.getAllByRole("switch"),[c]=n.getAllByText(/Text description/);await o("<Switch /> renders unchecked with its label",async()=>{await s(l).not.toBeChecked(),await s(c).toBeVisible()}),await o("<Switch /> turns on when clicked",async()=>{await u.click(l),await s(l).toBeChecked(),await s(t.onChange).toHaveBeenCalledWith(!0)}),await o("<Switch /> turns off again",async()=>{await u.click(l),await s(l).not.toBeChecked(),await s(t.onChange).toHaveBeenLastCalledWith(!1)}),await o("<Switch /> toggles from the keyboard",async()=>{l.focus(),await u.keyboard(" "),await s(l).toBeChecked()})}},h={args:{isDisabled:!0,children:e.createElement(C,null,"Text description for the switch"),className:S},play:async({args:t,canvasElement:a,step:o})=>{const[n]=k(a).getAllByRole("switch");await o("<Switch /> does not respond to a click",async()=>{await s(n).toBeDisabled(),await u.click(n,{pointerEventsCheck:0}),await s(n).not.toBeChecked(),await s(t.onChange).not.toHaveBeenCalled()})}},m={render:t=>e.createElement(y,{display:"flex",alignItems:"center",style:{gap:"0.75rem"}},e.createElement(y,{as:"label",htmlFor:t.id},"Text description for the switch"),e.createElement(x,{...t})),args:{id:"test-switch-id"}},w={args:{isDisabled:!0}},$=[{label:"Default",props:{},code:t=>`size="${t}"`},{label:"Hover",props:{},code:()=>":hover"},{label:"Selected",props:{isSelected:!0},code:()=>"isSelected"},{label:"Disabled",props:{isDisabled:!0},code:()=>"isDisabled"}],z=[{size:"medium",dimensions:"38 × 20",tag:"default"},{size:"small",dimensions:"30 × 16"}],_=["Size","Px","State","Preview","Props","Tag"],b=()=>e.createElement("span",{className:r,"aria-hidden":"true"}),g={render:t=>e.createElement("div",{className:N},e.createElement("div",{className:v},_.map(a=>e.createElement("span",{className:i(E,r,D),key:a},a))),z.flatMap(({size:a,dimensions:o,tag:n},l)=>$.map(({label:c,props:B,code:f},p)=>e.createElement("div",{className:i(v,l>0&&p===0&&L),key:`${a}-${c}`},p===0?e.createElement("span",{className:i(r,E)},a):e.createElement(b,null),p===0?e.createElement("span",{className:r},o):e.createElement(b,null),e.createElement("span",{className:r},c),e.createElement(y,{className:i(H,c==="Hover"&&R)},e.createElement(x,{...t,...B,size:a,"aria-label":`${a} ${c}`})),e.createElement("code",{className:T},f(a)),p===0&&n?e.createElement("span",{className:i(r,I)},n):e.createElement(b,null))))),args:{children:void 0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Text>Text description for the switch</Text>,
    className: inlineLabelRow,
    testId: 'switch'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const [control] = canvas.getAllByRole('switch');
    const [label] = canvas.getAllByText(/Text description/);
    await step('<Switch /> renders unchecked with its label', async () => {
      await expect(control).not.toBeChecked();
      await expect(label).toBeVisible();
    });
    await step('<Switch /> turns on when clicked', async () => {
      await userEvent.click(control);
      await expect(control).toBeChecked();
      await expect(args.onChange).toHaveBeenCalledWith(true);
    });
    await step('<Switch /> turns off again', async () => {
      await userEvent.click(control);
      await expect(control).not.toBeChecked();
      await expect(args.onChange).toHaveBeenLastCalledWith(false);
    });
    await step('<Switch /> toggles from the keyboard', async () => {
      control.focus();
      await userEvent.keyboard(' ');
      await expect(control).toBeChecked();
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"Passes in the text label and styles for the layout",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: <Text>Text description for the switch</Text>,
    className: inlineLabelRow
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const [control] = within(canvasElement).getAllByRole('switch');
    await step('<Switch /> does not respond to a click', async () => {
      await expect(control).toBeDisabled();
      await userEvent.click(control, {
        pointerEventsCheck: 0
      });
      await expect(control).not.toBeChecked();
      await expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Box display="flex" alignItems="center" style={{
    gap: '0.75rem'
  }}>
            <Box as="label" htmlFor={args['id']}>
                Text description for the switch
            </Box>
            <Switch {...args} />
        </Box>,
  args: {
    id: 'test-switch-id'
  }
}`,...m.parameters?.docs?.source},description:{story:"Custom label using `id` and `htmlFor`",...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className={switchLadderGrid}>
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
                            <Switch {...args} {...props} size={size} aria-label={\`\${size} \${label}\`} />
                        </Box>
                        <code className={tokenCode}>{code(size)}</code>
                        {index === 0 && tag ? <span className={clsx(small, tokenDescription)}>
                                {tag}
                            </span> : <EmptyCell />}
                    </div>))}
        </div>,
  args: {
    children: undefined
  }
}`,...g.parameters?.docs?.source}}};const j=["Uncontrolled","DisabledIsInert","WithLabel","Disabled","AllStates"];export{g as AllStates,w as Disabled,h as DisabledIsInert,d as Uncontrolled,m as WithLabel,j as __namedExportsOrder,Y as default};
