import{r as e}from"./index-DVCUSwsV.js";import{T as r}from"./Text-DW-IBnnS.js";import{V as o}from"./VisuallyHidden-B_wRzJrM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-CfsxG9sl.js";import"./useTextStyles-KK5z18CB.js";const x={title:"Layout/Visually Hidden",component:o,args:{as:"div"},argTypes:{as:{options:["div","span","a"],control:{type:"select"}}}},t={render:l=>e.createElement(e.Fragment,null,e.createElement(r,null,"Bellow text is invisible"),e.createElement(o,{...l},e.createElement(r,null,"I'm not visually present on the screens")))};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <>
            <Text>Bellow text is invisible</Text>
            <VisuallyHidden {...args}>
                <Text>I&apos;m not visually present on the screens</Text>
            </VisuallyHidden>
        </>
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const y=["Example"];export{t as Example,y as __namedExportsOrder,x as default};
