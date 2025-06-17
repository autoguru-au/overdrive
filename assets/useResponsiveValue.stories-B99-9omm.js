import{r as e,S as c}from"./iframe-BPJhr76J.js";import{T as t}from"./Text-3IOoZozm.js";import{u as p}from"./useResponsiveValue-DkbssSZR.js";import"./useTextStyles-D4FwBGMO.js";import"./resolveResponsiveProps-DXxr8mrg.js";import"./useMedia-BLoe4OOE.js";const S={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},s=()=>{const n=()=>{const a=[2,3,null,4],u=p(a);return e.createElement(c,null,e.createElement(t,{as:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(a))," "),e.createElement(t,{as:"p"},"Responsive value: ",e.createElement(t,{strong:!0},u)," "))};return e.createElement(n,null)};var r,l,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const Impl = () => {
    const allValues = [2, 3, null, 4];
    const value = useResponsiveValue(allValues);
    return <Stack>
                <Text as="p">
                    All values:{' '}
                    <Text strong>{JSON.stringify(allValues)}</Text>{' '}
                </Text>
                <Text as="p">
                    Responsive value: <Text strong>{value as string}</Text>{' '}
                </Text>
            </Stack>;
  };
  return <Impl />;
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const g=["Standard"];export{s as Standard,g as __namedExportsOrder,S as default};
