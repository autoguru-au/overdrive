import{r as i}from"./index-Cr_cdoBq.js";import{b as P}from"./argTypes-C5cQ_jgM.js";import{B as w}from"./Box-riOnoi3Y.js";import"./_commonjsHelpers-C932wzq6.js";import"./tokens-BrgPbGY2.js";import"./makeTheme-BvwTE3C0.js";var W="_1wlqkvt0",x="_1wlqkvt2";const n=({className:e="",randomWidth:a=!1,blinking:q=!0,backgroundColour:V="gray200",display:S="block",is:R="span",...k})=>i.createElement(w,{is:R,display:S,width:a?void 0:"full",backgroundColour:V,...k,className:[W,q&&x,e],style:{width:a?B(60,40):void 0}}),B=(e,a)=>`${Math.random()*(e-a)+a}%`;try{n.displayName="LoadingBox",n.__docgenInfo={description:"",displayName:"LoadingBox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},randomWidth:{defaultValue:{value:"false"},description:"",name:"randomWidth",required:!1,type:{name:"boolean"}},blinking:{defaultValue:{value:"true"},description:"",name:"blinking",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},is:{defaultValue:{value:"span"},description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},backgroundColour:{defaultValue:{value:"gray200"},description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}const Y={title:"Components/Loading Box",component:n,decorators:[e=>i.createElement("div",{style:{width:"50%",height:"100%",margin:"0 auto"}},e())],parameters:{chromatic:{disable:!0}},argTypes:P},t=e=>i.createElement(n,{...e}),y={},l=t.bind(y);l.args=y;const b={blinking:!1},r=t.bind(b);r.args=b;const h={randomWidth:!0},u=t.bind(h);u.args=h;var o,d,s;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:"Template.bind(standardProps)",...(s=(d=l.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var p,v,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"Template.bind(blinkingOffProps)",...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var c,f,g;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:"Template.bind(randomWidthProps)",...(g=(f=u.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const I=["Standard","BlinkingOff","RandomWidth"];export{r as BlinkingOff,u as RandomWidth,l as Standard,I as __namedExportsOrder,Y as default};
