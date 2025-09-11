import{e,B as i}from"./iframe-C4sSev8-.js";import{I as o}from"./IntentStripe-BfIRH0Eq.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Content/Intent Stripe",component:o,argTypes:{intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},r=t=>e.createElement(i,{position:"relative",width:"full",padding:"6",backgroundColour:"gray200",borderRadius:"1",overflow:"hidden"},e.createElement(o,{...t})),n={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t}))},a={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t,intent:"success"}),e.createElement(r,{...t,intent:"warning"}),e.createElement(r,{...t,intent:"danger"}),e.createElement(r,{...t,intent:"information"}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    intent: void 0,
    className: void 0
  },
  render: args => <Box style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px',
    width: '100%'
  }}>
            <MyStripe {...args} />
        </Box>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    intent: void 0,
    className: void 0
  },
  render: args => <Box style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px',
    width: '100%'
  }}>
            <MyStripe {...args} intent="success" />
            <MyStripe {...args} intent="warning" />
            <MyStripe {...args} intent="danger" />
            <MyStripe {...args} intent="information" />
        </Box>
}`,...a.parameters?.docs?.source}}};const c=["Standard","StandardAllIntents"];export{n as Standard,a as StandardAllIntents,c as __namedExportsOrder,p as default};
