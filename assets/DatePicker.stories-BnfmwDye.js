import{r as o,e as a,c as M,E as Z,s as ee,w as te}from"./iframe-ilUwcptX.js";import{M as ae}from"./mockdate-D89xpx4K.js";import{a as ne}from"./argTypes-DF7YTeub.js";import{$ as _,c as L,b as A,C as re}from"./Calendar-CxT8YRcD.js";import{I as le}from"./Icon-DIVFT0TM.js";import{P as oe}from"./ProgressSpinner-g4eEavT9.js";import{T as se}from"./Text-Cg-xpfQT.js";import{V as ie}from"./VisuallyHidden-DhdUjN12.js";import{P as ce}from"./PopoverTrigger-CyIBEalh.js";import{I as de}from"./CurrencyUsdIcon-moMSEOt4.js";import{F as ue}from"./FlexInline-Bdgux0-Z.js";import"./preload-helper-D9Z9MdNV.js";import"./CheckIcon-lO9xa9_h.js";import"./StarIcon-CLQtLdkj.js";import"./PlusIcon-OOkVyNi2.js";import"./AlertCircleIcon-BMjJ8sSA.js";import"./PhoneIcon-C25S1Zwc.js";import"./MagnifyIcon-BHJpR843.js";import"./usePress-aH4FsrHY.js";import"./useFocusable-Dj2_mtDz.js";import"./index-DRMzpZCo.js";import"./index-D8fikqzV.js";import"./useButton-CqGepwKG.js";import"./context-DH9tupr9.js";import"./useLabels-DqxlHLOB.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-hgiIQZ7l.js";import"./ChevronLeftIcon-e5hflGaG.js";import"./ChevronRightIcon-Bi5ah-66.js";import"./resolveResponsiveProps-CDLJUN0S.js";import"./Button-B9wh2I7n.js";import"./useMedia-DMLb3RLv.js";import"./number-DL2p9zOw.js";import"./FocusScope-xMvTiGB_.js";import"./useFocusWithin-CHOXTjg8.js";import"./CloseIcon-Cs7a6r-7.js";import"./flex-BfQbQ2qz.js";function me(e){if(!e)return!1;if(typeof e=="string")try{e=_(e)}catch{return!1}return e.compare(A(L()))===0}function C(e,n="medium",r="en-AU"){if(!e)return"";let t;if(typeof e=="string")try{t=_(e)}catch{return e}else t=e;return new Intl.DateTimeFormat(r,{dateStyle:n}).format(t.toDate(L()))}var pe="_1j3uugj0",ge="_1j3uugj1",fe="_1j3uugj2",j={default:"_1j3uugj3",withLabel:"_1j3uugj4"},z={cursor:"_1j3uugj5",native:"_1j3uugj6"};const ve={openCalendar:"open calendar"},ye={small:"2",medium:"3",large:"5"},U=e=>e?e.toString():"",p=e=>{try{return _(e)}catch{return null}},i=o.forwardRef(({calendarOptions:e,className:n,defaultValue:r,disabled:t=!1,icon:l=de,isLoading:k=!1,lang:W,max:v,min:y,onChange:d,placement:G="bottom left",size:B="medium",testId:H,useNativePicker:x=!1,value:u,valueLabel:T,...R},N)=>{const m=u!==void 0,[b,h]=o.useState(()=>{const s=m?u:r;return s?p(s):null}),[I,K]=o.useState(null);o.useEffect(()=>{if(m){const s=u?p(u):null;h(s)}},[u,m]);const J=s=>{const V=s.currentTarget.value;if(V){const X=p(V);h(X)}else h(null);typeof d=="function"&&d(V)},q=k?a.createElement(oe,{size:B}):a.createElement(le,{icon:l,size:B}),F=T?a.createElement(se,{colour:!x&&t?"muted":void 0,size:ye[B]},T):null,O=o.useCallback(s=>{h(s),typeof d=="function"&&d(U(s)),I&&I.close()},[d,I]),Y=o.useMemo(()=>({calendarOptions:{...m?{value:b||A(L())}:{defaultValue:b||A(L())},...y&&{minValue:p(y)},...v&&{maxValue:p(v)}},...e,onChange:O}),[b,e,O,m,y,v]),Q=o.useMemo(()=>a.createElement(re,{...Y}),[Y]);return x?a.createElement("div",{className:M(n,pe,t&&z.native)},a.createElement("input",{...R,ref:N,className:Z({className:[ge,{[z.cursor]:t}]}),type:"date",disabled:t,min:y,max:v,onChange:J}),a.createElement("div",{className:fe},a.createElement("div",{className:M(j.default,{[j.withLabel]:!!T})},q,F))):a.createElement("div",{className:n},a.createElement(ce,{content:Q,placement:G,testId:H,isDisabled:t,onStateReady:K},a.createElement("div",{className:ee({display:"flex",alignItems:"center",gap:"1"})},q,F),a.createElement(ie,null,W?.openCalendar??ve.openCalendar)),a.createElement("input",{...R,ref:N,value:U(b),type:"hidden"}))});i.displayName="DatePicker";try{i.displayName="DatePicker",i.__docgenInfo={description:"The DatePicker has been updated to render the Calendar component with a Popover while\nmaintaining backwards compatability.\n\n## Props\n- Visual size controlled by `size` (small | medium | large)\n- Icon can be customized via the `icon` prop\n\n## Event handling\n- `onChange` is always invoked with the raw ISO date string (or empty string when cleared)\n\n## Compatibility mode\n- Setting `useNativePicker={true}` preserves the original browser-specific experience.\n\n## Internationalization\n- Override text values via `lang={{ openCalendar: 'open calendar' }}`\n- Calendar options including `lang`can be passed via `calendarOptions` prop\n- Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils\n- Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)\n- Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)",displayName:"DatePicker",props:{calendarOptions:{defaultValue:null,description:"Options to customise the calendar: `allowPastDate`, `lang`, etc.",name:"calendarOptions",required:!1,type:{name:'Omit<CalendarProps, "onChange">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default selected date as an ISO string YYYY-MM-DD (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the picker is disabled and non-interactive",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to render inside the picker (defaults to calendar icon)",name:"icon",required:!1,type:{name:"IconType"}},id:{defaultValue:null,description:"Form field id",name:"id",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"Show a loading state spinner instead of the icon",name:"isLoading",required:!1,type:{name:"boolean"}},max:{defaultValue:null,description:"Maximum selectable date YYYY-MM-DD",name:"max",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"Minimum selectable date YYYY-MM-DD",name:"min",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input field name recommended for form usage",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: string) => void"}},placement:{defaultValue:{value:"bottom left"},description:"Calendar popover placement relative to the trigger ('bottom left', 'top', etc.)",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"end"'},{value:'"start"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},size:{defaultValue:{value:"medium"},description:"Visual size of the picker control (small, medium, large)",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},value:{defaultValue:null,description:"The selected date as an ISO string (YYYY-MM-DD). Use `undefined` for an empty value\n(controlled)",name:"value",required:!1,type:{name:"string"}},valueLabel:{defaultValue:null,description:"Fallback label to display when no date value is selected.",name:"valueLabel",required:!1,type:{name:"string"}},useNativePicker:{defaultValue:{value:"false"},description:"Use native browser date picker instead of Calendar popover",name:"useNativePicker",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"Language content override for DatePicker",name:"lang",required:!1,type:{name:'Partial<Record<"openCalendar", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:c,fn:be,userEvent:D,within:he,waitFor:$,screen:S}=__STORYBOOK_MODULE_TEST__,P="Select date",De="2026-01-01",rt={title:"Components/Date Picker",tags:["updated"],component:i,decorators:[e=>a.createElement(ue,null,a.createElement(e,null))],args:{onChange:be(),valueLabel:P,icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:{allowPastDate:!0},className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...ne}},beforeEach:()=>{te()&&ae.set(De)}},w={args:{valueLabel:""},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n,onChange:t=>{r(C(t)),e.onChange?.(t)}})}},E={args:{size:"large"},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n,onChange:t=>{r(C(t)),e.onChange?.(t)}})}},g={args:{useNativePicker:!0,valueLabel:"Today"},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,onChange:t=>{me(t)?r("Today"):r(C(t)),e.onChange?.(t)},valueLabel:n})}},f={args:{valueLabel:P},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n||e.valueLabel,onChange:t=>{r(C(t)||""),e.onChange?.(t)}})},play:async({canvasElement:e,step:n})=>{const r=he(e);await n("Verify initial state",async()=>{const t=r.getAllByRole("button")[0];c(t).toBeInTheDocument(),c(r.getAllByText(P)[0]).toBeInTheDocument()}),await n("Open calendar popover",async()=>{const t=r.getAllByRole("button")[0];await D.click(t),await $(()=>{const l=S.getAllByRole("dialog")[0];c(l).toBeInTheDocument()})}),await n("Verify calendar components",async()=>{const t=S.getAllByRole("grid")[0];c(t).toBeInTheDocument()}),await n("Select a date",async()=>{const t=S.getAllByRole("button").filter(l=>l.textContent&&/^\d{1,2}$/.test(l.textContent.trim())&&!l.hasAttribute("aria-disabled")&&!l.hasAttribute("aria-pressed"));if(t.length>0){const l=t[0];await D.click(l);const k=r.getAllByRole("button")[0];c(k).toBeInTheDocument()}}),await n("Test keyboard interaction",async()=>{const t=r.getAllByRole("button")[0];await D.click(t),await $(()=>{const l=S.getAllByRole("dialog")[0];c(l).toBeInTheDocument()}),await D.keyboard("{Escape}")})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Forces the use of the native date picker on all screen sizes",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Tests date selection and value display",...f.parameters?.docs?.description}}};const lt=["Standard","LargeWithLabel","NativePicker","Interaction"];export{f as Interaction,E as LargeWithLabel,g as NativePicker,w as Standard,lt as __namedExportsOrder,rt as default};
