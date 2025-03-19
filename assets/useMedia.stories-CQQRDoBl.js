import{r as e}from"./index-UyvCXs0Z.js";import{S as c}from"./Stack-CInYNX1D.js";import{T as t}from"./Text-BLBByk4R.js";import{a as r}from"./makeTheme-BvwTE3C0.js";import{u as k}from"./useMedia-CNXYDUMc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-ByY9IofJ.js";import"./Box-BZBbKvYV.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ptSZJ0kX.js";import"./index-BJSya_LC.js";import"./ThemeProvider-CiKbc3fE.js";import"./index-D_iG_Vvt.js";const h={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},s=()=>{const l=()=>{const[i,p,m,u]=k(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(c,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},i?"true":"false")," ","- ",r.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},p?"true":"false")," -"," ",r.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},m?"true":"false")," -"," ",r.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},u?"true":"false")," -"," ",r.largeDesktop))};return e.createElement(l,null)};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const y=["Standard"];export{s as Standard,y as __namedExportsOrder,h as default};
