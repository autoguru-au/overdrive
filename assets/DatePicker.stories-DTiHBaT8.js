import{r as g,e as s,i as h}from"./iframe-qUC4cxwQ.js";import{M as L}from"./mockdate-C5EckPmZ.js";import{a as B}from"./argTypes-DsG18VE6.js";import{d as v,i as S}from"./useCalendarPopover-Dl7Hx2-B.js";import{D as i}from"./DatePicker-D6dAX6Hw.js";import{F as A}from"./FlexInline-B6CjUKR_.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckIcon-Y08U8nJ0.js";import"./StarIcon-BecsUl5f.js";import"./PlusIcon-DDRnh46f.js";import"./CurrencyDollarIcon-Cmeby85e.js";import"./AlertCircleIcon-B_0K1l6b.js";import"./NotePencilIcon-BKaj9SOy.js";import"./PhoneIcon-5r9CVBsG.js";import"./MagnifyingGlassIcon-E0q9CjdC.js";import"./Calendar-xCn-8BNq.js";import"./usePress-BCDht-ZB.js";import"./useControlledState-CiBm8WAk.js";import"./index-hcioG5kf.js";import"./index-rl8rPkT0.js";import"./useLocalizedStringFormatter-BaQUW976.js";import"./useLabels-CO4kiYzB.js";import"./useButton-DWaV1Tev.js";import"./getScrollParent-omwHXEU9.js";import"./useDescription-DfWFRzRQ.js";import"./Icon-DtufMYE4.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./CaretLeftIcon-D4x2d7B3.js";import"./CaretRightIcon-BA1Lzvpn.js";import"./ProgressSpinner-C4pSHKz3.js";import"./Text-DW2ue6Ex.js";import"./VisuallyHidden-C7_qKR_8.js";import"./PopoverTrigger-HHMxZN-q.js";import"./Button-D_9ned8-.js";import"./FocusScope-lPTni68w.js";import"./useFocusWithin-BPU23qHv.js";import"./number-P4c4HRxZ.js";import"./keyboard-CfBNZ_iF.js";import"./useMedia-s10djCht.js";import"./XIcon-CofsGoOb.js";import"./flex-w52CMqHY.js";const{expect:o,fn:T,userEvent:d,within:E,waitFor:y,screen:u}=__STORYBOOK_MODULE_TEST__,D="Select date",w="2026-01-01",ge={title:"Components/Date Picker",tags:["updated"],component:i,decorators:[t=>s.createElement(A,null,s.createElement(t,null))],args:{onChange:T(),valueLabel:D,icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:{allowPastDate:!0},className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...B}},beforeEach:()=>{h()&&L.set(w)}},p={args:{valueLabel:""},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n,onChange:e=>{a(v(e)),t.onChange?.(e)}})}},m={args:{size:"large"},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n,onChange:e=>{a(v(e)),t.onChange?.(e)}})}},l={args:{useNativePicker:!0,valueLabel:"Today"},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,onChange:e=>{S(e)?a("Today"):a(v(e)),t.onChange?.(e)},valueLabel:n})}},c={args:{valueLabel:D},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n||t.valueLabel,onChange:e=>{a(v(e)||""),t.onChange?.(e)}})},play:async({canvasElement:t,step:n})=>{const a=E(t);await n("Verify initial state",async()=>{const e=a.getAllByRole("button")[0];o(e).toBeInTheDocument(),o(a.getAllByText(D)[0]).toBeInTheDocument()}),await n("Open calendar popover",async()=>{const e=a.getAllByRole("button")[0];await d.click(e),await y(()=>{const r=u.getAllByRole("dialog")[0];o(r).toBeInTheDocument()})}),await n("Verify calendar components",async()=>{const e=u.getAllByRole("grid")[0];o(e).toBeInTheDocument()}),await n("Select a date",async()=>{const e=u.getAllByRole("button").filter(r=>r.textContent&&/^\d{1,2}$/.test(r.textContent.trim())&&!r.hasAttribute("aria-disabled")&&!r.hasAttribute("aria-pressed"));if(e.length>0){const r=e[0];await d.click(r);const b=a.getAllByRole("button")[0];o(b).toBeInTheDocument()}}),await n("Test keyboard interaction",async()=>{const e=a.getAllByRole("button")[0];await d.click(e),await y(()=>{const r=u.getAllByRole("dialog")[0];o(r).toBeInTheDocument()}),await d.keyboard("{Escape}")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    valueLabel: ''
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState(args.valueLabel);
    return <DatePicker {...args} valueLabel={selectedDate} onChange={value => {
      setSelectedDate(displayFormattedDate(value));
      args.onChange?.(value);
    }} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState(args.valueLabel);
    return <DatePicker {...args} valueLabel={selectedDate} onChange={value => {
      setSelectedDate(displayFormattedDate(value));
      args.onChange?.(value);
    }} />;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    useNativePicker: true,
    valueLabel: 'Today'
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState(args.valueLabel);
    return <DatePicker {...args} onChange={value => {
      if (isToday(value)) {
        setSelectedDate('Today');
      } else {
        setSelectedDate(displayFormattedDate(value));
      }
      args.onChange?.(value);
    }} valueLabel={selectedDate} />;
  }
}`,...l.parameters?.docs?.source},description:{story:"Forces the use of the native date picker on all screen sizes",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    // value: '2024-01-15',
    valueLabel: DEFAULT_VALUE_LABEL
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState(args.valueLabel);
    return <DatePicker {...args} valueLabel={selectedDate || args.valueLabel} onChange={value => {
      setSelectedDate(displayFormattedDate(value) || '');
      args.onChange?.(value);
    }} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Verify initial state', async () => {
      const trigger = canvas.getAllByRole('button')[0];
      expect(trigger).toBeInTheDocument();
      expect(canvas.getAllByText(DEFAULT_VALUE_LABEL)[0]).toBeInTheDocument();
    });
    await step('Open calendar popover', async () => {
      const trigger = canvas.getAllByRole('button')[0];
      await userEvent.click(trigger);

      // Wait for calendar popover to appear (rendered outside canvas)
      await waitFor(() => {
        const calendar = screen.getAllByRole('dialog')[0];
        expect(calendar).toBeInTheDocument();
      });
    });
    await step('Verify calendar components', async () => {
      const calendarGrid = screen.getAllByRole('grid')[0];
      expect(calendarGrid).toBeInTheDocument();
    });
    await step('Select a date', async () => {
      const dateButtons = screen.getAllByRole('button').filter(button => button.textContent && /^\\d{1,2}$/.test(button.textContent.trim()) && !button.hasAttribute('aria-disabled') && !button.hasAttribute('aria-pressed') // Not currently selected
      );
      if (dateButtons.length > 0) {
        const selectedDateButton = dateButtons[0];
        await userEvent.click(selectedDateButton);
        const trigger = canvas.getAllByRole('button')[0];
        expect(trigger).toBeInTheDocument();
      }
    });
    await step('Test keyboard interaction', async () => {
      const trigger = canvas.getAllByRole('button')[0];
      await userEvent.click(trigger);
      await waitFor(() => {
        const calendar = screen.getAllByRole('dialog')[0];
        expect(calendar).toBeInTheDocument();
      });

      // Close with escape key
      await userEvent.keyboard('{Escape}');
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"Tests date selection and value display",...c.parameters?.docs?.description}}};const ve=["Standard","LargeWithLabel","NativePicker","Interaction"];export{c as Interaction,m as LargeWithLabel,l as NativePicker,p as Standard,ve as __namedExportsOrder,ge as default};
