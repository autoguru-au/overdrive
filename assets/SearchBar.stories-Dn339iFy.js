import{S as l}from"./SearchBar-C05UEPRy.js";import"./iframe-BTBLa9qD.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-B38Cx2QV.js";import"./useFormValidationState-CNUlmE8g.js";import"./LocalizedStringFormatter-Bbt7CFPC.js";import"./useFocusRing-BJuiadTY.js";import"./Icon-C6DP2-K2.js";import"./resolveResponsiveProps-CM5NKSWG.js";import"./MagnifyingGlassIcon-BTsbf8bA.js";import"./mergeProps-DSOyIFfk.js";import"./XIcon-Rm5UrLak.js";import"./useButton-CEJLCNM_.js";import"./index-UCn0aYfZ.js";import"./index-DyPtkNDB.js";const{expect:a,fn:p,within:h,userEvent:o}=__STORYBOOK_MODULE_TEST__,C={title:"Forms & Input Fields/Search Bar",component:l,args:{placeholder:"Search for tasks",onChange:p(),lang:{label:"Search for tasks",clear:"clear search"},maxLength:25,isDisabled:!1,testId:"demo-search-bar"},tags:["beta"]},r="Test search phrase",t={play:async({args:s,canvasElement:c,step:n})=>{const i=h(c),e=i.getAllByRole("searchbox")[0];await n("Initial state",async()=>{await a(e).toHaveAccessibleName(s.placeholder??s.label)}),e.focus(),await n("Enter text into the search field",async()=>{await o.type(e,r),await a(s.onChange).toBeCalledWith(r),await a(e).toHaveValue(r),await a(e).toHaveFocus()}),await n("Clearing the search field",async()=>{await a(i.getAllByRole("button")[0]).toBeVisible(),await o.keyboard("{Esc}"),await a(e).toHaveValue("")}),e.blur()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const k=["TaskSearch"];export{t as TaskSearch,k as __namedExportsOrder,C as default};
