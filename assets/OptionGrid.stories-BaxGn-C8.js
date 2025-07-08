import{r as S,e as v}from"./iframe-CQI638ZW.js";import{O as u}from"./OptionGrid-CVcX_42o.js";import{I as x,a as y,b as k,c as A}from"./TyreIcon-CytXTSZS.js";import"./useFocusRing-D8S42_IN.js";import"./index-QqZXycx1.js";import"./index-DGSOHZIY.js";import"./useLabel-D_ticK41.js";import"./context-3nX3gMAe.js";import"./Icon-CcnEMbtT.js";import"./resolveResponsiveProps-BSDOymb9.js";import"./CheckIcon-5Q-pClVj.js";const{expect:e,fn:f,getAllByRole:I,within:C,userEvent:w}=__STORYBOOK_MODULE_TEST__,h=[{label:"100,00km / 60 months",name:"100km/60"},{label:"110,000km / 66 months",name:"110km/66"},{label:"120,000km / 72 months",name:"120km/72"},{label:"130,000km / 78 months",name:"130km/78"},{label:"140,000km / 84 months",name:"140km/84"},{label:"150,000km / 90 months",name:"150km/90"},{label:"160,000km / 96 months",name:"160km/96"},{label:"170,000km / 104 months",name:"170km/102"},{label:"180,000km / 110 months",name:"180km/110"},{label:"190,000km / 116 months",name:"190km/116"}],g=[{label:"Re-gas Air-conditioning",icon:x,name:"regas-aircon"},{label:"Front Windscreen Replacement",icon:y,name:"front-windscreen"},{label:"Roadworthy Inspection",icon:k,name:"roadworthy"},{label:"Wheel Alignment",icon:A,name:"wheel-alignment"}],H=[{label:"Option A",name:"a",description:"This is a description"},{label:"Option B",name:"b",description:"This is a description"},{label:"Option C",name:"c",description:"This is a description"}],N={title:"Forms & Input Fields/Option Grid",component:u,args:{label:"Select car servicing options",items:g,columns:"2",indicator:"checkbox",selectionMode:"multiple",testId:"demo-option-grid",onSelectionChange:f()},tags:["beta"]},s={args:{items:g}},r={args:{label:"Select a scheduled service",items:h,selectionMode:"single",indicator:"radio"},render:t=>{const[d,n]=S.useState(new Set([h[0].name])),m=l=>{n(l),console.info("Storybook OptionGrid: Selected item =",...l)};return v.createElement(u,{...t,selectedKeys:d,onSelectionChange:m})}},c={args:{label:"Select options",items:H,indicator:"none"},play:async({args:t,canvasElement:d,step:n})=>{const m=t.items,l=C(d);await new Promise(i=>setTimeout(i,25));const p=l.getAllByRole("listbox")[0],a=I(p,"option");await n("Group renders label and attributes",async()=>{await e(p).toHaveAccessibleName(`${t.label}`),await e(p).toHaveAttribute("data-testid",t.testId)}),await n("Options render label and description",async()=>{for(const[i,o]of a.entries()){const b=m[i];await e(o).toHaveTextContent(b.label),await e(o).toHaveTextContent(b.description??""),await e(o).toHaveAttribute("data-key",b.name)}}),await n("Selected states and onChange event",async()=>{for(const i of[0,2]){const o=a[i];await w.click(o),await e(t.onSelectionChange).toHaveBeenCalled(),await e(o).toHaveAttribute("aria-selected","true")}await e(a[1]).toHaveAttribute("aria-selected","false")}),await n("Keyboard interaction",async()=>{await w.keyboard("[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]"),await e(t.onSelectionChange).toHaveBeenCalled(),await e(a[0]).toHaveAttribute("aria-selected","false"),await e(a[2]).toHaveAttribute("aria-selected","false")})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
\`\`\``,...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select options',
    items: alphaOptions,
    indicator: 'none'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const contentOptions = args.items;
    const canvas = within(canvasElement);

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
        await expect(option).toHaveAttribute('aria-selected', 'true');
      }
      await expect(options[1]).toHaveAttribute('aria-selected', 'false');
    });
    await step('Keyboard interaction', async () => {
      await userEvent.keyboard('[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]');
      await expect(args.onSelectionChange).toHaveBeenCalled();
      await expect(options[0]).toHaveAttribute('aria-selected', 'false');
      await expect(options[2]).toHaveAttribute('aria-selected', 'false');
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"Indicator is set to `none` and each option has a description.",...c.parameters?.docs?.description}}};const U=["UncontrolledWithIcons","SingleSelectionControlled","DescriptionNoIndicator"];export{c as DescriptionNoIndicator,r as SingleSelectionControlled,s as UncontrolledWithIcons,U as __namedExportsOrder,N as default};
