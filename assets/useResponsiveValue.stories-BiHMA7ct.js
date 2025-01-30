import{r as e}from"./index-Cr_cdoBq.js";import{T as t}from"./Text-wtC0s5rP.js";import{u as p}from"./useResponsiveValue-C3oSBG-C.js";import{S as m}from"./Stack-BmosDNuH.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DhWtNzlP.js";import"./Box-DR0gsLKr.js";import"./index-CZU0ijaN.js";import"./useMedia-BQEhCQzs.js";import"./ThemeProvider-DaUrEAYU.js";import"./index-CYx1ALmS.js";import"./makeTheme-BvwTE3C0.js";import"./index-DD0GW_rr.js";const I={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,,4],i=p(s);return e.createElement(m,null,e.createElement(t,{is:"p"},"All values: ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const Impl = () => {
    const allValues = [2, 3,, 4];
    const value = useResponsiveValue(allValues);
    return <Stack>
                <Text is="p">
                    All values: <Text strong>{JSON.stringify(allValues)}</Text>{' '}
                </Text>
                <Text is="p">
                    Responsive value: <Text strong>{value}</Text>{' '}
                </Text>
            </Stack>;
  };
  return <Impl />;
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const O=["Standard"];export{r as Standard,O as __namedExportsOrder,I as default};
