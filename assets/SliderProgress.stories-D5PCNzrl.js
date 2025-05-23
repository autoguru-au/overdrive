import{e as a,B as m}from"./iframe-B8iXgyt9.js";import{b as S}from"./argTypes-box-9gFsDd6N.js";import{S as C}from"./SliderProgress-DzEA5bx5.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,y={title:"Components/Progress/Slider Progress",component:C,argTypes:{backgroundColour:S.backgroundColour},decorators:[p=>a.createElement(m,{paddingY:"8",paddingX:"3",backgroundColour:"gray800"},a.createElement(p,null))]},r={args:{paused:!1,totalCount:3,activeIndex:1,duration:"1s",onRequestNext:()=>x("onRequestNext")}},e={args:{...r.args,backgroundColour:"yellow500"}},o={args:{...r.args,activeIndex:5,totalCount:20}};var s,t,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    paused: false,
    totalCount: 3,
    activeIndex: 1,
    duration: '1s',
    onRequestNext: () => action('onRequestNext')
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,c,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    backgroundColour: 'yellow500'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,g,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    activeIndex: 5,
    totalCount: 20
  }
}`,...(i=(g=o.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const f=["Standard","WithBackgroundColour","WithManySlides"];export{r as Standard,e as WithBackgroundColour,o as WithManySlides,f as __namedExportsOrder,y as default};
