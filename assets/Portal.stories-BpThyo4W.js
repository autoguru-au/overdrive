import{e,S as p,H as u}from"./iframe-BCt8Udfy.js";import{T as m}from"./Text-jNEoN6Nm.js";import{_ as d}from"./Portal-CaDP47qE.js";import"./index-2gw1hHn7.js";import"./index-DV5X3zHe.js";const T={title:"Utility/Portal",component:d,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document==null?void 0:document.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(m,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(p,{space:"5"},e.createElement(u,{as:"h3",colour:"information"},"test child 1"),e.createElement(d,{container:a},e.createElement(m,{colour:"primary"},"test child 2")))}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Text colour="primary">Im in a portal at the root.</Text>
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["Standard","Nested"];export{t as Nested,r as Standard,x as __namedExportsOrder,T as default};
