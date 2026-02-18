import{C as l,$ as o,a as d}from"./Calendar-DunQrPce.js";import{e as i,i as c}from"./iframe-D3DMP0e-.js";import{M as p}from"./mockdate-DQafW72R.js";import"./usePress-BspjDUsr.js";import"./useFocusable-ePgkGbt8.js";import"./index-SNNNgtCQ.js";import"./index-BAlklDXV.js";import"./useButton-Cf7_x7zf.js";import"./context-CjSlxxfI.js";import"./useLocalizedStringFormatter-mW5grvix.js";import"./useLabels-M4k0SqNw.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-CuqneI9_.js";import"./Icon-CiSRuH0F.js";import"./resolveResponsiveProps-Dsh1waHK.js";import"./ChevronLeftIcon-ChSEwObM.js";import"./ChevronRightIcon-CWfefCsd.js";import"./preload-helper-PPVm8Dsz.js";const m="2025-12-31",$={title:"Components/Calendar",tags:["new"],component:l,beforeEach:()=>{c()&&p.set(m)},parameters:{layout:"padded"},argTypes:{allowPastDate:{control:"boolean",description:"Allow selecting dates in the past"}}},t={args:{allowPastDate:!1},render:e=>i.createElement(l,{...e,onChange:a=>console.log("Selected:",a)})},n={args:{allowPastDate:!0,calendarOptions:{defaultValue:o("2025-12-25")}},render:e=>i.createElement(l,{...e,onChange:a=>console.log("Selected:",a)})},r={args:{calendarOptions:{minValue:o("2025-06-05"),maxValue:o("2025-06-25"),defaultValue:o("2025-06-15")}},render:e=>i.createElement(l,{...e,onChange:a=>console.log("Selected:",a)})},s={args:{allowPastDate:!0,calendarOptions:{isDateUnavailable:e=>d(e,"en-AU")}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: false
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...t.parameters?.docs?.source},description:{story:"Calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.\nPast dates are disabled by default unless `allowPastDate` is set to true.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: true,
    calendarOptions: {
      defaultValue: parseDate('2025-12-25') // Christmas 2025 as initial value
    }
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...n.parameters?.docs?.source},description:{story:"Demonstrates controlled vs uncontrolled behavior using `value` and `defaultValue` props.\n\n**Controlled usage**: Pass `calendarOptions.value` to control the selected date externally.\nThe parent component manages all state changes via the `onChange` callback.\n\n**Uncontrolled usage**: Pass `calendarOptions.defaultValue` to set an initial date.\nThe calendar manages its own state internally after the initial value.\n\n**Fallback**: When neither is provided, defaults to today's date.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    calendarOptions: {
      minValue: parseDate('2025-06-05'),
      maxValue: parseDate('2025-06-25'),
      defaultValue: parseDate('2025-06-15')
    }
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...r.parameters?.docs?.source},description:{story:`Calendar with min and max date restrictions.
Demonstrates simple date range limiting using string-based min/max values.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: true,
    calendarOptions: {
      isDateUnavailable: (date: DateValue) => isWeekend(date, 'en-AU')
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Demonstrates disabling weekends using the \`isDateUnavailable\` function with the
\`isWeekend\` utility from @internationalized/date.

**NOTE**: Using the \`isDateUnavailable\` handler overrides past date availability
as well as min/max values.

Or this could be calculated manually:
\`\`\`ts
isDateUnavailable: (date: DateValue) => {
 	// Block weekends (Saturday = 6, Sunday = 0)
	 const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
	 return dayOfWeek === 0 || dayOfWeek === 6;
}
\`\`\``,...s.parameters?.docs?.description}}};const E=["Standard","InitialValue","MinMax","DisabledWeekends"];export{s as DisabledWeekends,n as InitialValue,r as MinMax,t as Standard,E as __namedExportsOrder,$ as default};
