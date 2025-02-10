import{R as e}from"./index-Cr_cdoBq.js";import{t as p}from"./tokens-BrgPbGY2.js";import{S as r,t as n,B as o,l}from"./index-Ch0hbYP9.js";import{H as s}from"./Heading-t0NRGq8z.js";import"./_commonjsHelpers-C932wzq6.js";import"./makeTheme-BvwTE3C0.js";import"./Box-riOnoi3Y.js";import"./createRuntimeFn-62c9670f.esm-U-YlDjuY.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DNm53NZA.js";const{border:d,elevation:u}=p,E=Object.keys(u),b=Object.keys(d.width),h=Object.keys(d.radius),g=()=>e.createElement(r,null,e.createElement(s,{is:"h2",className:n},"Elevation"),E.map(t=>e.createElement(r,{space:"sm",alignItems:"center",horizontal:!0,key:t},e.createElement(o,{background:"gray100",borderRadius:"1",boxShadow:t,size:"9"}),e.createElement("p",{className:l},t)))),k=()=>e.createElement(r,null,e.createElement(s,{is:"h2",className:n},"Width"),b.map(t=>e.createElement(r,{space:"sm",alignItems:"center",horizontal:!0,key:t},e.createElement(o,{background:"black100",borderColor:"dark",borderRadius:"1",borderStyle:"solid",borderWidth:t,size:"9"}),e.createElement("p",{className:l},t)))),y=()=>e.createElement(r,null,e.createElement(s,{is:"h2",className:n},"Radius"),h.sort().map(t=>e.createElement(r,{space:"sm",alignItems:"center",horizontal:!0,key:t},e.createElement(o,{background:"black500",borderColor:"gray",borderRadius:t,size:"9",style:t==="pill"?{height:"74px"}:void 0}),e.createElement("p",{className:l},t)))),O={title:"Foundation/Borders",tags:["!autodocs"]},a={render:()=>e.createElement(r,{gap:"8",horizontal:!0},e.createElement(s,{is:"h1"},"Borders &",e.createElement("br",null),"Elevation"),e.createElement(g,null),e.createElement(y,null),e.createElement(k,null))};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Stack gap="8" horizontal>
            <Heading is="h1">
                Borders &amp;
                <br />
                Elevation
            </Heading>
            <Elevation />
            <Radius />
            <Widths />
        </Stack>
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Borders"];export{a as Borders,W as __namedExportsOrder,O as default};
