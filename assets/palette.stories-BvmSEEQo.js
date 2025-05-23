import{e,H as l,q as o,c as p,o as E}from"./iframe-B8iXgyt9.js";import{S as r,l as g,s as u,C as h,h as k}from"./index-fyR1MO4e.js";const P=({colour:t,hex:n,hue:a})=>e.createElement(r,{horizontal:!0,alignItems:"center",style:{gap:"10px",position:"relative"}},e.createElement(h,{size:"lg",style:{backgroundColor:E.color.gamut[a][t]}},e.createElement("div",{className:k},n)),a&&t.replace(a,"")),S=({hue:t,shades:n})=>e.createElement(r,{space:"sm"},Object.entries(n).reverse().map(([a,c])=>e.createElement(P,{colour:a,hex:c,hue:t,key:c}))),v=()=>e.createElement(r,{horizontal:!0,space:"md"},Object.keys(o).map(t=>e.createElement("div",{key:t},e.createElement(l,{as:"h3",className:p([g,u({marginBottom:"5"})])},t),e.createElement(S,{hue:t,shades:o[t]})))),C={title:"Foundation/Palette",tags:["!autodocs"]},s={render:()=>e.createElement(r,{space:"md"},e.createElement(l,{as:"h1"},"Palette"),e.createElement(l,{as:"h2"},"Colours"),e.createElement(v,null))};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Stack space="md">
                <Heading as="h1">Palette</Heading>
                <Heading as="h2">Colours</Heading>
                <Palettes />
            </Stack>;
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const b=["Palette"];export{s as Palette,b as __namedExportsOrder,C as default};
