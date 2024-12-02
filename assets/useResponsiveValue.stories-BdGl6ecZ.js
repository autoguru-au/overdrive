import{r as e}from"./index-sWIihdb-.js";import{T as t}from"./Text-Bv9QBZQf.js";import{u as p}from"./useResponsiveValue-B3p_1Iww.js";import{S as m}from"./Stack-AaFpQHnl.js";import"./_commonjsHelpers-C932wzq6.js";import"./useTextStyles-v_jGj5tR.js";import"./Box-D0fGWDzz.js";import"./index-TqjM1jfD.js";import"./useMedia-CJa1WIfW.js";import"./ThemeProvider-BNsiTy9v.js";import"./makeTheme-BvwTE3C0.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CaeieD2U.js";const y={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,,4],i=p(s);return e.createElement(m,null,e.createElement(t,{is:"p"},"All values: ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
