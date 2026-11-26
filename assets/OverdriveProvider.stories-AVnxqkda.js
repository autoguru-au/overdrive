import{x as s,O as d,e,S as c}from"./iframe-CUwYMU5A.js";import{B as a}from"./Button-Deldytuy.js";import{F as n}from"./FlexInline-Biz__Udz.js";import{S as m}from"./Switch-C9K8Y0x1.js";import{C as l}from"./CheckBox-DNNSF2qB.js";import{T as p}from"./TextLink-BaOtDHaF.js";import{T as u}from"./Text-zRXXdl9d.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CckNuZ1m.js";import"./resolveResponsiveProps-CL3Hzh_z.js";import"./ProgressSpinner-D4sDpoRb.js";import"./flex-B8nqxN1m.js";import"./useToggleState-BhxgDOAS.js";import"./usePress-DmS3QLdw.js";import"./useControlledState-BhF-AFB9.js";import"./index-Be4SUj8-.js";import"./index-VWM6nKh0.js";import"./useFormReset-B1RP6JwU.js";import"./useFormValidationState-Bard7ods.js";import"./useFocusRing-H5Mm3W_k.js";import"./useFocusWithin-CaB6Gg9b.js";import"./useHover-DosbHyUZ.js";import"./VisuallyHidden-Bnaf4kXl.js";import"./CheckableBase-C5JUYxiT.js";import"./MinusIcon-D6VjR2bh.js";import"./CheckIcon--8eErgwN.js";const j={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(a,{variant:"primary"},"Primary Button"),e.createElement(a,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},o={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(a,{variant:"primary"},"Primary Button"),e.createElement(a,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(a,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(m,{isSelected:!0},"Switch, on"),e.createElement(l,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
