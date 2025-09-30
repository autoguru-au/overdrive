import{C as s,$ as l,a as i}from"./Calendar-CnCTtkcV.js";import{e as o}from"./iframe-C9jllvPJ.js";import"./usePress-DHadrcsS.js";import"./useFocusable-BQN1eFB0.js";import"./index-DkToRMIa.js";import"./index-7EDYEJkQ.js";import"./useButton-Dcp9REBf.js";import"./context-CHBhQBBQ.js";import"./useLocalizedStringFormatter-CrKF8E8P.js";import"./useLabels-DorNaQrF.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-DFDql3N0.js";import"./Icon-BV8fzRUr.js";import"./resolveResponsiveProps-DGBAxJXa.js";import"./ChevronLeftIcon-F6hvNpPG.js";import"./ChevronRightIcon-sRHKOXEc.js";import"./preload-helper-PPVm8Dsz.js";const O={title:"Components/Calendar",tags:["new"],component:s,parameters:{layout:"padded"},argTypes:{allowPastDate:{control:"boolean",description:"Allow selecting dates in the past"}}},a={args:{allowPastDate:!1},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},t={args:{allowPastDate:!0,calendarOptions:{defaultValue:l("2025-12-25")}},render:e=>o.createElement(s,{...e,onChange:r=>console.log("Selected:",r)})},n={args:{calendarOptions:{isDateUnavailable:e=>i(e,"en-AU")}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Demonstrates disabling weekends using the `isDateUnavailable` function with the `isWeekend` utility from @internationalized/date.",...n.parameters?.docs?.description}}};const V=["Standard","InitialValue","DisabledWeekends"];export{n as DisabledWeekends,t as InitialValue,a as Standard,V as __namedExportsOrder,O as default};
