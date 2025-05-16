import{B as f,c as x,b as y}from"./Box-ClEqokAe.js";import{r as t}from"./index-DVCUSwsV.js";import{T as _}from"./Text-D09diHf7.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTextStyles-DsccIS_S.js";var E="bqog00";const h={SMALL:"3",MEDIUM:"4",LARGE:"5",X_LARGE:"6"},s=({textColour:n="white",rawNumbers:w=!1,label:o,...v})=>{const L=t.useMemo(()=>{switch(o.length){case 1:return"SMALL";case 2:return"MEDIUM";case 3:return"LARGE";default:return"X_LARGE"}},[o]);return t.createElement(f,{borderRadius:"full",backgroundColour:"gray900",display:"inline-block",position:"relative",padding:h[L],...v},t.createElement(_,{size:"2",strong:!0,noWrap:!0,align:"center",className:x(E,y({position:"absolute",overflow:"hidden",width:"full",paddingX:"1"})),colour:n},o))};try{s.displayName="TextBubble",s.__docgenInfo={description:"",displayName:"TextBubble",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},rawNumbers:{defaultValue:{value:"false"},description:"",name:"rawNumbers",required:!1,type:{name:"boolean"}},textColour:{defaultValue:{value:"white"},description:"",name:"textColour",required:!1,type:{name:"enum",value:[{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}}}}}catch{}const A={title:"Components/Text Bubble",component:s},e={args:{label:"OK"}},r={args:{label:"Error",textColour:"danger",backgroundColour:"gray900"}},a={args:{label:"Too Long"}};var l,u,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'OK'
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    textColour: 'danger',
    backgroundColour: 'gray900'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,b,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Too Long'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const N=["Standard","LongLabel","VeryLongLabel"];export{r as LongLabel,e as Standard,a as VeryLongLabel,N as __namedExportsOrder,A as default};
