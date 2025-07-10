import{r as e}from"./iframe-euna8s5s.js";import{T as s}from"./Text-de5ME79G.js";import{V as r}from"./VisuallyHidden-CzelOpiN.js";const i={title:"Layout/Visually Hidden",tags:[],component:r,args:{as:"div"},argTypes:{as:{options:["div","span","a"],control:{type:"select"}}}},t={render:a=>e.createElement(e.Fragment,null,e.createElement(s,null,"Bellow text is invisible"),e.createElement(r,{...a},e.createElement(s,null,"I'm not visually present on the screens")))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <Text>Bellow text is invisible</Text>
            <VisuallyHidden {...args}>
                <Text>I&apos;m not visually present on the screens</Text>
            </VisuallyHidden>
        </>
}`,...t.parameters?.docs?.source}}};const m=["Example"];export{t as Example,m as __namedExportsOrder,i as default};
