import{C as s,$ as o}from"./Calendar-CmlV4K3V.js";import{e as r}from"./iframe-C4sSev8-.js";import"./usePress-C8ZOjN4Q.js";import"./useFocusable-Clrz9Eq1.js";import"./index-DUWYk-_b.js";import"./index-jP9DFk2A.js";import"./useButton-BZBvsB4R.js";import"./context-DOcZRCgl.js";import"./useLabels-DcLqxjxc.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-D1WCFlav.js";import"./Icon-CXO3Gmtu.js";import"./resolveResponsiveProps-JBHQbJiX.js";import"./ChevronLeftIcon-jWa6rhOA.js";import"./ChevronRightIcon-pQF-UaoT.js";import"./preload-helper-D9Z9MdNV.js";const P={title:"Components/Calendar",tags:["new"],component:s,parameters:{layout:"padded"},argTypes:{allowPastDate:{control:"boolean",description:"Allow selecting dates in the past"},calendarOptions:{control:!1,description:"React-aria calendar configuration object"},lang:{control:!1,description:"Language overrides for navigation labels"},onChange:{control:!1,description:"Callback fired when date selection changes"}}},e={args:{allowPastDate:!1},parameters:{docs:{description:{story:"Basic calendar with default settings. Past dates are disabled by default."}}},render:t=>r.createElement(s,{...t,onChange:n=>console.log("Selected:",n)})},a={args:{calendarOptions:{isDateUnavailable:t=>o(t,"en-AU")}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    allowPastDate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic calendar with default settings. Past dates are disabled by default.'
      }
    }
  },
  render: args => <Calendar {...args} onChange={date => console.log('Selected:', date)} />
}`,...e.parameters?.docs?.source},description:{story:`Calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.
Past dates are disabled by default unless \`allowPastDate\` is set to true.

## Key Features
- **Accessibility**: Full keyboard navigation, screen reader support, ARIA attributes
- **Localization**: Supports multiple locales and custom language labels
- **Date Restrictions**: Disable past dates, specific dates, weekends, or date ranges
- **Custom Validation**: Implement complex business logic for date availability
- **Flexible Configuration**: Controlled or uncontrolled, with extensive customization options

## Date Restriction Patterns
- **Past Dates**: Use \\\`allowPastDate\\\` prop
- **Date Ranges**: Use \\\`minValue\\\` and \\\`maxValue\\\` in calendar config
- **Specific Dates**: Use \\\`isDateUnavailable\\\` function for custom logic`,...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    calendarOptions: {
      isDateUnavailable: (date: DateValue) => isWeekend(date, 'en-AU')
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Demonstrates disabling weekends using the `isDateUnavailable` function with the `isWeekend` utility from @internationalized/date.",...a.parameters?.docs?.description}}};const S=["Standard","DisabledWeekends"];export{a as DisabledWeekends,e as Standard,S as __namedExportsOrder,P as default};
