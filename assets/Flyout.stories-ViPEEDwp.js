import{r as e,B as p}from"./iframe-PpC19URd.js";import{B as o}from"./Button-DcSLC2Gb.js";import{E as a}from"./Positioner-B0cQCMoM.js";import{T as l}from"./TextInput-gNJ8vTW_.js";import{F as i}from"./Flyout-C2tTxWA9.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-e9Gz_vr0.js";import"./resolveResponsiveProps-BoEvDski.js";import"./ProgressSpinner-74m37pYw.js";import"./Portal-s30kfmJ6.js";import"./index-EfDswWit.js";import"./index-vZDhq27R.js";import"./withEnhancedInput-RcGTPQj2.js";import"./Text-B73qt-IC.js";import"./withEnhancedInput.css-uHWp7MB4.js";const _={title:"Components/Flyout",component:i,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},m=({args:t})=>{const s=e.useRef(null);return e.createElement(p,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(i,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(l,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(m,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(m,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
