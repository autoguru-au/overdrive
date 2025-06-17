import{r as e}from"./iframe-BPJhr76J.js";import{T as r}from"./Text-3IOoZozm.js";import{V as o}from"./VisuallyHidden-wJXh-Aii.js";import"./useTextStyles-D4FwBGMO.js";import"./resolveResponsiveProps-DXxr8mrg.js";const u={title:"Layout/Visually Hidden",tags:["polymorphic"],component:o,args:{as:"div"},argTypes:{as:{options:["div","span","a"],control:{type:"select"}}}},t={render:l=>e.createElement(e.Fragment,null,e.createElement(r,null,"Bellow text is invisible"),e.createElement(o,{...l},e.createElement(r,null,"I'm not visually present on the screens")))};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <>
            <Text>Bellow text is invisible</Text>
            <VisuallyHidden {...args}>
                <Text>I&apos;m not visually present on the screens</Text>
            </VisuallyHidden>
        </>
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const x=["Example"];export{t as Example,x as __namedExportsOrder,u as default};
