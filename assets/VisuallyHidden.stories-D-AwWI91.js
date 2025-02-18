import{r as e}from"./index-Cr_cdoBq.js";import{V as o}from"./VisuallyHidden-yOsmJBr5.js";import{T as r}from"./Text-XoxmVRhK.js";import"./_commonjsHelpers-C932wzq6.js";import"./Box-B8HP0AOd.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-Db9gttPw.js";const y={title:"Layout/Visually Hidden",component:o,args:{as:"div"},argTypes:{as:{options:["div","span","a"],control:{type:"select"}}}},t={render:l=>e.createElement(e.Fragment,null,e.createElement(r,null,"Bellow text is invisible"),e.createElement(o,{...l},e.createElement(r,null,"I'm not visually present on the screens")))};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <>
            <Text>Bellow text is invisible</Text>
            <VisuallyHidden {...args}>
                <Text>I&apos;m not visually present on the screens</Text>
            </VisuallyHidden>
        </>
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["Example"];export{t as Example,E as __namedExportsOrder,y as default};
