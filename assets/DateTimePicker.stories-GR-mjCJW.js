import{k as N,r as L,e as u,C as M,H as E,s as _,w as V}from"./iframe-C4sSev8-.js";import{c as $,b as j,C as z}from"./Calendar-CmlV4K3V.js";import{O as G}from"./OptionGrid-BEXH_Upf.js";import{$ as F}from"./useFocusable-Clrz9Eq1.js";import"./preload-helper-D9Z9MdNV.js";import"./usePress-C8ZOjN4Q.js";import"./index-DUWYk-_b.js";import"./index-jP9DFk2A.js";import"./useButton-BZBvsB4R.js";import"./context-DOcZRCgl.js";import"./useLabels-DcLqxjxc.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-D1WCFlav.js";import"./Icon-CXO3Gmtu.js";import"./resolveResponsiveProps-JBHQbJiX.js";import"./ChevronLeftIcon-jWa6rhOA.js";import"./ChevronRightIcon-pQF-UaoT.js";import"./useFocusWithin-B8xO_lW7.js";import"./useLabel-Gdy8ePBd.js";import"./FocusScope-BOTVo_VD.js";import"./useFocusRing-BOC7Ft68.js";import"./LoadingBox-BRPzD4i4.js";import"./CheckIcon-B3uv8IKq.js";var D={exports:{}},U=D.exports,S;function Y(){return S||(S=1,(function(p,v){(function(o,l){l(v)})(U,(function(o){/*! *****************************************************************************
		    Copyright (c) Microsoft Corporation.

		    Permission to use, copy, modify, and/or distribute this software for any
		    purpose with or without fee is hereby granted.

		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		    PERFORMANCE OF THIS SOFTWARE.
		    ***************************************************************************** */var l=function(n,e){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,m){c.__proto__=m}||function(c,m){for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(c[i]=m[i])},l(n,e)};function y(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");l(n,e);function c(){this.constructor=n}n.prototype=e===null?Object.create(e):(c.prototype=e.prototype,new c)}var t=Date,f=null,a=(function(n){y(e,n);function e(c,m,i,h,T,O,B){n.call(this);var w;switch(arguments.length){case 0:f!==null?w=new t(f.valueOf()):w=new t;break;case 1:w=new t(c);break;default:i=typeof i>"u"?1:i,h=h||0,T=T||0,O=O||0,B=B||0,w=new t(c,m,i,h,T,O,B);break}return w}return e})(t);a.prototype=t.prototype,a.UTC=t.UTC,a.now=function(){return new a().valueOf()},a.parse=function(n){return t.parse(n)},a.toString=function(){return t.toString()};function d(n){var e=new Date(n.valueOf());if(isNaN(e.getTime()))throw new TypeError("mockdate: The time set is an invalid date: "+n);Date=a,f=e.valueOf()}function b(){Date=t}var s={set:d,reset:b};o.default=s,o.reset=b,o.set=d,Object.defineProperty(o,"__esModule",{value:!0})}))})(D,D.exports)),D.exports}var W=Y();const I=N(W);var K="z4jqbo1",J="z4jqbo2";const H={dateLabel:"Date",timeLabel:"Time"},C=({allowPastDate:p=!1,calendarOptions:v,lang:o,onChange:l,timeOptions:y,title:t,testId:f})=>{const a=L.useRef($(j())),d=L.useRef(null),b=()=>{a.current&&d.current?.length&&l?.({date:a.current,timeOption:d.current})},s=i=>{a.current=i,b()},e={columns:"3",onSelectionChange:i=>{if(i==="all")return;const h=i.values().next().value;d.current=h,b()},indicator:"none",selectionMode:"single",disallowEmptySelection:!0,...y},c=F(),m=o?{nextLabel:o.nextLabel,prevLabel:o.prevLabel}:void 0;return u.createElement("div",{role:"group","aria-labelledby":c,className:K,...M({testid:f})},t&&u.createElement(E,{as:"h2",id:c,mb:"6",size:"8"},t),u.createElement("div",{className:J},u.createElement("div",{className:_({flexShrink:"0"})},u.createElement(E,{as:"h3",mb:"4",size:"6"},o?.dateLabel??H.dateLabel),u.createElement(z,{allowPastDate:p,calendarOptions:v,lang:m,onChange:s})),u.createElement("div",{className:_({flexGrow:"1"})},u.createElement(E,{as:"h3",mb:"4",size:"6"},o?.timeLabel??H.timeLabel),u.createElement(G,{...e}))))};C.displayName="DateTimePicker";try{C.displayName="DateTimePicker",C.__docgenInfo={description:`DateTimePicker component for selecting a date and time. The primary use case is for selecting a date and time for
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
- \`firstDayOfWeek\`: Monday`,name:"calendarOptions",required:!1,type:{name:"AriaCalendarProps<D>"}},timeOptions:{defaultValue:null,description:"`OptionGrid` props used to generate the time picker items. Ensure to include a descriptive `label` value (for\nassistive technology). Currently time options are not tied to the day selection.",name:"timeOptions",required:!0,type:{name:"OptionGridProps<OptionItem>"}},allowPastDate:{defaultValue:{value:"false"},description:"Allow date in the past",name:"allowPastDate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Custom event handler return value when a date and time are both selected, return a value\n`{ date: DateValue, timeOption: string }` where `DateValue` comes from react-aria\n@returns `{ date: DateValue, timeOption: string }`",name:"onChange",required:!1,type:{name:"((value: DateAndOption) => void)"}},lang:{defaultValue:null,description:"Language content override",name:"lang",required:!1,type:{name:'Partial<Record<"nextLabel" | "prevLabel" | "dateLabel" | "timeLabel", string>>'}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:r,fn:Q,getAllByRole:q,getByText:X,userEvent:g}=__STORYBOOK_MODULE_TEST__,R="2025-01-01",P="[data-selected]",A=[{label:"Early morning",description:"6 to 8 AM",name:"6-8"},{label:"Morning",description:"8 to 10 AM",name:"8-10"},{label:"Mid-morning",description:"10 AM to 12 PM",name:"10-12"},{label:"Early afteroon",description:"12 to 2 PM",name:"12-2"},{label:"Day before",description:"Afternoon of day prior to service",name:"aft-before"}],xe={title:"Forms & Input Fields/Date & Time Picker",component:C,args:{title:"Select preferred date and time to bring in your vehicle",timeOptions:{items:A,label:"Select a drop-off time of day"},calendarOptions:{firstDayOfWeek:"mon"},allowPastDate:!1,onChange:Q(),lang:{dateLabel:"Date",timeLabel:"Time"},testId:"demo-date-time-picker"},argTypes:{allowPastDate:{control:{type:"boolean"}}},beforeEach:()=>{V()&&I.set(R)},tags:["beta"]},x={},k={args:{title:"Picker title",timeOptions:{items:A,label:"Aria label for time option grid"},lang:{dateLabel:"Date label",timeLabel:"Time label",nextLabel:"Next button label",prevLabel:"Previous button label"}},play:async({args:p,step:v,mount:o})=>{I.set(R);const l=await o(),y=l.getAllByRole("group")[0],t=l.getAllByRole("application")[0],[f,a]=q(t,"button"),d=l.getAllByRole("grid")[0],b=l.getAllByRole("listbox")[0];await v("Elements render label and attributes",async()=>{await r(y).toHaveAccessibleName(`${p.title}`),await r(f).toBeDisabled(),await r(a).toBeEnabled(),await r(b).toHaveAccessibleName(p.timeOptions.label),await r(y).toHaveAttribute("data-testid",p.testId)}),await v("Calendar selection and navigation",async()=>{let s=d.querySelector(P);await r(s).toBeInTheDocument(),await r(s).toHaveRole("button"),await r(s).toHaveTextContent("1"),await g.click(a),await g.click(a),await r(d.querySelector(P)).not.toBeInTheDocument(),await g.click(f),await g.click(X(d,"13")),await r(p.onChange).not.toHaveBeenCalled(),await g.keyboard("{ArrowLeft}{Enter}"),s=d.querySelector(P),await r(s).toHaveTextContent("12")}),await v("Time selection",async()=>{const s=q(b,"option");await r(s).toHaveLength(A.length),await g.click(s[1]),await r(p.onChange).toHaveBeenCalled()})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const ke=["BringInYourVehicle","Interactions"];export{x as BringInYourVehicle,k as Interactions,ke as __namedExportsOrder,xe as default};
