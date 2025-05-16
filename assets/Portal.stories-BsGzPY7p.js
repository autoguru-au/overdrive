import{R as r}from"./index-DVCUSwsV.js";import{H as d}from"./Heading-BpZPlhcJ.js";import{S as u}from"./Stack-CT3qhkBe.js";import{T as l}from"./Text-DW-IBnnS.js";import{_ as p}from"./Portal-I3kmn8Hk.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-CfsxG9sl.js";import"./useTextStyles-KK5z18CB.js";import"./index-4KvmGZzY.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./index-qJC9azT-.js";import"./OverdriveProvider-DbAsmcrs.js";import"./index-D_iG_Vvt.js";import"./theme.css-KegNup0l.js";/* empty css                             */import"./tokens-DsuZpBdx.js";const O={title:"Utility/Portal",component:p,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},o=document==null?void 0:document.getElementsByTagName("body")[0],t={args:{container:o,children:r.createElement(l,{colour:"primary"},"Im in a portal at the root.")}},e={args:{container:o,children:r.createElement(u,{space:"5"},r.createElement(d,{as:"h3",colour:"information"},"test child 1"),r.createElement(p,{container:o},r.createElement(l,{colour:"primary"},"test child 2")))}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Text colour="primary">Im in a portal at the root.</Text>
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,s,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const U=["Standard","Nested"];export{e as Nested,t as Standard,U as __namedExportsOrder,O as default};
