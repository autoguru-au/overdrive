import{r as e,B as p}from"./iframe-CQI638ZW.js";import{B as o}from"./Button-BiTwm0GD.js";import{E as a}from"./Positioner-BCZtE34b.js";import{T as l}from"./TextInput-6vhtfUlW.js";import{F as i}from"./Flyout-DDD5sLJB.js";import"./Icon-CcnEMbtT.js";import"./resolveResponsiveProps-BSDOymb9.js";import"./ProgressSpinner-C8h2EVLV.js";import"./Portal-DRy7O3It.js";import"./index-QqZXycx1.js";import"./index-DGSOHZIY.js";import"./withEnhancedInput-uhgImQsa.js";import"./Text-DHDH6YSo.js";import"./withEnhancedInput.css-DLtboxqe.js";const C={title:"Components/Flyout",component:i,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},m=({args:t})=>{const s=e.useRef(null);return e.createElement(p,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(i,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(l,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(m,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(m,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Open","Closed"];export{n as Closed,r as Open,_ as __namedExportsOrder,C as default};
