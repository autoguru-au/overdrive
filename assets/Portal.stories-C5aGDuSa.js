import{e,S as c,H as i}from"./iframe-CB5JKjWu.js";import{T as o}from"./Text-Cf0Mhz-X.js";import{_ as n}from"./Portal-zlC5vn2m.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BHNpTPOS.js";import"./index-KRHroF7l.js";const h={title:"Utility/Portal",component:n,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document?.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(o,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(c,{space:"5"},e.createElement(i,{as:"h3",colour:"information"},"test child 1"),e.createElement(n,{container:a},e.createElement(o,{colour:"primary"},"test child 2")))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Text colour="primary">Im in a portal at the root.</Text>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Stack space="5">
                <Heading as="h3" colour="information">
                    test child 1
                </Heading>
                <Portal container={containerEl}>
                    <Text colour="primary">test child 2</Text>
                </Portal>
            </Stack>
  }
}`,...t.parameters?.docs?.source}}};const g=["Standard","Nested"];export{t as Nested,r as Standard,g as __namedExportsOrder,h as default};
