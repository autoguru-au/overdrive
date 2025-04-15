import{c as p}from"./Box-HDBh2Tqe.js";import{R as e}from"./index-DVCUSwsV.js";import{a as d}from"./tokens-Cb8XQrNE.js";import{S as s,l as g,s as E,C as u,h}from"./index-2s09B62R.js";import{H as o}from"./Heading-Btp76oVi.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./vanilla-extract-sprinkles-createRuntimeSprinkles.esm-gvoir1Kq.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-DRIwjlNn.js";const P=({colour:t,hex:n,hue:a})=>e.createElement(s,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(u,{background:t,size:"lg"},e.createElement("div",{className:h},n)),a&&t.replace(a,"")),k=({hue:t,shades:n})=>e.createElement(s,{space:"sm"},Object.entries(n).reverse().map(([a,i])=>e.createElement(P,{colour:`${t}${a}`,hex:i,hue:t,key:a}))),S=()=>e.createElement(s,{horizontal:!0,space:"md"},["green","blue","yellow","red","gray","black"].map(t=>e.createElement("div",{key:t},e.createElement(o,{is:"h3",className:p([g,E({marginBottom:"5"})])},t),e.createElement(k,{hue:t,shades:d[t]})))),O={title:"Foundation/Palette",tags:["!autodocs"]},r={render:()=>e.createElement(s,{space:"md"},e.createElement(o,{is:"h1"},"Palette"),e.createElement(o,{is:"h2"},"Colours"),e.createElement(S,null))};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading is="h1">Palette</Heading>
                <Heading is="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const R=["Palette"];export{r as Palette,R as __namedExportsOrder,O as default};
