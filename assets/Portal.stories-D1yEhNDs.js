import{R as r}from"./index-CIentmI6.js";import{_ as l}from"./Portal-DM7Jye4r.js";import{T as p}from"./Text-CNba1erP.js";import{S as d}from"./Stack-DjMxz8dn.js";import{H as u}from"./Heading-B-O_2Y2f.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-9RMPADTf.js";import"./index-Dg3X6TXP.js";import"./index--QB1QYf1.js";import"./ThemeProvider-DCihBTvv.js";import"./index-D_iG_Vvt.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-Bmw3-gkn.js";import"./Box-CSmK6Tsy.js";import"./index-DxjsDk-K.js";const B={title:"Utility/Portal",component:l,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},o=document==null?void 0:document.getElementsByTagName("body")[0],t={args:{container:o,children:r.createElement(p,{colour:"primary"},"Im in a portal at the root.")}},e={args:{container:o,children:r.createElement(d,{space:"5"},r.createElement(u,{is:"h3",colour:"information"},"test child 1"),r.createElement(l,{container:o},r.createElement(p,{colour:"primary"},"test child 2")))}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Text colour="primary">Im in a portal at the root.</Text>
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,s,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    container: containerEl,
    children: <Stack space="5">
                <Heading is="h3" colour="information">
                    test child 1
                </Heading>
                <Portal container={containerEl}>
                    <Text colour="primary">test child 2</Text>
                </Portal>
            </Stack>
  }
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const O=["Standard","Nested"];export{e as Nested,t as Standard,O as __namedExportsOrder,B as default};
