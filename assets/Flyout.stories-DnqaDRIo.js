import{r as e,B as O}from"./iframe-CapgcpQw.js";import{B as o}from"./Button-BS_8E5Lc.js";import{E as a}from"./Positioner-BnHxYgZD.js";import{T as f}from"./TextInput-FafOWShY.js";import{F as d}from"./Flyout-BPQkypUg.js";import"./Icon-BSSebld5.js";import"./resolveResponsiveProps-D2UjvlFZ.js";import"./ProgressSpinner-DL1aUcKI.js";import"./Portal-lvmx1bLZ.js";import"./index-US934iSr.js";import"./index-BjkrVkV4.js";import"./withEnhancedInput-BYzHIQHu.js";import"./Text-BGIV1zEQ.js";import"./withEnhancedInput.css-BCj9lKWC.js";const R={title:"Components/Flyout",component:d,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},u=({args:t})=>{const s=e.useRef(null);return e.createElement(O,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(d,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(f,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(u,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(u,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: true
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: true,
    triggerOffset: 12
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <FlyoutContent args={{
    ...args,
    isOpen: false
  }} />,
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: false,
    triggerOffset: 12
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const S=["Open","Closed"];export{n as Closed,r as Open,S as __namedExportsOrder,R as default};
