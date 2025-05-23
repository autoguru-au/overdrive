import{h as A,r as e,B as u,c as v,y as O,t as M,e as G}from"./iframe-B8iXgyt9.js";import{a as U}from"./number-BbbOPvnN.js";import{I as j}from"./Icon-C88vUc02.js";import{I as B}from"./Inline-C5F93m_p.js";import{T as H}from"./Text-BLEkj1El.js";import{I as X}from"./MinusIcon-BFrS1NS8.js";import{I as $}from"./PlusIcon-D4dMtuVL.js";import"./resolveResponsiveProps-jhGTtHr7.js";var z="_10wm9ba0",K="_10wm9ba1",y={default:"_10wm9ba2",disabled:"_10wm9ba3"},L=["_10wm9ba4 onxwju9f onxwjuff","_10wm9ba5"];const h=({min:r,max:s,value:o,step:n,direction:t})=>{const a=(t==="DOWN"?-1:1)*n;return A.clamp(U(o,a),r,s)},S=({disabled:r,icon:s,label:o,onClick:n})=>e.createElement(u,{as:"button",className:[y.default,{[y.disabled]:r},M({colour:"white"})],backgroundColour:r?"neutral":"primary","aria-label":o,padding:"none",borderRadius:"full",display:"flex",alignItems:"center",justifyContent:"center",disabled:r,tabIndex:-1,onClick:n},e.createElement(j,{icon:s,size:"small"})),b=({className:r="",disabled:s=!1,isFullWidth:o=!1,step:n=1,min:t=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,value:q=0,format:V=l=>l.toString(),onChange:i=()=>{}})=>{const l=A.clamp(q,t,a),c=s||l===void 0||l===null,g=e.useCallback(()=>i(h({direction:"DOWN",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),_=e.useCallback(()=>i(h({direction:"UP",step:n,min:t,max:a,value:l})),[n,t,a,l,i]),R=e.useCallback(m=>{switch(m.key){case"ArrowLeft":return g();case"ArrowRight":return _();case"Home":return m.preventDefault(),i(t);case"End":return m.preventDefault(),i(a);case"Escape":{m.currentTarget.blur();break}}},[t,a,g,_,i]);return e.createElement(u,{className:v(r,K,O({as:"button"}),c&&z),userSelect:"none","aria-disabled":c,tabIndex:0,borderWidth:"1",borderColour:"gray",padding:"3",borderRadius:"1",width:o?"full":"fit-content",minWidth:"fit-content",onKeyDown:R},e.createElement(B,{alignX:"space-between",noWrap:!0},e.createElement(u,null,e.createElement(S,{icon:X,label:"step down",disabled:c,onClick:g})),e.createElement(u,null,e.createElement(H,{as:"span",colour:"dark",display:"block",className:v(L),size:"4"},Number.isFinite(l)?V(l):"")),e.createElement(u,null,e.createElement(S,{icon:$,label:"step up",disabled:c,onClick:_}))))};try{b.displayName="Stepper",b.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"Number.MIN_SAFE_INTEGER"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"Number.MAX_SAFE_INTEGER"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"(value) => value.toString()"},description:"",name:"format",required:!1,type:{name:"((value: number) => string)"}},onChange:{defaultValue:{value:"() => void 0"},description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}const{action:D}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Forms & Input Fields/Stepper",component:b},E={render:({onChange:r,value:s,...o})=>{const[n,t]=e.useState(s);return G.createElement(b,{onChange:a=>{t(a),r&&r(a)},value:n,...o})}},d={...E,args:{value:2.5,min:0,max:10,step:.5,disabled:!1,onChange:D("onChange")}},p={...E,args:{...d.args,isFullWidth:!0}},P=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),f={...E,args:{value:32,min:0,max:99,step:.05,disabled:!1,format:P.format,onChange:D("onChange")}};var I,N,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2.5,
    min: 0,
    max: 10,
    step: 0.5,
    disabled: false,
    onChange: action('onChange')
  }
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var F,C,x;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Standard.args,
    isFullWidth: true
  }
}`,...(x=(C=p.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var W,T,k;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(T=f.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const le=["Standard","FullWidth","WithFormatting"];export{p as FullWidth,d as Standard,f as WithFormatting,le as __namedExportsOrder,ne as default};
