import{r as l}from"./index-UyvCXs0Z.js";import{u as t,B as n,r as p}from"./Box-BZBbKvYV.js";const c=(a,e)=>{l.useEffect(()=>{a||console.warn(`%c${e}`,"color: orange")},[a,e])};var m={small:{mobile:"_1gy3ire0",tablet:"_1gy3ire1",desktop:"_1gy3ire2",largeDesktop:"_1gy3ire3"},medium:{mobile:"_1gy3ire4",tablet:"_1gy3ire5",desktop:"_1gy3ire6",largeDesktop:"_1gy3ire7"},large:{mobile:"_1gy3ire8",tablet:"_1gy3ire9",desktop:"_1gy3irea",largeDesktop:"_1gy3ireb"}};const r=({className:a="",icon:e,size:s="small",display:i="block"})=>{c(e,"Icon component received an empty icon prop.");const o=l.cloneElement(e,{className:t({as:"svg",display:"block",width:"full",height:"full"}),"aria-label":e.props["aria-label"]??void 0,"aria-hidden":e.props["aria-label"]?void 0:!0});return l.createElement(n,{as:"span",display:i,className:[p(s,m),a]},e?o:"⬤")};try{r.displayName="Icon",r.__docgenInfo={description:"",displayName:"Icon",props:{display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"inlineBlock"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"ResponsiveProp<string | number>"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconEl"}}}}}catch{}export{r as I};
