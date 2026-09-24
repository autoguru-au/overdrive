import{e}from"./iframe-CASYvVkN.js";import{T as l}from"./Text-CoEgeyZ5.js";import{A as n}from"./Alert-DVgK6zsd.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dbl6ej44.js";import"./Icon-CeLWjYP4.js";import"./resolveResponsiveProps-TiRU7Y2q.js";import"./ProgressSpinner-D5MxyCZI.js";import"./IntentStripe-Df2vb3uh.js";import"./WarningIcon-BF4AO0G-.js";import"./InformationIcon-PEKXlZUD.js";import"./AlertCircleIcon-OFE1sN-1.js";import"./XIcon-Bmt_4-Pz.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,r=u("onRequestClose"),b={title:"Components/Alert",component:n,args:{intent:"success"},argTypes:{children:{control:!1},intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},s={args:{onRequestClose:r,children:e.createElement(l,null,"Your invoice was sent to ",e.createElement(l,{strong:!0},"abc@supplier.co"))},render:t=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px"}},e.createElement("div",null,e.createElement(n,{...t})))},i={render:t=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px"}},e.createElement("div",null,e.createElement(n,{...t,intent:"success",onRequestClose:r},e.createElement(l,null,"Your invoice was sent to"," ",e.createElement(l,{strong:!0},"abc@supplier.co")))),e.createElement("div",null,e.createElement(n,{...t,intent:"warning",onRequestClose:r},"This will affect job changes")),e.createElement("div",null,e.createElement(n,{...t,intent:"danger",onRequestClose:r},"Something went wrong")),e.createElement("div",null,e.createElement(n,{...t,intent:"information",onRequestClose:r},"Something worth noting happened")),e.createElement("div",null,e.createElement(n,{...t,intent:"information",onRequestClose:r},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,")))},a={args:{inline:!0},render:i.render},o={args:{dismissible:!1},render:i.render};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: StandardAllIntents.render
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: false
  },
  render: StandardAllIntents.render
}`,...o.parameters?.docs?.source}}};const S=["Standard","StandardAllIntents","InlineAllIntents","NoneDismissibleAllIntents"];export{a as InlineAllIntents,o as NoneDismissibleAllIntents,s as Standard,i as StandardAllIntents,S as __namedExportsOrder,b as default};
