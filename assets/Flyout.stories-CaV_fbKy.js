import{r as e}from"./index-DVCUSwsV.js";import{E as a}from"./Positioner-Ce_BG0xn.js";import{F as d}from"./Flyout-DiPxjADY.js";import{B as s}from"./Button-DGG_EzUH.js";import{T as u}from"./TextInput-aV23Ns5U.js";import{B as O}from"./Box-Daq3CeQj.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-qJC9azT-.js";import"./Portal-aRog-xns.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./OverdriveProvider-CECkJUVb.js";import"./index-D_iG_Vvt.js";import"./theme.css-Bxsw82g_.js";/* empty css                             */import"./tokens-BONBzezP.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Icon-DdhtP5AX.js";import"./resolveResponsiveProps-xS_DNhU6.js";import"./useTextStyles-DdOkPJce.js";import"./ProgressSpinner-BpFyV377.js";import"./withEnhancedInput-C2xm-yeA.js";import"./Text--khTZFS_.js";import"./withEnhancedInput.css-OIEP6xRQ.js";const D={title:"Components/Flyout",component:d,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},f=({args:t})=>{const o=e.useRef(null);return e.createElement(O,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(s,{ref:o},"some trigger"),e.createElement(d,{...t,triggerRef:o},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(u,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(s,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(f,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(f,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: true
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: true,
    triggerOffset: 12
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,g,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: false
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: false,
    triggerOffset: 12
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const J=["Open","Closed"];export{n as Closed,r as Open,J as __namedExportsOrder,D as default};
