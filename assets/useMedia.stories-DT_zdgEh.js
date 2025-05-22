import{r as e,S as c,p as s}from"./iframe-C_bA5shj.js";import{T as t}from"./Text-Bu_KMAJq.js";import{u as k}from"./useMedia-5yuCFQWq.js";const d={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},r=()=>{const l=()=>{const[i,p,u,m]=k(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(c,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},i?"true":"false")," ","- ",s.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},p?"true":"false")," -"," ",s.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},u?"true":"false")," -"," ",s.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},m?"true":"false")," -"," ",s.largeDesktop))};return e.createElement(l,null)};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Standard"];export{r as Standard,g as __namedExportsOrder,d as default};
