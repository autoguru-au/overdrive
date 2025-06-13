import{e as o}from"./iframe-Dl5X8CFQ.js";import{B as n}from"./Button-cM3Tku_S.js";import{O as s}from"./OutsideClick-DPDKjJs-.js";import"./Icon-IKMSJ4nR.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./ProgressSpinner-DAmI66fJ.js";import"./useTextStyles-BJe2PR_c.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Utility/OutsideClick",component:s,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){a("onOutsideClick"),alert("clicking outside")},children:o.createElement(n,null,"Click anywhere but here")}};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const C=["Standard"];export{t as Standard,C as __namedExportsOrder,k as default};
