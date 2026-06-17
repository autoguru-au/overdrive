import{r as n,e,B as g}from"./iframe-BTBLa9qD.js";import{B as T}from"./Button-DMSOS-W_.js";import{F as M}from"./Flyout-CeWAE4bM.js";import{I as F}from"./Icon-C6DP2-K2.js";import{u as H}from"./OutsideClick-fa_x_i9a.js";import{D as P,a as w}from"./DropDownOption-CuQtQcNN.js";import{I as R}from"./CaretDownIcon-iJmWmw6R.js";import{E as j}from"./Positioner-BlYd67wS.js";import{I as L,a as W}from"./TrashIcon-DLraX2Ln.js";import{I as z}from"./DownloadIcon-xLda1M-Q.js";import{I as $}from"./NotePencilIcon-DiHq4L18.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressSpinner-DC49HFAj.js";import"./resolveResponsiveProps-CM5NKSWG.js";import"./flex-D3fnygj0.js";import"./Text-C8RNI5di.js";import"./Portal-CchjelE5.js";import"./index-UCn0aYfZ.js";import"./index-DyPtkNDB.js";const s=({children:t,label:r,icon:o=R,alignment:a=j.BOTTOM_LEFT,isOpen:l,onOpenChange:D,onClick:C,...k})=>{const I=n.useRef(null),E=n.useRef(null),[B,q]=n.useState(!1),x=l??B,y=n.useCallback(f=>{D?.(f),l===void 0&&q(f)},[l,D]),V=n.useCallback(f=>{typeof C=="function"&&C(f),y(!x)},[x,C,y]),A=n.useCallback(()=>{y(!1)},[y]);return H([E],A),n.createElement(n.Fragment,null,n.createElement(T,{ref:I,onClick:V,...k},r,n.createElement(F,{icon:o})),n.createElement(M,{triggerRef:I,isOpen:x,alignment:a},n.createElement(P,{ref:E},t)))};s.displayName="DropDown";try{s.displayName="DropDown",s.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},size:{defaultValue:null,description:"Button sizing",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'}]}},disabled:{defaultValue:null,description:"Disabling the button will prevent it from receiving keyboard focus or click events",name:"disabled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"Pill shaped button appearance",name:"rounded",required:!1,type:{name:"boolean"}},withDoubleClicks:{defaultValue:null,description:"",name:"withDoubleClicks",required:!1,type:{name:"boolean"}},localeText:{defaultValue:null,description:"Language content overrides",name:"localeText",required:!1,type:{name:'Partial<Record<"loading", string>>'}},variant:{defaultValue:null,description:"Button intentional colour scheme",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"information"'}]}},minimal:{defaultValue:null,description:"Present a borderless minimal appearance",name:"minimal",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_LEFT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}const{action:_}=__STORYBOOK_MODULE_ACTIONS__,N=_("onClick"),h=_("onOpenChange"),me={title:"Components/Drop Down",component:s,tags:["updated"],decorators:[t=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(t,null))],args:{label:"Attachment",children:void 0,size:"medium",variant:"primary"},argTypes:{children:{control:!1},size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning","danger"],control:{type:"select"}}},render:t=>e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t}))},i=e.createElement(w,{label:"Download",icon:z}),S=e.createElement(w,{label:"Delete",icon:W}),b=e.createElement(w,{disabled:!0,label:"Edit",icon:$}),p={args:{label:"Attachment",children:e.createElement(e.Fragment,null,i,i,b),onClick:N,onOpenChange:h}},c={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,i,b))},args:{label:"Attachment",variant:"primary"}},v={args:{...p.args,variant:"secondary"}},O={args:{...p.args,variant:"primary",minimal:!0}},m={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,i,b))},args:{label:"Attachment",variant:"secondary",icon:L}},d={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},Array.from({length:99}).map((a,l)=>e.createElement(e.Fragment,{key:l},l%2===0?i:S))))},args:{label:"Attachment",variant:"primary"}},u={render:t=>{const[r,o]=n.useState(!1);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,S,b))},args:{label:"Controlled Menu",variant:"primary"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    children: <>
                {option1}
                {option1}
                {optionDisabled}
            </>,
    onClick,
    onOpenChange
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Box style={{
      height: '100vh',
      width: '100vw',
      maxHeight: '350px'
    }} display="flex" alignItems="center" justifyContent="center">
                <DropDown {...args} isOpen={isOpen} onOpenChange={open => {
        onOpenChange(open);
        setIsOpen(open);
      }}>
                    {option1}
                    {option1}
                    {optionDisabled}
                </DropDown>
            </Box>;
  },
  args: {
    label: 'Attachment',
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source},description:{story:"Example with the dropdown initially open in controlled mode",...c.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'primary',
    minimal: true
  }
}`,...O.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Box style={{
      height: '100vh',
      width: '100vw',
      maxHeight: '350px'
    }} display="flex" alignItems="center" justifyContent="center">
                <DropDown {...args} isOpen={isOpen} onOpenChange={open => {
        onOpenChange(open);
        setIsOpen(open);
      }}>
                    {option1}
                    {option1}
                    {optionDisabled}
                </DropDown>
            </Box>;
  },
  args: {
    label: 'Attachment',
    variant: 'secondary',
    icon: GearIcon
  }
}`,...m.parameters?.docs?.source},description:{story:"Example with custom icon in controlled mode",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <Box style={{
      height: '100vh',
      width: '100vw',
      maxHeight: '350px'
    }} display="flex" alignItems="center" justifyContent="center">
                <DropDown {...args} isOpen={isOpen} onOpenChange={open => {
        onOpenChange(open);
        setIsOpen(open);
      }}>
                    {Array.from({
          length: 99
        }).map((_, index) => <React.Fragment key={index}>
                            {index % 2 === 0 ? option1 : option2}
                        </React.Fragment>)}
                </DropDown>
            </Box>;
  },
  args: {
    label: 'Attachment',
    variant: 'primary'
  }
}`,...d.parameters?.docs?.source},description:{story:"Example with many options in controlled mode",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Box style={{
      height: '100vh',
      width: '100vw',
      maxHeight: '350px'
    }} display="flex" alignItems="center" justifyContent="center">
                <DropDown {...args} isOpen={isOpen} onOpenChange={open => {
        onOpenChange(open);
        setIsOpen(open);
      }}>
                    {option1}
                    {option2}
                    {optionDisabled}
                </DropDown>
            </Box>;
  },
  args: {
    label: 'Controlled Menu',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source},description:{story:"Controlled example demonstrating the new onOpenChange callback",...u.parameters?.docs?.description}}};const de=["Primary","WithOpenMenu","Secondary","MinimalPrimary","WithCustomIcon","WithManyOptions","Controlled"];export{u as Controlled,O as MinimalPrimary,p as Primary,v as Secondary,m as WithCustomIcon,d as WithManyOptions,c as WithOpenMenu,de as __namedExportsOrder,me as default};
