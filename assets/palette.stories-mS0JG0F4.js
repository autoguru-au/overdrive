import{c as p}from"./Box-j8EUPCOH.js";import{R as e}from"./index-sWIihdb-.js";import{o as d}from"./createRuntimeFn-62c9670f.esm-CnJ6bNUW.js";import{b as g}from"./tokens-BODlIF1O.js";import{S as s,l as E,C as u,h}from"./index-BllaC4yj.js";import{H as n}from"./Heading-DEJ1cR6p.js";import"./_commonjsHelpers-C932wzq6.js";import"./makeTheme-BvwTE3C0.js";import"./useTextStyles-Ap-dpgpw.js";const P=({colour:t,hex:o,hue:a})=>e.createElement(s,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(u,{background:t,size:"lg"},e.createElement("div",{className:h},o)),a&&t.replace(a,"")),S=({hue:t,shades:o})=>e.createElement(s,{space:"sm"},Object.entries(o).reverse().map(([a,i])=>e.createElement(P,{colour:`${t}${a}`,hex:i,hue:t,key:a}))),b=()=>e.createElement(s,{horizontal:!0,space:"md"},["green","blue","yellow","red","gray","black"].map(t=>e.createElement("div",{key:t},e.createElement(n,{is:"h3",className:p([E,d({marginBottom:"5"})])},t),e.createElement(S,{hue:t,shades:g[t]})))),N={title:"Foundation/Palette",tags:["!autodocs"]},r={render:()=>e.createElement(s,{space:"md"},e.createElement(n,{is:"h1"},"Palette"),e.createElement(n,{is:"h2"},"Colours"),e.createElement(b,null))};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading is="h1">Palette</Heading>
                <Heading is="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const O=["Palette"];export{r as Palette,O as __namedExportsOrder,N as default};
