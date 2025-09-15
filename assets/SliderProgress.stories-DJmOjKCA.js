import{e as o,B as s}from"./iframe-B6_QgceS.js";import{b as n}from"./argTypes-box-BxReVPNA.js";import{S as d}from"./SliderProgress-d8AnThzu.js";import"./preload-helper-D9Z9MdNV.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Primitives/Indicators/Slider Progress",component:d,argTypes:{backgroundColour:n.backgroundColour},decorators:[t=>o.createElement(s,{paddingY:"8",paddingX:"3",backgroundColour:"gray800"},o.createElement(t,null))]},r={args:{paused:!1,totalCount:3,activeIndex:1,duration:"1s",onRequestNext:()=>c("onRequestNext")}},a={args:{...r.args,backgroundColour:"yellow500"}},e={args:{...r.args,activeIndex:5,totalCount:20}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    paused: false,
    totalCount: 3,
    activeIndex: 1,
    duration: '1s',
    onRequestNext: () => action('onRequestNext')
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    backgroundColour: 'yellow500'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    activeIndex: 5,
    totalCount: 20
  }
}`,...e.parameters?.docs?.source}}};const p=["Standard","WithBackgroundColour","WithManySlides"];export{r as Standard,a as WithBackgroundColour,e as WithManySlides,p as __namedExportsOrder,m as default};
