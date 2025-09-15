import{r as o,E as j,e as n,c as T,s as Q,w as X}from"./iframe-B6_QgceS.js";import{M as Z}from"./mockdate-Cj3uqCE1.js";import{a as ee}from"./argTypes-CBVko_8o.js";import{$ as _,c as S,b as P,C as te}from"./Calendar-CVcgT6QJ.js";import{I as ae}from"./Icon-DnZ774vR.js";import{P as ne}from"./ProgressSpinner-5ZIHGJzu.js";import{T as re}from"./Text-Bm62SiFA.js";import{V as le}from"./VisuallyHidden-Df3yJnvU.js";import{P as oe}from"./PopoverTrigger-BKxz3AeN.js";import{I as se}from"./CurrencyUsdIcon-u9xVddCg.js";import{F as ie}from"./FlexInline-CejCwliN.js";import"./preload-helper-D9Z9MdNV.js";import"./CheckIcon-DDHArCbz.js";import"./StarIcon-BsI1LiAN.js";import"./PlusIcon-CAXnvVwU.js";import"./AlertCircleIcon-C-JMbSFA.js";import"./PhoneIcon-C3ucy0pT.js";import"./MagnifyIcon-C24CV12_.js";import"./usePress-CmB7jQhB.js";import"./useFocusable-YmdCJHLv.js";import"./index-NHQTj0k1.js";import"./index-DywzlhiP.js";import"./useButton-04pHxiqz.js";import"./context-Bm7j-8Cn.js";import"./useLabels-BtbTWnJs.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-BgQiQY88.js";import"./ChevronLeftIcon-40tZNzvg.js";import"./ChevronRightIcon-BFoogc34.js";import"./resolveResponsiveProps-CzS1S_1C.js";import"./Button-CCCYISAN.js";import"./useMedia-RjPqp7fE.js";import"./number-DL2p9zOw.js";import"./FocusScope-D1bCrGZB.js";import"./useFocusWithin-DFWAiMk3.js";import"./CloseIcon-ZmTKilKd.js";import"./flex-CU5_bmZj.js";function ce(e){if(!e)return!1;if(typeof e=="string")try{e=_(e)}catch{return!1}return e.compare(P(S()))===0}function L(e,r="medium",a="en-AU"){if(!e)return"";let t;if(typeof e=="string")try{t=_(e)}catch{return e}else t=e;return new Intl.DateTimeFormat(a,{dateStyle:r}).format(t.toDate(S()))}var de="_1j3uugj0",ue="_1j3uugj1",me="_1j3uugj2",z={default:"_1j3uugj3",withLabel:"_1j3uugj4"},I={default:"_1j3uugj5",root:"_1j3uugj6"};const pe={openCalendar:"open calendar"},ge={small:"2",medium:"3",large:"5"},M=e=>e?e.toString():"",A=e=>{try{return _(e)}catch{return null}},i=o.forwardRef(({calendarOptions:e,className:r,defaultValue:a,disabled:t=!1,icon:l=se,isLoading:w=!1,lang:Y,onChange:d,size:E="medium",testId:$,useNativePicker:W=!1,value:u,valueLabel:k,...x},N)=>{const m=u!==void 0,[f,v]=o.useState(()=>{const s=m?u:a;return s?A(s):null}),[B,G]=o.useState(null);o.useEffect(()=>{if(m){const s=u?A(u):null;v(s)}},[u,m]);const H=s=>{const C=s.currentTarget.value;if(C){const J=A(C);v(J)}else v(null);typeof d=="function"&&d(C)},R=j({className:[r,{[I.default]:t,[I.root]:t}]}),F=w?n.createElement(ne,{size:E}):n.createElement(ae,{icon:l,size:E}),O=k?n.createElement(re,{size:ge[E]},k):null,q=o.useMemo(()=>({calendarOptions:{...m?{value:f||P(S())}:{defaultValue:f||P(S())},...e},onChange:s=>{v(s),typeof d=="function"&&d(M(s)),B&&B.close()}}),[f,e,d,B,m]),K=o.useMemo(()=>n.createElement(te,{...q}),[q]);return W?n.createElement("div",{className:T(R,de)},n.createElement("input",{...x,ref:N,className:j({className:[ue,{[I.default]:t}]}),type:"date",disabled:t,onChange:H}),n.createElement("div",{className:me},n.createElement("div",{className:T(z.default,{[z.withLabel]:!!k})},F,O))):n.createElement("div",{className:T(R,Q({display:"flex",alignItems:"center",gap:"1"}))},n.createElement(oe,{content:K,placement:"bottom left",testId:$,isDisabled:t,onStateReady:G},F,n.createElement(le,null,Y?.openCalendar??pe.openCalendar)),O,n.createElement("input",{...x,ref:N,value:M(f),type:"hidden"}))});i.displayName="DatePicker";try{i.displayName="DatePicker",i.__docgenInfo={description:"The DatePicker has been updated to render the Calendar component with a Popover while\nmaintaining backwards compatability.\n\n## Props\n- Visual size controlled by `size` (small | medium | large)\n- Icon can be customized via the `icon` prop\n\n## Event handling\n- `onChange` is always invoked with the raw ISO date string (or empty string when cleared)\n\n## Compatibility mode\n- Setting `useNativePicker={true}` preserves the original browser-specific experience.\n\n## Internationalization\n- Override text values via `lang={{ openCalendar: 'open calendar' }}`\n- Calendar options including `lang`can be passed via `calendarOptions` prop\n- Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils\n- Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)\n- Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)",displayName:"DatePicker",props:{calendarOptions:{defaultValue:null,description:"Options to customise the calendar: `allowPastDate`, `lang`, etc.",name:"calendarOptions",required:!1,type:{name:'Omit<CalendarProps, "onChange">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default selected date as an ISO string YYYY-MM-DD (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the picker is disabled and non-interactive",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to render inside the picker (defaults to calendar icon)",name:"icon",required:!1,type:{name:"IconType"}},id:{defaultValue:null,description:"Form field id",name:"id",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"Show a loading state spinner instead of the icon",name:"isLoading",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Input field name recommended for form usage",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: string) => void"}},size:{defaultValue:{value:"medium"},description:"Visual size of the picker control (small, medium, large)",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},value:{defaultValue:null,description:"The selected date as an ISO string (YYYY-MM-DD). Use `undefined` for an empty value\n(controlled)",name:"value",required:!1,type:{name:"string"}},valueLabel:{defaultValue:null,description:"Fallback label to display when no date value is selected.",name:"valueLabel",required:!1,type:{name:"string"}},useNativePicker:{defaultValue:{value:"false"},description:"Use native browser date picker instead of Calendar popover",name:"useNativePicker",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"Language content override for DatePicker",name:"lang",required:!1,type:{name:'Partial<Record<"openCalendar", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:c,fn:fe,userEvent:y,within:ve,waitFor:U,screen:h}=__STORYBOOK_MODULE_TEST__,V="Select date",ye="2026-01-01",tt={title:"Components/Date Picker",tags:["updated"],component:i,decorators:[e=>n.createElement(ie,null,n.createElement(e,null))],args:{onChange:fe(),valueLabel:V,icon:void 0,size:"medium",isLoading:!1,disabled:!1,useNativePicker:!1,name:"demo-date-picker",calendarOptions:void 0,className:void 0,testId:"test-date-picker"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",...ee}},beforeEach:()=>{X()&&Z.set(ye)}},b={args:{valueLabel:""},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(i,{...e,valueLabel:r,onChange:t=>{a(L(t)),e.onChange?.(t)}})}},D={args:{size:"large"},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(i,{...e,valueLabel:r,onChange:t=>{a(L(t)),e.onChange?.(t)}})}},p={args:{useNativePicker:!0,valueLabel:"Today"},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(i,{...e,onChange:t=>{ce(t)?a("Today"):a(L(t)),e.onChange?.(t)},valueLabel:r})}},g={args:{valueLabel:V},render:e=>{const[r,a]=o.useState(e.valueLabel);return n.createElement(i,{...e,valueLabel:r||e.valueLabel,onChange:t=>{a(L(t)||""),e.onChange?.(t)}})},play:async({canvasElement:e,step:r})=>{const a=ve(e);await r("Verify initial state",async()=>{const t=a.getAllByRole("button")[0];c(t).toBeInTheDocument(),c(a.getAllByText(V)[0]).toBeInTheDocument()}),await r("Open calendar popover",async()=>{const t=a.getAllByRole("button")[0];await y.click(t),await U(()=>{const l=h.getAllByRole("dialog")[0];c(l).toBeInTheDocument()})}),await r("Verify calendar components",async()=>{const t=h.getAllByRole("grid")[0];c(t).toBeInTheDocument()}),await r("Select a date",async()=>{const t=h.getAllByRole("button").filter(l=>l.textContent&&/^\d{1,2}$/.test(l.textContent.trim())&&!l.hasAttribute("aria-disabled")&&!l.hasAttribute("aria-pressed"));if(t.length>0){const l=t[0];await y.click(l);const w=a.getAllByRole("button")[0];c(w).toBeInTheDocument()}}),await r("Test keyboard interaction",async()=>{const t=a.getAllByRole("button")[0];await y.click(t),await U(()=>{const l=h.getAllByRole("dialog")[0];c(l).toBeInTheDocument()}),await y.keyboard("{Escape}")})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Tests date selection and value display",...g.parameters?.docs?.description}}};const at=["Standard","LargeWithLabel","NativePicker","Interaction"];export{g as Interaction,D as LargeWithLabel,p as NativePicker,b as Standard,at as __namedExportsOrder,tt as default};
