import{e}from"./iframe-CFwUcJnX.js";import{I as C}from"./Inline-C4wfw7Gl.js";import{E as t}from"./Positioner-83ka4NNT.js";import{T as p}from"./Text-Bekh4-oh.js";import{T as k}from"./Tooltip-CNnMRxh5.js";import"./useNegativeMarginTop-CiLZ67so.js";import"./resolveResponsiveProps-BLCo0nz9.js";import"./Portal-BR6J7moE.js";import"./index-CxiwmT52.js";import"./index-B85a9uKh.js";const{userEvent:u,within:L,expect:o,waitFor:h}=__STORYBOOK_MODULE_TEST__,W=["3","4"],U={title:"Components/Tooltip",tags:["updated"],component:k,decorators:[m=>e.createElement("div",{style:{marginLeft:100,marginTop:100}},e.createElement(m,null))],parameters:{chromatic:{disable:!0}},args:{children:e.createElement("div",{style:{display:"inline"}},"I'm the tooltip trigger")},argTypes:{alignment:{options:Object.values(t),defaultValue:t.RIGHT,control:{type:"select"}},size:{options:W,defaultValue:void 0,control:{type:"select"}},label:{defaultValue:""},closeAfter:{defaultValue:t.RIGHT,control:{type:"number"}}}},r={args:{label:"I'm the tooltip body",closeAfter:void 0}},i={args:{label:"I will automatically close after 5 seconds",closeAfter:5e3}},s={args:{label:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",alignment:t.TOP}},l={args:{label:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",alignment:t.BOTTOM,size:"large"}},c={args:{label:"This tooltip works with multiple children!",alignment:t.LEFT,testId:"trigger",children:e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(p,null,"Inline child"),e.createElement(p,null,"Inline child")),e.createElement(p,null,"Second child element"))},play:async({canvasElement:m,step:g})=>{const n=L(m),d=n.getByTestId("trigger");await g("Test hover and mouse leave",async()=>{await u.hover(d),await h(async()=>{const a=await n.findByRole("tooltip");await o(a).toBeVisible()}),await u.unhover(d),await h(async()=>{await new Promise(R=>setTimeout(R,600));const a=n.queryByRole("tooltip");await o(a).not.toBeInTheDocument()})}),document.body.focus(),await g("Test keyboard focus (Tab) and blur",async()=>{await u.tab(),await o(d).toHaveFocus(),await h(async()=>{const a=await n.findByRole("tooltip");await o(a).toBeVisible()})})}};var w,y,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "I'm the tooltip body",
    closeAfter: undefined
  }
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,b,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'I will automatically close after 5 seconds',
    closeAfter: 5e3
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var E,x,I;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    alignment: EAlignment.TOP
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,A,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    alignment: EAlignment.BOTTOM,
    size: 'large'
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var F,O,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'This tooltip works with multiple children!',
    alignment: EAlignment.LEFT,
    testId: 'trigger',
    children: <>
                <Inline>
                    <Text>Inline child</Text>
                    <Text>Inline child</Text>
                </Inline>
                <Text>Second child element</Text>
            </>
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const triggerElement = canvas.getByTestId('trigger');
    await step('Test hover and mouse leave', async () => {
      // Hover to show
      await userEvent.hover(triggerElement);
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
      });

      // Mouse leave to hide
      await userEvent.unhover(triggerElement);
      await waitFor(async () => {
        // The tooltip has a 500ms leave delay in the component
        // so we wait a bit longer to ensure it's gone
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });

    // Reset focus to body to ensure Tab focuses the trigger next
    document.body.focus();
    await step('Test keyboard focus (Tab) and blur', async () => {
      // Tab to focus and show
      await userEvent.tab();
      await expect(triggerElement).toHaveFocus();
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
      });
    });
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Y=["Standard","WithAutoClose","WithLongText","WithLargeTextSize","WithMultipleChildren"];export{r as Standard,i as WithAutoClose,l as WithLargeTextSize,s as WithLongText,c as WithMultipleChildren,Y as __namedExportsOrder,U as default};
