import{B as n,c as s}from"./Box-BNrxSn68.js";import{r as e}from"./index-DhrokLn_.js";var R="ylrsd0",w="ylrsd1",P="ylrsd2",k="ylrsd3",y={0:"ylrsd4",1:"ylrsd5",2:"ylrsd6",3:"ylrsd7",99:"ylrsd8"},g={1:"ylrsd9",3:"ylrsda",5:"ylrsdb",7:"ylrsdc",none:"ylrsdd",subHeader:"ylrsde"};const b=({top:a="none",bottom:v="none",noPopShadow:i=!1,zIndex:l=2,className:d="",backgroundColour:V,boxShadow:q,children:p,...m})=>{var c;const u=e.useRef(null),[o,S]=e.useState(!1);return e.useEffect(()=>{var f;if(!((f=u.current)!=null&&f.parentElement)||!window)return;const r=u.current.parentElement,t=()=>{S(r.scrollTop>3)};return r.removeEventListener("scroll",t),r.addEventListener("scroll",t,{passive:!0}),()=>r.removeEventListener("scroll",t)},[(c=u.current)==null?void 0:c.parentElement]),i?e.createElement(n,{className:[d,w,g[a],y[l]],...m},p):e.createElement(n,{ref:u,overflow:"hidden",className:s(d,R,g[a],y[l]),backgroundColour:o?V||"white":void 0,boxShadow:o?q||"3":void 0,...m},e.createElement(n,{className:s(d,P,{[k]:o})},p))};try{b.displayName="StickyBox",b.__docgenInfo={description:"",displayName:"StickyBox",props:{top:{defaultValue:{value:"none"},description:"",name:"top",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"5"'},{value:'"7"'},{value:'"none"'},{value:'"subHeader"'}]}},bottom:{defaultValue:{value:"none"},description:"",name:"bottom",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"none"'},{value:'"subHeader"'}]}},zIndex:{defaultValue:{value:"2"},description:"",name:"zIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"99"}]}},noPopShadow:{defaultValue:{value:"false"},description:"",name:"noPopShadow",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"keyof IntrinsicElements | JSXElementConstructor<any>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}var W="gklwwp0",x="gklwwp1";const h=e.forwardRef(({className:a="",rounded:v=!1,...i},l)=>e.createElement(n,{ref:l,overflow:"auto",className:s(a,W,{[x]:v}),...i}));try{h.displayName="ScrollPane",h.__docgenInfo={description:"",displayName:"ScrollPane",props:{bottomGap:{defaultValue:null,description:"",name:"bottomGap",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"none"'}]}},serverVhFallback:{defaultValue:null,description:"",name:"serverVhFallback",required:!1,type:{name:"number"}},includeMobile:{defaultValue:null,description:"",name:"includeMobile",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"keyof IntrinsicElements | JSXElementConstructor<any>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}}}}}catch{}export{b as S,h as a};
