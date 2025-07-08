import{e,H as l,w as o,c as m,o as i}from"./iframe-CQI638ZW.js";import{S as r,l as d,s as p,C as E,h as g}from"./index-C4exzySg.js";const u=({colour:t,hex:n,hue:a})=>e.createElement(r,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(E,{size:"lg",style:{backgroundColor:i.color.gamut[a][t]}},e.createElement("div",{className:g},n)),a&&t.replace(a,"")),h=({hue:t,shades:n})=>e.createElement(r,{space:"sm"},Object.entries(n).reverse().map(([a,c])=>e.createElement(u,{colour:a,hex:c,hue:t,key:c}))),k=()=>e.createElement(r,{horizontal:!0,space:"md"},Object.keys(o).map(t=>e.createElement("div",{key:t},e.createElement(l,{as:"h3",className:m([d,p({marginBottom:"5"})])},t),e.createElement(h,{hue:t,shades:o[t]})))),v={title:"Foundation/Palette",tags:["!autodocs"]},s={render:()=>e.createElement(r,{space:"md"},e.createElement(l,{as:"h1"},"Palette"),e.createElement(l,{as:"h2"},"Colours"),e.createElement(k,null))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading as="h1">Palette</Heading>
                <Heading as="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...s.parameters?.docs?.source}}};const H=["Palette"];export{s as Palette,H as __namedExportsOrder,v as default};
