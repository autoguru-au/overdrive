import{r as o,e as a,c as q,E as Q,s as X,w as Z}from"./iframe-C5x-mm7q.js";import{M as ee}from"./mockdate-DvJCHGyf.js";import{a as te}from"./argTypes-BJ6MF0mA.js";import{$ as V,c as S,b as I,C as ae}from"./Calendar-dDK9GEZq.js";import{I as ne}from"./Icon-BmkmqnM-.js";import{P as re}from"./ProgressSpinner-CBrwSGmV.js";import{T as le}from"./Text-B_TnC6LV.js";import{V as oe}from"./VisuallyHidden-DT-E-rXR.js";import{P as se}from"./PopoverTrigger-ByyBFy3_.js";import{I as ie}from"./CurrencyUsdIcon-Bpr8djH5.js";import{F as ce}from"./FlexInline-BUzk4YJo.js";import"./preload-helper-D9Z9MdNV.js";import"./CheckIcon-BIAlVPN_.js";import"./StarIcon-CkwbI9fm.js";import"./PlusIcon-DU0uriCB.js";import"./AlertCircleIcon-CfZtY4EX.js";import"./PhoneIcon-DeLHAJ9_.js";import"./MagnifyIcon-CS7s1O1B.js";import"./usePress-B02Ki444.js";import"./useFocusable-DEn2IQoa.js";import"./index-7ZWYOw53.js";import"./index-BzuOdlP7.js";import"./useButton-UHLEJ69t.js";import"./context-BSCSj89s.js";import"./useLabels-DmemVkjT.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-BsOT6f9n.js";import"./ChevronLeftIcon-DIcHyqox.js";import"./ChevronRightIcon-CsV5ai6c.js";import"./resolveResponsiveProps-BvoLHqG9.js";import"./Button--_eamnxu.js";import"./useMedia-D9eXmWIi.js";import"./number-DL2p9zOw.js";import"./FocusScope-Bm5r178M.js";import"./useFocusWithin-JCsg9mCQ.js";import"./CloseIcon-BWG5UlwO.js";import"./flex-BQ2abrn-.js";function de(e){if(!e)return!1;if(typeof e=="string")try{e=V(e)}catch{return!1}return e.compare(I(S()))===0}function w(e,n="medium",r="en-AU"){if(!e)return"";let t;if(typeof e=="string")try{t=V(e)}catch{return e}else t=e;return new Intl.DateTimeFormat(r,{dateStyle:n}).format(t.toDate(S()))}var ue="_1j3uugj0",me="_1j3uugj1",pe="_1j3uugj2",j={default:"_1j3uugj3",withLabel:"_1j3uugj4"},z={cursor:"_1j3uugj5",native:"_1j3uugj6"};const ge={openCalendar:"open calendar"},fe={small:"2",medium:"3",large:"5"},M=e=>e?e.toString():"",T=e=>{try{return V(e)}catch{return null}},i=o.forwardRef(({calendarOptions:e,className:n,defaultValue:r,disabled:t=!1,icon:l=ie,isLoading:E=!1,lang:Y,onChange:d,placement:$="bottom left",size:L="medium",testId:W,useNativePicker:P=!1,value:u,valueLabel:C,..._},x)=>{const m=u!==void 0,[f,v]=o.useState(()=>{const s=m?u:r;return s?T(s):null}),[k,G]=o.useState(null);o.useEffect(()=>{if(m){const s=u?T(u):null;v(s)}},[u,m]);const H=s=>{const B=s.currentTarget.value;if(B){const J=T(B);v(J)}else v(null);typeof d=="function"&&d(B)},R=E?a.createElement(re,{size:L}):a.createElement(ne,{icon:l,size:L}),N=C?a.createElement(le,{colour:!P&&t?"muted":void 0,size:fe[L]},C):null,F=o.useCallback(s=>{v(s),typeof d=="function"&&d(M(s)),k&&k.close()},[d,k]),O=o.useMemo(()=>({calendarOptions:{...m?{value:f||I(S())}:{defaultValue:f||I(S())}},...e,onChange:F}),[f,e,F,m]),K=o.useMemo(()=>a.createElement(ae,{...O}),[O]);return P?a.createElement("div",{className:q(n,ue,t&&z.native)},a.createElement("input",{..._,ref:x,className:Q({className:[me,{[z.cursor]:t}]}),type:"date",disabled:t,onChange:H}),a.createElement("div",{className:pe},a.createElement("div",{className:q(j.default,{[j.withLabel]:!!C})},R,N))):a.createElement("div",{className:n},a.createElement(se,{content:K,placement:$,testId:W,isDisabled:t,onStateReady:G},a.createElement("div",{className:X({display:"flex",alignItems:"center",gap:"1"})},R,N),a.createElement(oe,null,Y?.openCalendar??ge.openCalendar)),a.createElement("input",{..._,ref:x,value:M(f),type:"hidden"}))});i.displayName="DatePicker";try{i.displayName="DatePicker",i.__docgenInfo={description:"The DatePicker has been updated to render the Calendar component with a Popover while\nmaintaining backwards compatability.\n\n## Props\n- Visual size controlled by `size` (small | medium | large)\n- Icon can be customized via the `icon` prop\n\n## Event handling\n- `onChange` is always invoked with the raw ISO date string (or empty string when cleared)\n\n## Compatibility mode\n- Setting `useNativePicker={true}` preserves the original browser-specific experience.\n\n## Internationalization\n- Override text values via `lang={{ openCalendar: 'open calendar' }}`\n- Calendar options including `lang`can be passed via `calendarOptions` prop\n- Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils\n- Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)\n- Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)",displayName:"DatePicker",props:{calendarOptions:{defaultValue:null,description:"Options to customise the calendar: `allowPastDate`, `lang`, etc.",name:"calendarOptions",required:!1,type:{name:'Omit<CalendarProps, "onChange">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default selected date as an ISO string YYYY-MM-DD (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the picker is disabled and non-interactive",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to render inside the picker (defaults to calendar icon)",name:"icon",required:!1,type:{name:"IconType"}},id:{defaultValue:null,description:"Form field id",name:"id",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"Show a loading state spinner instead of the icon",name:"isLoading",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Input field name recommended for form usage",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: string) => void"}},placement:{defaultValue:{value:"bottom left"},description:"Calendar popover placement relative to the trigger ('bottom left', 'top', etc.)",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"end"'},{value:'"start"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},size:{defaultValue:{value:"medium"},description:"Visual size of the picker control (small, medium, large)",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},value:{defaultValue:null,description:"The selected date as an ISO string (YYYY-MM-DD). Use `undefined` for an empty value\n(controlled)",name:"value",required:!1,type:{name:"string"}},valueLabel:{defaultValue:null,description:"Fallback label to display when no date value is selected.",name:"valueLabel",required:!1,type:{name:"string"}},useNativePicker:{defaultValue:{value:"false"},description:"Use native browser date picker instead of Calendar popover",name:"useNativePicker",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"Language content override for DatePicker",name:"lang",required:!1,type:{name:'Partial<Record<"openCalendar", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:c,fn:ve,userEvent:y,within:ye,waitFor:U,screen:b}=__STORYBOOK_MODULE_TEST__,A="Select date",be="2026-01-01",at={title:"Components/Date Picker",tags:["updated"],component:i,decorators:[e=>a.createElement(ce,null,a.createElement(e,null))],args:{onChange:ve(),valueLabel:A,icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:{allowPastDate:!0},className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...te}},beforeEach:()=>{Z()&&ee.set(be)}},h={args:{valueLabel:""},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n,onChange:t=>{r(w(t)),e.onChange?.(t)}})}},D={args:{size:"large"},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n,onChange:t=>{r(w(t)),e.onChange?.(t)}})}},p={args:{useNativePicker:!0,valueLabel:"Today"},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,onChange:t=>{de(t)?r("Today"):r(w(t)),e.onChange?.(t)},valueLabel:n})}},g={args:{valueLabel:A},render:e=>{const[n,r]=o.useState(e.valueLabel);return a.createElement(i,{...e,valueLabel:n||e.valueLabel,onChange:t=>{r(w(t)||""),e.onChange?.(t)}})},play:async({canvasElement:e,step:n})=>{const r=ye(e);await n("Verify initial state",async()=>{const t=r.getAllByRole("button")[0];c(t).toBeInTheDocument(),c(r.getAllByText(A)[0]).toBeInTheDocument()}),await n("Open calendar popover",async()=>{const t=r.getAllByRole("button")[0];await y.click(t),await U(()=>{const l=b.getAllByRole("dialog")[0];c(l).toBeInTheDocument()})}),await n("Verify calendar components",async()=>{const t=b.getAllByRole("grid")[0];c(t).toBeInTheDocument()}),await n("Select a date",async()=>{const t=b.getAllByRole("button").filter(l=>l.textContent&&/^\d{1,2}$/.test(l.textContent.trim())&&!l.hasAttribute("aria-disabled")&&!l.hasAttribute("aria-pressed"));if(t.length>0){const l=t[0];await y.click(l);const E=r.getAllByRole("button")[0];c(E).toBeInTheDocument()}}),await n("Test keyboard interaction",async()=>{const t=r.getAllByRole("button")[0];await y.click(t),await U(()=>{const l=b.getAllByRole("dialog")[0];c(l).toBeInTheDocument()}),await y.keyboard("{Escape}")})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Forces the use of the native date picker on all screen sizes",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Tests date selection and value display",...g.parameters?.docs?.description}}};const nt=["Standard","LargeWithLabel","NativePicker","Interaction"];export{g as Interaction,D as LargeWithLabel,p as NativePicker,h as Standard,nt as __namedExportsOrder,at as default};
