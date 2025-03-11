import{B as b,c as h,u as V}from"./Box-Dd8rtt69.js";import{r as u}from"./index-Cr_cdoBq.js";import{T as q}from"./Text-DPlsuIMt.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ekKSp2F9.js";var S="bqog00";const w={SMALL:"3",MEDIUM:"4",LARGE:"5",X_LARGE:"6"},n=({textColour:i="white",rawNumbers:R=!1,label:r,...g})=>{const y=u.useMemo(()=>{switch(r.length){case 1:return"SMALL";case 2:return"MEDIUM";case 3:return"LARGE";default:return"X_LARGE"}},[r]);return u.createElement(b,{borderRadius:"full",backgroundColour:"gray900",display:"inlineBlock",position:"relative",padding:w[y],...g},u.createElement(q,{size:"2",strong:!0,noWrap:!0,align:"center",className:h(S,V({position:"absolute",overflow:"hidden",width:"full",paddingX:"1"})),colour:i},r))};try{n.displayName="TextBubble",n.__docgenInfo={description:"",displayName:"TextBubble",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},rawNumbers:{defaultValue:{value:"false"},description:"",name:"rawNumbers",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"white"},description:"",name:"textColour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"unset"'},{value:'"white"'},{value:'"link"'},{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"dark"'}]}},is:{defaultValue:null,description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType"}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},as:{defaultValue:null,description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"block"'},{value:'"contents"'},{value:'"inline"'},{value:'"inlineFlex"'},{value:'"inlineBlock"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"transparent"'}]}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}}}}}catch{}const T={title:"Components/Text Bubble",component:n},e={args:{label:"OK"}},a={args:{label:"Error",textColour:"danger",backgroundColour:"gray900"}},l={args:{label:"Too Long"}};var t,o,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'OK'
  }
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var s,v,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    textColour: 'danger',
    backgroundColour: 'gray900'
  }
}`,...(p=(v=a.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var m,c,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Too Long'
  }
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const E=["Standard","LongLabel","VeryLongLabel"];export{a as LongLabel,e as Standard,l as VeryLongLabel,E as __namedExportsOrder,T as default};
