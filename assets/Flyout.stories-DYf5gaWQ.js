import{r as e,B as p}from"./iframe-C9Ql_8pE.js";import{B as o}from"./Button-BC4NTZ_E.js";import{E as a}from"./Positioner-ThIjeMod.js";import{T as l}from"./TextInput-Cd5hOEuq.js";import{F as i}from"./Flyout-k5JWgbz9.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DX3P_hEq.js";import"./resolveResponsiveProps-6v5T8fj2.js";import"./ProgressSpinner-CNlKbz44.js";import"./Portal-VfYUMb-d.js";import"./index-CVhEvg0Z.js";import"./index-Du24-1FC.js";import"./withEnhancedInput-Bv8vnFTZ.js";import"./Text-Cl0BjDM8.js";import"./withEnhancedInput.css-BO6nK7sT.js";const _={title:"Components/Flyout",component:i,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},m=({args:t})=>{const s=e.useRef(null);return e.createElement(p,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(i,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(l,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(m,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(m,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
