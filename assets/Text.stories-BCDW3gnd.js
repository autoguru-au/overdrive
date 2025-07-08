import{e as t,o as m}from"./iframe-CvODe0lv.js";import{T as n}from"./Text-BkrpKwvM.js";const{expect:p,within:h}=__STORYBOOK_MODULE_TEST__,u=["p","label","span"],y=({children:e})=>t.createElement("div",{style:{maxWidth:"350px",width:"100%"}},e),b={title:"Primitives/Text",tags:[],component:n,decorators:[e=>t.createElement(y,null,e())],args:{as:"p",size:"4",strong:!1,display:"inline",weight:"normal",color:void 0,noWrap:void 0,breakWord:void 0,transform:void 0}},s={args:{children:"Help people better care for their cars",id:"story-text",testId:"test-text"},play:async({args:e,canvasElement:a,step:r})=>{const d=h(a).getAllByRole("paragraph")[0];await r("<Text /> renders content and id attributes",async()=>{await p(d).toHaveTextContent(e.children),await p(d).toHaveAttribute("id",e.id),await p(d).toHaveAttribute("data-testid",e.testId)})}},g="To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.",o={args:{children:g,display:"block",size:void 0,weight:void 0,my:"2"},render:e=>t.createElement(t.Fragment,null,u.map(a=>t.createElement(n,{...e,as:a,key:a})))},i={args:{children:g},render:e=>t.createElement(t.Fragment,null,Object.keys(m.typography.size).map(a=>t.createElement(n,{key:a,...e,size:a})))},c={args:{children:g},render:({children:e,...a})=>t.createElement(t.Fragment,null,Object.keys(m.typography.colour).map(r=>t.createElement("div",{key:r,style:{marginBottom:8}},t.createElement(n,{as:"p",size:"3",strong:!0},r),t.createElement(n,{...a,as:"p",colour:r},e))))},l={args:{as:"label",breakWord:!0,children:"Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Help people better care for their cars',
    id: 'story-text',
    testId: 'test-text'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const para = canvas.getAllByRole('paragraph')[0];
    await step('<Text /> renders content and id attributes', async () => {
      await expect(para).toHaveTextContent(args.children as string);
      await expect(para).toHaveAttribute('id', args.id);
      await expect(para).toHaveAttribute('data-testid', args.testId);
    });
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: longText,
    display: 'block',
    size: undefined,
    weight: undefined,
    my: '2'
  },
  render: args => <>
            {elements.map(as => <Text {...args} as={as} key={as} />)}
        </>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: args => <>
            {Object.keys(overdriveTokens.typography.size).map(size => <Text key={size} {...args} size={size as TextProps['size']} />)}
        </>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: ({
    children,
    ...args
  }) => <>
            {Object.keys(overdriveTokens.typography.colour).map(colour => <div key={colour} style={{
      marginBottom: 8
    }}>
                    <Text as="p" size="3" strong>
                        {colour}
                    </Text>
                    {/*@ts-expect-error wrong ref type */}
                    <Text {...args} as="p" colour={colour}>
                        {children}
                    </Text>
                </div>)}
        </>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'label',
    breakWord: true,
    children: 'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.'
  }
}`,...l.parameters?.docs?.source}}};const w=["Standard","AllTypes","AllSizes","AllColours","WithLongUnspacedText"];export{c as AllColours,i as AllSizes,o as AllTypes,s as Standard,l as WithLongUnspacedText,w as __namedExportsOrder,b as default};
