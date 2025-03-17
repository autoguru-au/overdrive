import{R as e}from"./index-UyvCXs0Z.js";import{I as m}from"./IntentStripe-2CljIGgM.js";import{B as i}from"./Box-Wo8GEp05.js";import"./_commonjsHelpers-gnU0ypJ3.js";const S={title:"Components/Intent Stripe",component:m,argTypes:{intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},r=t=>e.createElement(i,{position:"relative",width:"full",padding:"6",backgroundColour:"gray200",borderRadius:"1",overflow:"hidden"},e.createElement(m,{...t})),n={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t}))},a={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t,intent:"success"}),e.createElement(r,{...t,intent:"warning"}),e.createElement(r,{...t,intent:"danger"}),e.createElement(r,{...t,intent:"information"}))};var o,s,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,l,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Standard","StandardAllIntents"];export{n as Standard,a as StandardAllIntents,x as __namedExportsOrder,S as default};
