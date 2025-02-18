import{R as r}from"./index-Cr_cdoBq.js";import{b as i}from"./argTypes-BMKtjgb3.js";import{S as f}from"./Stack-DTw5SNd7.js";import{T as t}from"./Text-XoxmVRhK.js";import"./_commonjsHelpers-C932wzq6.js";import"./tokens-_1AlMUnv.js";import"./makeTheme-BvwTE3C0.js";import"./index-DceDftY5.js";import"./Box-B8HP0AOd.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-Db9gttPw.js";const L={none:"none",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"},_={title:"Layout/Stack",component:f,argTypes:{space:{options:L,defaultValue:1,control:{type:"select"}},width:i.width,alignItems:i.alignItems}},e={args:{space:"1",dividers:!1,width:void 0,is:"div"},render:h=>r.createElement(f,{...h},r.createElement(t,null,"Line 1"),r.createElement(t,null,"Line 2"),r.createElement(t,null,"Line 3"))},n={args:{...e.args,is:"section"},render:e.render},s={args:{...e.args,is:"div",dividers:!0,space:"3"},render:e.render},a={args:{...e.args,is:"div",dividers:!0,space:"3",alignItems:"center"},render:e.render};var d,o,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    space: '1',
    dividers: false,
    width: void 0,
    is: 'div'
  },
  render: args => <Stack {...args}>
            <Text>Line 1</Text>
            <Text>Line 2</Text>
            <Text>Line 3</Text>
        </Stack>
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    is: 'section'
  },
  render: Standard.render
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,u,S;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    is: 'div',
    dividers: true,
    space: '3'
  },
  render: Standard.render
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var v,x,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    is: 'div',
    dividers: true,
    space: '3',
    alignItems: 'center'
  },
  render: Standard.render
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const V=["Standard","AsSection","WithDividers","WithAlignment"];export{n as AsSection,e as Standard,a as WithAlignment,s as WithDividers,V as __namedExportsOrder,_ as default};
