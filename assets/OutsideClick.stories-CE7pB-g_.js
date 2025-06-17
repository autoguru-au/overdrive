import{e as o}from"./iframe-BPJhr76J.js";import{B as n}from"./Button-C-CLfH2z.js";import{O as s}from"./OutsideClick-pILEA8m2.js";import"./Icon-D8YYTUq2.js";import"./resolveResponsiveProps-DXxr8mrg.js";import"./ProgressSpinner-6peMk8TN.js";import"./useTextStyles-D4FwBGMO.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Utility/OutsideClick",component:s,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){a("onOutsideClick"),alert("clicking outside")},children:o.createElement(n,null,"Click anywhere but here")}};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const C=["Standard"];export{t as Standard,C as __namedExportsOrder,k as default};
