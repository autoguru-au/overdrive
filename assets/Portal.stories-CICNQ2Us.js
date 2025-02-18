import{R as r}from"./index-Cr_cdoBq.js";import{_ as l}from"./Portal-MUFOK9x_.js";import{T as p}from"./Text-COkn8hme.js";import{S as d}from"./Stack-BkjUp_OF.js";import{H as u}from"./Heading-bL5s5Ave.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-WuY8yyQe.js";import"./index-CAtvbLPT.js";import"./index-IxcCI6ud.js";import"./ThemeProvider-DaUrEAYU.js";import"./index-CYx1ALmS.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-BQjBI_p_.js";import"./Box-DRzcxhmO.js";import"./index-DceDftY5.js";const B={title:"Utility/Portal",component:l,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}},container:{control:{disable:!0}}}},o=document==null?void 0:document.getElementsByTagName("body")[0],t={args:{container:o,children:r.createElement(p,{colour:"primary"},"Im in a portal at the root.")}},e={args:{container:o,children:r.createElement(d,{space:"5"},r.createElement(u,{is:"h3",colour:"information"},"test child 1"),r.createElement(l,{container:o},r.createElement(p,{colour:"primary"},"test child 2")))}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
