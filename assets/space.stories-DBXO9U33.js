import{e,H as r,o as E,t as p,m as S}from"./iframe-BPJhr76J.js";import{S as s,t as i,l as d,B as u,a as g}from"./index-BhiFly-i.js";const{space:h}=p,b=Object.keys(h).filter(a=>a!=="none"),B=()=>e.createElement(s,{space:"sm"},e.createElement(r,{as:"h2",className:i},"Space scale"),b.map(a=>e.createElement(s,{space:"sm",alignItems:"center",horizontal:!0,key:a},e.createElement("p",{className:d},a),e.createElement(u,{height:"5",width:a,style:{backgroundColor:E.color.gamut.black[700]}}),e.createElement("p",{className:g},p.space[a])))),n=Object.entries(S),N=()=>e.createElement(s,{space:"sm"},e.createElement(r,{as:"h2",className:i},"Breakpoints"),n.map(([a,k],c)=>e.createElement("div",{key:a},e.createElement("span",{className:d},a),": ",k,c<n.length-1?` to ${n[c+1][1]}`:" and up"))),H={title:"Foundation/Space",tags:["!autodocs"]},t={render:()=>e.createElement(s,{gap:"8",horizontal:!0},e.createElement(r,{as:"h1"},"Space"),e.createElement(B,null),e.createElement(N,null))};var o,l,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Stack gap="8" horizontal>
            <Heading as="h1">Space</Heading>
            <SpaceScale />
            <Breakpoints />
        </Stack>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["Space"];export{t as Space,v as __namedExportsOrder,H as default};
