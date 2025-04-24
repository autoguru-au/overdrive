import{r as e}from"./index-DVCUSwsV.js";import{S as c}from"./Stack-Dlg4vYoS.js";import{T as t}from"./Text-LGFJc6x1.js";import{a as r}from"./tokens-r910xgCC.js";import{u as k}from"./useMedia-Bji5IoIA.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-4KvmGZzY.js";import"./Box-Mcr8v5d2.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-nxerGMDs.js";import"./theme.css-CFHhYxCZ.js";import"./index-Go0z9Bjm.js";import"./OverdriveProvider-ri5atoF6.js";import"./index-D_iG_Vvt.js";/* empty css                             */const H={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},s=()=>{const i=()=>{const[l,p,m,u]=k(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(c,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},l?"true":"false")," ","- ",r.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},p?"true":"false")," -"," ",r.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},m?"true":"false")," -"," ",r.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},u?"true":"false")," -"," ",r.largeDesktop))};return e.createElement(i,null)};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Standard"];export{s as Standard,O as __namedExportsOrder,H as default};
