import{r as e,x as s}from"./iframe-PgZJ2afo.js";import{F as p}from"./FlexStack-B45fVQdG.js";import{T as t}from"./Text-BWnBe8RO.js";import{u as m}from"./useMedia-UiFD1jdk.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DBtbNGR3.js";const d={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},r=()=>{const a=()=>{const[o,n,l,i]=m(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(p,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},o?"true":"false")," ","- ",s.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},n?"true":"false")," -"," ",s.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},l?"true":"false")," -"," ",s.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},i?"true":"false")," -"," ",s.largeDesktop))};return e.createElement(a,null)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const Impl = () => {
    const [isMobile, isTable, isDesktop, isLargeDesktop] = useMedia(['mobile', 'tablet', 'desktop', 'largeDesktop']);
    return <FlexStack>
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
            </FlexStack>;
  };
  return <Impl />;
}`,...r.parameters?.docs?.source}}};const g=["Standard"];export{r as Standard,g as __namedExportsOrder,d as default};
