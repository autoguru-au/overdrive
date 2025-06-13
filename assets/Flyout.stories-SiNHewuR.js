import{r as e,B as O}from"./iframe-Dl5X8CFQ.js";import{B as o}from"./Button-cM3Tku_S.js";import{E as a}from"./Positioner-BGNDsqUF.js";import{T as f}from"./TextInput-np8Rbzmc.js";import{F as d}from"./Flyout-BRg1OeXT.js";import"./Icon-IKMSJ4nR.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./ProgressSpinner-DAmI66fJ.js";import"./useTextStyles-BJe2PR_c.js";import"./Portal-CIXVYqlt.js";import"./index-C2sV6XMa.js";import"./index-Dy91qTXm.js";import"./withEnhancedInput-CDKnNKHi.js";import"./Text-CZG_rW-B.js";import"./withEnhancedInput.css-CeMKWYq_.js";const S={title:"Components/Flyout",component:d,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},u=({args:t})=>{const s=e.useRef(null);return e.createElement(O,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(d,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(f,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(u,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(u,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const j=["Open","Closed"];export{n as Closed,r as Open,j as __namedExportsOrder,S as default};
