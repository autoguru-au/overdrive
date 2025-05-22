import{r as t,B as x,c as y,y as f}from"./iframe-C_bA5shj.js";import{T as _}from"./Text-Bu_KMAJq.js";var E="bqog00";const h={SMALL:"3",MEDIUM:"4",LARGE:"5",X_LARGE:"6"},s=({textColour:l="white",rawNumbers:w=!1,label:o,...v})=>{const L=t.useMemo(()=>{switch(o.length){case 1:return"SMALL";case 2:return"MEDIUM";case 3:return"LARGE";default:return"X_LARGE"}},[o]);return t.createElement(x,{borderRadius:"full",backgroundColour:"gray900",display:"inline-block",position:"relative",padding:h[L],...v},t.createElement(_,{size:"2",strong:!0,noWrap:!0,className:y(E,f({position:"absolute",overflow:"hidden",width:"full",paddingX:"1"})),colour:l},o))};try{s.displayName="TextBubble",s.__docgenInfo={description:"",displayName:"TextBubble",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},rawNumbers:{defaultValue:{value:"false"},description:"",name:"rawNumbers",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"white"},description:"",name:"textColour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}}}}}catch{}const S={title:"Components/Text Bubble",component:s},e={args:{label:"OK"}},a={args:{label:"Error",textColour:"danger",backgroundColour:"gray900"}},r={args:{label:"Too Long"}};var n,u,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'OK'
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    textColour: 'danger',
    backgroundColour: 'gray900'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Too Long'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Standard","LongLabel","VeryLongLabel"];export{a as LongLabel,e as Standard,r as VeryLongLabel,B as __namedExportsOrder,S as default};
