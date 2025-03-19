import{r}from"./index-UyvCXs0Z.js";import{T as w}from"./Text-BLBByk4R.js";import{c as b,B as c,r as $,g as F}from"./Box-BZBbKvYV.js";import{u as P}from"./useMedia-CNXYDUMc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ptSZJ0kX.js";import"./index-BJSya_LC.js";import"./ThemeProvider-CiKbc3fE.js";import"./index-D_iG_Vvt.js";import"./makeTheme-BvwTE3C0.js";var s={default:"_5awvgq0",gaps:{1:{mobile:"_5awvgq1",tablet:"_5awvgq2",desktop:"_5awvgq3",largeDesktop:"_5awvgq4"},2:{mobile:"_5awvgq5",tablet:"_5awvgq6",desktop:"_5awvgq7",largeDesktop:"_5awvgq8"},3:{mobile:"_5awvgq9",tablet:"_5awvgqa",desktop:"_5awvgqb",largeDesktop:"_5awvgqc"},4:{mobile:"_5awvgqd",tablet:"_5awvgqe",desktop:"_5awvgqf",largeDesktop:"_5awvgqg"},5:{mobile:"_5awvgqh",tablet:"_5awvgqi",desktop:"_5awvgqj",largeDesktop:"_5awvgqk"},6:{mobile:"_5awvgql",tablet:"_5awvgqm",desktop:"_5awvgqn",largeDesktop:"_5awvgqo"},7:{mobile:"_5awvgqp",tablet:"_5awvgqq",desktop:"_5awvgqr",largeDesktop:"_5awvgqs"},8:{mobile:"_5awvgqt",tablet:"_5awvgqu",desktop:"_5awvgqv",largeDesktop:"_5awvgqw"},9:{mobile:"_5awvgqx",tablet:"_5awvgqy",desktop:"_5awvgqz",largeDesktop:"_5awvgq10"},none:{mobile:"_5awvgq11",tablet:"_5awvgq12",desktop:"_5awvgq13",largeDesktop:"_5awvgq14"}},topLeft:"_5awvgq15",topRight:"_5awvgq16",bottomRight:"_5awvgq17",bottomLeft:"_5awvgq18"};function j(t){if(!Array.isArray(t))return t;const l=P(["mobile","tablet","desktop","largeDesktop"],!1).reduce((o,n,e)=>(n&&(o=e+1),o),1);return F(t,l)}const u=({count:t,columnCount:l,gap:o="1",backgroundColour:n="gray900"})=>{const e=j(l),a=t/e%1;let h,_,p;const L=Math.min(t-1,e-1),M=a?Math.floor(t/e)*e:t-e;return[Array.from({length:t}).map((z,g)=>({children:I,className:O,...V})=>(p=g===t-1,p&&a&&(h=Math.round(a/(1/e)),_=Math.round((1-a)/(1/e))),r.createElement(c,{backgroundColour:n,className:b(O,{[s.topLeft]:g===0,[s.topRight]:g===L,[s.bottomLeft]:g===M,[s.bottomRight]:p}),style:p&&a?{gridColumn:`${h}/${h+1+_}`}:void 0,...V},I))),b(s.default,$(o,s.gaps)),{gridTemplateColumns:`repeat(${e}, 1fr)`}]};try{u.displayName="useAttachedBoxes",u.__docgenInfo={description:"",displayName:"useAttachedBoxes",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},columnCount:{defaultValue:null,description:"",name:"columnCount",required:!0,type:{name:"ResponsiveProp<number>"}},gap:{defaultValue:{value:"1"},description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<string | number>"}},backgroundColour:{defaultValue:{value:"gray900"},description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}}}}}catch{}const ae={title:"Layout/Attached Boxes [Hook]"},y=[2,3,4,5],x=["1","2","3","4"],v=()=>{const[l,o,n]=u({count:1,columnCount:y,gap:x,backgroundColour:"gray700"});return r.createElement(c,{className:o,style:n},l.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{is:"p",colour:"white",align:"center"},a+1))))},d=()=>{const[l,o,n]=u({count:5,columnCount:y,gap:x});return r.createElement(c,{className:o,style:n},l.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{is:"p",colour:"white",align:"center"},a+1))))},m=()=>{const[l,o,n]=u({count:7,columnCount:y,gap:x,backgroundColour:"gray700"});return r.createElement(c,{className:o,style:n},l.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{is:"p",colour:"white",align:"center"},a+1))))},i=()=>{const[l,o,n]=u({count:23,columnCount:y,gap:x});return r.createElement(c,{className:o,style:n},l.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{is:"p",colour:"white",align:"center"},a+1))))};var q,k,B;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const count = 1;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap,
    backgroundColour: 'gray700'
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text is="p" colour="white" align="center">
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...(B=(k=v.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var f,C,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const count = 5;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text is="p" colour="white" align="center">
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var S,E,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const count = 7;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap,
    backgroundColour: 'gray700'
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text is="p" colour="white" align="center">
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,N,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const count = 23;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text is="p" colour="white" align="center">
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const te=["One","Five","Seven","TwentyThree"];export{d as Five,v as One,m as Seven,i as TwentyThree,te as __namedExportsOrder,ae as default};
