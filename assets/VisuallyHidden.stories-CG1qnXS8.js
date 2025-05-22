import{r as e}from"./iframe-C_bA5shj.js";import{T as s}from"./Text-Bu_KMAJq.js";import{V as l}from"./VisuallyHidden-DrPpHSez.js";const c={title:"Layout/Visually Hidden",tags:["polymorphic"],component:l,args:{as:"div"},argTypes:{as:{options:["div","span","a"],control:{type:"select"}}}},t={render:o=>e.createElement(e.Fragment,null,e.createElement(s,null,"Bellow text is invisible"),e.createElement(l,{...o},e.createElement(s,null,"I'm not visually present on the screens")))};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <>
            <Text>Bellow text is invisible</Text>
            <VisuallyHidden {...args}>
                <Text>I&apos;m not visually present on the screens</Text>
            </VisuallyHidden>
        </>
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const d=["Example"];export{t as Example,d as __namedExportsOrder,c as default};
