import{x as s,O as d,e,S as c}from"./iframe-knNj_dc4.js";import{B as o}from"./Button-_xGdpBwV.js";import{F as n}from"./FlexInline-Bk50ppJw.js";import{S as l}from"./Switch-DhhQXGfv.js";import{C as m}from"./CheckBox-DNQAZWJc.js";import{T as p}from"./TextLink-dQY7xZeA.js";import{T as u}from"./Text-DYxReNNp.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Pa4szK58.js";import"./resolveResponsiveProps-B51dRZJs.js";import"./ProgressSpinner-twp3-hnc.js";import"./flex-te1JVRl7.js";import"./useControlledState-BmdLsbQc.js";import"./index-De_gLM3F.js";import"./index-Crah3-4N.js";import"./useFocusRing-CroUmTIx.js";import"./VisuallyHidden-B4Hpy2k_.js";import"./CheckableBase-iEwYDj0I.js";import"./MinusIcon-BS6LbxN1.js";import"./CheckIcon-COPMQjF1.js";const R={title:"Utility/OverdriveProvider",component:d,render:i=>e.createElement(d,{...i},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")))},r={},t={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff"}}},a={args:{theme:s,colorOverrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"}},render:i=>e.createElement(d,{...i},e.createElement(c,{space:"4"},e.createElement(n,{gap:"4"},e.createElement(o,{variant:"primary"},"Primary Button"),e.createElement(o,{variant:"primary",outlined:!0},"Outlined Button"),e.createElement(o,{variant:"secondary"},"Secondary Button")),e.createElement(n,{gap:"4"},e.createElement(l,{isSelected:!0},"Switch, on"),e.createElement(m,{checked:!0,value:"branded"},"Checked")),e.createElement(n,{gap:"4"},e.createElement(p,{href:"#branded"},"A branded link"),e.createElement(u,{colour:"primary"},'Text colour="primary"'))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uses the default base theme",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
