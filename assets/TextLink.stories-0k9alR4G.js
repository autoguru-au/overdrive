import{e as n}from"./iframe-DUkgvalV.js";import{T as b}from"./Text-DzL8dYyv.js";import{T as y,s as f}from"./TextLink-icrVgFUD.js";import{I as w}from"./CaretRightIcon-D5IVn3tv.js";import{I as k}from"./ArrowRightIcon-C7V5ujZX.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CZlUp0F_.js";import"./resolveResponsiveProps-B8iv0r4y.js";const{expect:a,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,B=["1","2","3","4","5","6","7","8","9"],C=["normal","semiBold","bold"],T=["primary","secondary","critical"],v={primary:"rgb(24, 133, 111)",hover:"rgb(3, 175, 131)"},A=[!1,!0],R=["uppercase","capitalize",void 0],V={title:"Content/Text Link",component:y,decorators:[e=>n.createElement("div",{style:{maxWidth:300}},n.createElement(e,null))],args:{size:"4",weight:"semiBold",icon:void 0,muted:!1,noWrap:void 0,transform:void 0,href:"#link",children:"Hello"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":k,"Chevron Right":w}},noWrap:{options:A,defaultValue:!1,control:{type:"boolean"}},transform:{options:R,defaultValue:null,control:{type:"select"}},weight:{options:C,defaultValue:null,control:{type:"select"}},size:{options:B,defaultValue:void 0,control:{type:"select"}},variant:{options:T,defaultValue:void 0,control:{type:"select"},description:"Opts into the linked-text appearance and picks its colour class. Omit for the established appearance."}}},r={args:{variant:"primary",children:"Button"},play:async({canvas:e,step:t})=>{await t("renders the linked-text appearance",async()=>{await a(e.getAllByRole("link")[0]).toHaveStyle({borderBottomStyle:"solid"})}),await t("draws no icon — `With Icon` owns that",async()=>{await a(e.getAllByRole("link")[0].querySelector("svg")).toBeNull()})}},i={args:{...r.args,variant:"secondary"}},c={args:{...r.args,variant:"critical"}},l={args:{...r.args,disabled:!0},play:async({canvas:e,step:t})=>{await t("is marked unavailable",async()=>{const o=e.getAllByRole("link")[0];await a(o).toHaveAttribute("aria-disabled","true"),await a(o).toHaveAttribute("tabindex","-1")})}},d={args:r.args,render:e=>n.createElement(y,{...e,"data-hover":!0}),play:async({canvas:e,step:t})=>{await t("is not the resting colour",async()=>{await a(getComputedStyle(e.getAllByRole("link")[0]).borderBottomColor).not.toBe(v.primary)})}},p={args:r.args,parameters:{docs:{source:{code:'<TextLink href="#link" variant="primary">Button</TextLink>'}}},render:e=>n.createElement(y,{...e,className:f}),play:async({canvas:e,step:t})=>{await t("is neither the resting nor the hover colour",async()=>{const o=getComputedStyle(e.getAllByRole("link")[0]).borderBottomColor;await a(o).not.toBe(v.primary),await a(o).not.toBe(v.hover)})}},u={args:{variant:void 0,children:"supported vehicles"},render:e=>n.createElement(n.Fragment,null,n.createElement(y,{...e}),n.createElement(y,{...e,"data-focus-visible":!0})),play:async({canvas:e,step:t})=>{await t("rests without an underline",async()=>{await a(getComputedStyle(e.getAllByRole("link")[0]).boxShadow).not.toContain("-2px")}),await t("draws the underline on focus",async()=>{await a(getComputedStyle(e.getAllByRole("link")[1]).boxShadow).toContain("-2px")})}},m={decorators:[e=>n.createElement(b,{as:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",n.createElement(e,null)," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")]},h={args:{icon:w},play:async({canvasElement:e,step:t})=>{const o=x.setup(),s=S(e).getAllByRole("link")[0];await t("<TextLink /> has SVG icon",async()=>{await a(s.querySelector("svg")).toBeInTheDocument()}),await t("the default appearance uses color.link.primary",async()=>{await a(getComputedStyle(s.firstElementChild).color).toBe(v.primary)}),await t("<TextLink /> is interactive",async()=>{await a(s).toHaveStyle({cursor:"pointer"}),await a(s).not.toHaveAttribute("tabindex","-1"),s.focus(),await a(s).toHaveFocus(),await o.hover(s)})}},g={args:{icon:k},decorators:m.decorators};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('renders the linked-text appearance', async () => {
      await expect(canvas.getAllByRole('link')[0]).toHaveStyle({
        borderBottomStyle: 'solid'
      });
    });
    await step('draws no icon — \`With Icon\` owns that', async () => {
      await expect(canvas.getAllByRole('link')[0].querySelector('svg')).toBeNull();
    });
  }
}`,...r.parameters?.docs?.source},description:{story:"Linked text, `primary` class — underlined in every state, and the label moves\ncolour with the underline on hover and press.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...i.parameters?.docs?.source},description:{story:"Linked text, `secondary` class — the label holds its colour and only the\nunderline moves on hover and press.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'critical'
  }
}`,...c.parameters?.docs?.source},description:{story:"Linked text, `critical` class — for destructive navigation.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('is marked unavailable', async () => {
      const link = canvas.getAllByRole('link')[0];
      await expect(link).toHaveAttribute('aria-disabled', 'true');
      await expect(link).toHaveAttribute('tabindex', '-1');
    });
  }
}`,...l.parameters?.docs?.source},description:{story:"Unavailable and not focusable. `disabled` is a real prop, so this story needs\nnothing beyond an arg.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: Primary.args,
  render: args => <TextLink {...args} data-hover />,
  play: async ({
    canvas,
    step
  }) => {
    await step('is not the resting colour', async () => {
      await expect(getComputedStyle(canvas.getAllByRole('link')[0]).borderBottomColor).not.toBe(linkColour.primary);
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"The hover state, held open. `:hover` cannot be set from an arg, so the story\nsets `data-hover` — the attribute the shared `selectors.hover` pattern\nalready matches, the same way `Radio` and `CheckBox` hold their hover state.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: Primary.args,
  parameters: {
    // \`storyForcePressed\` is a story-only class and its name is a build
    // hash, so the generated snippet is neither stable nor copy-pasteable.
    docs: {
      source: {
        code: '<TextLink href="#link" variant="primary">Button</TextLink>'
      }
    }
  },
  render: args => <TextLink {...args} className={styles.storyForcePressed} />,
  play: async ({
    canvas,
    step
  }) => {
    await step('is neither the resting nor the hover colour', async () => {
      const colour = getComputedStyle(canvas.getAllByRole('link')[0]).borderBottomColor;
      await expect(colour).not.toBe(linkColour.primary);
      await expect(colour).not.toBe(linkColour.hover);
    });
  }
}`,...p.parameters?.docs?.source},description:{story:"The pressed state, held open. `:active` cannot be set from an arg either, so\nthe story replays the class's own `:active` declarations through\n`storyForcePressed` — driven off the same colour map the recipe uses, so the\nforced state cannot drift from the real one.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: undefined,
    children: 'supported vehicles'
  },
  render: args => <>
            <TextLink {...args} />
            <TextLink {...args} data-focus-visible />
        </>,
  play: async ({
    canvas,
    step
  }) => {
    await step('rests without an underline', async () => {
      await expect(getComputedStyle(canvas.getAllByRole('link')[0]).boxShadow).not.toContain('-2px');
    });
    await step('draws the underline on focus', async () => {
      await expect(getComputedStyle(canvas.getAllByRole('link')[1]).boxShadow).toContain('-2px');
    });
  }
}`,...u.parameters?.docs?.source},description:{story:"The established appearance draws its underline on focus as well as on hover,\nso a keyboard user gets the same non-colour cue a pointer user does.\n`:focus-visible` cannot be set from an arg, so the story sets\n`data-focus-visible` — the attribute the shared `selectors.focusVisible`\npattern already matches, the same way `Hover` sets `data-hover`.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
                <Story /> autem consectetur consequuntur eius fugiat illo ipsum
                nobis numquam, officiis placeat quia, quidem reprehenderit rerum
                temporibus veniam vero.
            </Text>]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: CaretRightIcon
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link')[0];
    await step('<TextLink /> has SVG icon', async () => {
      await expect(link.querySelector('svg')).toBeInTheDocument();
    });
    await step('the default appearance uses color.link.primary', async () => {
      // green-800 #18856F. Asserted from the emitted CSS so a regression
      // back to the legacy \`typography.colour.link\` green fails here.
      await expect(getComputedStyle(link.firstElementChild!).color).toBe(linkColour.primary);
    });
    await step('<TextLink /> is interactive', async () => {
      await expect(link).toHaveStyle({
        cursor: 'pointer'
      });

      // Focusability is asserted as tab-order membership plus a direct
      // \`focus()\`, not by pressing Tab. A capture environment that renders
      // the story in a frame without OS focus never moves focus on a
      // keypress, so \`{Tab}\` would fail on where the story is running
      // rather than on the component.
      await expect(link).not.toHaveAttribute('tabindex', '-1');
      link.focus();
      await expect(link).toHaveFocus();
      await user.hover(link);
    });
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon
  },
  decorators: InsideParagraph.decorators
}`,...g.parameters?.docs?.source}}};const _=["Primary","Secondary","Critical","Disabled","Hover","Pressed","FocusUnderline","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{c as Critical,l as Disabled,u as FocusUnderline,d as Hover,m as InsideParagraph,p as Pressed,r as Primary,i as Secondary,h as WithIcon,g as WithIconInsideParagraph,_ as __namedExportsOrder,V as default};
