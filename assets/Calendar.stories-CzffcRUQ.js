import{C as s,$ as l,a as i}from"./Calendar-CCphyIWh.js";import{e as o}from"./iframe-B-UydsVC.js";import"./usePress-CvQAGAto.js";import"./useFocusable-MSVfTgJj.js";import"./index-BSu28wPM.js";import"./index-yHu8MUUS.js";import"./useButton-BQ3WtU8t.js";import"./context-BH4ShJ8I.js";import"./useLabels-B8BuEzVN.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-BZXz8BRF.js";import"./Icon-CjAt03gg.js";import"./resolveResponsiveProps-DY7mOkL1.js";import"./ChevronLeftIcon-BhbQZ7M2.js";import"./ChevronRightIcon-cqylKWlG.js";import"./preload-helper-D9Z9MdNV.js";const k={title:"Components/Calendar",tags:["new"],component:s,parameters:{layout:"padded"},argTypes:{allowPastDate:{control:"boolean",description:"Allow selecting dates in the past"}}},a={args:{allowPastDate:!1},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},t={args:{allowPastDate:!0,calendarOptions:{defaultValue:l("2025-12-25")}},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},n={args:{calendarOptions:{isDateUnavailable:e=>i(e,"en-AU")}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
