import{x as s,O as d,e,S as c}from"./iframe-DUkgvalV.js";import{B as o}from"./Button-3QnB9gMa.js";import{F as n}from"./FlexInline-Do0OE7_m.js";import{S as l}from"./Switch-BDxaz0bQ.js";import{C as m}from"./CheckBox-DbXzoAx4.js";import{T as p}from"./TextLink-icrVgFUD.js";import{T as u}from"./Text-DzL8dYyv.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CZlUp0F_.js";import"./resolveResponsiveProps-B8iv0r4y.js";import"./ProgressSpinner-dhucdQ5e.js";import"./flex-Nu99tQh2.js";import"./useControlledState-D13PXa4C.js";import"./index-D5QrLjuV.js";import"./index-CoZyPIWB.js";import"./useFocusRing-CXON_KTv.js";import"./VisuallyHidden-BmGo-33P.js";import"./CheckableBase-BuBJIUQB.js";import"./MinusIcon-D4ag16ot.js";import"./CheckIcon-DMt7x-33.js";const R={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},a={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(l,{isSelected:!0},"Switch, on"),e.createElement(m,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
