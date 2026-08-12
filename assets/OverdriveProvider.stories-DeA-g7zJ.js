import{x as s,O as d,e,S as c}from"./iframe-zIO8-QHw.js";import{B as o}from"./Button-Cvs4pcBu.js";import{F as n}from"./FlexInline-DRhw6nO7.js";import{S as l}from"./Switch-C_nWQH2q.js";import{C as m}from"./CheckBox-CmNDL6AQ.js";import{T as p}from"./TextLink-CRPO-ezU.js";import{T as u}from"./Text-kEIcHbNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BF7ocTT2.js";import"./resolveResponsiveProps-CneTyc4t.js";import"./ProgressSpinner-C2H4VYAn.js";import"./flex-DjR4ejWK.js";import"./useControlledState-VHH24WVJ.js";import"./index-BbR0RnjT.js";import"./index-CIZGYSF8.js";import"./useFocusRing-B7J0LXW3.js";import"./VisuallyHidden-_NDfb0KY.js";import"./CheckableBase-3qRYKgdi.js";import"./MinusIcon-DoxN2XA1.js";import"./CheckIcon-ULStC8Te.js";const R={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},a={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(l,{isSelected:!0},"Switch, on"),e.createElement(m,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    theme: flatRed,
    colorOverrides: {
      primaryBackground: '#6d39a8',
      primaryForeground: '#ffffff'
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Example configured similar to overrides for Merchant Finder use the flat red theme and custom colour overrides.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:'Everything a brand colour reaches once `linkColor` is opted into as well.\n\n`primaryBackground` alone brands the solid and outlined buttons, the\nselection controls and `<Text colour="primary">`. It deliberately leaves\nlinks and focus rings alone — that colour was chosen as a fill behind white\ntext and is often illegible as link text — so branding those is a separate,\nexplicit `linkColor`. Compare the link here with `WithColorOverrides` above,\nwhere it stays the theme\'s own colour.',...a.parameters?.docs?.description}}};const q=["Standard","WithColorOverrides","WithBrandedLinks"];export{r as Standard,a as WithBrandedLinks,t as WithColorOverrides,q as __namedExportsOrder,R as default};
