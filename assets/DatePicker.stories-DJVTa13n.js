import{r as o,E as N,e as n,c as B,s as G}from"./iframe-C4sSev8-.js";import{a as U}from"./argTypes-HhWq_y2D.js";import{a as T,b as E,c as j,C as H}from"./Calendar-CmlV4K3V.js";import{I as K}from"./Icon-CXO3Gmtu.js";import{P as Y}from"./ProgressSpinner-Cu-26nfN.js";import{T as J}from"./Text-BrSGOP_M.js";import{V as Q}from"./VisuallyHidden-mR-pJM2y.js";import{P as X}from"./PopoverTrigger-PUWBhEdF.js";import{I as Z}from"./CurrencyUsdIcon-BNNEES4C.js";import{F as ee}from"./FlexInline-DpkK27K4.js";import"./preload-helper-D9Z9MdNV.js";import"./CheckIcon-B3uv8IKq.js";import"./StarIcon-02B2PvAU.js";import"./PlusIcon-DladhasR.js";import"./AlertCircleIcon-dBlwvGaQ.js";import"./PhoneIcon-DduAVXbK.js";import"./MagnifyIcon-creGHq-O.js";import"./usePress-C8ZOjN4Q.js";import"./useFocusable-Clrz9Eq1.js";import"./index-DUWYk-_b.js";import"./index-jP9DFk2A.js";import"./useButton-BZBvsB4R.js";import"./context-DOcZRCgl.js";import"./useLabels-DcLqxjxc.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-D1WCFlav.js";import"./ChevronLeftIcon-jWa6rhOA.js";import"./ChevronRightIcon-pQF-UaoT.js";import"./resolveResponsiveProps-JBHQbJiX.js";import"./Button-Dc85r5Ai.js";import"./useMedia-CreBVDXL.js";import"./number-DL2p9zOw.js";import"./FocusScope-BOTVo_VD.js";import"./useFocusWithin-B8xO_lW7.js";import"./CloseIcon-iIDtBPNw.js";import"./flex-BcVZCMBq.js";function te(e){if(!e)return!1;if(typeof e=="string")try{e=T(e)}catch{return!1}return e.compare(j(E()))===0}function y(e,r="medium",a="en-AU"){if(!e)return"";let t;if(typeof e=="string")try{t=T(e)}catch{return e}else t=e;return new Intl.DateTimeFormat(a,{dateStyle:r}).format(t.toDate(E()))}var ae="_1j3uugj0",ne="_1j3uugj1",re="_1j3uugj2",V={default:"_1j3uugj3",withLabel:"_1j3uugj4"},I={default:"_1j3uugj5",root:"_1j3uugj6"};const le={openCalendar:"open calendar"},oe={small:"2",medium:"3",large:"5"},R=e=>e?e.toString():"",se=e=>{try{return T(e)}catch{return null}},s=({calendarOptions:e,className:r,disabled:a=!1,icon:t=Z,isLoading:l=!1,lang:b,onChange:c,size:h="medium",testId:F,useNativePicker:z=!1,valueLabel:D,...L})=>{const[S,w]=o.useState(null),[k,q]=o.useState(null),$=p=>{const C=p.currentTarget.value;if(C){const W=se(C);w(W)}else w(null);typeof c=="function"&&c(C)},P=N({className:[r,{[I.default]:a,[I.root]:a}]}),x=l?n.createElement(Y,{size:h}):n.createElement(K,{icon:t,size:h}),A=D?n.createElement(J,{size:oe[h]},D):null,_=o.useMemo(()=>({calendar:{defaultValue:S||j(E()),...e},onChange:p=>{w(p),typeof c=="function"&&c(R(p)),k&&k.close()}}),[S,e,c,k]),M=o.useMemo(()=>n.createElement(H,{..._}),[_]);return z?n.createElement("div",{className:B(P,ae)},n.createElement("input",{...L,className:N({className:[ne,{[I.default]:a}]}),type:"date",disabled:a,onChange:$}),n.createElement("div",{className:re},n.createElement("div",{className:B(V.default,{[V.withLabel]:!!D})},x,A))):n.createElement("div",{className:B(P,G({display:"flex",alignItems:"center",gap:"1"}))},n.createElement(X,{content:M,placement:"bottom left",testId:F,isDisabled:a,onStateReady:q},x,n.createElement(Q,null,b?.openCalendar??le.openCalendar)),A,n.createElement("input",{...L,value:R(S),type:"hidden"}))};s.displayName="DatePicker";try{s.displayName="DatePicker",s.__docgenInfo={description:"The DatePicker has been updated to render the Calendar component with a Popover while\nmaintaining backwards compatability.\n\n## Props\n- Visual size controlled by `size` (small | medium | large)\n- Icon can be customized via the `icon` prop\n\n## Event handling\n- `onChange` is always invoked with the raw ISO date string (or empty string when cleared)\n\n## Compatibility mode\n- Setting `useNativePicker={true}` preserves the original browser-specific experience.\n\n## Internationalization\n- Override text values via `lang={{ openCalendar: 'open calendar' }}`\n- Calendar options including `lang`can be passed via `calendarOptions` prop\n- Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils\n- Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)\n- Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)",displayName:"DatePicker",props:{calendarOptions:{defaultValue:null,description:"Options to customise the calendar: `allowPastDate`, `lang`, etc.",name:"calendarOptions",required:!1,type:{name:'Omit<CalendarProps, "onChange">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the picker is disabled and non-interactive",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to render inside the picker (defaults to calendar icon)",name:"icon",required:!1,type:{name:"IconType"}},isLoading:{defaultValue:{value:"false"},description:"Show a loading state spinner instead of the icon",name:"isLoading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: string) => void"}},size:{defaultValue:{value:"medium"},description:"Visual size of the picker control (small, medium, large)",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},valueLabel:{defaultValue:null,description:"Fallback label to display when no date value is selected.",name:"valueLabel",required:!1,type:{name:"string"}},useNativePicker:{defaultValue:{value:"false"},description:"Use native browser date picker instead of Calendar popover",name:"useNativePicker",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"Language content override for DatePicker",name:"lang",required:!1,type:{name:'Partial<Record<"openCalendar", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:i,fn:ie,userEvent:m,within:ce,waitFor:O,screen:g}=__STORYBOOK_MODULE_TEST__,Ue={title:"Components/Date Picker",tags:["updated"],component:s,decorators:[e=>n.createElement(ee,null,n.createElement(e,null))],args:{onChange:ie(),valueLabel:"Select date",icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:void 0,className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...U}}},v={args:{valueLabel:""},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(s,{...e,valueLabel:r,onChange:t=>{a(y(t)),e.onChange?.(t)}})}},f={args:{size:"large"},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(s,{...e,valueLabel:r,onChange:t=>{a(y(t)),e.onChange?.(t)}})}},d={args:{useNativePicker:!0,valueLabel:"Today"},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(s,{...e,onChange:t=>{te(t)?a("Today"):a(y(t)),e.onChange?.(t)},valueLabel:r})}},u={args:{valueLabel:"Select date"},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(s,{...e,valueLabel:r||e.valueLabel,onChange:t=>{a(y(t)||""),e.onChange?.(t)}})},play:async({canvasElement:e,step:r})=>{const a=ce(e);await r("Verify initial state",async()=>{const t=a.getAllByRole("button")[0];i(t).toBeInTheDocument(),i(a.getAllByText("Select date")[0]).toBeInTheDocument()}),await r("Open calendar popover",async()=>{const t=a.getAllByRole("button")[0];await m.click(t),await O(()=>{const l=g.getAllByRole("dialog")[0];i(l).toBeInTheDocument()})}),await r("Verify calendar components",async()=>{const t=g.getAllByRole("grid")[0];i(t).toBeInTheDocument()}),await r("Select a date",async()=>{const t=g.getAllByRole("button").filter(l=>l.textContent&&/^\d{1,2}$/.test(l.textContent.trim())&&!l.hasAttribute("aria-disabled")&&!l.hasAttribute("aria-pressed"));if(t.length>0){const l=t[0];await m.click(l);const b=a.getAllByRole("button")[0];i(b).toBeInTheDocument()}}),await r("Test keyboard interaction",async()=>{const t=a.getAllByRole("button")[0];await m.click(t),await O(()=>{const l=g.getAllByRole("dialog")[0];i(l).toBeInTheDocument()}),await m.keyboard("{Escape}")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Forces the use of the native date picker on all screen sizes",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    // value: '2024-01-15',
    valueLabel: 'Select date'
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
      expect(canvas.getAllByText('Select date')[0]).toBeInTheDocument();
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
}`,...u.parameters?.docs?.source},description:{story:"Tests date selection and value display",...u.parameters?.docs?.description}}};const He=["Standard","LargeWithLabel","NativePicker","Interaction"];export{u as Interaction,f as LargeWithLabel,d as NativePicker,v as Standard,He as __namedExportsOrder,Ue as default};
