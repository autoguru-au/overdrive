import{r as e}from"./index-DVCUSwsV.js";import{T as t}from"./Text-DW-IBnnS.js";import{u as p}from"./useResponsiveValue-Cv9pdpB6.js";import{S as m}from"./Stack-CT3qhkBe.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-CfsxG9sl.js";import"./useTextStyles-KK5z18CB.js";import"./useMedia-B07CYYCh.js";import"./index-qJC9azT-.js";import"./OverdriveProvider-DbAsmcrs.js";import"./index-D_iG_Vvt.js";import"./theme.css-KegNup0l.js";/* empty css                             */import"./tokens-DsuZpBdx.js";import"./resolveResponsiveProps-DQ5qCS0e.js";import"./index-4KvmGZzY.js";const _={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,null,4],i=p(s);return e.createElement(m,null,e.createElement(t,{is:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const A=["Standard"];export{r as Standard,A as __namedExportsOrder,_ as default};
