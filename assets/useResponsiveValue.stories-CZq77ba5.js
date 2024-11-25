import{r as e}from"./index-DhrokLn_.js";import{T as t}from"./Text-BFT02PFo.js";import{u as p}from"./useResponsiveValue-DnQ5Mrpm.js";import{S as m}from"./Stack-DEBvJQq8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useTextStyles-B_b2rbpS.js";import"./Box-BNrxSn68.js";import"./index-DuV4LTKI.js";import"./useMedia-DtvXTADr.js";import"./ThemeProvider-BLBxw31i.js";import"./makeTheme-BvwTE3C0.js";import"./tiny-invariant.esm-CopsF_GD.js";import"./index-7-gbC2VC.js";const y={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,,4],i=p(s);return e.createElement(m,null,e.createElement(t,{is:"p"},"All values: ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const I=["Standard"];export{r as Standard,I as __namedExportsOrder,y as default};
