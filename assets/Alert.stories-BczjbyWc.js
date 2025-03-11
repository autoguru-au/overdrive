import{a as C}from"./index-B-lxVbXh.js";import{R as e}from"./index-Cr_cdoBq.js";import{A as n}from"./Alert-BVP0QYE9.js";import{T as l}from"./Text-CpZ6rNdZ.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-C932wzq6.js";import"./Box-DpvxpHg_.js";import"./useTextStyles-C1tE8z4Y.js";import"./IntentStripe-nVdLMhQT.js";import"./Column-CsJ0Z-sU.js";import"./index-CYx1ALmS.js";import"./useNegativeMarginTop-CQ5taA2j.js";import"./Icon-v6Yzhcb2.js";import"./AlertIcon-FgS-VANv.js";import"./InformationIcon-BEIsz5hV.js";import"./AlertCircleIcon-BOrB_4ur.js";import"./Button-DUknfF4Q.js";import"./dataAttrs-C4KudU4k.js";import"./ProgressSpinner-B9EYhpD9.js";import"./WindowCloseIcon-CMg9j8eX.js";const r=C("onRequestClose"),B={title:"Components/Alert",component:n,args:{intent:"success"},argTypes:{intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},s={args:{onRequestClose:r,children:e.createElement(l,null,"Your invoice was sent to ",e.createElement(l,{strong:!0},"abc@supplier.co"))},render:t=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px"}},e.createElement("div",null,e.createElement(n,{...t})))},i={render:t=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px"}},e.createElement("div",null,e.createElement(n,{...t,intent:"success",onRequestClose:r},e.createElement(l,null,"Your invoice was sent to"," ",e.createElement(l,{strong:!0},"abc@supplier.co")))),e.createElement("div",null,e.createElement(n,{...t,intent:"warning",onRequestClose:r},"This will affect job changes")),e.createElement("div",null,e.createElement(n,{...t,intent:"danger",onRequestClose:r},"Something went wrong")),e.createElement("div",null,e.createElement(n,{...t,intent:"information",onRequestClose:r},"Something worth noting happened")),e.createElement("div",null,e.createElement(n,{...t,intent:"information",onRequestClose:r},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,")))},a={args:{inline:!0},render:i.render},o={args:{dismissible:!1},render:i.render};var u,m,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onRequestClose,
    children: <Text>
                Your invoice was sent to <Text strong>abc@supplier.co</Text>
            </Text>
  },
  render: args => <div style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px'
  }}>
            <div>
                <Alert {...args} />
            </div>
        </div>
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px'
  }}>
            <div>
                <Alert {...args} intent="success" onRequestClose={onRequestClose}>
                    <Text>
                        Your invoice was sent to{' '}
                        <Text strong>abc@supplier.co</Text>
                    </Text>
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="warning" onRequestClose={onRequestClose}>
                    This will affect job changes
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="danger" onRequestClose={onRequestClose}>
                    Something went wrong
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="information" onRequestClose={onRequestClose}>
                    Something worth noting happened
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="information" onRequestClose={onRequestClose}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </Alert>
            </div>
        </div>
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,A,q;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: StandardAllIntents.render
}`,...(q=(A=a.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var f,w,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    dismissible: false
  },
  render: StandardAllIntents.render
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const H=["Standard","StandardAllIntents","InlineAllIntents","NoneDismissibleAllIntents"];export{a as InlineAllIntents,o as NoneDismissibleAllIntents,s as Standard,i as StandardAllIntents,H as __namedExportsOrder,B as default};
