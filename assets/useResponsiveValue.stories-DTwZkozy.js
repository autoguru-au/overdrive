import{r as e}from"./index-DVCUSwsV.js";import{T as t}from"./Text-DZmk8JQd.js";import{u as p}from"./useResponsiveValue-C-WC7V3_.js";import{S as m}from"./Stack-hsOwoNkL.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-DRIwjlNn.js";import"./Box-HDBh2Tqe.js";import"./index-Go0z9Bjm.js";import"./useMedia-B1efqix5.js";import"./OverdriveProvider-1q-xaQTX.js";import"./index-D_iG_Vvt.js";import"./theme.css-CyskBIXA.js";import"./tokens-Cb8XQrNE.js";import"./index-4KvmGZzY.js";const O={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},r=()=>{const n=()=>{const s=[2,3,null,4],i=p(s);return e.createElement(m,null,e.createElement(t,{is:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(s))," "),e.createElement(t,{is:"p"},"Responsive value: ",e.createElement(t,{strong:!0},i)," "))};return e.createElement(n,null)};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const _=["Standard"];export{r as Standard,_ as __namedExportsOrder,O as default};
