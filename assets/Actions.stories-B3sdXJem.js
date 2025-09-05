import{e as t}from"./iframe-PgZJ2afo.js";import{B as n}from"./Button-rZDT_fmr.js";import{A as o}from"./Actions-0yZwOInc.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-C4-JpBuo.js";import"./resolveResponsiveProps-CdSEa9T5.js";import"./ProgressSpinner-B7o5Hl7X.js";import"./Column-C1q06Itb.js";const g={title:"Layout/Actions",tags:["review"],component:o,decorators:[a=>t.createElement("div",{style:{maxWidth:300,width:"100%"}},a())]},r={args:{noWrap:!1},render:a=>t.createElement(o,{...a},t.createElement(n,null,"Login"),t.createElement(n,{variant:"primary"},"Sign up"),t.createElement(n,{variant:"secondary"},"Action 1"),t.createElement(n,{variant:"secondary"},"Action 2"),t.createElement(n,{isLoading:!0,variant:"secondary"},"Action 3"),t.createElement(n,{minimal:!0,variant:"secondary"},"Action 4"))},e={args:{noWrap:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    noWrap: false
  },
  render: args => <Actions {...args}>
            <Button>Login</Button>
            <Button variant="primary">Sign up</Button>
            <Button variant="secondary">Action 1</Button>
            <Button variant="secondary">Action 2</Button>
            <Button isLoading variant="secondary">
                Action 3
            </Button>
            <Button minimal variant="secondary">
                Action 4
            </Button>
        </Actions>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    noWrap: true
  },
  render: Standard.render
}`,...e.parameters?.docs?.source}}};const B=["Standard","NoWrap"];export{e as NoWrap,r as Standard,B as __namedExportsOrder,g as default};
