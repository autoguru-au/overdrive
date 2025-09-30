import{r as x,e as a,C as O,H as f,s as k,i as S}from"./iframe-C9jllvPJ.js";import{M as T}from"./mockdate-DOC4yEHv.js";import{c as H,b as I,C as q}from"./Calendar-CnCTtkcV.js";import{O as R}from"./OptionGrid-BQEdd6bm.js";import{b as N}from"./useFocusable-BQN1eFB0.js";import"./preload-helper-PPVm8Dsz.js";import"./usePress-DHadrcsS.js";import"./index-DkToRMIa.js";import"./index-7EDYEJkQ.js";import"./useButton-Dcp9REBf.js";import"./context-CHBhQBBQ.js";import"./useLocalizedStringFormatter-CrKF8E8P.js";import"./useLabels-DorNaQrF.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-DFDql3N0.js";import"./Icon-BV8fzRUr.js";import"./resolveResponsiveProps-DGBAxJXa.js";import"./ChevronLeftIcon-F6hvNpPG.js";import"./ChevronRightIcon-sRHKOXEc.js";import"./useFocusWithin-DINSk8S8.js";import"./useLabel-BuF5C5Ki.js";import"./useCollator-Cco0RW--.js";import"./FocusScope-Ca41vpug.js";import"./useFocusRing-DMJw45HI.js";import"./LoadingBox-DhYqnYLI.js";import"./CheckIcon-BvPhOLK9.js";var _="z4jqbo1",M="z4jqbo2";const B={dateLabel:"Date",timeLabel:"Time"},y=({allowPastDate:n=!1,calendarOptions:c,lang:o,onChange:r,timeOptions:m,title:p,testId:u})=>{const l=x.useRef(H(I())),i=x.useRef(null),d=()=>{l.current&&i.current?.length&&r?.({date:l.current,timeOption:i.current})},t=b=>{l.current=b,d()},L={columns:"3",onSelectionChange:b=>{if(b==="all")return;const P=b.values().next().value;i.current=P,d()},indicator:"none",selectionMode:"single",disallowEmptySelection:!0,...m},D=N(),A=o?{nextLabel:o.nextLabel,prevLabel:o.prevLabel}:void 0;return a.createElement("div",{role:"group","aria-labelledby":D,className:_,...O({testid:u})},p&&a.createElement(f,{as:"h2",id:D,mb:"6",size:"8"},p),a.createElement("div",{className:M},a.createElement("div",{className:k({flexShrink:"0"})},a.createElement(f,{as:"h3",mb:"4",size:"6"},o?.dateLabel??B.dateLabel),a.createElement(q,{allowPastDate:n,calendarOptions:c,lang:A,onChange:t})),a.createElement("div",{className:k({flexGrow:"1"})},a.createElement(f,{as:"h3",mb:"4",size:"6"},o?.timeLabel??B.timeLabel),a.createElement(R,{...L}))))};y.displayName="DateTimePicker";try{y.displayName="DateTimePicker",y.__docgenInfo={description:`DateTimePicker component for selecting a date and time. The primary use case is for selecting a date and time for
the vehicle to be left at the place of service, not scheduling the time of the service itself. Some suppliers
may need the option to book a specficic time based on their availability which could require enahcement.

For all date/time handling \`@internationalized/date\` is expected by react-aria. Presently only the Gregorian
calendar is imported for use in order to minimise bundle size. It is recommended to use the the DateTimePicker
uncontrolled.

This component implements the react-aria \`useCalendar\` hook and supports controlled state as well
([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))`,displayName:"DateTimePicker",props:{title:{defaultValue:null,description:"A title for the date/time selection",name:"title",required:!1,type:{name:"string"}},calendarOptions:{defaultValue:null,description:`Calendar props passed through to the react-aria hook
([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))

*Defaults*
- \`defaultValue\`: Today's date
- \`firstDayOfWeek\`: Monday`,name:"calendarOptions",required:!1,type:{name:"AriaCalendarProps<D>"}},timeOptions:{defaultValue:null,description:"`OptionGrid` props used to generate the time picker items. Ensure to include a descriptive `label` value (for\nassistive technology). Currently time options are not tied to the day selection.",name:"timeOptions",required:!0,type:{name:"OptionGridProps<OptionItem>"}},allowPastDate:{defaultValue:{value:"false"},description:"Allow date in the past",name:"allowPastDate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Custom event handler return value when a date and time are both selected, return a value\n`{ date: DateValue, timeOption: string }` where `DateValue` comes from react-aria\n@returns `{ date: DateValue, timeOption: string }`",name:"onChange",required:!1,type:{name:"((value: DateAndOption) => void)"}},lang:{defaultValue:null,description:"Language content override",name:"lang",required:!1,type:{name:'Partial<Record<"nextLabel" | "prevLabel" | "dateLabel" | "timeLabel", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:e,fn:V,getAllByRole:C,getByText:$,userEvent:s}=__STORYBOOK_MODULE_TEST__,E="2026-01-01",v="[data-selected]",w=[{label:"Early morning",description:"6 to 8 AM",name:"6-8"},{label:"Morning",description:"8 to 10 AM",name:"8-10"},{label:"Mid-morning",description:"10 AM to 12 PM",name:"10-12"},{label:"Early afteroon",description:"12 to 2 PM",name:"12-2"},{label:"Day before",description:"Afternoon of day prior to service",name:"aft-before"}],ge={title:"Forms & Input Fields/Date & Time Picker",component:y,args:{title:"Select preferred date and time to bring in your vehicle",timeOptions:{items:w,label:"Select a drop-off time of day"},calendarOptions:{firstDayOfWeek:"mon"},allowPastDate:!1,onChange:V(),lang:{dateLabel:"Date",timeLabel:"Time"},testId:"demo-date-time-picker"},argTypes:{allowPastDate:{control:{type:"boolean"}}},beforeEach:()=>{S()&&T.set(E)},tags:["beta"]},g={},h={args:{title:"Picker title",timeOptions:{items:w,label:"Aria label for time option grid"},lang:{dateLabel:"Date label",timeLabel:"Time label",nextLabel:"Next button label",prevLabel:"Previous button label"}},play:async({args:n,step:c,mount:o})=>{T.set(E);const r=await o(),m=r.getAllByRole("group")[0],p=r.getAllByRole("application")[0],[u,l]=C(p,"button"),i=r.getAllByRole("grid")[0],d=r.getAllByRole("listbox")[0];await c("Elements render label and attributes",async()=>{await e(m).toHaveAccessibleName(`${n.title}`),await e(u).toBeDisabled(),await e(l).toBeEnabled(),await e(d).toHaveAccessibleName(n.timeOptions.label),await e(m).toHaveAttribute("data-testid",n.testId)}),await c("Calendar selection and navigation",async()=>{let t=i.querySelector(v);await e(t).toBeInTheDocument(),await e(t).toHaveRole("button"),await e(t).toHaveTextContent("1"),await s.click(l),await s.click(l),await e(i.querySelector(v)).not.toBeInTheDocument(),await s.click(u),await s.click($(i,"13")),await e(n.onChange).not.toHaveBeenCalled(),await s.keyboard("{ArrowLeft}{Enter}"),t=i.querySelector(v),await e(t).toHaveTextContent("12")}),await c("Time selection",async()=>{const t=C(d,"option");await e(t).toHaveLength(w.length),await s.click(t[1]),await e(n.onChange).toHaveBeenCalled()})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Picker title',
    timeOptions: {
      items: times,
      label: 'Aria label for time option grid'
    },
    lang: {
      dateLabel: 'Date label',
      timeLabel: 'Time label',
      nextLabel: 'Next button label',
      prevLabel: 'Previous button label'
    }
  },
  play: async ({
    args,
    step,
    mount
  }) => {
    MockDate.set(testDate);
    const canvas = await mount();
    const component = canvas.getAllByRole('group')[0];
    const datePickerNav = canvas.getAllByRole('application')[0];
    const [prevBtn, nextBtn] = getAllByRole(datePickerNav, 'button');
    const calendar = canvas.getAllByRole('grid')[0];
    const timePicker = canvas.getAllByRole('listbox')[0];
    await step('Elements render label and attributes', async () => {
      await expect(component).toHaveAccessibleName(\`\${args.title}\`);
      await expect(prevBtn).toBeDisabled();
      await expect(nextBtn).toBeEnabled();
      await expect(timePicker).toHaveAccessibleName(args.timeOptions.label);
      await expect(component).toHaveAttribute('data-testid', args.testId);
    });
    await step('Calendar selection and navigation', async () => {
      let selectedDay = calendar.querySelector(dataSelected);
      await expect(selectedDay).toBeInTheDocument();
      await expect(selectedDay).toHaveRole('button');
      await expect(selectedDay).toHaveTextContent('1');
      await userEvent.click(nextBtn);
      await userEvent.click(nextBtn);
      await expect(calendar.querySelector(dataSelected)).not.toBeInTheDocument();
      await userEvent.click(prevBtn);
      await userEvent.click(getByText(calendar, '13'));
      await expect(args.onChange).not.toHaveBeenCalled();
      await userEvent.keyboard('{ArrowLeft}{Enter}');
      selectedDay = calendar.querySelector(dataSelected);
      await expect(selectedDay).toHaveTextContent('12');
    });
    await step('Time selection', async () => {
      const options = getAllByRole(timePicker, 'option');
      await expect(options).toHaveLength(times.length);
      await userEvent.click(options[1]);
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...h.parameters?.docs?.source}}};const he=["BringInYourVehicle","Interactions"];export{g as BringInYourVehicle,h as Interactions,he as __namedExportsOrder,ge as default};
