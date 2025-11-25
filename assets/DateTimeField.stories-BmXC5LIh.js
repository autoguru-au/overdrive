import{z as M,r as k,e,C as V,u as L,i as H}from"./iframe-TtMUic4I.js";import{M as Y}from"./mockdate-DTVFhRO5.js";import{u as G,s as E,d as z,f as U}from"./useCalendarPopover-C7GotnwU.js";import{C as $}from"./Calendar-DGxcFCQD.js";import{L as q}from"./LoadingBox-BUB6A-yk.js";import{P as K}from"./PopoverTrigger-z-KB-3S3.js";import"./preload-helper-PPVm8Dsz.js";import"./usePress-Cs_tUIeL.js";import"./useFocusable-C5F02sYK.js";import"./index-BkbnEq6Q.js";import"./index-CkMS7m0-.js";import"./useButton-mjnBYpCk.js";import"./context-BPnNfn8S.js";import"./useLocalizedStringFormatter-CMUXVhnD.js";import"./useLabels-DRgMt4EQ.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-T-riIcpl.js";import"./Icon-CVCn9x6N.js";import"./resolveResponsiveProps-Bf2dZkOp.js";import"./ChevronLeftIcon-Dw4Mgryf.js";import"./ChevronRightIcon-XN99YmZQ.js";import"./Button-BnAJZEXS.js";import"./ProgressSpinner-DCxfSEwa.js";import"./useMedia-CO-_IiXX.js";import"./number-DL2p9zOw.js";import"./FocusScope-CxLU73Fl.js";import"./useFocusWithin-MgKZ0iwC.js";import"./keyboard-BXh401c9.js";import"./CloseIcon-bP2xAKBa.js";var W="eky8in2 eky8in1 eky8in0 onxwju0 onxwjub onxwjum onxwjux onxwju2n onxwju2l onxwju2p onxwju2r onxwjucx onxwjuch onxwjudd onxwjudt onxwjuth onxwjuul onxwjuvp onxwjuwt onxwju3f onxwjubx onxwju6l onxwjupx onxwjupl onxwju8h onxwjuax tq83zq0",J="eky8in3 eky8in1 eky8in0 onxwju0 onxwjub onxwjum onxwjux onxwju2n onxwju2l onxwju2p onxwju2r onxwjucx onxwjuch onxwjudd onxwjudt onxwjuth onxwjuul onxwjuvp onxwjuwt onxwju3f onxwjubx onxwju6l onxwjupx onxwjupl onxwju8h onxwjuax",R=M({defaultClassName:"eky8in7 _18vhvlid _18vhvlim yhjp33f eky8in4 onxwjua1 onxwju91 onxwju5m onxwjuax onxwju5p eky8in5 yhjp338",variantClassNames:{invalid:{true:"eky8in8 eky8in6 onxwju2w"},disabled:{true:"eky8in9"}},defaultVariants:{},compoundVariants:[]}),_="eky8ind eky8ina _18vhvlid _18vhvlim yhjp33f eky8inb onxwjua9 onxwju99 onxwju5k onxwju5n eky8inc yhjp338";const X={dateLabel:"date",select:"select"},p=k.forwardRef(({allowPastDate:s=!1,calendarOptions:r,defaultValue:n,disabled:i=!1,invalid:d=!1,lang:l={},loading:t=!1,max:a,min:T,name:F,onChange:j,testId:h,value:b},C)=>{const{selectedDate:y,handleCalendarChange:S,setPopoverState:c}=G({value:b,defaultValue:n,onChange:j}),O=i||t,v={...X,...l},A={nextLabel:v.nextLabel,prevLabel:v.prevLabel},P={close:v.close},N={defaultValue:y,minValue:T?E(T):void 0,maxValue:a?E(a):void 0,...r};return e.createElement("div",{...V({"od-component":"date-field",testId:h})},e.createElement(K,{content:e.createElement($,{allowPastDate:s,calendarOptions:N,lang:A,onChange:S}),lang:P,offset:1,onStateReady:c,placement:"bottom left",isDisabled:O},e.createElement("button",{className:W,...V({disabled:i,loading:t,invalid:d})},e.createElement("div",{className:R({disabled:i,invalid:d})},v.dateLabel),t?e.createElement(q,{height:"6"}):e.createElement("div",{className:_,...V({disabled:i})},y?z(y):v.select))),e.createElement("input",{name:F,value:U(y),type:"hidden",disabled:i,ref:C}))});p.displayName="DateField";try{p.displayName="DateField",p.__docgenInfo={description:`DateField is a sub-component for selecting a date with a Calendar popup.
Presently, this component is primarily used within the DateTimeInput.`,displayName:"DateField",props:{calendarOptions:{defaultValue:null,description:"Calendar props passed through to the react-aria hook",name:"calendarOptions",required:!1,type:{name:"AriaCalendarProps<DateValue>"}},allowPastDate:{defaultValue:{value:"false"},description:"Allow date in the past",name:"allowPastDate",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"Minimum selectable date (ISO YYYY-MM-DD)",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"Maximum selectable date (ISO YYYY-MM-DD)",name:"max",required:!1,type:{name:"string"}},lang:{defaultValue:{value:"{}"},description:"Text values for localization",name:"lang",required:!1,type:{name:"Partial<DateFieldTextContent>"}},name:{defaultValue:null,description:"Input name attribute for forms",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled the input",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Invalid field state",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state - shows spinner and disables interaction",name:"loading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Uncontrolled default value",name:"defaultValue",required:!1,type:{name:"DateValue | null"}},value:{defaultValue:null,description:"Controlled value",name:"value",required:!1,type:{name:"DateValue | null"}},onChange:{defaultValue:null,description:"Custom event handler when value is selected",name:"onChange",required:!1,type:{name:"((value: DateValue | null) => void)"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const u=({children:s,...r})=>{const{Component:n,componentProps:i}=L(r);return e.createElement(n,{...i},s)};u.displayName="DateTimeField";try{u.displayName="DateTimeField",u.__docgenInfo={description:`DateTimeField is a layout-only wrapper component that provides structure for DateField and TimeField components.
It doesn't manage state or provide functionality. This allows for simple direct control and updates to each field.

All props (name, disabled, loading, etc.) should be passed directly to the individual DateField and TimeField components.

## Child Components
- **DateField**: Handles date selection with calendar popover functionality
- **TimeField**: Handles time selection from predefined options

## State
- **Uncontrolled** (recommended): Pass \`defaultValue\` prop
- **Controlled**: Pass \`value\` prop

## Internationalization
- Override text values via \`lang\` props on the DateField and TimeField components
- Full Calendar options available via \`calendarOptions\` prop on the DateField
- Date formatting helper available in \`...utils/dateFormat.ts\` or use \`@internationalized/date\` utils
- Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)
- Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)`,displayName:"DateTimeField",props:{children:{defaultValue:null,description:`The DateField and TimeField components to render as children.
This allows for maximum flexibility in configuration.

\`\`\`tsx
<DateField
  allowPastDate={false}
  calendarOptions={{
    minValue: today(getLocalTimeZone()),
    isDateUnavailable: (date) => date.day === 0 // Disable Sundays
  }}
  name="booking-1-date"
  onChange={setDateValue}
  disabled={isSubmitting}
/>
<TimeField
  timeOptions={timeOptions}
  name="booking-1-time"
  onChange={setTimeValue}
  disabled={isSubmitting}
/>
\`\`\``,name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"Name of HTML tag or a React/JSX component to render the component as",name:"as",required:!1,type:{name:"AsProp"}},className:{defaultValue:null,description:"Flexible className that accepts strings, arrays and objects",name:"className",required:!1,type:{name:"ClassValue"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const Z={timeLabel:"time",select:"select"},f=k.forwardRef(({defaultValue:s,disabled:r=!1,invalid:n=!1,lang:i={},loading:d=!1,name:l,onChange:t,testId:a,timeOptions:T,value:F},j)=>{const h=k.useRef(null),b=r||d,C={...Z,...i},y=()=>{if("showPicker"in HTMLSelectElement.prototype&&h.current)try{h.current.showPicker()}catch{}},S=F===void 0?{defaultValue:s??""}:{value:F};return e.createElement("label",{className:J,onClick:y,onMouseLeave:()=>{h?.current?.blur()},"aria-disabled":b,...V({invalid:n,loading:d,"od-component":"time-field",testId:a}),ref:j},e.createElement("div",{className:R({disabled:r,invalid:n})},C.timeLabel),d?e.createElement(q,{height:"6"}):e.createElement("select",{name:l,className:_,...S,disabled:b,onChange:c=>{b||t?.(c.target.value)},onClick:c=>{c.stopPropagation()},ref:h},e.createElement("option",{value:"",disabled:!0},C.select),T.map(c=>e.createElement("option",{key:c.name,value:c.name},c.label))))});f.displayName="TimeField";try{f.displayName="TimeField",f.__docgenInfo={description:`TimeField is a sub-component for selecting a time from predefined options.
Presently, this component is primarily used within the DateTimeInput.`,displayName:"TimeField",props:{timeOptions:{defaultValue:null,description:"Available time options for selection",name:"timeOptions",required:!0,type:{name:"OptionItem[]"}},lang:{defaultValue:{value:"{}"},description:"Text values for localization",name:"lang",required:!1,type:{name:"Partial<TimeFieldTextContent>"}},name:{defaultValue:null,description:"Input name attribute for forms",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled the input",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Invalid field state",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state - shows spinner and disables interaction",name:"loading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Uncontrolled default value",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Controlled value",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Custom event handler when value is selected",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:o,fn:m,userEvent:Q,within:ee,waitFor:I,screen:g}=__STORYBOOK_MODULE_TEST__,te="2025-12-31",ae="date-time-input",D=[{label:"7:00 AM",name:"0700"},{label:"8:00 AM",name:"0800"},{label:"9:00 AM",name:"0900"},{label:"10:00 AM",name:"1000"},{label:"11:00 AM",name:"1100"},{label:"1:00 PM",name:"1300"},{label:"2:00 PM",name:"1400"},{label:"3:00 PM",name:"1500"},{label:"4:00 PM",name:"1600"}],Ee={title:"Forms & Input Fields/Date & Time Field",tags:["beta","skip-themes"],component:u,beforeEach:()=>{H()&&Y.set(te)},args:{children:void 0,className:void 0,testId:ae},argTypes:{children:{control:!1}}},B={render:s=>e.createElement(u,{...s},e.createElement(p,{name:"date",onChange:m()}),e.createElement(f,{name:"time",timeOptions:D,onChange:m()}))},w={render:()=>{const[s,r]=e.useState(!0),[n,i]=e.useState(!0);return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px"}},e.createElement(u,null,e.createElement(p,{name:"date-invalid",invalid:s,onChange:()=>r(!1)}),e.createElement(f,{name:"time-invalid",invalid:n,timeOptions:D,onChange:()=>i(!1)})),e.createElement(u,null,e.createElement(p,{name:"date-disabled",disabled:!0,onChange:m()}),e.createElement(f,{name:"time-disabled",disabled:!0,timeOptions:D,onChange:m()})),e.createElement(u,null,e.createElement(p,{name:"date-loading",loading:!0,onChange:m()}),e.createElement(f,{name:"time-loading",loading:!0,timeOptions:D,onChange:m()})))}},x={render:s=>e.createElement(u,{...s},e.createElement(p,{name:"date-test",onChange:m()}),e.createElement(f,{name:"time-test",timeOptions:D.slice(0,3),onChange:m()})),play:async({canvasElement:s,step:r})=>{const n=ee(s),i=Q.setup();await r("Initial component structure validation",async()=>{const l=n.getAllByRole("button")[0];o(l).toBeVisible();const t=n.getByRole("combobox");o(t).toBeVisible(),o(n.getByText("date")).toBeInTheDocument(),o(n.getByText("time")).toBeInTheDocument()});let d="";await r("Date field mouse interaction",async()=>{const l=n.getAllByRole("button")[0];await i.click(l),await I(()=>{const a=g.queryByRole("grid");o(a).toBeInTheDocument()});const t=g.getAllByRole("button").filter(a=>a.textContent&&/^\d{1,2}$/.test(a.textContent.trim())&&!a.hasAttribute("aria-disabled")&&!a.hasAttribute("aria-pressed"));t.length>0&&(d=t[0].textContent?.trim()||"",await i.click(t[0])),await I(()=>{const a=g.queryByRole("grid");o(a).not.toBeInTheDocument()})}),await r("Time field interaction",async()=>{const l=n.getByRole("combobox");await i.selectOptions(l,"0700"),o(l).toHaveValue("0700")}),await r("Keyboard navigation and accessibility",async()=>{const l=n.getAllByRole("button")[0],t=n.getByRole("combobox");l.focus(),o(l).toHaveFocus(),await i.keyboard("{Enter}"),await I(()=>{const a=g.queryByRole("grid");o(a).toBeInTheDocument()}),await i.keyboard("{Escape}"),await I(()=>{const a=g.queryByRole("grid");o(a).not.toBeInTheDocument()}),t.focus(),o(t).toHaveFocus(),o(t).toHaveAttribute("name")}),await r("Time label click interaction",async()=>{const l=n.getByRole("combobox"),t=l.closest("label");t&&await i.click(t),o(l).toBeInTheDocument()}),await r("Form integration validation",async()=>{const l=n.getByRole("combobox"),t=s.querySelector('input[type="hidden"]');if(o(t).toBeInTheDocument(),o(t).toHaveAttribute("name","date-test"),d){const a=t?.getAttribute("value")||"";o(a).toMatch(/^\d{4}-\d{2}-\d{2}$/),o(a.split("-")[2]).toBe(d.padStart(2,"0"))}o(l).toHaveAttribute("name","time-test")})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <DateTimeField {...args}>
            <DateField name="date" onChange={fn()} />
            <TimeField name="time" timeOptions={timeOptions} onChange={fn()} />
        </DateTimeField>
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateInvalid, setDateInvalid] = React.useState(true);
    const [timeInvalid, setTimeInvalid] = React.useState(true);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '16px'
    }}>
                <DateTimeField>
                    <DateField name="date-invalid" invalid={dateInvalid} onChange={() => setDateInvalid(false)} />
                    <TimeField name="time-invalid" invalid={timeInvalid} timeOptions={timeOptions} onChange={() => setTimeInvalid(false)} />
                </DateTimeField>
                <DateTimeField>
                    <DateField name="date-disabled" disabled onChange={fn()} />
                    <TimeField name="time-disabled" disabled timeOptions={timeOptions} onChange={fn()} />
                </DateTimeField>
                <DateTimeField>
                    <DateField name="date-loading" loading onChange={fn()} />
                    <TimeField name="time-loading" loading timeOptions={timeOptions} onChange={fn()} />
                </DateTimeField>
            </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:`Demonstrates different field states (invalid, disabled, loading) applied to both DateField and TimeField components.
Shows how to pass state props directly to individual components within the DateTimeField wrapper.
Invalid fields clear their invalid state when changed.`,...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <DateTimeField {...args}>
            <DateField name="date-test" onChange={fn()} />
            <TimeField name="time-test" timeOptions={timeOptions.slice(0, 3)} onChange={fn()} />
        </DateTimeField>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    await step('Initial component structure validation', async () => {
      const dateButton = canvas.getAllByRole('button')[0];
      expect(dateButton).toBeVisible();
      const timeSelect = canvas.getByRole('combobox');
      expect(timeSelect).toBeVisible();

      // Verify labels are present with correct text
      expect(canvas.getByText('date')).toBeInTheDocument();
      expect(canvas.getByText('time')).toBeInTheDocument();
    });
    let selectedDateText = '';
    await step('Date field mouse interaction', async () => {
      const dateButton = canvas.getAllByRole('button')[0];

      // Click to open calendar popover
      await user.click(dateButton);

      // Wait for calendar popover to appear (rendered outside canvas)
      await waitFor(() => {
        const calendarGrid = screen.queryByRole('grid');
        expect(calendarGrid).toBeInTheDocument();
      });

      // Find and click on a selectable date (not disabled/unavailable)
      const dateButtons = screen.getAllByRole('button').filter(button => button.textContent && /^\\d{1,2}$/.test(button.textContent.trim()) && !button.hasAttribute('aria-disabled') && !button.hasAttribute('aria-pressed') // Not currently selected
      );
      if (dateButtons.length > 0) {
        // Capture the selected date text for later validation
        selectedDateText = dateButtons[0].textContent?.trim() || '';
        await user.click(dateButtons[0]);
      }

      // Calendar should close after date selection
      await waitFor(() => {
        const calendarGrid = screen.queryByRole('grid');
        expect(calendarGrid).not.toBeInTheDocument();
      });
    });
    await step('Time field interaction', async () => {
      const timeSelect = canvas.getByRole('combobox');

      // Select the first time option
      await user.selectOptions(timeSelect, '0700');

      // Note: With slot approach, onChange is handled individually by each component
      expect(timeSelect).toHaveValue('0700');
    });
    await step('Keyboard navigation and accessibility', async () => {
      const dateButton = canvas.getAllByRole('button')[0];
      const timeSelect = canvas.getByRole('combobox');

      // Focus the date button directly to test keyboard navigation
      dateButton.focus();
      expect(dateButton).toHaveFocus();

      // Open calendar with Enter key
      await user.keyboard('{Enter}');
      await waitFor(() => {
        const calendarGrid = screen.queryByRole('grid');
        expect(calendarGrid).toBeInTheDocument();
      });

      // Close calendar with Escape key
      await user.keyboard('{Escape}');
      await waitFor(() => {
        const calendarGrid = screen.queryByRole('grid');
        expect(calendarGrid).not.toBeInTheDocument();
      });

      // Focus the time field to test accessibility
      timeSelect.focus();
      expect(timeSelect).toHaveFocus();

      // Verify time field is accessible
      expect(timeSelect).toHaveAttribute('name');
    });
    await step('Time label click interaction', async () => {
      const timeSelect = canvas.getByRole('combobox');
      const timeFieldContainer = timeSelect.closest('label');

      // Click on time field container should trigger showPicker()
      if (timeFieldContainer) {
        await user.click(timeFieldContainer);
      }

      // Note: Focus behavior may vary by browser for programmatic showPicker()
      expect(timeSelect).toBeInTheDocument();
    });
    await step('Form integration validation', async () => {
      const timeSelect = canvas.getByRole('combobox');

      // The DateField now uses a hidden input for form submission
      const hiddenDateInput = canvasElement.querySelector('input[type="hidden"]');
      expect(hiddenDateInput).toBeInTheDocument();
      expect(hiddenDateInput).toHaveAttribute('name', 'date-test');

      // Validate the hidden input has a valid ISO date format (YYYY-MM-DD)
      // if a date was selected
      if (selectedDateText) {
        const hiddenInputValue = hiddenDateInput?.getAttribute('value') || '';
        expect(hiddenInputValue).toMatch(/^\\d{4}-\\d{2}-\\d{2}$/);
        // The day should match what was clicked
        expect(hiddenInputValue.split('-')[2]).toBe(selectedDateText.padStart(2, '0'));
      }

      // TimeField still uses a visible select
      expect(timeSelect).toHaveAttribute('name', 'time-test');
    });
  }
}`,...x.parameters?.docs?.source},description:{story:`Comprehensive interactive test covering user flows and accessibility.
Tests both mouse and keyboard interactions with organized step-by-step validation.`,...x.parameters?.docs?.description}}};const qe=["Standard","FieldStates","InteractionTest"];export{w as FieldStates,x as InteractionTest,B as Standard,qe as __namedExportsOrder,Ee as default};
