import{r as e,e as t,B as T}from"./iframe-BTBLa9qD.js";import{D as N,a as C}from"./DropDownOption-CuQtQcNN.js";import{B as k}from"./Button-DMSOS-W_.js";import{F as P}from"./Flyout-CeWAE4bM.js";import{I as j}from"./Icon-C6DP2-K2.js";import{u as z}from"./OutsideClick-fa_x_i9a.js";import{I as F}from"./CaretDownIcon-iJmWmw6R.js";import{E as W}from"./Positioner-BlYd67wS.js";import{I as K}from"./CloudArrowUpIcon-niu7Fzc4.js";import{I as U}from"./DownloadIcon-xLda1M-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-D3fnygj0.js";import"./Text-C8RNI5di.js";import"./ProgressSpinner-DC49HFAj.js";import"./resolveResponsiveProps-CM5NKSWG.js";import"./Portal-CchjelE5.js";import"./index-UCn0aYfZ.js";import"./index-DyPtkNDB.js";var $="fohh071 fohh070 onxwju6l onxwju8h onxwjugt",G="fohh072",Y="fohh073";const l=({label:n,onClick:s,children:i,icon:o=F,menuLabel:y="More options",alignment:p=W.BOTTOM_RIGHT,isOpen:v,onOpenChange:E,testId:H,...B})=>{const m=e.useRef(null),w=e.useRef(null),[D,q]=e.useState(!1),a=v??D,d=e.useCallback(r=>{E?.(r),v===void 0&&q(r)},[v,E]),b=e.useCallback(()=>{a&&d(!1)},[a,d]),g=e.useCallback(()=>{b(),m.current?.focus()},[b]),V=e.useCallback(()=>d(!a),[a,d]),R=e.useCallback(r=>{r.key==="Escape"&&g()},[g]),M=e.useMemo(()=>[w,m],[]);return z(M,b),e.useEffect(()=>{const r=w.current;if(!a||!r)return;const x=L=>{L.key==="Escape"&&g()};return r.addEventListener("keydown",x),()=>r.removeEventListener("keydown",x)},[a,g]),e.createElement(e.Fragment,null,e.createElement("div",{role:"group","aria-label":n,className:$,"data-testid":H},e.createElement(k,{...B,className:G,onClick:s},n),e.createElement(k,{...B,ref:m,className:Y,"aria-label":y,"aria-haspopup":!0,"aria-expanded":a,onClick:V,onKeyDown:R},e.createElement(j,{icon:o}))),e.createElement(P,{triggerRef:m,isOpen:a,alignment:p},e.createElement(N,{ref:w},i)))};l.displayName="SplitButton";try{l.displayName="SplitButton",l.__docgenInfo={description:"A `SplitButton` pairs a primary action with a dropdown menu of related\nsecondary actions. The left segment triggers the primary action, while the\nchevron on the right opens a menu of `DropDownOption` children.\n\nBoth segments share a single `variant`/`size`. Following the WAI-ARIA\npattern, the two segments are independent buttons grouped together; the\ntrigger exposes `aria-haspopup` and `aria-expanded`.",displayName:"SplitButton",props:{label:{defaultValue:null,description:"Text label for the primary action segment (left).",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler for the primary action. This does **not** open the menu.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},children:{defaultValue:null,description:"Menu options, typically `DropDownOption` elements.",name:"children",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:{value:"CaretDownIcon"},description:"Icon shown in the menu trigger segment (right).",name:"icon",required:!1,type:{name:"IconType"}},menuLabel:{defaultValue:{value:"More options"},description:"Accessible label for the menu trigger segment.",name:"menuLabel",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:`Controls the open state of the menu. When provided the component becomes
controlled; otherwise it manages its own open state.`,name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Called whenever the menu requests to open or close.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},size:{defaultValue:null,description:"Button sizing",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'}]}},disabled:{defaultValue:null,description:"Disabling the button will prevent it from receiving keyboard focus or click events",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"Pill shaped button appearance",name:"rounded",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Button intentional colour scheme",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"information"'}]}},minimal:{defaultValue:null,description:"Present a borderless minimal appearance",name:"minimal",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_RIGHT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{action:S}=__STORYBOOK_MODULE_ACTIONS__,{expect:u,fn:I,userEvent:_,within:J}=__STORYBOOK_MODULE_TEST__,Q=S("onClick"),A=S("onOpenChange"),fe={title:"Components/Split Button",component:l,tags:["new"],args:{label:"Bulk upload",variant:"secondary",size:"medium",children:void 0,onClick:I(Q),onOpenChange:I(A)},argTypes:{children:{control:!1},size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning"],control:{type:"select"}}},render:n=>t.createElement(T,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},t.createElement(l,{...n}))},O=t.createElement(t.Fragment,null,t.createElement(C,{label:"Single upload",icon:K}),t.createElement(C,{label:"Import from CSV",icon:U}),t.createElement(C,{disabled:!0,label:"Import from API"})),h={args:{children:O},play:async({args:n,canvasElement:s,step:i})=>{const o=J(s),y=o.getAllByRole("button",{name:/bulk upload/i})[0],p=o.getAllByRole("button",{name:/more options/i})[0];await i("Primary action does not open the menu",async()=>{await _.click(y),await u(n.onClick).toHaveBeenCalled(),await u(n.onOpenChange).not.toHaveBeenCalled()}),await i("Trigger opens the menu",async()=>{await u(p).toHaveAttribute("aria-haspopup","true"),await _.click(p),await u(n.onOpenChange).toHaveBeenCalledWith(!0),await u(p).toHaveAttribute("aria-expanded","true")})}},f={args:{children:O,variant:"primary"}},c={render:n=>{const[s,i]=e.useState(!0);return t.createElement(T,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},t.createElement(l,{...n,isOpen:s,onOpenChange:o=>{A(o),i(o)}},O))},args:{variant:"secondary"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: options
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getAllByRole('button', {
      name: /bulk upload/i
    })[0];
    const trigger = canvas.getAllByRole('button', {
      name: /more options/i
    })[0];
    await step('Primary action does not open the menu', async () => {
      await userEvent.click(primary);
      await expect(args.onClick).toHaveBeenCalled();
      await expect(args.onOpenChange).not.toHaveBeenCalled();
    });
    await step('Trigger opens the menu', async () => {
      await expect(trigger).toHaveAttribute('aria-haspopup', 'true');
      await userEvent.click(trigger);
      await expect(args.onOpenChange).toHaveBeenCalledWith(true);
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: options,
    variant: 'primary'
  }
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Box style={{
      height: '100vh',
      width: '100vw',
      maxHeight: '350px'
    }} display="flex" alignItems="center" justifyContent="center">
                <SplitButton {...args} isOpen={isOpen} onOpenChange={open => {
        onOpenChange(open);
        setIsOpen(open);
      }}>
                    {options}
                </SplitButton>
            </Box>;
  },
  args: {
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source},description:{story:"Example with the menu initially open in controlled mode.",...c.parameters?.docs?.description}}};const ye=["Standard","Primary","WithOpenMenu"];export{f as Primary,h as Standard,c as WithOpenMenu,ye as __namedExportsOrder,fe as default};
