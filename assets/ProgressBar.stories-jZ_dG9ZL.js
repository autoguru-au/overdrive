import{e as r,S as l}from"./iframe-BTLSvkJy.js";import{P as e}from"./ProgressBar-aS3NHZmP.js";import"./preload-helper-D9Z9MdNV.js";const m={title:"Primitives/Indicators/Progress Bar",component:e},o={args:{}},s={args:{value:.3}},t={render:a=>r.createElement(l,{space:"2"},r.createElement(e,{value:.5,colour:"green",...a}),r.createElement(e,{value:.4,colour:"blue",...a}),r.createElement(e,{value:.1,colour:"neutral",...a}),r.createElement(e,{value:15,colour:"red",...a}),r.createElement(e,{value:.156,colour:"yellow",...a})),args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.3
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Stack space="2">
            <ProgressBar value={0.5} colour="green" {...args} />
            <ProgressBar value={0.4} colour="blue" {...args} />
            <ProgressBar value={0.1} colour="neutral" {...args} />
            <ProgressBar value={15} colour="red" {...args} />
            <ProgressBar value={0.156} colour="yellow" {...args} />
        </Stack>,
  args: {}
}`,...t.parameters?.docs?.source}}};const d=["Standard","WithValue","AllColours"];export{t as AllColours,o as Standard,s as WithValue,d as __namedExportsOrder,m as default};
