import{r as e}from"./index-UyvCXs0Z.js";import{E as a}from"./Positioner-CVCT84BQ.js";import{F as d}from"./Flyout-CxDXADTU.js";import{B as u}from"./Box-Wo8GEp05.js";import{B as o}from"./Button-BERT_2cH.js";import{T as O}from"./TextInput-DD_Ujbvu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-BJSya_LC.js";import"./Portal-2r8K4iwP.js";import"./index-Bk0OmBrG.js";import"./index-rbvpFaDF.js";import"./ThemeProvider-CiKbc3fE.js";import"./index-D_iG_Vvt.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-C4KudU4k.js";import"./Icon-BTE0U7UX.js";import"./useTextStyles-B_nt0YsF.js";import"./ProgressSpinner-CS29R0Em.js";import"./withEnhancedInput-pTzYoVBy.js";import"./Text-DArtjbPa.js";import"./withEnhancedInput.css-DVL47kT-.js";const H={title:"Components/Flyout",component:d,argTypes:{alignment:{options:Object.values(a),defaultValue:a.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}},parameters:{chromatic:{}}},f=({args:t})=>{const s=e.useRef(null);return e.createElement(u,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},e.createElement(o,{ref:s},"some trigger"),e.createElement(d,{...t,triggerRef:s},e.createElement("div",{style:{display:"grid",gridTemplateRows:"repeat(2, auto)",gridGap:"16px",padding:"16px"}},e.createElement(O,{name:"example",placeholder:"example"}),e.createElement("div",null,e.createElement(o,{size:"small",variant:"primary"},"Save")))))},r={render:t=>e.createElement(f,{args:{...t,isOpen:!0}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!0,triggerOffset:12}},n={render:t=>e.createElement(f,{args:{...t,isOpen:!1}}),args:{alignment:a.BOTTOM_LEFT,isOpen:!1,triggerOffset:12}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const V=["Open","Closed"];export{n as Closed,r as Open,V as __namedExportsOrder,H as default};
