import{f as G,w as K,g as $,e,u as w}from"./index-C90yH3XK.js";import{r as L,R as N}from"./index-Cr_cdoBq.js";import{O as T}from"./OptionGrid-DSUL3p4U.js";import{I as W,a as F,b as M,c as U}from"./TyreIcon-C2F28cJF.js";import"./_commonjsHelpers-C932wzq6.js";import"./Box-riOnoi3Y.js";import"./useFocusRing-BqZFs35I.js";import"./index-DmBm8MVW.js";import"./index-CAtvbLPT.js";import"./useLabel-CsvZmkS6.js";import"./context-BymC_1eM.js";import"./createRuntimeFn-62c9670f.esm-U-YlDjuY.js";import"./dataAttrs-BPvLuXwN.js";import"./Icon-u2F7oOeh.js";import"./CheckIcon-qb3DRtZd.js";const h=[{label:"100,00km / 60 months",name:"100km/60"},{label:"110,000km / 66 months",name:"110km/66"},{label:"120,000km / 72 months",name:"120km/72"},{label:"130,000km / 78 months",name:"130km/78"},{label:"140,000km / 84 months",name:"140km/84"},{label:"150,000km / 90 months",name:"150km/90"},{label:"160,000km / 96 months",name:"160km/96"},{label:"170,000km / 104 months",name:"170km/102"},{label:"180,000km / 110 months",name:"180km/110"},{label:"190,000km / 116 months",name:"190km/116"}],B=[{label:"Re-gas Air-conditioning",icon:W,name:"regas-aircon"},{label:"Front Windscreen Replacement",icon:F,name:"front-windscreen"},{label:"Roadworthy Inspection",icon:M,name:"roadworthy"},{label:"Wheel Alignment",icon:U,name:"wheel-alignment"}],D=[{label:"Option A",name:"a",description:"This is a description"},{label:"Option B",name:"b",description:"This is a description"},{label:"Option C",name:"c",description:"This is a description"}],oe={title:"Forms & Input Fields/Option Grid",component:T,args:{label:"Select car servicing options",items:B,columns:"2",indicator:"checkbox",selectionMode:"multiple",testId:"demo-option-grid",onSelectionChange:G()},tags:["beta"]},s={args:{items:B}},r={args:{label:"Select a scheduled service",items:h,selectionMode:"single",indicator:"radio"},render:t=>{const[d,n]=L.useState(new Set([h[0].name])),m=l=>{n(l),console.info("Storybook OptionGrid: Selected item =",...l)};return N.createElement(T,{...t,selectedKeys:d,onSelectionChange:m})}},c={args:{label:"Select options",items:D,indicator:"none"},play:async({args:t,canvasElement:d,step:n})=>{const m=t.items,l=K(d);await new Promise(i=>setTimeout(i,25));const p=l.getAllByRole("listbox")[0],o=$(p,"option");await n("Group renders label and attributes",async()=>{await e(p).toHaveAccessibleName(`${t.label}`),await e(p).toHaveAttribute("data-test-id",t.testId)}),await n("Options render label and description",async()=>{for(const[i,a]of o.entries()){const b=m[i];await e(a).toHaveTextContent(b.label),await e(a).toHaveTextContent(b.description??""),await e(a).toHaveAttribute("data-key",b.name)}}),await n("Selected states and onChange event",async()=>{for(const i of[0,2]){const a=o[i];await w.click(a),await e(t.onSelectionChange).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-selected","true")}await e(o[1]).toHaveAttribute("aria-selected","false")}),await n("Keyboard interaction",async()=>{await w.keyboard("[ArrowLeft][ArrowLeft][Enter][ArrowRight][ArrowRight][Enter]"),await e(t.onSelectionChange).toHaveBeenCalled(),await e(o[0]).toHaveAttribute("aria-selected","false"),await e(o[2]).toHaveAttribute("aria-selected","false")})}};var u,g,S,v,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: serviceTasks
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source},description:{story:"Uncontrolled with custom icons",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var y,k,f,A,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:`Example of a controlled instance using an empty Set, logs selection to console. Indicator set to \`radio\`.

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
\`\`\``,...(I=(A=r.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var C,H,O,E,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      await expect(listbox).toHaveAttribute('data-test-id', args.testId);
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
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"Indicator is set to `none` and each option has a description.",...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};const ie=["UncontrolledWithIcons","SingleSelectionControlled","DescriptionNoIndicator"];export{c as DescriptionNoIndicator,r as SingleSelectionControlled,s as UncontrolledWithIcons,ie as __namedExportsOrder,oe as default};
