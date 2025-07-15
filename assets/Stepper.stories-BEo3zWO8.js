import{j as I,r as e,B as u,c as E,t as W,e as x}from"./iframe-Bw60F3r3.js";import{a as T}from"./number-BbbOPvnN.js";import{I as k}from"./Icon-DL18B8I0.js";import{I as A}from"./Inline-BWeOzgzx.js";import{T as D}from"./Text-Dp2MR2jg.js";import{I as q}from"./MinusIcon-BA8C3qT0.js";import{I as V}from"./PlusIcon-BpNEHadd.js";import"./resolveResponsiveProps-DGdp35wv.js";var R="_10wm9ba0",O="_10wm9ba1",y={default:"_10wm9ba2",disabled:"_10wm9ba3"},j=["_10wm9ba4 onxwju9j onxwjufn","_10wm9ba5"];const h=({min:r,max:s,value:o,step:n,direction:t})=>{const a=(t==="DOWN"?-1:1)*n;return I.clamp(T(o,a),r,s)},S=({disabled:r,icon:s,label:o,onClick:n})=>e.createElement(u,{as:"button",className:[y.default,{[y.disabled]:r},W({colour:"white"})],backgroundColour:r?"neutral":"primary","aria-label":o,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:r,tabIndex:-1,onClick:n},e.createElement(k,{icon:s,size:"small"})),b=({className:r="",disabled:s=!1,isFullWidth:o=!1,step:n=1,min:t=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:w=0,format:C=l=>l.toString(),onChange:i=()=>{}})=>{const l=I.clamp(w,t,a),c=s||l===void 0||l===null,g=e.useCallback(()=>i(h({direction:"DOWN",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),v=e.useCallback(()=>i(h({direction:"UP",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),F=e.useCallback(m=>{switch(m.key){case"ArrowLeft":return g();case"ArrowRight":return v();case"Home":return m.preventDefault(),i(t);case"End":return m.preventDefault(),i(a);case"Escape":{m.currentTarget.blur();break}}},[t,a,g,v,i]);return e.createElement(u,{className:E(r,O,c&&R),userSelect:"none","aria-disabled":c,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",width:o?"full":"fit-content",minWidth:"fit-content",onKeyDown:F,odComponent:"stepper"},e.createElement(A,{alignX:"space-between",noWrap:!0},e.createElement(u,null,e.createElement(S,{icon:q,label:"step down",disabled:c,onClick:g})),e.createElement(u,null,e.createElement(D,{as:"span",colour:"dark",display:"block",className:E(j),size:"4"},Number.isFinite(l)?C(l):"")),e.createElement(u,null,e.createElement(S,{icon:V,label:"step up",disabled:c,onClick:v}))))};try{b.displayName="Stepper",b.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const{action:N}=__STORYBOOK_MODULE_ACTIONS__,L={title:"Forms & Input Fields/Stepper",tags:["review"],component:b},_={render:({onChange:r,value:s,...o})=>{const[n,t]=e.useState(s);return x.createElement(b,{onChange:a=>{t(a),r&&r(a)},value:n,...o})}},d={..._,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:N("onChange")}},p={..._,args:{...d.args,isFullWidth:!0}},M=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),f={..._,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:M.format,onChange:N("onChange")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    disabled: false,
    onChange: action('onChange')
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Standard.args,
    isFullWidth: true
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const P=["Standard","FullWidth","WithFormatting"];export{p as FullWidth,d as Standard,f as WithFormatting,P as __namedExportsOrder,L as default};
