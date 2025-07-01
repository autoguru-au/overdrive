import{e as o}from"./iframe-BCt8Udfy.js";import{B as n}from"./Button-BvFIh2Kc.js";import{O as s}from"./OutsideClick-DQ5tzxQO.js";import"./Icon-DQv8cRXC.js";import"./resolveResponsiveProps-OZ0auyPc.js";import"./ProgressSpinner-bQpPwE0w.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Utility/OutsideClick",component:s,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){a("onOutsideClick"),alert("clicking outside")},children:o.createElement(n,null,"Click anywhere but here")}};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const k=["Standard"];export{t as Standard,k as __namedExportsOrder,O as default};
