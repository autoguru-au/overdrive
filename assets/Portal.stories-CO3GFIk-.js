import{e,S as p,H as u}from"./iframe-Dl5X8CFQ.js";import{T as m}from"./Text-CZG_rW-B.js";import{_ as d}from"./Portal-CIXVYqlt.js";import"./useTextStyles-BJe2PR_c.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./index-C2sV6XMa.js";import"./index-Dy91qTXm.js";const f={title:"Utility/Portal",component:d,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},a=document==null?void 0:document.getElementsByTagName("body")[0],r={args:{container:a,children:e.createElement(m,{colour:"primary"},"Im in a portal at the root.")}},t={args:{container:a,children:e.createElement(p,{space:"5"},e.createElement(u,{as:"h3",colour:"information"},"test child 1"),e.createElement(d,{container:a},e.createElement(m,{colour:"primary"},"test child 2")))}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Text colour="primary">Im in a portal at the root.</Text>
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const P=["Standard","Nested"];export{t as Nested,r as Standard,P as __namedExportsOrder,f as default};
