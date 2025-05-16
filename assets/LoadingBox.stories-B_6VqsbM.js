import{r as k,R as v}from"./index-DVCUSwsV.js";import{b as x}from"./argTypes-box-C1CQ0HAO.js";import{B}from"./Box-ClEqokAe.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./tokens-DUw5KlBA.js";import"./theme.css-5ro_PoLN.js";var W="_1wlqkvt0",q="_1wlqkvt2";const s=({className:e="",randomWidth:a=!1,blinking:f=!0,backgroundColour:h="gray200",display:_="block",is:b="span",...y})=>k.createElement(B,{as:b,display:_,width:a?void 0:"full",backgroundColour:h,...y,className:[W,f&&q,e],style:{width:a?w(60,40):void 0}}),w=(e,a)=>`${Math.random()*(e-a)+a}%`;try{s.displayName="LoadingBox",s.__docgenInfo={description:"",displayName:"LoadingBox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},randomWidth:{defaultValue:{value:"false"},description:"",name:"randomWidth",required:!1,type:{name:"boolean"}},blinking:{defaultValue:{value:"true"},description:"",name:"blinking",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Loading Box",component:s,decorators:[e=>v.createElement("div",{style:{width:"50%",height:"100%",margin:"0 auto"}},e())],parameters:{chromatic:{disable:!0}},argTypes:x},r={args:{}},o={args:{blinking:!1}},t={args:{randomWidth:!0}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    blinking: false
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    randomWidth: true
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const I=["Standard","BlinkingOff","RandomWidth"];export{o as BlinkingOff,t as RandomWidth,r as Standard,I as __namedExportsOrder,V as default};
