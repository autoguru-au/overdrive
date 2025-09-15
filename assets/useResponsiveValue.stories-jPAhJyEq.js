import{r as e}from"./iframe-B6_QgceS.js";import{F as o}from"./FlexStack-CHTkft35.js";import{T as t}from"./Text-Bm62SiFA.js";import{u as n}from"./useResponsiveValue-BM5swn67.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-CU5_bmZj.js";import"./useMedia-RjPqp7fE.js";import"./resolveResponsiveProps-CzS1S_1C.js";const T={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},s=()=>{const a=()=>{const r=[2,3,null,4],l=n(r);return e.createElement(o,null,e.createElement(t,{as:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(r))," "),e.createElement(t,{as:"p"},"Responsive value: ",e.createElement(t,{strong:!0},l)," "))};return e.createElement(a,null)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
