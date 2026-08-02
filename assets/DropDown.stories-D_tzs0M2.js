import{r as n,e,B as g}from"./iframe-ChbfxQZb.js";import{B as A}from"./Button-CKsANr3w.js";import{F as M}from"./Flyout-DKAHPoPB.js";import{I as F}from"./Icon-DOBnw5W4.js";import{u as H}from"./OutsideClick-aLbLTGde.js";import{D as P,a as x}from"./DropDownOption-07FnbxUX.js";import{I as R}from"./CaretDownIcon-DYUFoX5M.js";import{E as j}from"./Positioner-DB---voZ.js";import{I as L,a as W}from"./TrashIcon-CgZzOas3.js";import{I as z}from"./DownloadIcon-DC4EqEmv.js";import{I as $}from"./NotePencilIcon-DJkFKd8e.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressSpinner-3cdXORAU.js";import"./resolveResponsiveProps-BV_BSYur.js";import"./flex-CDp9aCvG.js";import"./Text-CPgvrLJn.js";import"./Portal-CNVeqlbJ.js";import"./index-C0hAkQCE.js";import"./index-BI9DWexV.js";const s=({children:t,label:r,icon:o=R,alignment:a=j.BOTTOM_LEFT,isOpen:l,onOpenChange:D,onClick:w,...k})=>{const I=n.useRef(null),E=n.useRef(null),[q,B]=n.useState(!1),C=l??q,y=n.useCallback(f=>{D?.(f),l===void 0&&B(f)},[l,D]),V=n.useCallback(f=>{typeof w=="function"&&w(f),y(!C)},[C,w,y]),T=n.useCallback(()=>{y(!1)},[y]);return H([E],T),n.createElement(n.Fragment,null,n.createElement(A,{ref:I,onClick:V,...k},r,n.createElement(F,{icon:o})),n.createElement(M,{triggerRef:I,isOpen:C,alignment:a},n.createElement(P,{ref:E},t)))};s.displayName="DropDown";try{s.displayName="DropDown",s.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},size:{defaultValue:null,description:"Button sizing",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'}]}},disabled:{defaultValue:null,description:"Disabling the button will prevent it from receiving keyboard focus or click events",name:"disabled",required:!1,type:{name:"boolean"}},outlined:{defaultValue:null,description:'Transparent fill with a brand-coloured border and label.\n\nCurrently applies to `variant="primary"` only, and ignored when `minimal`\nis set — the two are opposites.',name:"outlined",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}},rounded:{defaultValue:null,description:"Pill shaped button appearance",name:"rounded",required:!1,type:{name:"boolean"}},minimal:{defaultValue:null,description:"Present a borderless minimal appearance",name:"minimal",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},withDoubleClicks:{defaultValue:null,description:"",name:"withDoubleClicks",required:!1,type:{name:"boolean"}},localeText:{defaultValue:null,description:"Language content overrides",name:"localeText",required:!1,type:{name:'Partial<Record<"loading", string>>'}},variant:{defaultValue:null,description:"Button intentional colour scheme",name:"variant",required:!1,type:{name:"enum",value:[{value:'"brand"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"information"'}]}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_LEFT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}const{action:_}=__STORYBOOK_MODULE_ACTIONS__,N=_("onClick"),h=_("onOpenChange"),me={title:"Components/Drop Down",component:s,tags:["updated"],decorators:[t=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(t,null))],args:{label:"Attachment",children:void 0,size:"medium",variant:"primary"},argTypes:{children:{control:!1},size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning","danger"],control:{type:"select"}}},render:t=>e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t}))},i=e.createElement(x,{label:"Download",icon:z}),S=e.createElement(x,{label:"Delete",icon:W}),b=e.createElement(x,{disabled:!0,label:"Edit",icon:$}),p={args:{label:"Attachment",children:e.createElement(e.Fragment,null,i,i,b),onClick:N,onOpenChange:h}},c={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,i,b))},args:{label:"Attachment",variant:"primary"}},v={args:{...p.args,variant:"secondary"}},O={args:{...p.args,variant:"primary",minimal:!0}},m={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,i,b))},args:{label:"Attachment",variant:"secondary",icon:L}},d={render:t=>{const[r,o]=n.useState(!0);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},Array.from({length:99}).map((a,l)=>e.createElement(e.Fragment,{key:l},l%2===0?i:S))))},args:{label:"Attachment",variant:"primary"}},u={render:t=>{const[r,o]=n.useState(!1);return e.createElement(g,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{...t,isOpen:r,onOpenChange:a=>{h(a),o(a)}},i,S,b))},args:{label:"Controlled Menu",variant:"primary"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
