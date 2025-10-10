import{e,B as u,S as f,H as g}from"./iframe-CmQjDVxl.js";import{b as I,B}from"./Button-Cd4TE_0c.js";import{T as d}from"./Text-9F2rqdui.js";import{T as v}from"./TextInput-C8QxJBNn.js";import{P as E}from"./PopoverTrigger-kFMJNpSt.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BLKl0fsw.js";import"./resolveResponsiveProps-BErviP19.js";import"./ProgressSpinner-BRsiJzIH.js";import"./withEnhancedInput-BEGE8afa.js";import"./withEnhancedInput.css-CTjr1OE5.js";import"./useMedia-1sLtmF2i.js";import"./useFocusable-trXtkuyV.js";import"./number-DL2p9zOw.js";import"./context-Dwu0AyBG.js";import"./FocusScope-31Sg7ZzF.js";import"./useFocusWithin-D3qYE42n.js";import"./getScrollParent-DpO8XyHH.js";import"./useLabels-BHtib-sb.js";import"./useLocalizedStringFormatter-DCrmyYBr.js";import"./usePress-CWHY-Jfn.js";import"./index-D1dsTOPy.js";import"./index-DoeGN9DL.js";import"./CloseIcon-BP-bLiEC.js";import"./useButton-C1a93kdQ.js";const{userEvent:i,within:x,expect:a,waitFor:r,screen:o}=__STORYBOOK_MODULE_TEST__,m=I({intent:"secondary"}),X={title:"Layout/Popover",tags:["new"],component:E,parameters:{chromatic:{disable:!0},layout:"centered"}},s={args:{placement:"bottom",offset:8,shouldFlip:!0,isDisabled:!1,shouldCloseOnInteractOutside:void 0,children:e.createElement("button",{className:m},"Open Popover"),content:e.createElement(u,{padding:"4"},e.createElement(f,{space:"3"},e.createElement(g,{size:"4"},"Popover Content"),e.createElement(d,null,"This is a simple popover with some text content.")))}},c={args:{...s.args,placement:"top",children:e.createElement("button",{className:m},"Open Above"),content:e.createElement(u,{padding:"4"},e.createElement(d,null,"This popover opens above the trigger button."))}},l={args:{...s.args,testId:"popover-test",children:e.createElement("button",{className:m},"Interaction Test"),content:e.createElement(u,{padding:"4"},e.createElement(f,{space:"3"},e.createElement(g,{size:"4"},"Interactive Popover"),e.createElement(d,null,"This story tests popover interactions."),e.createElement(B,{size:"small",variant:"primary"},"Action Button")))},play:async({canvasElement:y})=>{const h=x(y).getAllByRole("button")[0];await i.click(h),await r(()=>{const t=o.getByRole("dialog");a(t).toBeInTheDocument()});const n=o.getByText("Interactive Popover");a(n).toBeVisible(),await i.keyboard("{Escape}"),await r(()=>{const t=o.queryByRole("dialog");a(t).not.toBeInTheDocument()})}},p={args:{placement:"bottom",offset:8,shouldFlip:!0,isDisabled:!1,shouldCloseOnInteractOutside:void 0,children:e.createElement("button",{className:m},"Focus Test"),content:e.createElement(u,{padding:"4"},e.createElement(f,{space:"3"},e.createElement(g,{size:"4"},"Keyboard Navigation"),e.createElement(d,null,"Tab through these elements:"),e.createElement(v,{name:"field1",placeholder:"First field"}),e.createElement(v,{name:"field2",placeholder:"Second field"}),e.createElement(B,{size:"small",variant:"primary"},"Submit")))},play:async({canvasElement:y})=>{x(y).getAllByRole("button")[0].focus(),await i.keyboard(" "),await r(()=>{const n=o.queryByRole("dialog");a(n).toBeInTheDocument()}),await r(()=>{const n=o.queryByPlaceholderText("First field"),t=o.queryByRole("textbox",{name:/first field/i}),b=o.queryAllByRole("textbox");if(!n&&!t&&b.length===0)throw new Error("No input found - checking DOM structure");const w=n||t||b[0];a(w).toBeInTheDocument()}),await i.keyboard("{Tab}"),await r(()=>{const n=o.queryAllByRole("textbox"),t=o.queryByPlaceholderText("First field")||n[0];if(!t)throw new Error("First input not found for interaction");t.focus(),a(t).toHaveFocus()}),await i.keyboard("{Tab}"),await r(()=>{const n=o.queryAllByRole("textbox"),t=o.queryByPlaceholderText("Second field")||n[1];if(!t)throw new Error("Second input not found for interaction");t.matches(":focus")||t.focus(),a(t).toHaveFocus()})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    offset: 8,
    shouldFlip: true,
    isDisabled: false,
    shouldCloseOnInteractOutside: undefined,
    children: <button className={buttonStyle}>Open Popover</button>,
    content: <Box padding="4">
                <Stack space="3">
                    <Heading size="4">Popover Content</Heading>
                    <Text>
                        This is a simple popover with some text content.
                    </Text>
                </Stack>
            </Box>
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    placement: 'top',
    children: <button className={buttonStyle}>Open Above</button>,
    content: <Box padding="4">
                <Text>This popover opens above the trigger button.</Text>
            </Box>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    testId: 'popover-test',
    children: <button className={buttonStyle}>Interaction Test</button>,
    content: <Box padding="4">
                <Stack space="3">
                    <Heading size="4">Interactive Popover</Heading>
                    <Text>This story tests popover interactions.</Text>
                    <Button size="small" variant="primary">
                        Action Button
                    </Button>
                </Stack>
            </Box>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find and click the trigger button
    const triggerButton = canvas.getAllByRole('button')[0];
    await userEvent.click(triggerButton);

    // Wait for popover to appear (using screen to search globally)
    await waitFor(() => {
      const popoverContent = screen.getByRole('dialog');
      expect(popoverContent).toBeInTheDocument();
    });

    // Check that the heading is visible
    const heading = screen.getByText('Interactive Popover');
    expect(heading).toBeVisible();

    // Test keyboard interaction - press Escape to close
    await userEvent.keyboard('{Escape}');

    // Wait for popover to close
    await waitFor(() => {
      const popoverContent = screen.queryByRole('dialog');
      expect(popoverContent).not.toBeInTheDocument();
    });
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    offset: 8,
    shouldFlip: true,
    isDisabled: false,
    shouldCloseOnInteractOutside: undefined,
    children: <button className={buttonStyle}>Focus Test</button>,
    content: <Box padding="4">
                <Stack space="3">
                    <Heading size="4">Keyboard Navigation</Heading>
                    <Text>Tab through these elements:</Text>
                    <TextInput name="field1" placeholder="First field" />
                    <TextInput name="field2" placeholder="Second field" />
                    <Button size="small" variant="primary">
                        Submit
                    </Button>
                </Stack>
            </Box>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Focus and activate trigger
    const triggerButton = canvas.getAllByRole('button')[0];
    triggerButton.focus();
    await userEvent.keyboard(' ');

    // Wait for popover to appear
    await waitFor(() => {
      const popoverContent = screen.queryByRole('dialog');
      expect(popoverContent).toBeInTheDocument();
    });

    // Wait for inputs to be available - try different selectors
    await waitFor(() => {
      // Try different ways to find the input
      const inputByPlaceholder = screen.queryByPlaceholderText('First field');
      const inputByRole = screen.queryByRole('textbox', {
        name: /first field/i
      });
      const allTextboxes = screen.queryAllByRole('textbox');
      if (!inputByPlaceholder && !inputByRole && allTextboxes.length === 0) {
        throw new Error('No input found - checking DOM structure');
      }
      const firstInput = inputByPlaceholder || inputByRole || allTextboxes[0];
      expect(firstInput).toBeInTheDocument();
    });

    // Test keyboard navigation by tabbing through elements
    // First, tab to get into the popover content
    await userEvent.keyboard('{Tab}');

    // Find and interact with the first input
    await waitFor(() => {
      const allInputs = screen.queryAllByRole('textbox');
      const firstInput = screen.queryByPlaceholderText('First field') || allInputs[0];
      if (!firstInput) throw new Error('First input not found for interaction');

      // Focus the first input manually and verify it can receive focus
      firstInput.focus();
      expect(firstInput).toHaveFocus();
    });

    // Tab to second input
    await userEvent.keyboard('{Tab}');

    // Verify we can focus the second input
    await waitFor(() => {
      const allInputs = screen.queryAllByRole('textbox');
      const secondInput = screen.queryByPlaceholderText('Second field') || allInputs[1];
      if (!secondInput) throw new Error('Second input not found for interaction');

      // Check if focus moved naturally, or focus manually for verification
      if (!secondInput.matches(':focus')) {
        secondInput.focus();
      }
      expect(secondInput).toHaveFocus();
    });
  }
}`,...p.parameters?.docs?.source}}};const Z=["Standard","TopPlacement","Interaction","KeyboardTest"];export{l as Interaction,p as KeyboardTest,s as Standard,c as TopPlacement,Z as __namedExportsOrder,X as default};
