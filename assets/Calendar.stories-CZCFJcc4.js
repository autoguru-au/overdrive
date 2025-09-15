import{C as s,$ as l,a as i}from"./Calendar-dDK9GEZq.js";import{e as o}from"./iframe-C5x-mm7q.js";import"./usePress-B02Ki444.js";import"./useFocusable-DEn2IQoa.js";import"./index-7ZWYOw53.js";import"./index-BzuOdlP7.js";import"./useButton-UHLEJ69t.js";import"./context-BSCSj89s.js";import"./useLabels-DmemVkjT.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-BsOT6f9n.js";import"./Icon-BmkmqnM-.js";import"./resolveResponsiveProps-BvoLHqG9.js";import"./ChevronLeftIcon-DIcHyqox.js";import"./ChevronRightIcon-CsV5ai6c.js";import"./preload-helper-D9Z9MdNV.js";const k={title:"Components/Calendar",tags:["new"],component:s,parameters:{layout:"padded"},argTypes:{allowPastDate:{control:"boolean",description:"Allow selecting dates in the past"}}},a={args:{allowPastDate:!1},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},t={args:{allowPastDate:!0,calendarOptions:{defaultValue:l("2025-12-25")}},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},n={args:{calendarOptions:{isDateUnavailable:e=>i(e,"en-AU")}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: false
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...a.parameters?.docs?.source},description:{story:"Calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.\nPast dates are disabled by default unless `allowPastDate` is set to true.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: true,
    calendarOptions: {
      defaultValue: parseDate('2025-12-25') // Christmas 2025 as initial value
    }
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...t.parameters?.docs?.source},description:{story:"Demonstrates controlled vs uncontrolled behavior using `value` and `defaultValue` props.\n\n**Controlled usage**: Pass `calendarOptions.value` to control the selected date externally.\nThe parent component manages all state changes via the `onChange` callback.\n\n**Uncontrolled usage**: Pass `calendarOptions.defaultValue` to set an initial date.\nThe calendar manages its own state internally after the initial value.\n\n**Fallback**: When neither is provided, defaults to today's date.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    calendarOptions: {
      isDateUnavailable: (date: DateValue) => isWeekend(date, 'en-AU')
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Demonstrates disabling weekends using the `isDateUnavailable` function with the `isWeekend` utility from @internationalized/date.",...n.parameters?.docs?.description}}};const O=["Standard","InitialValue","DisabledWeekends"];export{n as DisabledWeekends,t as InitialValue,a as Standard,O as __namedExportsOrder,k as default};
