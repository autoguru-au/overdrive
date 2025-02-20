import{a as U}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{r as e,R as l}from"./index-Cr_cdoBq.js";import{B as y,c as J}from"./Box-ByZNOjEZ.js";import{S as K}from"./Stack-CSwqN_4F.js";import{u as Q}from"./OutsideClick-DaNMovmY.js";import{B as Z}from"./Button-Dt0IV2zP.js";import{I as j}from"./Icon-j9Lzmb-W.js";import{I as ee}from"./ChevronDownIcon-CWepP3PQ.js";import{F as ae}from"./Flyout-DFw-NTBI.js";import{E as le}from"./Positioner-EKfIS5Qe.js";import{I as re,a as ne,b as ue,c as te}from"./TrashCanOutlineIcon-CPnFcvNr.js";import{u as ie}from"./useTextStyles-c8XbNcHW.js";import{I as oe}from"./Inline-Dg087q-Q.js";import{T as se}from"./Text-Bw6Amj0y.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DceDftY5.js";import"./index-CYx1ALmS.js";import"./index-IxcCI6ud.js";import"./dataAttrs-BPvLuXwN.js";import"./ProgressSpinner-DIvEZamB.js";import"./Portal-MUFOK9x_.js";import"./index-WuY8yyQe.js";import"./index-CAtvbLPT.js";import"./ThemeProvider-DaUrEAYU.js";import"./makeTheme-BvwTE3C0.js";import"./useNegativeMarginTop-GVztTlAQ.js";var de="jbtx900",pe="jbtx901";const S=e.forwardRef(({children:a},n)=>e.createElement(y,{ref:n,className:de},e.createElement(y,{className:pe,overflow:"auto"},e.createElement(K,{dividers:!0,width:"full",space:"none"},a))));try{S.displayName="DropDownOptionsList",S.__docgenInfo={description:"",displayName:"DropDownOptionsList",props:{}}}catch{}const b=({children:a,label:n,icon:h=ee,alignment:V=le.BOTTOM_LEFT,isOpen:q=!1,onClick:u,...w})=>{const o=e.useRef(null),s=e.useRef(null),[t,d]=e.useState(q),G=e.useCallback(H=>{typeof u=="function"&&u(H),d(!t)},[t,u]);return Q([s],()=>d(!1)),e.createElement(e.Fragment,null,e.createElement(Z,{ref:o,onClick:G,...w},n,e.createElement(j,{icon:h})),e.createElement(ae,{triggerRef:o,isOpen:t,alignment:V},e.createElement(S,{ref:s},a)))};try{b.displayName="DropDown",b.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute on the element for e2e testing purposes",name:"testId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},minimal:{defaultValue:null,description:"",name:"minimal",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},withDoubleClicks:{defaultValue:null,description:"",name:"withDoubleClicks",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"EPositionerAlignment.BOTTOM_LEFT"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top_left"'},{value:'"top_right"'},{value:'"bottom"'},{value:'"bottom_left"'},{value:'"bottom_right"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}var me="d4lwsx0",ce="d4lwsx1";const i=({label:a,icon:n,className:h,disabled:V=!1,display:q="flex",iconColour:u="dark",is:w="button",alignItems:o="space-between",width:s="full",...t})=>{const d=ie({colour:u});return e.createElement(y,{className:J(me,h,{[ce]:V}),...t,width:s,alignItems:o,display:q,paddingX:"3",paddingY:"2",is:w},e.createElement(oe,{noWrap:!0,space:"2",width:"full",alignX:"spaceBetween",alignY:"center"},e.createElement(se,{is:"p",size:"3"},a),n?e.createElement(j,{className:d,size:"medium",icon:n}):null))};try{i.displayName="DropDownOption",i.__docgenInfo={description:"",displayName:"DropDownOption",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},iconColour:{defaultValue:{value:"dark"},description:"",name:"iconColour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},as:{defaultValue:null,description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType"}},width:{defaultValue:{value:"full"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},is:{defaultValue:{value:"button"},description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:{value:"flex"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},alignItems:{defaultValue:{value:"space-between"},description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}const ve=U("onClick"),ze={title:"Components/Drop Down",component:b,decorators:[a=>l.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},l.createElement(a,null))],args:{label:"Attachment",children:void 0,size:"medium",variant:"primary"},argTypes:{size:{options:["small","medium"],control:{type:"select"}},variant:{options:["primary","secondary","danger","information","warning","danger"],control:{type:"select"}}},render:a=>l.createElement(y,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(b,{...a}))},R=l.createElement(i,{label:"Download",icon:ne}),fe=l.createElement(i,{label:"Delete",icon:te}),ge=l.createElement(i,{disabled:!0,label:"Edit",icon:ue}),r={args:{label:"Attachment",children:l.createElement(l.Fragment,null,R,R,ge),onClick:ve}},p={args:{...r.args,isOpen:!0}},m={args:{...r.args,variant:"secondary"}},c={args:{...r.args,variant:"primary",minimal:!0}},v={args:{...r.args,variant:"secondary",rounded:!0}},f={args:{...r.args,variant:"secondary",icon:re,isOpen:!0}},g={args:{...r.args,isOpen:!0,children:l.createElement(l.Fragment,null,Array.from({length:99}).map((a,n)=>l.createElement(l.Fragment,{key:n},n%2===0?R:fe)))}};var k,P,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    children: <>
                {option1}
                {option1}
                {optionDisabled}
            </>,
    onClick
  }
}`,...(E=(P=r.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var C,x,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isOpen: true
  }
}`,...(_=(x=p.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var W,D,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,T,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'primary',
    minimal: true
  }
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,F,N;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary',
    rounded: true
  }
}`,...(N=(F=v.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,M,X;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary',
    icon: SettingsIcon,
    isOpen: true
  }
}`,...(X=(M=f.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var Y,z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(z=g.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const $e=["Primary","WithOpenMenu","Secondary","MinimalPrimary","RoundedSecondary","WithCustomIcon","WithManyOptions"];export{c as MinimalPrimary,r as Primary,v as RoundedSecondary,m as Secondary,f as WithCustomIcon,g as WithManyOptions,p as WithOpenMenu,$e as __namedExportsOrder,ze as default};
