import{r as e,B as p}from"./iframe-qUC4cxwQ.js";import{B as o}from"./Button-D_9ned8-.js";import{E as a}from"./Positioner-DJQK4T9F.js";import{T as l}from"./TextInput-DmFbJHoA.js";import{F as i}from"./Flyout-DUaVMP2A.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DtufMYE4.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./ProgressSpinner-C4pSHKz3.js";import"./Portal-BIoDE3by.js";import"./index-hcioG5kf.js";import"./index-rl8rPkT0.js";import"./withEnhancedInput-DbD7PaQs.js";import"./Text-DW2ue6Ex.js";import"./withEnhancedInput.css-BfX8_WMd.js";const _={title:"Components/Flyout",component:i,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},m=({args:t})=>{const s=e.useRef(null);return e.createElement(p,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(i,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(l,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(m,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(m,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: true
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: true,
    triggerOffset: 12
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: false
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: false,
    triggerOffset: 12
  }
}`,...n.parameters?.docs?.source}}};const L=["Open","Closed"];export{n as Closed,r as Open,L as __namedExportsOrder,_ as default};
