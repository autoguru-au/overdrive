import{r as e}from"./iframe-C9jllvPJ.js";import{F as o}from"./FlexStack-CsGtE1x2.js";import{T as t}from"./Text-DggnGx7l.js";import{u as n}from"./useResponsiveValue-Cm55mfwu.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DV6INcdr.js";import"./useMedia-ChPJLaTC.js";import"./resolveResponsiveProps-DGBAxJXa.js";const T={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},s=()=>{const a=()=>{const r=[2,3,null,4],l=n(r);return e.createElement(o,null,e.createElement(t,{as:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(r))," "),e.createElement(t,{as:"p"},"Responsive value: ",e.createElement(t,{strong:!0},l)," "))};return e.createElement(a,null)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const Impl = () => {
    const allValues = [2, 3, null, 4];
    const value = useResponsiveValue(allValues);
    return <FlexStack>
                <Text as="p">
                    All values:{' '}
                    <Text strong>{JSON.stringify(allValues)}</Text>{' '}
                </Text>
                <Text as="p">
                    Responsive value: <Text strong>{value as string}</Text>{' '}
                </Text>
            </FlexStack>;
  };
  return <Impl />;
}`,...s.parameters?.docs?.source}}};const g=["Standard"];export{s as Standard,g as __namedExportsOrder,T as default};
