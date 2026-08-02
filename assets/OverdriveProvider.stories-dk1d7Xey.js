import{x as s,O as d,e,S as c}from"./iframe-ChbfxQZb.js";import{B as o}from"./Button-CKsANr3w.js";import{F as n}from"./FlexInline-BFiAYVmY.js";import{S as l}from"./Switch-D9Vp3Hey.js";import{C as m}from"./CheckBox-DCrjVofg.js";import{T as p}from"./TextLink-EmG57mXz.js";import{T as u}from"./Text-CPgvrLJn.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DOBnw5W4.js";import"./resolveResponsiveProps-BV_BSYur.js";import"./ProgressSpinner-3cdXORAU.js";import"./flex-CDp9aCvG.js";import"./useControlledState-BAlhoUrB.js";import"./index-C0hAkQCE.js";import"./index-BI9DWexV.js";import"./useFocusRing-NOJFp2QT.js";import"./VisuallyHidden-CXeGxJ-f.js";import"./CheckableBase-IGJBWP-u.js";import"./MinusIcon-CvkER0Dn.js";import"./CheckIcon-s6n6numv.js";const R={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},a={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(l,{isSelected:!0},"Switch, on"),e.createElement(m,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
