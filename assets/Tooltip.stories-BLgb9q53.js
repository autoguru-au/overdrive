import{e as c}from"./iframe-BCt8Udfy.js";import{I as L}from"./Inline-o2dnEXRD.js";import{E as p}from"./Positioner-OQto3sTN.js";import{T}from"./Text-jNEoN6Nm.js";import{T as M}from"./Tooltip-DjqkpuGf.js";import{B as _}from"./Button-BvFIh2Kc.js";import{T as W}from"./TextInput-CnAZmurr.js";import"./useNegativeMarginTop-DaJy5DoG.js";import"./resolveResponsiveProps-OZ0auyPc.js";import"./Portal-CaDP47qE.js";import"./index-2gw1hHn7.js";import"./index-DV5X3zHe.js";import"./Icon-DQv8cRXC.js";import"./ProgressSpinner-bQpPwE0w.js";import"./withEnhancedInput-ByO0xZFB.js";import"./withEnhancedInput.css-Dajc7WvC.js";const{userEvent:n,within:h,expect:e,waitFor:i}=__STORYBOOK_MODULE_TEST__,z=["3","4"],g="I'm the tooltip body",it={title:"Components/Tooltip",tags:["updated"],component:M,decorators:[r=>c.createElement("div",{style:{marginLeft:100,marginTop:100}},c.createElement(r,null))],parameters:{chromatic:{disable:!0}},args:{children:c.createElement("div",{style:{display:"inline"}},"I'm the tooltip trigger")},argTypes:{alignment:{options:Object.values(p),defaultValue:p.RIGHT,control:{type:"select"}},size:{options:z,defaultValue:void 0,control:{type:"select"}},label:{defaultValue:""},closeAfter:{defaultValue:p.RIGHT,control:{type:"number"}}}},u={args:{label:g,closeAfter:void 0,wrapper:!0,testId:"standard-tooltip"},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByTestId("standard-tooltip");await s("Test standard tooltip interactions",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent(g)}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await s("Test focus interactions",async()=>{await n.click(o),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},w={args:{label:"I will automatically close after 5 seconds",closeAfter:5e3,size:"large",wrapper:!0}},m={args:{label:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",alignment:p.TOP,wrapper:!0}},y={args:{label:"This tooltip works with multiple children! Best to use a wrapper",alignment:p.BOTTOM,testId:"trigger",children:c.createElement(c.Fragment,null,c.createElement(L,null,c.createElement(T,null,"Inline child"),c.createElement(T,null,"Inline child")),c.createElement(T,null,"Second child element")),wrapper:!0},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByTestId("trigger");await s("Test hover and mouse leave",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await s("Test keyboard focus (Tab) and blur",async()=>{await n.tab(),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},d={args:{label:"This tooltip appears on an interactive button",alignment:p.TOP,children:c.createElement(_,null,"Hover or focus me")},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByRole("button");await s("Test button hover interaction",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip appears on an interactive button")}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await s("Test button focus interaction",async()=>{await n.tab(),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.click(r),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}},v={args:{label:"This tooltip provides helpful input guidance",alignment:p.TOP,children:c.createElement(W,{name:"example-input",placeholder:"Type something here..."})},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByRole("textbox");await s("Test input hover interaction",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip provides helpful input guidance")}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await s("Test input focus interaction",async()=>{await n.click(o),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})}),await s("Test input functionality is preserved",async()=>{await n.type(o,"Test input"),await e(o).toHaveValue("Test input"),await n.clear(o),await e(o).toHaveValue("")}),await s("Test blur to hide tooltip",async()=>{await n.click(r),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}};var f,b,B;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: standardTooltipLabel,
    closeAfter: undefined,
    wrapper: true,
    testId: 'standard-tooltip'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId('standard-tooltip');
    await step('Test standard tooltip interactions', async () => {
      // Test hover
      await userEvent.hover(trigger);
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toHaveTextContent(standardTooltipLabel);
      });

      // Test unhover
      await userEvent.unhover(trigger);
      await waitFor(async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });
    await step('Test focus interactions', async () => {
      // Focus to show tooltip
      await userEvent.click(trigger);
      await expect(trigger).toHaveFocus();
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
      });
    });
  }
}`,...(B=(b=u.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var x,E,I;w.parameters={...w.parameters,docs:{...(x=w.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'I will automatically close after 5 seconds',
    closeAfter: 5e3,
    size: 'large',
    wrapper: true
  }
}`,...(I=(E=w.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,D,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    alignment: EAlignment.TOP,
    wrapper: true
  }
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var F,V,H;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'This tooltip works with multiple children! Best to use a wrapper',
    alignment: EAlignment.BOTTOM,
    testId: 'trigger',
    children: <>
                <Inline>
                    <Text>Inline child</Text>
                    <Text>Inline child</Text>
                </Inline>
                <Text>Second child element</Text>
            </>,
    wrapper: true
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
}`,...(H=(V=y.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var O,P,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'This tooltip appears on an interactive button',
    alignment: EAlignment.TOP,
    children: <Button>Hover or focus me</Button>
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await step('Test button hover interaction', async () => {
      // Hover to show tooltip
      await userEvent.hover(button);
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toHaveTextContent('This tooltip appears on an interactive button');
      });

      // Mouse leave to hide
      await userEvent.unhover(button);
      await waitFor(async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });

    // Reset focus to body to ensure Tab focuses the trigger next
    document.body.focus();
    await step('Test button focus interaction', async () => {
      // Focus to show tooltip
      await userEvent.tab();
      await expect(button).toHaveFocus();
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
      });

      // Blur to hide (by clicking elsewhere)
      await userEvent.click(canvasElement);
      await waitFor(async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });
  }
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,S,q;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'This tooltip provides helpful input guidance',
    alignment: EAlignment.TOP,
    children: <TextInput name="example-input" placeholder="Type something here..." />
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await step('Test input hover interaction', async () => {
      // Hover to show tooltip
      await userEvent.hover(input);
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toHaveTextContent('This tooltip provides helpful input guidance');
      });

      // Mouse leave to hide
      await userEvent.unhover(input);
      await waitFor(async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });
    await step('Test input focus interaction', async () => {
      // Focus to show tooltip
      await userEvent.click(input);
      await expect(input).toHaveFocus();
      await waitFor(async () => {
        const tooltip = await canvas.findByRole('tooltip');
        await expect(tooltip).toBeVisible();
      });
    });
    await step('Test input functionality is preserved', async () => {
      // Ensure input is still functional
      await userEvent.type(input, 'Test input');
      await expect(input).toHaveValue('Test input');

      // Clear for next test
      await userEvent.clear(input);
      await expect(input).toHaveValue('');
    });
    await step('Test blur to hide tooltip', async () => {
      // Click elsewhere to blur and hide tooltip
      await userEvent.click(canvasElement);
      await waitFor(async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        const tooltipAfterDelay = canvas.queryByRole('tooltip');
        await expect(tooltipAfterDelay).not.toBeInTheDocument();
      });
    });
  }
}`,...(q=(S=v.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const st=["Standard","LargeWithAutoClose","WithLongText","WithMultipleChildren","OnButton","OnTextInput"];export{w as LargeWithAutoClose,d as OnButton,v as OnTextInput,u as Standard,m as WithLongText,y as WithMultipleChildren,st as __namedExportsOrder,it as default};
