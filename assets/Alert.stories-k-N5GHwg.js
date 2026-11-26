import{e}from"./iframe-CUwYMU5A.js";import{B}from"./Button-Deldytuy.js";import{T}from"./Text-zRXXdl9d.js";import{A as n}from"./Alert-BGonb5VU.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CckNuZ1m.js";import"./resolveResponsiveProps-CL3Hzh_z.js";import"./ProgressSpinner-D4sDpoRb.js";import"./IntentStripe-BI4DffSs.js";import"./XIcon-C_sV-okC.js";import"./InformationIcon-CiKHfnXu.js";import"./AlertCircleIcon-Cl2evSCq.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,{expect:o,fn:O,userEvent:N,within:S}=__STORYBOOK_MODULE_TEST__,i=O(_("onRequestClose")),y=["information","success","warning","danger"],f="Your invoice was sent to abc@supplier.co",I="Invoice sent",C="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",M={title:"Components/Alert",component:n,args:{intent:"success"},argTypes:{children:{control:!1},intent:{options:y,control:{type:"select"}},appearance:{options:[void 0,"detail","message"],control:{type:"select"}}}},s=({children:t})=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px"}},t),u={args:{onRequestClose:i,children:e.createElement(T,null,"Your invoice was sent to ",e.createElement(T,{strong:!0},"abc@supplier.co"))},render:t=>e.createElement(s,null,e.createElement("div",null,e.createElement(n,{...t})))},l={args:{onRequestClose:i},render:t=>e.createElement(s,null,e.createElement("div",null,e.createElement(n,{...t,intent:"success"},e.createElement(T,null,"Your invoice was sent to"," ",e.createElement(T,{strong:!0},"abc@supplier.co")))),e.createElement("div",null,e.createElement(n,{...t,intent:"warning"},"This will affect job changes")),e.createElement("div",null,e.createElement(n,{...t,intent:"danger"},"Something went wrong")),e.createElement("div",null,e.createElement(n,{...t,intent:"information"},"Something worth noting happened")),e.createElement("div",null,e.createElement(n,{...t,intent:"information"},C)))},m={args:{inline:!0,onRequestClose:i},render:l.render},p={args:{dismissible:!1,onRequestClose:i},render:l.render},g={args:{appearance:"detail"},render:t=>e.createElement(s,null,y.map(a=>e.createElement(n,{...t,key:a,intent:a},f)))},v={args:{appearance:"detail",title:I,action:e.createElement(B,{variant:"primary",outlined:!0,size:"small",onClick:_("action")},"View invoice")},render:t=>e.createElement(s,null,y.map(a=>e.createElement(n,{...t,key:a,intent:a},f)))},E={args:{appearance:"detail",intent:"information",title:"Info message heading",onRequestClose:i,children:C},render:t=>e.createElement(s,null,e.createElement(n,{...t}))},A={args:{appearance:"detail",intent:"information",onRequestClose:i,children:C},render:t=>e.createElement(s,null,e.createElement(n,{...t}))},w={args:{appearance:"message"},render:t=>e.createElement(s,null,y.map(a=>e.createElement(n,{...t,key:a,intent:a},"You have 1 new notification")))},h={args:{appearance:"detail",title:I,onRequestClose:i,children:f},render:t=>e.createElement(s,null,e.createElement(n,{...t}),e.createElement(n,{...t,appearance:"message",title:void 0},"You have 1 new notification")),play:async({args:t,canvasElement:a,step:c})=>{const d=S(a);await c("the detail layout is announced as an alert",async()=>{const[r]=d.getAllByRole("alert");await o(r).toBeInTheDocument(),await o(r).toHaveTextContent(I)}),await c("the message layout is a passive status",async()=>{const[r]=d.getAllByRole("status");await o(r).toHaveTextContent("You have 1 new notification")}),await c("the message layout offers no close control",async()=>{const[r]=d.getAllByRole("status");await o(S(r).queryByRole("button",{name:"close"})).toBeNull()}),await c("the close control is reachable and clickable",async()=>{const[r]=d.getAllByRole("button",{name:"close"});await r.focus(),await o(r).toHaveFocus(),await N.click(r),await o(t.onRequestClose).toHaveBeenCalledOnce()})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onRequestClose,
    children: <Text>
                Your invoice was sent to <Text strong>abc@supplier.co</Text>
            </Text>
  },
  render: args => <Grid>
            <div>
                <Alert {...args} />
            </div>
        </Grid>
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onRequestClose
  },
  render: args => <Grid>
            <div>
                <Alert {...args} intent="success">
                    <Text>
                        Your invoice was sent to{' '}
                        <Text strong>abc@supplier.co</Text>
                    </Text>
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="warning">
                    This will affect job changes
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="danger">
                    Something went wrong
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="information">
                    Something worth noting happened
                </Alert>
            </div>
            <div>
                <Alert {...args} intent="information">
                    {LONG_BODY}
                </Alert>
            </div>
        </Grid>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    onRequestClose
  },
  render: StandardAllIntents.render
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: false,
    onRequestClose
  },
  render: StandardAllIntents.render
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'detail'
  },
  render: args => <Grid>
            {intents.map(intent => <Alert {...args} key={intent} intent={intent}>
                    {INVOICE_SENT}
                </Alert>)}
        </Grid>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'detail',
    title: INVOICE_SENT_TITLE,
    action: <Button variant="primary" outlined size="small" onClick={action('action')}>
                View invoice
            </Button>
  },
  render: args => <Grid>
            {intents.map(intent => <Alert {...args} key={intent} intent={intent}>
                    {INVOICE_SENT}
                </Alert>)}
        </Grid>
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'detail',
    intent: 'information',
    title: 'Info message heading',
    onRequestClose,
    children: LONG_BODY
  },
  render: args => <Grid>
            <Alert {...args} />
        </Grid>
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'detail',
    intent: 'information',
    onRequestClose,
    children: LONG_BODY
  },
  render: args => <Grid>
            <Alert {...args} />
        </Grid>
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'message'
  },
  render: args => <Grid>
            {intents.map(intent => <Alert {...args} key={intent} intent={intent}>
                    You have 1 new notification
                </Alert>)}
        </Grid>
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'detail',
    title: INVOICE_SENT_TITLE,
    onRequestClose,
    children: INVOICE_SENT
  },
  render: args => <Grid>
            <Alert {...args} />
            <Alert {...args} appearance="message" title={undefined}>
                You have 1 new notification
            </Alert>
        </Grid>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('the detail layout is announced as an alert', async () => {
      const [alert] = canvas.getAllByRole('alert');
      await expect(alert).toBeInTheDocument();
      await expect(alert).toHaveTextContent(INVOICE_SENT_TITLE);
    });
    await step('the message layout is a passive status', async () => {
      const [status] = canvas.getAllByRole('status');
      await expect(status).toHaveTextContent('You have 1 new notification');
    });
    await step('the message layout offers no close control', async () => {
      const [status] = canvas.getAllByRole('status');
      await expect(within(status).queryByRole('button', {
        name: 'close'
      })).toBeNull();
    });
    await step('the close control is reachable and clickable', async () => {
      const [close] = canvas.getAllByRole('button', {
        name: 'close'
      });
      await close.focus();
      await expect(close).toHaveFocus();
      await userEvent.click(close);
      await expect(args.onRequestClose).toHaveBeenCalledOnce();
    });
  }
}`,...h.parameters?.docs?.source}}};const W=["Standard","StandardAllIntents","InlineAllIntents","NoneDismissibleAllIntents","DetailAllIntents","DetailWithTitleAndAction","DetailWithTitleAndClose","DetailLongBody","MessageAllIntents","InteractionTest"];export{g as DetailAllIntents,A as DetailLongBody,v as DetailWithTitleAndAction,E as DetailWithTitleAndClose,m as InlineAllIntents,h as InteractionTest,w as MessageAllIntents,p as NoneDismissibleAllIntents,u as Standard,l as StandardAllIntents,W as __namedExportsOrder,M as default};
