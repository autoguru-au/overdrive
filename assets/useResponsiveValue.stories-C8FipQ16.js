import{r as e}from"./index-Cr_cdoBq.js";import{T as t}from"./Text-CpZ6rNdZ.js";import{u as p}from"./useResponsiveValue-BVexvZH0.js";import{S as u}from"./Stack-BsmqQ-kB.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-C1tE8z4Y.js";import"./Box-DpvxpHg_.js";import"./index-IxcCI6ud.js";import"./useMedia-CERJzfgE.js";import"./ThemeProvider-DaUrEAYU.js";import"./index-CYx1ALmS.js";import"./makeTheme-BvwTE3C0.js";import"./index-DceDftY5.js";const I={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,null,4],i=p(s);return e.createElement(u,null,e.createElement(t,{is:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const Impl = () => {
    const allValues = [2, 3, null, 4];
    const value = useResponsiveValue(allValues);
    return <Stack>
                <Text is="p">
                    All values:{' '}
                    <Text strong>{JSON.stringify(allValues)}</Text>{' '}
                </Text>
                <Text is="p">
                    Responsive value: <Text strong>{value as string}</Text>{' '}
                </Text>
            </Stack>;
  };
  return <Impl />;
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const O=["Standard"];export{r as Standard,O as __namedExportsOrder,I as default};
