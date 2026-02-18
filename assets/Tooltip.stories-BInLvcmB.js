import{e as c}from"./iframe-D3DMP0e-.js";import{F as f}from"./FlexInline-7vV-wuhQ.js";import{E as p}from"./Positioner-DdhsQ4OM.js";import{T}from"./Text-CopIcfcL.js";import{T as b}from"./Tooltip-hsIlaAQB.js";import{B}from"./Button-BlzjVAoa.js";import{T as x}from"./TextInput-CHOhovBY.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-hoz9lKln.js";import"./Portal-jpsl_JNL.js";import"./index-SNNNgtCQ.js";import"./index-BAlklDXV.js";import"./Icon-CiSRuH0F.js";import"./resolveResponsiveProps-Dsh1waHK.js";import"./ProgressSpinner-veDtEptL.js";import"./withEnhancedInput-b-wXJ530.js";import"./withEnhancedInput.css-Caf6OHNe.js";const{userEvent:n,within:h,expect:e,waitFor:i}=__STORYBOOK_MODULE_TEST__,E=["3","4"],g="I'm the tooltip body",z={title:"Components/Tooltip",tags:[],component:b,decorators:[r=>c.createElement("div",{style:{marginLeft:100,marginTop:100}},c.createElement(r,null))],parameters:{chromatic:{disable:!0}},args:{children:c.createElement("div",{style:{display:"inline"}},"I'm the tooltip trigger")},argTypes:{children:{control:!1},alignment:{options:Object.values(p),defaultValue:p.RIGHT,control:{type:"select"}},size:{options:E,defaultValue:void 0,control:{type:"select"}},label:{defaultValue:""},closeAfter:{defaultValue:p.RIGHT,control:{type:"number"}}}},u={args:{label:g,closeAfter:void 0,wrapper:!0,testId:"standard-tooltip"},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByTestId("standard-tooltip");await s("Test standard tooltip interactions",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent(g)}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await s("Test focus interactions",async()=>{await n.click(o),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},w={args:{label:"I will automatically close after 5 seconds",closeAfter:5e3,size:"large",wrapper:!0}},m={args:{label:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",alignment:p.TOP,wrapper:!0}},y={args:{label:"This tooltip works with multiple children! Best to use a wrapper",alignment:p.BOTTOM,testId:"trigger",children:c.createElement(c.Fragment,null,c.createElement(f,null,c.createElement(T,null,"Inline child"),c.createElement(T,null,"Inline child")),c.createElement(T,null,"Second child element")),wrapper:!0},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByTestId("trigger");await s("Test hover and mouse leave",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await s("Test keyboard focus (Tab) and blur",async()=>{await n.tab(),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},d={args:{label:"This tooltip appears on an interactive button",alignment:p.TOP,children:c.createElement(B,null,"Hover or focus me")},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByRole("button");await s("Test button hover interaction",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip appears on an interactive button")}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await s("Test button focus interaction",async()=>{await n.tab(),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.click(r),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}},v={args:{label:"This tooltip provides helpful input guidance",alignment:p.TOP,children:c.createElement(x,{name:"example-input",placeholder:"Type something here..."})},play:async({canvasElement:r,step:s})=>{const a=h(r),o=a.getByRole("textbox");await s("Test input hover interaction",async()=>{await n.hover(o),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip provides helpful input guidance")}),await n.unhover(o),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await s("Test input focus interaction",async()=>{await n.click(o),await e(o).toHaveFocus(),await i(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})}),await s("Test input functionality is preserved",async()=>{await n.type(o,"Test input"),await e(o).toHaveValue("Test input"),await n.clear(o),await e(o).toHaveValue("")}),await s("Test blur to hide tooltip",async()=>{await n.click(r),await i(async()=>{await new Promise(l=>setTimeout(l,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I will automatically close after 5 seconds',
    closeAfter: 5e3,
    size: 'large',
    wrapper: true
  }
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    alignment: EAlignment.TOP,
    wrapper: true
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This tooltip works with multiple children! Best to use a wrapper',
    alignment: EAlignment.BOTTOM,
    testId: 'trigger',
    children: <>
                <FlexInline>
                    <Text>Inline child</Text>
                    <Text>Inline child</Text>
                </FlexInline>
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
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const G=["Standard","LargeWithAutoClose","WithLongText","WithMultipleChildren","OnButton","OnTextInput"];export{w as LargeWithAutoClose,d as OnButton,v as OnTextInput,u as Standard,m as WithLongText,y as WithMultipleChildren,G as __namedExportsOrder,z as default};
