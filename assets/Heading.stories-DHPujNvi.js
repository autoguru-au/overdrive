import{e as n,H as i,a as g,o as m}from"./iframe-Bw60F3r3.js";const{expect:c,within:h}=__STORYBOOK_MODULE_TEST__,y={title:"Content/Heading",component:i,decorators:[e=>n.createElement("div",{style:{maxWidth:"350px",width:"100%"}},n.createElement(e,null))],args:{children:"I am a heading"}},s={args:{as:"h1",children:"This heading has used a few small words, to demo balanced wrapping",id:"story-heading",testId:"test-heading"},play:async({args:e,canvasElement:a,step:d})=>{const t=h(a).getAllByRole("heading",{level:1})[0];await d("<Heading /> renders content and ids",async()=>{await c(t).toHaveTextContent(e.children),await c(t).toHaveAttribute("id",e.id),await c(t).toHaveAttribute("data-testid","test-heading")})}},r={render:e=>n.createElement(n.Fragment,null,g.map(a=>n.createElement(i,{key:a,...e,as:a}))),play:async({canvasElement:e,step:a})=>{const d=h(e);await a("<Heading /> renders one of each level",async()=>{g.forEach(async l=>{const t=d.getAllByRole("heading",{level:Number(l?.charAt(1))})[0];await c(t).toBeInTheDocument()})})}},o={render:e=>n.createElement(n.Fragment,null,Object.keys(m.typography.colour).map(a=>n.createElement(i,{...e,colour:a,key:a,my:"2"})))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'This heading has used a few small words, to demo balanced wrapping',
    id: 'story-heading',
    testId: 'test-heading'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getAllByRole('heading', {
      level: 1
    })[0];
    await step('<Heading /> renders content and ids', async () => {
      await expect(heading).toHaveTextContent(args.children as string);
      await expect(heading).toHaveAttribute('id', args.id);
      await expect(heading).toHaveAttribute('data-testid', 'test-heading');
    });
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <>
            {HEADING_TAGS.map(as => <Heading key={as} {...args} as={as} />)}
        </>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('<Heading /> renders one of each level', async () => {
      HEADING_TAGS.forEach(async level => {
        const heading = canvas.getAllByRole('heading', {
          level: Number(level?.charAt(1))
        })[0];
        await expect(heading).toBeInTheDocument();
      });
    });
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <>
            {Object.keys(overdriveTokens.typography.colour).map(colour => <Heading {...args} colour={colour as HeadingProps['colour']} key={colour} my="2" />)}
        </>
}`,...o.parameters?.docs?.source}}};const u=["Standard","AllTypes","AllColours"];export{o as AllColours,r as AllTypes,s as Standard,u as __namedExportsOrder,y as default};
