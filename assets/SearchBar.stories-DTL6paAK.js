import{S as l}from"./SearchBar-cc5lpdJ6.js";import"./iframe-qUC4cxwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-DWaV1Tev.js";import"./usePress-BCDht-ZB.js";import"./useControlledState-CiBm8WAk.js";import"./index-hcioG5kf.js";import"./index-rl8rPkT0.js";import"./useFocusRing-DJPMEP8k.js";import"./useFocusWithin-BPU23qHv.js";import"./useField-Bdom8HTb.js";import"./useLabel-CgjoysYz.js";import"./useLabels-CO4kiYzB.js";import"./useFormReset-E5uQFG7a.js";import"./useFormValidationState-Bu3mYN10.js";import"./useLocalizedStringFormatter-BaQUW976.js";import"./Icon-DtufMYE4.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./MagnifyingGlassIcon-E0q9CjdC.js";import"./XIcon-CofsGoOb.js";const{expect:a,fn:p,within:h,userEvent:o}=__STORYBOOK_MODULE_TEST__,O={title:"Forms & Input Fields/Search Bar",component:l,args:{placeholder:"Search for tasks",onChange:p(),lang:{label:"Search for tasks",clear:"clear search"},maxLength:25,isDisabled:!1,testId:"demo-search-bar"},tags:["beta"]},i="Test search phrase",t={play:async({args:s,canvasElement:c,step:r})=>{const n=h(c),e=n.getAllByRole("searchbox")[0];await r("Initial state",async()=>{await a(e).toHaveAccessibleName(s.placeholder??s.label)}),e.focus(),await r("Enter text into the search field",async()=>{await o.type(e,i),await a(s.onChange).toBeCalledWith(i),await a(e).toHaveValue(i),await a(e).toHaveFocus()}),await r("Clearing the search field",async()=>{await a(n.getAllByRole("button")[0]).toBeVisible(),await o.keyboard("{Esc}"),await a(e).toHaveValue("")}),e.blur()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getAllByRole('searchbox')[0];
    await step('Initial state', async () => {
      await expect(field).toHaveAccessibleName(args.placeholder ?? args.label);
    });
    field.focus(); // react-aria seems to need this event to register interactions
    await step('Enter text into the search field', async () => {
      await userEvent.type(field, testPhrase);
      await expect(args.onChange).toBeCalledWith(testPhrase);
      await expect(field).toHaveValue(testPhrase);
      await expect(field).toHaveFocus();
    });
    await step('Clearing the search field', async () => {
      await expect(canvas.getAllByRole('button')[0]).toBeVisible();
      await userEvent.keyboard('{Esc}');
      await expect(field).toHaveValue('');
    });
    field.blur();
  }
}`,...t.parameters?.docs?.source}}};const R=["TaskSearch"];export{t as TaskSearch,R as __namedExportsOrder,O as default};
