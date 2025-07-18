import{e}from"./iframe-COJ7wZQX.js";import{B as r}from"./Button-CE5LkBgJ.js";import{O as i}from"./OutsideClick-B6lZciiN.js";import"./Icon-CIv2uE6P.js";import"./resolveResponsiveProps-Dp0dH8aX.js";import"./ProgressSpinner-M_NGBS2-.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const m=["Standard"];export{t as Standard,m as __namedExportsOrder,u as default};
