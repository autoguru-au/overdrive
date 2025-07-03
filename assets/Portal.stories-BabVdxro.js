import{e,S as c,H as s}from"./iframe-BwudkRGz.js";import{T as o}from"./Text---c0u-Gd.js";import{_ as n}from"./Portal-HVCf2WcM.js";import"./index-Wh4ZVz8O.js";import"./index-nKDRB5JV.js";const u={title:"Utility/Portal",component:n,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document?.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(o,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(c,{space:"5"},e.createElement(s,{as:"h3",colour:"information"},"test child 1"),e.createElement(n,{container:a},e.createElement(o,{colour:"primary"},"test child 2")))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Standard","Nested"];export{t as Nested,r as Standard,h as __namedExportsOrder,u as default};
