import{r as e}from"./index-DVCUSwsV.js";import{S as c}from"./Stack-hsOwoNkL.js";import{T as t}from"./Text-DZmk8JQd.js";import{b as r}from"./tokens-Cb8XQrNE.js";import{u as k}from"./useMedia-B1efqix5.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-4KvmGZzY.js";import"./Box-HDBh2Tqe.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-DRIwjlNn.js";import"./index-Go0z9Bjm.js";import"./OverdriveProvider-1q-xaQTX.js";import"./index-D_iG_Vvt.js";import"./theme.css-CyskBIXA.js";const y={title:"Utility/Hooks/useMedia",parameters:{chromatic:{disable:!0}}},s=()=>{const i=()=>{const[l,p,m,u]=k(["mobile","tablet","desktop","largeDesktop"]);return e.createElement(c,null,e.createElement(t,null,"isMobile: ",e.createElement(t,{strong:!0},l?"true":"false")," ","- ",r.mobile),e.createElement(t,null,"isTable: ",e.createElement(t,{strong:!0},p?"true":"false")," -"," ",r.tablet),e.createElement(t,null,"isDesktop:"," ",e.createElement(t,{strong:!0},m?"true":"false")," -"," ",r.desktop),e.createElement(t,null,"isLargeDesktop:"," ",e.createElement(t,{strong:!0},u?"true":"false")," -"," ",r.largeDesktop))};return e.createElement(i,null)};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const H=["Standard"];export{s as Standard,H as __namedExportsOrder,y as default};
