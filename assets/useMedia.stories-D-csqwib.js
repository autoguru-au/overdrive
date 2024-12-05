import{r as e}from"./index-sWIihdb-.js";import{S as c}from"./Stack-CC4lDYMC.js";import{T as t}from"./Text-Bv9QBZQf.js";import{a as r}from"./makeTheme-BvwTE3C0.js";import{u as k}from"./useMedia-hr6DGAzk.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DVF0g4jg.js";import"./Box-D0fGWDzz.js";import"./useTextStyles-v_jGj5tR.js";import"./index-BTJTCqq2.js";import"./ThemeProvider-Dunuu5Ct.js";import"./index-CYx1ALmS.js";const _={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},s=()=>{const l=()=>{const[i,p,m,u]=k(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(c,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},i?"true":"false")," ","- ",r.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},p?"true":"false")," -"," ",r.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},m?"true":"false")," -"," ",r.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},u?"true":"false")," -"," ",r.largeDesktop))};return e.createElement(l,null)};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const h=["Standard"];export{s as Standard,h as __namedExportsOrder,_ as default};
