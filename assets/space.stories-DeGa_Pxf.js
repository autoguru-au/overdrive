import{e,H as n,o as i,l as o,q as d}from"./iframe-CB5JKjWu.js";import{S as s,t as l,l as m,B as k,a as E}from"./index-B11v9GJv.js";import"./preload-helper-D9Z9MdNV.js";const{space:S}=o,u=Object.keys(S).filter(a=>a!=="none"),g=()=>e.createElement(s,{space:"sm"},e.createElement(n,{as:"h2",className:l},"Space scale"),u.map(a=>e.createElement(s,{space:"sm",alignItems:"center",horizontal:!0,key:a},e.createElement("p",{className:m},a),e.createElement(k,{height:"5",width:a,style:{backgroundColor:i.color.gamut.black[700]}}),e.createElement("p",{className:E},o.space[a])))),r=Object.entries(d),h=()=>e.createElement(s,{space:"sm"},e.createElement(n,{as:"h2",className:l},"Breakpoints"),r.map(([a,p],c)=>e.createElement("div",{key:a},e.createElement("span",{className:m},a),": ",p,c<r.length-1?` to ${r[c+1][1]}`:" and up"))),f={title:"Foundation/Space",tags:["!autodocs"]},t={render:()=>e.createElement(s,{gap:"8",horizontal:!0},e.createElement(n,{as:"h1"},"Space"),e.createElement(g,null),e.createElement(h,null))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="8" horizontal>
            <Heading as="h1">Space</Heading>
            <SpaceScale />
            <Breakpoints />
        </Stack>
}`,...t.parameters?.docs?.source}}};const y=["Space"];export{t as Space,y as __namedExportsOrder,f as default};
