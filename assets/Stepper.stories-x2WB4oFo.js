import{a as D}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{r as e,R as H}from"./index-Cr_cdoBq.js";import{d as R}from"./index-CYx1ALmS.js";import{B as V,c as S,u as E}from"./Box-riOnoi3Y.js";import{a as O}from"./number-BbbOPvnN.js";import{C as U,a as h}from"./Column-D6cLH2tJ.js";import{I as X}from"./MinusIcon-Beob0_L5.js";import{T as $}from"./Text-B-fLVrc5.js";import{I as z}from"./PlusIcon-BwhzlTq3.js";import{u as j}from"./useTextStyles-DNm53NZA.js";import{I as K}from"./Icon-u2F7oOeh.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-C932wzq6.js";import"./useNegativeMarginTop-B5m0RFWn.js";import"./dataAttrs-BPvLuXwN.js";var L="_10wm9ba0",P="_10wm9ba1",y={full:"_10wm9ba2",default:"_10wm9ba3"},_={default:"_10wm9ba4",disabled:"_10wm9ba5"},J="_10wm9ba6";const w=({min:t,max:o,value:s,step:n,direction:r})=>{const a=(r==="DOWN"?-1:1)*n;return R.clamp(O(s,a),t,o)},N=({disabled:t,icon:o,label:s,onClick:n})=>e.createElement(V,{is:"button",className:[_.default,{[_.disabled]:t},j({colour:"white"})],backgroundColour:t?"neutral":"primary","aria-label":s,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:t,tabIndex:-1,onClick:n},e.createElement(K,{icon:o,size:"small"})),f=({className:t="",disabled:o=!1,isFullWidth:s=!1,step:n=1,min:r=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:G=0,format:M=l=>l.toString(),onChange:i=()=>{}})=>{const l=R.clamp(G,r,a),d=o||l===void 0||l===null,b=e.useCallback(()=>i(w({direction:"DOWN",step:n,min:r,max:a,value:l})),[n,r,a,l,i]),g=e.useCallback(()=>i(w({direction:"UP",step:n,min:r,max:a,value:l})),[n,r,a,l,i]),B=e.useCallback(m=>{switch(m.key){case"ArrowLeft":return b();case"ArrowRight":return g();case"Home":return m.preventDefault(),i(r);case"End":return m.preventDefault(),i(a);case"Escape":{m.currentTarget.blur();break}}},[r,a,b,g,i]);return e.createElement(V,{className:S(t,P,E({is:"button"}),d&&L,{[y.default]:!s,[y.full]:s}),userSelect:"none","aria-disabled":d,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",boxShadow:"2",onKeyDown:B},e.createElement(U,{noWrap:!0,width:"full"},e.createElement(h,{noShrink:!0,alignSelf:"centre"},e.createElement(N,{icon:X,label:"step down",disabled:d,onClick:b})),e.createElement(h,{noShrink:!0,grow:!0,width:"auto",alignSelf:"centre"},e.createElement($,{is:"span",align:"center",colour:"dark",display:"block",className:S(E({paddingX:"2",width:"full",is:"span"}),J),size:"4"},Number.isFinite(l)?M(l):"")),e.createElement(h,{noShrink:!0,alignSelf:"centre"},e.createElement(N,{icon:z,label:"step up",disabled:d,onClick:g}))))};try{f.displayName="Stepper",f.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const pe={title:"Forms & Input Fields/Stepper",component:f},v={render:({onChange:t,value:o,...s})=>{const[n,r]=e.useState(o);return H.createElement(f,{onChange:a=>{r(a),t(a)},value:n,...s})}},u={...v,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:D("onChange")}},c={...v,args:{...u.args,isFullWidth:!0}},Q=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),p={...v,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:Q.format,onChange:D("onChange")}};var I,C,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    disabled: false,
    onChange: action('onChange')
  }
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var F,x,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Standard.args,
    isFullWidth: true
  }
}`,...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var W,A,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 32,
    min: 0,
    max: 99,
    step: 0.05,
    disabled: false,
    format: formatter.format,
    onChange: action('onChange')
  }
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const fe=["Standard","FullWidth","WithFormatting"];export{c as FullWidth,u as Standard,p as WithFormatting,fe as __namedExportsOrder,pe as default};
