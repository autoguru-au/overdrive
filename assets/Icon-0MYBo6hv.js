import{r as a}from"./index-sWIihdb-.js";import{B as i,r as o,u as n}from"./Box-CAXqhIIF.js";const c=(l,e)=>{a.useEffect(()=>{l||console.warn(`%c${e}`,"color: orange")},[l,e])};var p={small:{mobile:"_1gy3ire0",tablet:"_1gy3ire1",desktop:"_1gy3ire2",largeDesktop:"_1gy3ire3"},medium:{mobile:"_1gy3ire4",tablet:"_1gy3ire5",desktop:"_1gy3ire6",largeDesktop:"_1gy3ire7"},large:{mobile:"_1gy3ire8",tablet:"_1gy3ire9",desktop:"_1gy3irea",largeDesktop:"_1gy3ireb"}};const r=({className:l="",icon:e,size:s="small",display:t="block"})=>(c(e,"Icon component received an empty icon prop."),a.createElement(i,{is:"i",display:t,className:[o(s,p),l],role:"presentation"},e?a.cloneElement(e,{className:n({is:"svg",display:"block",width:"full",height:"full"})}):"⬤"));try{r.displayName="Icon",r.__docgenInfo={description:"",displayName:"Icon",props:{display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"inlineBlock"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"ResponsiveProp<string | number>"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:'IconType | ReactElement<SVGAttributes<SVGElement>, "svg">'}}}}}catch{}export{r as I};