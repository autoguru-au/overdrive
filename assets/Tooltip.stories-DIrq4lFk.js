import{e as i,B as f,S as B}from"./iframe-BHjXsG_y.js";import{F as x}from"./FlexInline-BwBTrC4L.js";import{E as p}from"./Positioner-HqCPerCp.js";import{T as u}from"./Text-1lD5z1cA.js";import{T as E}from"./Tooltip-DXThpoe-.js";import{B as R}from"./Button-hCZNrg1L.js";import{T as I}from"./TextInput-YmkqmuJW.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Ctd-TATL.js";import"./Portal-CrtWoRV4.js";import"./index-C1xxptEQ.js";import"./index-BI1oPTpU.js";import"./Icon-CHS_LQuq.js";import"./resolveResponsiveProps-BLEzsCO-.js";import"./ProgressSpinner--4G0fW_0.js";import"./withEnhancedInput-DCLGn4j0.js";import"./withEnhancedInput.css-C1fzOoqG.js";const{userEvent:n,within:g,expect:e,waitFor:s}=__STORYBOOK_MODULE_TEST__,F=["3","4"],b="I'm the tooltip body",K={title:"Components/Tooltip",tags:[],component:E,decorators:[l=>i.createElement("div",{style:{marginLeft:100,marginTop:100}},i.createElement(l,null))],parameters:{chromatic:{disable:!0}},args:{children:i.createElement("div",{style:{display:"inline"}},"I'm the tooltip trigger")},argTypes:{children:{control:!1},alignment:{options:Object.values(p),defaultValue:p.RIGHT,control:{type:"select"}},size:{options:F,defaultValue:void 0,control:{type:"select"}},label:{defaultValue:""},closeAfter:{defaultValue:p.RIGHT,control:{type:"number"}}}},w={args:{label:b,closeAfter:void 0,wrapper:!0,testId:"standard-tooltip"},play:async({canvasElement:l,step:r})=>{const a=g(l),o=a.getByTestId("standard-tooltip");await r("Test standard tooltip interactions",async()=>{await n.hover(o),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent(b)}),await n.unhover(o),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await r("Test focus interactions",async()=>{await n.click(o),await e(o).toHaveFocus(),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},m={args:{label:"I will automatically close after 5 seconds",closeAfter:5e3,size:"large",wrapper:!0}},d={args:{label:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",alignment:p.TOP,wrapper:!0}},y={args:{content:i.createElement(f,{backgroundColor:"white",borderColor:"default",borderRadius:"md",borderWidth:"1",boxShadow:"5",padding:"5"},i.createElement(B,{space:"2"},i.createElement(u,{size:"3",weight:"bold"},"Custom tooltip title"),i.createElement(u,{size:"2"},"Custom tooltip content can compose any non-interactive Overdrive primitives."))),alignment:p.BOTTOM,wrapper:!0}},v={args:{label:"This tooltip works with multiple children! Best to use a wrapper",alignment:p.BOTTOM,testId:"trigger",children:i.createElement(i.Fragment,null,i.createElement(x,null,i.createElement(u,null,"Inline child"),i.createElement(u,null,"Inline child")),i.createElement(u,null,"Second child element")),wrapper:!0},play:async({canvasElement:l,step:r})=>{const a=g(l),o=a.getByTestId("trigger");await r("Test hover and mouse leave",async()=>{await n.hover(o),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.unhover(o),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await r("Test keyboard focus (Tab) and blur",async()=>{await n.tab(),await e(o).toHaveFocus(),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})})}},h={args:{label:"This tooltip appears on an interactive button",alignment:p.TOP,children:i.createElement(R,null,"Hover or focus me")},play:async({canvasElement:l,step:r})=>{const a=g(l),o=a.getByRole("button");await r("Test button hover interaction",async()=>{await n.hover(o),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip appears on an interactive button")}),await n.unhover(o),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),document.body.focus(),await r("Test button focus interaction",async()=>{await n.tab(),await e(o).toHaveFocus(),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()}),await n.click(l),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}},T={args:{label:"This tooltip provides helpful input guidance",alignment:p.TOP,children:i.createElement(I,{name:"example-input",placeholder:"Type something here..."})},play:async({canvasElement:l,step:r})=>{const a=g(l),o=a.getByRole("textbox");await r("Test input hover interaction",async()=>{await n.hover(o),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible(),await e(t).toHaveTextContent("This tooltip provides helpful input guidance")}),await n.unhover(o),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})}),await r("Test input focus interaction",async()=>{await n.click(o),await e(o).toHaveFocus(),await s(async()=>{const t=await a.findByRole("tooltip");await e(t).toBeVisible()})}),await r("Test input functionality is preserved",async()=>{await n.type(o,"Test input"),await e(o).toHaveValue("Test input"),await n.clear(o),await e(o).toHaveValue("")}),await r("Test blur to hide tooltip",async()=>{await n.click(l),await s(async()=>{await new Promise(c=>setTimeout(c,600));const t=a.queryByRole("tooltip");await e(t).not.toBeInTheDocument()})})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I will automatically close after 5 seconds',
    closeAfter: 5e3,
    size: 'large',
    wrapper: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    alignment: EAlignment.TOP,
    wrapper: true
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: <Box backgroundColor="white" borderColor="default" borderRadius="md" borderWidth="1" boxShadow="5" padding="5">
                <Stack space="2">
                    <Text size="3" weight="bold">
                        Custom tooltip title
                    </Text>
                    <Text size="2">
                        Custom tooltip content can compose any non-interactive
                        Overdrive primitives.
                    </Text>
                </Stack>
            </Box>,
    alignment: EAlignment.BOTTOM,
    wrapper: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const U=["Standard","LargeWithAutoClose","WithLongText","WithCustomContent","WithMultipleChildren","OnButton","OnTextInput"];export{m as LargeWithAutoClose,h as OnButton,T as OnTextInput,w as Standard,y as WithCustomContent,d as WithLongText,v as WithMultipleChildren,U as __namedExportsOrder,K as default};
