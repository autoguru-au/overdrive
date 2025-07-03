import{r as e,S as p,q as s}from"./iframe-BwudkRGz.js";import{T as t}from"./Text---c0u-Gd.js";import{u}from"./useMedia-DRW8tTsx.js";const b={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},r=()=>{const a=()=>{const[n,o,l,i]=u(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(p,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},n?"true":"false")," ","- ",s.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},o?"true":"false")," -"," ",s.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},l?"true":"false")," -"," ",s.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},i?"true":"false")," -"," ",s.largeDesktop))};return e.createElement(a,null)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const Impl = () => {
    const [isMobile, isTable, isDesktop, isLargeDesktop] = useMedia(['mobile', 'tablet', 'desktop', 'largeDesktop']);
    return <Stack>
                <Text>
                    isMobile: <Text strong>{isMobile ? 'true' : 'false'}</Text>{' '}
                    - {breakpoints.mobile}
                </Text>
                <Text>
                    isTable: <Text strong>{isTable ? 'true' : 'false'}</Text> -{' '}
                    {breakpoints.tablet}
                </Text>
                <Text>
                    isDesktop:{' '}
                    <Text strong>{isDesktop ? 'true' : 'false'}</Text> -{' '}
                    {breakpoints.desktop}
                </Text>
                <Text>
                    isLargeDesktop:{' '}
                    <Text strong>{isLargeDesktop ? 'true' : 'false'}</Text> -{' '}
                    {breakpoints.largeDesktop}
                </Text>
            </Stack>;
  };
  return <Impl />;
}`,...r.parameters?.docs?.source}}};const T=["Standard"];export{r as Standard,T as __namedExportsOrder,b as default};
