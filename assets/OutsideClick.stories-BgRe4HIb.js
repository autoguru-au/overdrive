import{e}from"./iframe-Bw60F3r3.js";import{B as r}from"./Button-C8Kz0zNw.js";import{O as i}from"./OutsideClick-ClWIRnfs.js";import"./Icon-DL18B8I0.js";import"./resolveResponsiveProps-DGdp35wv.js";import"./ProgressSpinner-DSbr-4aD.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const m=["Standard"];export{t as Standard,m as __namedExportsOrder,u as default};
