import{e,S as c,H as i}from"./iframe-C-oI42te.js";import{T as o}from"./Text-93mMRKsO.js";import{_ as n}from"./Portal-VJKdESK5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-h7iYtbFo.js";import"./index-BuGRjX0O.js";const h={title:"Utility/Portal",component:n,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document?.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(o,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(c,{space:"5"},e.createElement(i,{as:"h3",colour:"information"},"test child 1"),e.createElement(n,{container:a},e.createElement(o,{colour:"primary"},"test child 2")))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
