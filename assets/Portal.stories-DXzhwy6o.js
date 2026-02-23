import{e,S as c,H as i}from"./iframe-DSW2f7z8.js";import{T as o}from"./Text-Dv7J7IdD.js";import{_ as n}from"./Portal-BBMl7g1v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQWpk--m.js";import"./index-5_PsX1Jl.js";const h={title:"Utility/Portal",component:n,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document?.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(o,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(c,{space:"5"},e.createElement(i,{as:"h3",colour:"information"},"test child 1"),e.createElement(n,{container:a},e.createElement(o,{colour:"primary"},"test child 2")))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
