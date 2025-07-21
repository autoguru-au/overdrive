import{r as e,B as p}from"./iframe-D_ivnAPa.js";import{B as o}from"./Button-J3VF6Kd-.js";import{E as a}from"./Positioner-fvnt1qYe.js";import{T as l}from"./TextInput-C9QlfHw6.js";import{F as i}from"./Flyout-DK3QlgTu.js";import"./Icon-B0q5H589.js";import"./resolveResponsiveProps-DkJAzUcH.js";import"./ProgressSpinner-CvQ6UQJX.js";import"./Portal-BCGbXLLG.js";import"./index-BS8PsY8S.js";import"./index-Xf7B3lJ1.js";import"./withEnhancedInput-D3hBrU0T.js";import"./Text-IE4mIZod.js";import"./withEnhancedInput.css-GrUlhtZ9.js";const C={title:"Components/Flyout",component:i,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},m=({args:t})=>{const s=e.useRef(null);return e.createElement(p,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(i,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(l,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(m,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(m,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
