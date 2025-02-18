import{r as e}from"./index-Cr_cdoBq.js";import{E as a}from"./Positioner-DtAPNnYm.js";import{F as d}from"./Flyout-DdqSZP_t.js";import{B as u}from"./Box-USS9w30X.js";import{B as o}from"./Button-BTNLZxHS.js";import{T as O}from"./TextInput-B48M_WS7.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-IxcCI6ud.js";import"./Portal-MUFOK9x_.js";import"./index-WuY8yyQe.js";import"./index-CAtvbLPT.js";import"./ThemeProvider-DaUrEAYU.js";import"./index-CYx1ALmS.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-BPvLuXwN.js";import"./Icon-CUPfl9Y6.js";import"./useTextStyles-DDEU52OM.js";import"./ProgressSpinner-LuIj-RJb.js";import"./withEnhancedInput-C7UOb_ea.js";import"./Text-n7lM-XEF.js";import"./withEnhancedInput.css-xfkkuzgm.js";const V={title:"Components/Flyout",component:d,argTypes:{alignment:{options:a,defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},f=({args:t})=>{const s=e.useRef(null);return e.createElement(u,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(d,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(O,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(f,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(f,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const b=["Open","Closed"];export{n as Closed,r as Open,b as __namedExportsOrder,V as default};
