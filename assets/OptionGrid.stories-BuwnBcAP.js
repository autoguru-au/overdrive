import{r as v,e as A}from"./iframe-ilUwcptX.js";import{O as h}from"./OptionGrid-Dk-ZnWi3.js";import{I as x,a as k,b as y,c as E}from"./TyreIcon-8YgPlfh6.js";import"./preload-helper-D9Z9MdNV.js";import"./useFocusable-Dj2_mtDz.js";import"./index-DRMzpZCo.js";import"./index-D8fikqzV.js";import"./usePress-aH4FsrHY.js";import"./getScrollParent-DpO8XyHH.js";import"./scrollIntoView-hgiIQZ7l.js";import"./useFocusWithin-CHOXTjg8.js";import"./useLabel-DVZj2vC1.js";import"./useLabels-DqxlHLOB.js";import"./FocusScope-xMvTiGB_.js";import"./context-DH9tupr9.js";import"./useFocusRing-XO5gXKi4.js";import"./LoadingBox-DlTH6Nt4.js";import"./Icon-DIVFT0TM.js";import"./resolveResponsiveProps-CDLJUN0S.js";import"./CheckIcon-lO9xa9_h.js";const{expect:e,fn:C,getAllByRole:f,within:I,userEvent:S}=__STORYBOOK_MODULE_TEST__,u=[{label:"100,00km / 60 months",name:"100km/60"},{label:"110,000km / 66 months",name:"110km/66"},{label:"120,000km / 72 months",name:"120km/72"},{label:"130,000km / 78 months",name:"130km/78",disabled:!0},{label:"140,000km / 84 months",name:"140km/84"},{label:"150,000km / 90 months",name:"150km/90"},{label:"160,000km / 96 months",name:"160km/96"},{label:"170,000km / 104 months",name:"170km/102",disabled:!0},{label:"180,000km / 110 months",name:"180km/110",disabled:!0},{label:"190,000km / 116 months",name:"190km/116"}],g=[{label:"Re-gas Air-conditioning",icon:x,name:"regas-aircon"},{label:"Front Windscreen Replacement",icon:k,name:"front-windscreen"},{label:"Roadworthy Inspection",icon:y,name:"roadworthy"},{label:"Wheel Alignment",icon:E,name:"wheel-alignment"}],H=[{label:"Option A",name:"a",description:"This is description A"},{label:"Option B",name:"b",description:"This is description B"},{label:"Option C",name:"c",description:"This is description C"}],J={title:"Forms & Input Fields/Option Grid",tags:[],component:h,args:{label:"Select car servicing options",items:g,columns:"2",indicator:"checkbox",selectionMode:"multiple",onSelectionChange:C(),isLoading:!1,testId:"demo-option-grid"}},m={args:{label:"Select options",items:H,indicator:"checkbox"},play:async({args:t,canvasElement:d,step:n})=>{const p=t.items,c=I(d),l="aria-selected";await new Promise(i=>setTimeout(i,25));const b=c.getAllByRole("listbox")[0],a=f(b,"option");await n("Group renders label and attributes",async()=>{await e(b).toHaveAccessibleName(`${t.label}`),await e(b).toHaveAttribute("data-testid",t.testId)}),await n("Options render label and description",async()=>{for(const[i,o]of a.entries()){const w=p[i];await e(o).toHaveTextContent(w.label),await e(o).toHaveTextContent(w.description??""),await e(o).toHaveAttribute("data-key",w.name)}}),await n("Selected states and onChange event",async()=>{for(const i of[0,2]){const o=a[i];await S.click(o),await e(t.onSelectionChange).toHaveBeenCalled(),await e(o).toHaveAttribute(l,"true")}await e(a[1]).toHaveAttribute(l,"false")}),await n("Keyboard interaction",async()=>{await S.keyboard("[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]"),await e(t.onSelectionChange).toHaveBeenCalled(),await e(a[0]).toHaveAttribute(l,"false"),await e(a[2]).toHaveAttribute(l,"false")})}},s={args:{items:g}},r={args:{label:"Select a scheduled service",items:u,selectionMode:"single",indicator:"radio"},render:t=>{const[d,n]=v.useState(new Set([u[0].name])),p=c=>{n(c),console.info("Storybook OptionGrid: Selected item =",...c)};return A.createElement(h,{...t,selectedKeys:d,onSelectionChange:p})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select options',
    items: alphaOptions,
    indicator: 'checkbox'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const contentOptions = args.items;
    const canvas = within(canvasElement);
    const ARIA_SELECTED = 'aria-selected';

    // add a small pause, because react-aria init :(
    await new Promise(resolve => setTimeout(resolve, 25));
    const listbox = canvas.getAllByRole('listbox')[0];
    const options = getAllByRole(listbox, 'option');
    await step('Group renders label and attributes', async () => {
      await expect(listbox).toHaveAccessibleName(\`\${args.label}\`);
      await expect(listbox).toHaveAttribute('data-testid', args.testId);
    });
    await step('Options render label and description', async () => {
      for (const [idx, option] of options.entries()) {
        const content = contentOptions[idx];
        await expect(option).toHaveTextContent(content.label);
        await expect(option).toHaveTextContent(content.description ?? '');
        await expect(option).toHaveAttribute('data-key', content.name);
      }
    });
    await step('Selected states and onChange event', async () => {
      for (const idx of [0, 2]) {
        const option = options[idx];
        await userEvent.click(option);
        await expect(args.onSelectionChange).toHaveBeenCalled();
        await expect(option).toHaveAttribute(ARIA_SELECTED, 'true');
      }
      await expect(options[1]).toHaveAttribute(ARIA_SELECTED, 'false');
    });
    await step('Keyboard interaction', async () => {
      await userEvent.keyboard('[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]');
      await expect(args.onSelectionChange).toHaveBeenCalled();
      await expect(options[0]).toHaveAttribute(ARIA_SELECTED, 'false');
      await expect(options[2]).toHaveAttribute(ARIA_SELECTED, 'false');
    });
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: serviceTasks
  }
}`,...s.parameters?.docs?.source},description:{story:"Uncontrolled with custom icons",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a scheduled service',
    items: serviceSchedule,
    selectionMode: 'single',
    indicator: 'radio'
  },
  render: args => {
    const [selectedItems, setSelectedItems] = useState<Selection>(new Set([serviceSchedule[0].name]));
    const handleChange = (items: Selection) => {
      setSelectedItems(items);
      console.info('Storybook OptionGrid: Selected item =', ...items);
    };
    return <OptionGrid {...args} selectedKeys={selectedItems} onSelectionChange={handleChange} />;
  }
}`,...r.parameters?.docs?.source},description:{story:`Example of a controlled instance using an empty Set, logs selection to console. Indicator set to \`radio\`.
This example also demostrates disabling of options.

\`\`\`jsx
import type { Selection } from 'react-aria-components';
...

const [selectedItems, setSelectedItems] = useState<Selection>(new Set());

return (
	<OptionGrid
		...
		selectedKeys={selectedItems}
		onSelectionChange={setSelectedItems}
		...
	/>
);
\`\`\``,...r.parameters?.docs?.description}}};const Q=["Simple","UncontrolledWithIcons","SingleSelectionControlled"];export{m as Simple,r as SingleSelectionControlled,s as UncontrolledWithIcons,Q as __namedExportsOrder,J as default};
