import{c as p}from"./Box-BkSqgUie.js";import{R as e}from"./index-Cr_cdoBq.js";import{o as d}from"./sprinkles.css-BmmMAnkI.js";import{b as g}from"./tokens-_1AlMUnv.js";import{S as s,l as E,C as u,h}from"./index-BsV-9h67.js";import{H as n}from"./Heading-DzJKxWXi.js";import"./_commonjsHelpers-C932wzq6.js";import"./createRuntimeFn-62c9670f.esm-Bn1gNn0k.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-Dl44JEM-.js";const P=({colour:t,hex:o,hue:a})=>e.createElement(s,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(u,{background:t,size:"lg"},e.createElement("div",{className:h},o)),a&&t.replace(a,"")),S=({hue:t,shades:o})=>e.createElement(s,{space:"sm"},Object.entries(o).reverse().map(([a,i])=>e.createElement(P,{colour:`${t}${a}`,hex:i,hue:t,key:a}))),b=()=>e.createElement(s,{horizontal:!0,space:"md"},["green","blue","yellow","red","gray","black"].map(t=>e.createElement("div",{key:t},e.createElement(n,{is:"h3",className:p([E,d({marginBottom:"5"})])},t),e.createElement(S,{hue:t,shades:g[t]})))),R={title:"Foundation/Palette",tags:["!autodocs"]},r={render:()=>e.createElement(s,{space:"md"},e.createElement(n,{is:"h1"},"Palette"),e.createElement(n,{is:"h2"},"Colours"),e.createElement(b,null))};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading is="h1">Palette</Heading>
                <Heading is="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const _=["Palette"];export{r as Palette,_ as __namedExportsOrder,R as default};
