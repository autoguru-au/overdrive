import{r as e,S as o}from"./iframe-COJ7wZQX.js";import{T as t}from"./Text-C4nXpCEU.js";import{u as n}from"./useResponsiveValue-Dkoq6zBs.js";import"./useMedia-CEOf-__T.js";import"./resolveResponsiveProps-Dp0dH8aX.js";const v={title:"Utility/Hooks/useResponsiveValue",parameters:{chromatic:{disable:!0}}},s=()=>{const r=()=>{const a=[2,3,null,4],l=n(a);return e.createElement(o,null,e.createElement(t,{as:"p"},"All values:"," ",e.createElement(t,{strong:!0},JSON.stringify(a))," "),e.createElement(t,{as:"p"},"Responsive value: ",e.createElement(t,{strong:!0},l)," "))};return e.createElement(r,null)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const x=["Standard"];export{s as Standard,x as __namedExportsOrder,v as default};
