import{a as g}from"./index-B-lxVbXh.js";import{R as e}from"./index-DVCUSwsV.js";import{b as x}from"./argTypes-box-DdZi9kbe.js";import{B as C}from"./Box-DIPDnkNs.js";import{S}from"./SliderProgress-DFkiDy4I.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./tokens-C73FyKBq.js";import"./theme.css-CgnscP65.js";const I={title:"Components/Progress/Slider Progress",component:S,argTypes:{backgroundColour:x.backgroundColour},decorators:[l=>e.createElement(C,{paddingY:"8",paddingX:"3",backgroundColour:"gray800"},e.createElement(l,null))]},r={args:{paused:!1,totalCount:3,activeIndex:1,duration:"1s",onRequestNext:()=>g("onRequestNext")}},o={args:{...r.args,backgroundColour:"yellow500"}},a={args:{...r.args,activeIndex:5,totalCount:20}};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    paused: false,
    totalCount: 3,
    activeIndex: 1,
    duration: '1s',
    onRequestNext: () => action('onRequestNext')
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    backgroundColour: 'yellow500'
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    activeIndex: 5,
    totalCount: 20
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["Standard","WithBackgroundColour","WithManySlides"];export{r as Standard,o as WithBackgroundColour,a as WithManySlides,N as __namedExportsOrder,I as default};
