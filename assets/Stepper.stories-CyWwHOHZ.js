import{a as A}from"./index-B-lxVbXh.js";import{r as e,R as G}from"./index-DVCUSwsV.js";import{d as q}from"./index-D_iG_Vvt.js";import{B as u,c as y,b as M}from"./Box-ClEqokAe.js";import{a as j}from"./number-BbbOPvnN.js";import{I as H}from"./Icon-DzLh_LOt.js";import{I as U}from"./Inline-gtY-Vsok.js";import{T as X}from"./Text-D09diHf7.js";import{u as $}from"./useTextStyles-DsccIS_S.js";import{I as z}from"./MinusIcon-XaS1mI3B.js";import{I as B}from"./PlusIcon-Ca8xfaqQ.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./resolveResponsiveProps-CKCgD9S0.js";import"./index-4KvmGZzY.js";var O="_10wm9ba0",K="_10wm9ba1",_={default:"_10wm9ba2",disabled:"_10wm9ba3"},L=["_10wm9ba4 onxwjuag onxwjugg","_10wm9ba5"];const h=({min:r,max:s,value:o,step:n,direction:t})=>{const a=(t==="DOWN"?-1:1)*n;return q.clamp(j(o,a),r,s)},S=({disabled:r,icon:s,label:o,onClick:n})=>e.createElement(u,{as:"button",className:[_.default,{[_.disabled]:r},$({colour:"white"})],backgroundColour:r?"neutral":"primary","aria-label":o,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:r,tabIndex:-1,onClick:n},e.createElement(H,{icon:s,size:"small"})),b=({className:r="",disabled:s=!1,isFullWidth:o=!1,step:n=1,min:t=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:D=0,format:R=l=>l.toString(),onChange:i=()=>{}})=>{const l=q.clamp(D,t,a),m=s||l===void 0||l===null,g=e.useCallback(()=>i(h({direction:"DOWN",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),v=e.useCallback(()=>i(h({direction:"UP",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),V=e.useCallback(c=>{switch(c.key){case"ArrowLeft":return g();case"ArrowRight":return v();case"Home":return c.preventDefault(),i(t);case"End":return c.preventDefault(),i(a);case"Escape":{c.currentTarget.blur();break}}},[t,a,g,v,i]);return e.createElement(u,{className:y(r,K,M({as:"button"}),m&&O),userSelect:"none","aria-disabled":m,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",width:o?"full":"fit-content",minWidth:"fit-content",onKeyDown:V},e.createElement(U,{alignX:"space-between",noWrap:!0},e.createElement(u,null,e.createElement(S,{icon:z,label:"step down",disabled:m,onClick:g})),e.createElement(u,null,e.createElement(X,{as:"span",colour:"dark",display:"block",className:y(L),size:"4"},Number.isFinite(l)?R(l):"")),e.createElement(u,null,e.createElement(S,{icon:B,label:"step up",disabled:m,onClick:v}))))};try{b.displayName="Stepper",b.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const me={title:"Forms & Input Fields/Stepper",component:b},E={render:({onChange:r,value:s,...o})=>{const[n,t]=e.useState(s);return G.createElement(b,{onChange:a=>{t(a),r&&r(a)},value:n,...o})}},d={...E,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:A("onChange")}},p={...E,args:{...d.args,isFullWidth:!0}},P=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),f={...E,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:P.format,onChange:A("onChange")}};var I,N,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    disabled: false,
    onChange: action('onChange')
  }
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var F,x,C;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Standard.args,
    isFullWidth: true
  }
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var W,k,T;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(k=f.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ce=["Standard","FullWidth","WithFormatting"];export{p as FullWidth,d as Standard,f as WithFormatting,ce as __namedExportsOrder,me as default};
