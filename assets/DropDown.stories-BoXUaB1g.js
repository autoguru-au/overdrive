import{r as e,B as f,S as Y,t as X,c as G,e as a}from"./iframe-C_bA5shj.js";import{B as H}from"./Button-DlNVolKd.js";import{F as K}from"./Flyout-ckcpYKcn.js";import{I as $}from"./Icon-BzD9lmaF.js";import{u as U}from"./OutsideClick-C0qLKk3G.js";import{I as J}from"./ChevronDownIcon-BSJ34Kn8.js";import{E as Q}from"./Positioner-CdH1K1vJ.js";import{I as Z}from"./Inline-r3ivNJ6m.js";import{T as ee}from"./Text-Bu_KMAJq.js";import{I as re,a as ae,b as ne,c as te}from"./TrashCanOutlineIcon-CUjQMMQh.js";import"./ProgressSpinner-DKoyI-KV.js";import"./resolveResponsiveProps-CWlS2Mbp.js";import"./Portal-7HoW5O0S.js";import"./index-CibneER-.js";import"./index-CZMRv72L.js";var oe="jbtx900",se="jbtx901";const v=e.forwardRef(({children:r},n)=>e.createElement(f,{ref:n,className:oe},e.createElement(f,{className:se,overflow:"auto"},e.createElement(Y,{dividers:!0,width:"full",space:"none"},r))));v.displayName="DropDownOptionsList";try{v.displayName="DropDownOptionsList",v.__docgenInfo={description:"",displayName:"DropDownOptionsList",props:{}}}catch{}const _=({children:r,label:n,icon:h=J,alignment:E=Q.BOTTOM_LEFT,isOpen:O=!1,onClick:o,...b})=>{const l=e.useRef(null),c=e.useRef(null),[s,m]=e.useState(O),z=e.useCallback(j=>{typeof o=="function"&&o(j),m(!s)},[s,o]);return U([c],()=>m(!1)),e.createElement(e.Fragment,null,e.createElement(H,{ref:l,onClick:z,...b},n,e.createElement($,{icon:h})),e.createElement(K,{triggerRef:l,isOpen:s,alignment:E},e.createElement(v,{ref:c},r)))};try{_.displayName="DropDown",_.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_LEFT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}var ie="d4lwsx0",le="d4lwsx1";const i=({label:r,icon:n,className:h,disabled:E=!1,display:O="flex",iconColour:o="dark",is:b="button",alignItems:l="center",width:c="full",...s})=>{const m=X({colour:o});return e.createElement(f,{as:b,className:G(ie,h,{[le]:E}),...s,width:c,alignItems:l,display:O,paddingX:"3",paddingY:"2"},e.createElement(Z,{noWrap:!0,space:"2",width:"full",alignX:"space-between",alignY:"center"},e.createElement(ee,{as:"p",size:"3"},r),n?e.createElement($,{className:m,size:"medium",icon:n}):null))};try{i.displayName="DropDownOption",i.__docgenInfo={description:"",displayName:"DropDownOption",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},iconColour:{defaultValue:{value:"dark"},description:"",name:"iconColour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}}}}}catch{}const{action:ce}=__STORYBOOK_MODULE_ACTIONS__,me=ce("onClick"),ke={title:"Components/Drop Down",component:_,decorators:[r=>a.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},a.createElement(r,null))],args:{label:"Attachment",children:void 0,size:"medium",variant:"primary"},argTypes:{size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning","danger"],control:{type:"select"}}},render:r=>a.createElement(f,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},a.createElement(_,{...r}))},D=a.createElement(i,{label:"Download",icon:ae}),pe=a.createElement(i,{label:"Delete",icon:te}),ue=a.createElement(i,{disabled:!0,label:"Edit",icon:ne}),t={args:{label:"Attachment",children:a.createElement(a.Fragment,null,D,D,ue),onClick:me}},p={args:{...t.args,isOpen:!0}},u={args:{...t.args,variant:"secondary"}},d={args:{...t.args,variant:"primary",minimal:!0}},g={args:{...t.args,variant:"secondary",icon:re,isOpen:!0}},y={args:{...t.args,isOpen:!0,children:a.createElement(a.Fragment,null,Array.from({length:99}).map((r,n)=>a.createElement(a.Fragment,{key:n},n%2===0?D:pe)))}};var w,I,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    children: <>
                {option1}
                {option1}
                {optionDisabled}
            </>,
    onClick
  }
}`,...(x=(I=t.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var S,k,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isOpen: true
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,N,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var M,P,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'primary',
    minimal: true
  }
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var R,q,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary',
    icon: SettingsIcon,
    isOpen: true
  }
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var B,L,W;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isOpen: true,
    children: <>
                {Array.from({
        length: 99
      }).map((_, index) => <React.Fragment key={index}>
                        {index % 2 === 0 ? option1 : option2}
                    </React.Fragment>)}
            </>
  }
}`,...(W=(L=y.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const Ce=["Primary","WithOpenMenu","Secondary","MinimalPrimary","WithCustomIcon","WithManyOptions"];export{d as MinimalPrimary,t as Primary,u as Secondary,g as WithCustomIcon,y as WithManyOptions,p as WithOpenMenu,Ce as __namedExportsOrder,ke as default};
