import{r as e}from"./index-DVCUSwsV.js";import{E as a}from"./Positioner-DvdsbDdf.js";import{F as d}from"./Flyout-C7jPJ-iS.js";import{B as u}from"./Box-DSBumgu0.js";import{B as o}from"./Button-uNJj7W4j.js";import{T as O}from"./TextInput-Dw6JYivH.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-Go0z9Bjm.js";import"./Portal-C5pWYUZ2.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./ThemeProvider-DmFqLIEb.js";import"./index-D_iG_Vvt.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-C4KudU4k.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Icon-DLs39fS0.js";import"./useTextStyles-mngTSpBp.js";import"./ProgressSpinner-ByhiBYMc.js";import"./withEnhancedInput-DykW6cqw.js";import"./Text-Bc6GCfdc.js";import"./withEnhancedInput.css-irFa_c3N.js";const k={title:"Components/Flyout",component:d,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},f=({args:t})=>{const s=e.useRef(null);return e.createElement(u,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(d,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(O,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(f,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(f,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const q=["Open","Closed"];export{n as Closed,r as Open,q as __namedExportsOrder,k as default};
