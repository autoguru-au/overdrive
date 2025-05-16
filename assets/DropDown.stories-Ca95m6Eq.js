import{a as X}from"./index-B-lxVbXh.js";import{r as e,R as a}from"./index-DVCUSwsV.js";import{B as f,c as Y}from"./Box-CfsxG9sl.js";import{B as G}from"./Button-7Ti-PoOr.js";import{F as H}from"./Flyout-BxAn2krP.js";import{I as $}from"./Icon-DFI0QSpb.js";import{u as J}from"./OutsideClick-Dgu4GDjw.js";import{S as K}from"./Stack-CT3qhkBe.js";import{I as Q}from"./ChevronDownIcon-MTbV_09x.js";import{E as U}from"./Positioner-CcPvLVtl.js";import{I as Z}from"./Inline-CxL6ENAr.js";import{T as ee}from"./Text-DW-IBnnS.js";import{u as re}from"./useTextStyles-KK5z18CB.js";import{I as ae,a as te,b as ne,c as oe}from"./TrashCanOutlineIcon-_c7sALuu.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ProgressSpinner-C5quWxNA.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./resolveResponsiveProps-DQ5qCS0e.js";import"./index-D_iG_Vvt.js";import"./index-qJC9azT-.js";import"./index-4KvmGZzY.js";import"./Portal-I3kmn8Hk.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./OverdriveProvider-DbAsmcrs.js";import"./theme.css-KegNup0l.js";/* empty css                             */import"./tokens-DsuZpBdx.js";var se="jbtx900",ie="jbtx901";const v=e.forwardRef(({children:r},t)=>e.createElement(f,{ref:t,className:se},e.createElement(f,{className:ie,overflow:"auto"},e.createElement(K,{dividers:!0,width:"full",space:"none"},r))));v.displayName="DropDownOptionsList";try{v.displayName="DropDownOptionsList",v.__docgenInfo={description:"",displayName:"DropDownOptionsList",props:{}}}catch{}const _=({children:r,label:t,icon:h=Q,alignment:E=U.BOTTOM_LEFT,isOpen:b=!1,onClick:o,...w})=>{const l=e.useRef(null),c=e.useRef(null),[s,m]=e.useState(b),z=e.useCallback(j=>{typeof o=="function"&&o(j),m(!s)},[s,o]);return J([c],()=>m(!1)),e.createElement(e.Fragment,null,e.createElement(G,{ref:l,onClick:z,...w},t,e.createElement($,{icon:h})),e.createElement(H,{triggerRef:l,isOpen:s,alignment:E},e.createElement(v,{ref:c},r)))};try{_.displayName="DropDown",_.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_LEFT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}var le="d4lwsx0",ce="d4lwsx1";const i=({label:r,icon:t,className:h,disabled:E=!1,display:b="flex",iconColour:o="dark",is:w="button",alignItems:l="center",width:c="full",...s})=>{const m=re({colour:o});return e.createElement(f,{className:Y(le,h,{[ce]:E}),...s,width:c,alignItems:l,display:b,paddingX:"3",paddingY:"2",is:w},e.createElement(Z,{noWrap:!0,space:"2",width:"full",alignX:"space-between",alignY:"center"},e.createElement(ee,{is:"p",size:"3"},r),t?e.createElement($,{className:m,size:"medium",icon:t}):null))};try{i.displayName="DropDownOption",i.__docgenInfo={description:"",displayName:"DropDownOption",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},iconColour:{defaultValue:{value:"dark"},description:"",name:"iconColour",required:!1,type:{name:"enum",value:[{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}}}}}catch{}const me=X("onClick"),ze={title:"Components/Drop Down",component:_,decorators:[r=>a.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},a.createElement(r,null))],args:{label:"Attachment",children:void 0,size:"medium",variant:"primary"},argTypes:{size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning","danger"],control:{type:"select"}}},render:r=>a.createElement(f,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},a.createElement(_,{...r}))},D=a.createElement(i,{label:"Download",icon:te}),pe=a.createElement(i,{label:"Delete",icon:oe}),ue=a.createElement(i,{disabled:!0,label:"Edit",icon:ne}),n={args:{label:"Attachment",children:a.createElement(a.Fragment,null,D,D,ue),onClick:me}},p={args:{...n.args,isOpen:!0}},u={args:{...n.args,variant:"secondary"}},d={args:{...n.args,variant:"primary",minimal:!0}},g={args:{...n.args,variant:"secondary",icon:ae,isOpen:!0}},y={args:{...n.args,isOpen:!0,children:a.createElement(a.Fragment,null,Array.from({length:99}).map((r,t)=>a.createElement(a.Fragment,{key:t},t%2===0?D:pe)))}};var O,I,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    children: <>
                {option1}
                {option1}
                {optionDisabled}
            </>,
    onClick
  }
}`,...(x=(I=n.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var k,C,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isOpen: true
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,F,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,R,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'primary',
    minimal: true
  }
}`,...(M=(R=d.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var q,A,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary',
    icon: SettingsIcon,
    isOpen: true
  }
}`,...(V=(A=g.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,B,L;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(B=y.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const je=["Primary","WithOpenMenu","Secondary","MinimalPrimary","WithCustomIcon","WithManyOptions"];export{d as MinimalPrimary,n as Primary,u as Secondary,g as WithCustomIcon,y as WithManyOptions,p as WithOpenMenu,je as __namedExportsOrder,ze as default};
