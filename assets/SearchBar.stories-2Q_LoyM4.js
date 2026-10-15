import{S as l}from"./SearchBar-D0MYFobd.js";import"./iframe-DYr4QcUl.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-BKWoWJiz.js";import"./usePress-CsANT0Pb.js";import"./useControlledState-yNUlvJbT.js";import"./index-BZm1UysS.js";import"./index-9RTDjsm6.js";import"./useFocusRing-CzelDV47.js";import"./useFocusWithin-BjFN8fyL.js";import"./useField-DSM0mNrZ.js";import"./useLabel-B7ywlgJ4.js";import"./useLabels-DsKVK_kb.js";import"./useFormReset-BFIspLfz.js";import"./useFormValidationState-Bmx1nDPp.js";import"./useLocalizedStringFormatter-CCUksv-X.js";import"./Icon-ClIl3lqs.js";import"./resolveResponsiveProps-CwCD898-.js";import"./MagnifyingGlassIcon-8yEvF4ep.js";import"./XIcon-Cgv5MgU8.js";const{expect:a,fn:p,within:h,userEvent:o}=__STORYBOOK_MODULE_TEST__,O={title:"Forms & Input Fields/Search Bar",component:l,args:{placeholder:"Search for tasks",onChange:p(),lang:{label:"Search for tasks",clear:"clear search"},maxLength:25,isDisabled:!1,testId:"demo-search-bar"},tags:["beta"]},i="Test search phrase",t={play:async({args:s,canvasElement:c,step:r})=>{const n=h(c),e=n.getAllByRole("searchbox")[0];await r("Initial state",async()=>{await a(e).toHaveAccessibleName(s.placeholder??s.label)}),e.focus(),await r("Enter text into the search field",async()=>{await o.type(e,i),await a(s.onChange).toBeCalledWith(i),await a(e).toHaveValue(i),await a(e).toHaveFocus()}),await r("Clearing the search field",async()=>{await a(n.getAllByRole("button")[0]).toBeVisible(),await o.keyboard("{Esc}"),await a(e).toHaveValue("")}),e.blur()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
