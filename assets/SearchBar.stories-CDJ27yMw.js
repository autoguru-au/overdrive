import{S as l}from"./SearchBar-62mHAqBL.js";import"./iframe-CUwYMU5A.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CWL6I0nR.js";import"./usePress-DmS3QLdw.js";import"./useControlledState-BhF-AFB9.js";import"./index-Be4SUj8-.js";import"./index-VWM6nKh0.js";import"./useFocusRing-H5Mm3W_k.js";import"./useFocusWithin-CaB6Gg9b.js";import"./useField-DgHxklWE.js";import"./useLabel-DfkKyvfr.js";import"./useLabels-BP8zqgfp.js";import"./useFormReset-B1RP6JwU.js";import"./useFormValidationState-Bard7ods.js";import"./useLocalizedStringFormatter-BOps-6LK.js";import"./Icon-CckNuZ1m.js";import"./resolveResponsiveProps-CL3Hzh_z.js";import"./MagnifyingGlassIcon-TqSI0dGY.js";import"./XIcon-C_sV-okC.js";const{expect:a,fn:p,within:h,userEvent:o}=__STORYBOOK_MODULE_TEST__,O={title:"Forms & Input Fields/Search Bar",component:l,args:{placeholder:"Search for tasks",onChange:p(),lang:{label:"Search for tasks",clear:"clear search"},maxLength:25,isDisabled:!1,testId:"demo-search-bar"},tags:["beta"]},i="Test search phrase",t={play:async({args:s,canvasElement:c,step:r})=>{const n=h(c),e=n.getAllByRole("searchbox")[0];await r("Initial state",async()=>{await a(e).toHaveAccessibleName(s.placeholder??s.label)}),e.focus(),await r("Enter text into the search field",async()=>{await o.type(e,i),await a(s.onChange).toBeCalledWith(i),await a(e).toHaveValue(i),await a(e).toHaveFocus()}),await r("Clearing the search field",async()=>{await a(n.getAllByRole("button")[0]).toBeVisible(),await o.keyboard("{Esc}"),await a(e).toHaveValue("")}),e.blur()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
