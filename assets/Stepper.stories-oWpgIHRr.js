import{d as A,r as e,B as d,c as E,A as O,e as M}from"./iframe-CFwUcJnX.js";import{a as j}from"./number-BbbOPvnN.js";import{I as G}from"./Icon-DeLX8lrb.js";import{I as U}from"./Inline-C4wfw7Gl.js";import{T as B}from"./Text-Bekh4-oh.js";import{I as H}from"./MinusIcon-BK8dsTx9.js";import{I as X}from"./PlusIcon-D5kxzJks.js";import"./resolveResponsiveProps-BLCo0nz9.js";import"./useNegativeMarginTop-CiLZ67so.js";var $="_10wm9ba0",z="_10wm9ba1",y={default:"_10wm9ba2",disabled:"_10wm9ba3"},K=["_10wm9ba4 onxwju9j onxwjufn","_10wm9ba5"];const h=({min:r,max:s,value:o,step:n,direction:t})=>{const a=(t==="DOWN"?-1:1)*n;return A.clamp(j(o,a),r,s)},S=({disabled:r,icon:s,label:o,onClick:n})=>e.createElement(d,{as:"button",className:[y.default,{[y.disabled]:r},O({colour:"white"})],backgroundColour:r?"neutral":"primary","aria-label":o,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:r,tabIndex:-1,onClick:n},e.createElement(G,{icon:s,size:"small"})),b=({className:r="",disabled:s=!1,isFullWidth:o=!1,step:n=1,min:t=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:q=0,format:V=l=>l.toString(),onChange:i=()=>{}})=>{const l=A.clamp(q,t,a),c=s||l===void 0||l===null,g=e.useCallback(()=>i(h({direction:"DOWN",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),v=e.useCallback(()=>i(h({direction:"UP",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),R=e.useCallback(m=>{switch(m.key){case"ArrowLeft":return g();case"ArrowRight":return v();case"Home":return m.preventDefault(),i(t);case"End":return m.preventDefault(),i(a);case"Escape":{m.currentTarget.blur();break}}},[t,a,g,v,i]);return e.createElement(d,{className:E(r,z,c&&$),userSelect:"none","aria-disabled":c,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",width:o?"full":"fit-content",minWidth:"fit-content",onKeyDown:R,odComponent:"stepper"},e.createElement(U,{alignX:"space-between",noWrap:!0},e.createElement(d,null,e.createElement(S,{icon:H,label:"step down",disabled:c,onClick:g})),e.createElement(d,null,e.createElement(B,{as:"span",colour:"dark",display:"block",className:E(K),size:"4"},Number.isFinite(l)?V(l):"")),e.createElement(d,null,e.createElement(S,{icon:X,label:"step up",disabled:c,onClick:v}))))};try{b.displayName="Stepper",b.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const{action:D}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Forms & Input Fields/Stepper",component:b},_={render:({onChange:r,value:s,...o})=>{const[n,t]=e.useState(s);return M.createElement(b,{onChange:a=>{t(a),r&&r(a)},value:n,...o})}},u={..._,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:D("onChange")}},p={..._,args:{...u.args,isFullWidth:!0}},L=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),f={..._,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:L.format,onChange:D("onChange")}};var I,N,w;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    disabled: false,
    onChange: action('onChange')
  }
}`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,F,W;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Standard.args,
    isFullWidth: true
  }
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var x,T,k;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(T=f.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const le=["Standard","FullWidth","WithFormatting"];export{p as FullWidth,u as Standard,f as WithFormatting,le as __namedExportsOrder,ne as default};
