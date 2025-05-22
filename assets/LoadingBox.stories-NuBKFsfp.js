import{r as k,B as v,e as x}from"./iframe-C_bA5shj.js";import{b as B}from"./argTypes-box-DWNBb2xN.js";var W="_1wlqkvt0",q="_1wlqkvt2";const t=({className:e="",randomWidth:a=!1,blinking:f=!0,backgroundColour:h="gray200",display:_="block",is:b="span",...y})=>k.createElement(v,{as:b,display:_,width:a?void 0:"full",backgroundColour:h,...y,className:[W,f&&q,e],style:{width:a?w(60,40):void 0}}),w=(e,a)=>`${Math.random()*(e-a)+a}%`;try{t.displayName="LoadingBox",t.__docgenInfo={description:"",displayName:"LoadingBox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},randomWidth:{defaultValue:{value:"false"},description:"",name:"randomWidth",required:!1,type:{name:"boolean"}},blinking:{defaultValue:{value:"true"},description:"",name:"blinking",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Loading Box",component:t,decorators:[e=>x.createElement("div",{style:{width:"50%",height:"100%",margin:"0 auto"}},e())],parameters:{chromatic:{disable:!0}},argTypes:B},r={args:{}},o={args:{blinking:!1}},s={args:{randomWidth:!0}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    blinking: false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    randomWidth: true
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const E=["Standard","BlinkingOff","RandomWidth"];export{o as BlinkingOff,s as RandomWidth,r as Standard,E as __namedExportsOrder,S as default};
