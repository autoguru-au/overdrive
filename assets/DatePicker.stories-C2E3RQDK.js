import{e as s,i as h,r as g}from"./iframe-C9jllvPJ.js";import{M as L}from"./mockdate-DOC4yEHv.js";import{a as B}from"./argTypes-DTFbdLbw.js";import{D as i,d as v,i as S}from"./DatePicker-D15oJn6c.js";import{F as A}from"./FlexInline-BYq7us6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckIcon-BvPhOLK9.js";import"./StarIcon-B_dEkKjO.js";import"./PlusIcon-mkYso9eY.js";import"./CurrencyUsdIcon-C_azmv9T.js";import"./AlertCircleIcon-B3V9wUhd.js";import"./PhoneIcon-OTdYTFxx.js";import"./MagnifyIcon-B5uFBQyU.js";import"./Calendar-CnCTtkcV.js";import"./usePress-DHadrcsS.js";import"./useFocusable-BQN1eFB0.js";import"./index-DkToRMIa.js";import"./index-7EDYEJkQ.js";import"./useButton-Dcp9REBf.js";import"./context-CHBhQBBQ.js";import"./useLocalizedStringFormatter-CrKF8E8P.js";import"./useLabels-DorNaQrF.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-DFDql3N0.js";import"./Icon-BV8fzRUr.js";import"./resolveResponsiveProps-DGBAxJXa.js";import"./ChevronLeftIcon-F6hvNpPG.js";import"./ChevronRightIcon-sRHKOXEc.js";import"./ProgressSpinner-CjFPPX3k.js";import"./Text-DggnGx7l.js";import"./VisuallyHidden-DYpFOKMy.js";import"./PopoverTrigger-WryGiTw9.js";import"./Button-DK_OvrfX.js";import"./useMedia-ChPJLaTC.js";import"./number-DL2p9zOw.js";import"./FocusScope-Ca41vpug.js";import"./useFocusWithin-DINSk8S8.js";import"./CloseIcon-rxrwN2Cn.js";import"./flex-DV6INcdr.js";const{expect:o,fn:T,userEvent:d,within:E,waitFor:y,screen:u}=__STORYBOOK_MODULE_TEST__,D="Select date",w="2026-01-01",pe={title:"Components/Date Picker",tags:["updated"],component:i,decorators:[t=>s.createElement(A,null,s.createElement(t,null))],args:{onChange:T(),valueLabel:D,icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:{allowPastDate:!0},className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...B}},beforeEach:()=>{h()&&L.set(w)}},p={args:{valueLabel:""},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n,onChange:e=>{a(v(e)),t.onChange?.(e)}})}},m={args:{size:"large"},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n,onChange:e=>{a(v(e)),t.onChange?.(e)}})}},l={args:{useNativePicker:!0,valueLabel:"Today"},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,onChange:e=>{S(e)?a("Today"):a(v(e)),t.onChange?.(e)},valueLabel:n})}},c={args:{valueLabel:D},render:t=>{const[n,a]=g.useState(t.valueLabel);return s.createElement(i,{...t,valueLabel:n||t.valueLabel,onChange:e=>{a(v(e)||""),t.onChange?.(e)}})},play:async({canvasElement:t,step:n})=>{const a=E(t);await n("Verify initial state",async()=>{const e=a.getAllByRole("button")[0];o(e).toBeInTheDocument(),o(a.getAllByText(D)[0]).toBeInTheDocument()}),await n("Open calendar popover",async()=>{const e=a.getAllByRole("button")[0];await d.click(e),await y(()=>{const r=u.getAllByRole("dialog")[0];o(r).toBeInTheDocument()})}),await n("Verify calendar components",async()=>{const e=u.getAllByRole("grid")[0];o(e).toBeInTheDocument()}),await n("Select a date",async()=>{const e=u.getAllByRole("button").filter(r=>r.textContent&&/^\d{1,2}$/.test(r.textContent.trim())&&!r.hasAttribute("aria-disabled")&&!r.hasAttribute("aria-pressed"));if(e.length>0){const r=e[0];await d.click(r);const b=a.getAllByRole("button")[0];o(b).toBeInTheDocument()}}),await n("Test keyboard interaction",async()=>{const e=a.getAllByRole("button")[0];await d.click(e),await y(()=>{const r=u.getAllByRole("dialog")[0];o(r).toBeInTheDocument()}),await d.keyboard("{Escape}")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Tests date selection and value display",...c.parameters?.docs?.description}}};const me=["Standard","LargeWithLabel","NativePicker","Interaction"];export{c as Interaction,m as LargeWithLabel,l as NativePicker,p as Standard,me as __namedExportsOrder,pe as default};
