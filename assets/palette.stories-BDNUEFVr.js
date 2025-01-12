import{c as p}from"./Box-D0fGWDzz.js";import{R as e}from"./index-sWIihdb-.js";import{S as s,l as d,s as g,C as E,h as u}from"./index-DJzIjhiA.js";import{b as h}from"./tokens-RHDzUXfy.js";import{H as l}from"./Heading-D6qsL5Cb.js";import"./_commonjsHelpers-C932wzq6.js";import"./makeTheme-BvwTE3C0.js";import"./useTextStyles-v_jGj5tR.js";const P=({colour:t,hex:n,hue:a})=>e.createElement(s,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(E,{background:t,size:"lg"},e.createElement("div",{className:u},n)),a&&t.replace(a,"")),k=({hue:t,shades:n})=>e.createElement(s,{space:"sm"},Object.entries(n).reverse().map(([a,i])=>e.createElement(P,{colour:`${t}${a}`,hex:i,hue:t,key:a}))),S=()=>e.createElement(s,{horizontal:!0,space:"md"},["green","blue","yellow","red","gray","black"].map(t=>e.createElement("div",{key:t},e.createElement(l,{is:"h3",className:p([d,g({marginBottom:"5"})])},t),e.createElement(k,{hue:t,shades:h[t]})))),z={title:"Foundation/Palette",tags:["!autodocs"]},r={render:()=>e.createElement(s,{space:"md"},e.createElement(l,{is:"h1"},"Palette"),e.createElement(l,{is:"h2"},"Colours"),e.createElement(S,null))};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading is="h1">Palette</Heading>
                <Heading is="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["Palette"];export{r as Palette,N as __namedExportsOrder,z as default};
