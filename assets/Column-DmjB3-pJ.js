import{d as V}from"./index-CYx1ALmS.js";import{r as e}from"./index-Cr_cdoBq.js";import{B as g,c as S,r as b}from"./Box-Dd8rtt69.js";import{u as R,a as P}from"./useNegativeMarginTop-Bi5mjSTV.js";var w={spaceX:{1:{mobile:"_15fwc180",tablet:"_15fwc181",desktop:"_15fwc182",largeDesktop:"_15fwc183"},2:{mobile:"_15fwc184",tablet:"_15fwc185",desktop:"_15fwc186",largeDesktop:"_15fwc187"},3:{mobile:"_15fwc188",tablet:"_15fwc189",desktop:"_15fwc18a",largeDesktop:"_15fwc18b"},4:{mobile:"_15fwc18c",tablet:"_15fwc18d",desktop:"_15fwc18e",largeDesktop:"_15fwc18f"},5:{mobile:"_15fwc18g",tablet:"_15fwc18h",desktop:"_15fwc18i",largeDesktop:"_15fwc18j"},6:{mobile:"_15fwc18k",tablet:"_15fwc18l",desktop:"_15fwc18m",largeDesktop:"_15fwc18n"},7:{mobile:"_15fwc18o",tablet:"_15fwc18p",desktop:"_15fwc18q",largeDesktop:"_15fwc18r"},8:{mobile:"_15fwc18s",tablet:"_15fwc18t",desktop:"_15fwc18u",largeDesktop:"_15fwc18v"},9:{mobile:"_15fwc18w",tablet:"_15fwc18x",desktop:"_15fwc18y",largeDesktop:"_15fwc18z"},none:{mobile:"_15fwc1810",tablet:"_15fwc1811",desktop:"_15fwc1812",largeDesktop:"_15fwc1813"}},spaceY:{1:{mobile:"_15fwc1814",tablet:"_15fwc1815",desktop:"_15fwc1816",largeDesktop:"_15fwc1817"},2:{mobile:"_15fwc1818",tablet:"_15fwc1819",desktop:"_15fwc181a",largeDesktop:"_15fwc181b"},3:{mobile:"_15fwc181c",tablet:"_15fwc181d",desktop:"_15fwc181e",largeDesktop:"_15fwc181f"},4:{mobile:"_15fwc181g",tablet:"_15fwc181h",desktop:"_15fwc181i",largeDesktop:"_15fwc181j"},5:{mobile:"_15fwc181k",tablet:"_15fwc181l",desktop:"_15fwc181m",largeDesktop:"_15fwc181n"},6:{mobile:"_15fwc181o",tablet:"_15fwc181p",desktop:"_15fwc181q",largeDesktop:"_15fwc181r"},7:{mobile:"_15fwc181s",tablet:"_15fwc181t",desktop:"_15fwc181u",largeDesktop:"_15fwc181v"},8:{mobile:"_15fwc181w",tablet:"_15fwc181x",desktop:"_15fwc181y",largeDesktop:"_15fwc181z"},9:{mobile:"_15fwc1820",tablet:"_15fwc1821",desktop:"_15fwc1822",largeDesktop:"_15fwc1823"},none:{mobile:"_15fwc1824",tablet:"_15fwc1825",desktop:"_15fwc1826",largeDesktop:"_15fwc1827"}}},o={wrap:"_15fwc1828",noWrap:"_15fwc1829",reverseWrap:"_15fwc182a"},h={stretch:"_15fwc182b",top:"_15fwc182c",centre:"_15fwc182d",bottom:"_15fwc182e"};const C=Object.freeze(Object.defineProperty({__proto__:null,align:h,space:w,wrapping:o},Symbol.toStringTag,{value:"Module"})),d=e.createContext(null),q=e.forwardRef(({className:a="",children:s,space:n,spaceX:p,spaceY:v,noWrap:t,wrappingDirection:c="default",align:m="stretch",is:l,...f},i)=>{const u=p||n||["none"],r=v||n||["none"],y=R(u),k=P(r);return e.createElement(g,{ref:i,is:l,display:"flex",flexDirection:"row",className:S(y,k,h[m],a,{[o.wrap]:!t,[o.noWrap]:t,[o.reverseWrap]:c==="reverse"}),...f},e.createElement(d.Provider,{value:e.useMemo(()=>({spaceXCls:b(u,w.spaceX),spaceYCls:b(r,w.spaceY),isList:typeof l=="string"&&["ul","ol"].includes(l)}),[u,r,C])},s))});try{d.displayName="ColumnContext",d.__docgenInfo={description:"",displayName:"ColumnContext",props:{}}}catch{}try{q.displayName="Columns",q.__docgenInfo={description:"",displayName:"Columns",props:{is:{defaultValue:null,description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType"}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"stretch"'},{value:'"centre"'}]}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"block"'},{value:'"contents"'},{value:'"inline"'},{value:'"inlineFlex"'},{value:'"inlineBlock"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"transparent"'}]}},space:{defaultValue:null,description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},spaceX:{defaultValue:null,description:"",name:"spaceX",required:!1,type:{name:"ResponsiveProp<string | number>"}},spaceY:{defaultValue:null,description:"",name:"spaceY",required:!1,type:{name:"ResponsiveProp<string | number>"}},wrappingDirection:{defaultValue:{value:"default"},description:"",name:"wrappingDirection",required:!1,type:{name:"enum",value:[{value:'"noWrap"'},{value:'"wrap"'},{value:'"reverseWrap"'}]}}}}}catch{}var W={"1/2":{mobile:"_1ycz12q0",tablet:"_1ycz12q1",desktop:"_1ycz12q2",largeDesktop:"_1ycz12q3"},"1/3":{mobile:"_1ycz12q4",tablet:"_1ycz12q5",desktop:"_1ycz12q6",largeDesktop:"_1ycz12q7"},"2/3":{mobile:"_1ycz12q8",tablet:"_1ycz12q9",desktop:"_1ycz12qa",largeDesktop:"_1ycz12qb"},"1/4":{mobile:"_1ycz12qc",tablet:"_1ycz12qd",desktop:"_1ycz12qe",largeDesktop:"_1ycz12qf"},"3/4":{mobile:"_1ycz12qg",tablet:"_1ycz12qh",desktop:"_1ycz12qi",largeDesktop:"_1ycz12qj"},"1/5":{mobile:"_1ycz12qk",tablet:"_1ycz12ql",desktop:"_1ycz12qm",largeDesktop:"_1ycz12qn"},"2/5":{mobile:"_1ycz12qo",tablet:"_1ycz12qp",desktop:"_1ycz12qq",largeDesktop:"_1ycz12qr"},"3/5":{mobile:"_1ycz12qs",tablet:"_1ycz12qt",desktop:"_1ycz12qu",largeDesktop:"_1ycz12qv"},"4/5":{mobile:"_1ycz12qw",tablet:"_1ycz12qx",desktop:"_1ycz12qy",largeDesktop:"_1ycz12qz"},full:{mobile:"_1ycz12q10",tablet:"_1ycz12q11",desktop:"_1ycz12q12",largeDesktop:"_1ycz12q13"},auto:{mobile:"_1ycz12q14",tablet:"_1ycz12q15",desktop:"_1ycz12q16",largeDesktop:"_1ycz12q17"}},z={stretch:"_1ycz12q18",top:"_1ycz12q19",centre:"_1ycz12q1a",bottom:"_1ycz12q1b"};const _=e.forwardRef(({className:a="",children:s,width:n,alignSelf:p,is:v,noShrink:t=!1,grow:c=!1,order:m,...l},f)=>{const i=e.useContext(d);V.invariant(i!==null,"Column must be wrapped inside a Columns element");const{isList:u,spaceXCls:r,spaceYCls:y}=i;return e.createElement(g,{is:u?"li":"div",order:m,flexGrow:c?1:0,flexShrink:t?0:void 0,className:[r,y,b(n,W),z[p]]},e.createElement(g,{ref:f,is:v,display:"flex",width:"full",height:"full",className:a,...l},s))});try{_.displayName="Column",_.__docgenInfo={description:"",displayName:"Column",props:{is:{defaultValue:null,description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType"}},colour:{defaultValue:null,description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<string | number>"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"stretch"'},{value:'"centre"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<string | number>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"block"'},{value:'"contents"'},{value:'"inline"'},{value:'"inlineFlex"'},{value:'"inlineBlock"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveProp<string | number>"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"enum",value:[{value:"0"}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<string | number>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveProp<string | number>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},pointerEvents:{defaultValue:null,description:"",name:"pointerEvents",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"relative"'}]}},userSelect:{defaultValue:null,description:"",name:"userSelect",required:!1,type:{name:"enum",value:[{value:'"none"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<string | number>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'},{value:'"visible"'},{value:'"scroll"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},backgroundColour:{defaultValue:null,description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"transparent"'}]}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},borderWidthX:{defaultValue:null,description:"",name:"borderWidthX",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthY:{defaultValue:null,description:"",name:"borderWidthY",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthTop:{defaultValue:null,description:"",name:"borderWidthTop",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthRight:{defaultValue:null,description:"",name:"borderWidthRight",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthBottom:{defaultValue:null,description:"",name:"borderWidthBottom",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderWidthLeft:{defaultValue:null,description:"",name:"borderWidthLeft",required:!1,type:{name:"ResponsiveProp<BorderWidthScale>"}},borderColour:{defaultValue:null,description:"",name:"borderColour",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourX:{defaultValue:null,description:"",name:"borderColourX",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourY:{defaultValue:null,description:"",name:"borderColourY",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourTop:{defaultValue:null,description:"",name:"borderColourTop",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourRight:{defaultValue:null,description:"",name:"borderColourRight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourBottom:{defaultValue:null,description:"",name:"borderColourBottom",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},borderColourLeft:{defaultValue:null,description:"",name:"borderColourLeft",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"gray"'},{value:'"dark"'}]}},noShrink:{defaultValue:{value:"false"},description:"",name:"noShrink",required:!1,type:{name:"boolean"}},grow:{defaultValue:{value:"false"},description:"",name:"grow",required:!1,type:{name:"boolean"}}}}}catch{}export{q as C,_ as a};
