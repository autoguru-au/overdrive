import{a as D}from"./index-B-lxVbXh.js";import{r as e,R as H}from"./index-CIentmI6.js";import{d as R}from"./index-D_iG_Vvt.js";import{B as V,c as h,u as E}from"./Box-Bevh8JBX.js";import{a as U}from"./number-BbbOPvnN.js";import{C as X,a as v}from"./Column-iD---Rqe.js";import{I as $}from"./MinusIcon-FIUarqtE.js";import{T as z}from"./Text-BOKces_e.js";import{I as O}from"./PlusIcon-a_PJVwc9.js";import{u as j}from"./useTextStyles-BBYvKUtt.js";import{I as K}from"./Icon-CDjFf78x.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useNegativeMarginTop-B_Mwje1-.js";import"./dataAttrs-C4KudU4k.js";var L="_10wm9ba0",P="_10wm9ba1",y={full:"_10wm9ba2",default:"_10wm9ba3"},_={default:"_10wm9ba4",disabled:"_10wm9ba5"},J="_10wm9ba6";const w=({min:r,max:o,value:s,step:n,direction:t})=>{const a=(t==="DOWN"?-1:1)*n;return R.clamp(U(s,a),r,o)},N=({disabled:r,icon:o,label:s,onClick:n})=>e.createElement(V,{is:"button",className:[_.default,{[_.disabled]:r},j({colour:"white"})],backgroundColour:r?"neutral":"primary","aria-label":s,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:r,tabIndex:-1,onClick:n},e.createElement(K,{icon:o,size:"small"})),f=({className:r="",disabled:o=!1,isFullWidth:s=!1,step:n=1,min:t=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:G=0,format:M=l=>l.toString(),onChange:i=()=>{}})=>{const l=R.clamp(G,t,a),d=o||l===void 0||l===null,b=e.useCallback(()=>i(w({direction:"DOWN",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),g=e.useCallback(()=>i(w({direction:"UP",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),B=e.useCallback(m=>{switch(m.key){case"ArrowLeft":return b();case"ArrowRight":return g();case"Home":return m.preventDefault(),i(t);case"End":return m.preventDefault(),i(a);case"Escape":{m.currentTarget.blur();break}}},[t,a,b,g,i]);return e.createElement(V,{className:h(r,P,E({is:"button"}),d&&L,{[y.default]:!s,[y.full]:s}),userSelect:"none","aria-disabled":d,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",boxShadow:"2",onKeyDown:B},e.createElement(X,{noWrap:!0,width:"full"},e.createElement(v,{noShrink:!0,alignSelf:"centre"},e.createElement(N,{icon:$,label:"step down",disabled:d,onClick:b})),e.createElement(v,{noShrink:!0,grow:!0,width:"auto",alignSelf:"centre"},e.createElement(z,{is:"span",align:"center",colour:"dark",display:"block",className:h(E({paddingX:"2",width:"full",is:"span"}),J),size:"4"},Number.isFinite(l)?M(l):"")),e.createElement(v,{noShrink:!0,alignSelf:"centre"},e.createElement(N,{icon:O,label:"step up",disabled:d,onClick:g}))))};try{f.displayName="Stepper",f.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const pe={title:"Forms & Input Fields/Stepper",component:f},S={render:({onChange:r,value:o,...s})=>{const[n,t]=e.useState(o);return H.createElement(f,{onChange:a=>{t(a),r&&r(a)},value:n,...s})}},u={...S,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:D("onChange")}},c={...S,args:{...u.args,isFullWidth:!0}},Q=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),p={...S,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:Q.format,onChange:D("onChange")}};var I,C,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
