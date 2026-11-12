import{x as s,O as d,e,S as c}from"./iframe-qUC4cxwQ.js";import{B as a}from"./Button-D_9ned8-.js";import{F as n}from"./FlexInline-B6CjUKR_.js";import{S as m}from"./Switch-BpENg___.js";import{C as l}from"./CheckBox-xfF2INMM.js";import{T as p}from"./TextLink-CxSmIb76.js";import{T as u}from"./Text-DW2ue6Ex.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DtufMYE4.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./ProgressSpinner-C4pSHKz3.js";import"./flex-w52CMqHY.js";import"./useToggleState-cjIbXWYO.js";import"./usePress-BCDht-ZB.js";import"./useControlledState-CiBm8WAk.js";import"./index-hcioG5kf.js";import"./index-rl8rPkT0.js";import"./useFormReset-E5uQFG7a.js";import"./useFormValidationState-Bu3mYN10.js";import"./useFocusRing-DJPMEP8k.js";import"./useFocusWithin-BPU23qHv.js";import"./useHover-BmWQQtcU.js";import"./VisuallyHidden-C7_qKR_8.js";import"./CheckableBase-gZ7YrLuO.js";import"./MinusIcon-DzBcp-cJ.js";import"./CheckIcon-Y08U8nJ0.js";const j={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(a,{variant:"primary"},"Primary Button"),e.createElement(a,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},o={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(a,{variant:"primary"},"Primary Button"),e.createElement(a,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(a,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(m,{isSelected:!0},"Switch, on"),e.createElement(l,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    theme: flatRed,
    colorOverrides: {
      primaryBackground: '#6d39a8',
      primaryForeground: '#ffffff'
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Example configured similar to overrides for Merchant Finder use the flat red theme and custom colour overrides.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: flatRed,
    colorOverrides: {
      primaryBackground: '#6d39a8',
      primaryForeground: '#ffffff',
      linkColor: '#6d39a8'
    }
  },
  render: args => <OverdriveProvider {...args}>
            <Stack space="4">
                <FlexInline gap="4">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="primary" outlined>
                        Outlined Button
                    </Button>
                    <Button variant="secondary">Secondary Button</Button>
                </FlexInline>
                <FlexInline gap="4">
                    <Switch isSelected>Switch, on</Switch>
                    <CheckBox checked value="branded">
                        Checked
                    </CheckBox>
                </FlexInline>
                <FlexInline gap="4">
                    <TextLink href="#branded">A branded link</TextLink>
                    <Text colour="primary">
                        Text colour=&quot;primary&quot;
                    </Text>
                </FlexInline>
            </Stack>
        </OverdriveProvider>
}`,...o.parameters?.docs?.source},description:{story:'Everything a brand colour reaches once `linkColor` is opted into as well.\n\n`primaryBackground` alone brands the solid and outlined buttons, the\nselection controls and `<Text colour="primary">`. It deliberately leaves\nlinks and focus rings alone — that colour was chosen as a fill behind white\ntext and is often illegible as link text — so branding those is a separate,\nexplicit `linkColor`. Compare the link here with `WithColorOverrides` above,\nwhere it stays the theme\'s own colour.',...o.parameters?.docs?.description}}};const z=["Standard","WithColorOverrides","WithBrandedLinks"];export{r as Standard,o as WithBrandedLinks,t as WithColorOverrides,z as __namedExportsOrder,j as default};
