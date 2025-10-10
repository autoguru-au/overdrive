import{c as b,r,B as c}from"./iframe-CmQjDVxl.js";import{T as w}from"./Text-9F2rqdui.js";import{r as C,g as S}from"./resolveResponsiveProps-BErviP19.js";import{u as E}from"./useMedia-1sLtmF2i.js";/* empty css                                        */import"./preload-helper-PPVm8Dsz.js";var u={default:"_5awvgq0",gaps:{1:{mobile:"_5awvgq1",tablet:"_5awvgq2",desktop:"_5awvgq3",largeDesktop:"_5awvgq4"},2:{mobile:"_5awvgq5",tablet:"_5awvgq6",desktop:"_5awvgq7",largeDesktop:"_5awvgq8"},3:{mobile:"_5awvgq9",tablet:"_5awvgqa",desktop:"_5awvgqb",largeDesktop:"_5awvgqc"},4:{mobile:"_5awvgqd",tablet:"_5awvgqe",desktop:"_5awvgqf",largeDesktop:"_5awvgqg"},5:{mobile:"_5awvgqh",tablet:"_5awvgqi",desktop:"_5awvgqj",largeDesktop:"_5awvgqk"},6:{mobile:"_5awvgql",tablet:"_5awvgqm",desktop:"_5awvgqn",largeDesktop:"_5awvgqo"},7:{mobile:"_5awvgqp",tablet:"_5awvgqq",desktop:"_5awvgqr",largeDesktop:"_5awvgqs"},8:{mobile:"_5awvgqt",tablet:"_5awvgqu",desktop:"_5awvgqv",largeDesktop:"_5awvgqw"},9:{mobile:"_5awvgqx",tablet:"_5awvgqy",desktop:"_5awvgqz",largeDesktop:"_5awvgq10"},none:{mobile:"_5awvgq11",tablet:"_5awvgq12",desktop:"_5awvgq13",largeDesktop:"_5awvgq14"}},topLeft:"_5awvgq15",topRight:"_5awvgq16",bottomRight:"_5awvgq17",bottomLeft:"_5awvgq18"};function T(t){if(!Array.isArray(t))return t;const o=E(["mobile","tablet","desktop","largeDesktop"],!1).reduce((l,s,e)=>(s&&(l=e+1),l),1);return S(t,o)}const n=({count:t,columnCount:o,gap:l="1",backgroundColour:s="gray900"})=>{const e=T(o),a=t/e%1;let h,_,p;const q=Math.min(t-1,e-1),k=a?Math.floor(t/e)*e:t-e;return[Array.from({length:t}).map((D,g)=>({children:B,className:A,...f})=>(p=g===t-1,p&&a&&(h=Math.round(a/(1/e)),_=Math.round((1-a)/(1/e))),r.createElement(c,{backgroundColour:s,className:b(A,{[u.topLeft]:g===0,[u.topRight]:g===q,[u.bottomLeft]:g===k,[u.bottomRight]:p}),style:p&&a?{gridColumn:`${h}/${h+1+_}`}:void 0,...f},B))),b(u.default,C(l,u.gaps)),{gridTemplateColumns:`repeat(${e}, 1fr)`}]};try{n.displayName="useAttachedBoxes",n.__docgenInfo={description:"",displayName:"useAttachedBoxes",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},columnCount:{defaultValue:null,description:"",name:"columnCount",required:!0,type:{name:"ResponsiveProp<number>"}},gap:{defaultValue:{value:"1"},description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<string | number>"}},backgroundColour:{defaultValue:{value:"gray900"},description:"",name:"backgroundColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'}]}}}}}catch{}const V={title:"Layout/Attached Boxes [Hook]"},y=[2,3,4,5],x=["1","2","3","4"],v=()=>{const[o,l,s]=n({count:1,columnCount:y,gap:x,backgroundColour:"gray700"});return r.createElement(c,{className:l,style:s},o.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{as:"p",colour:"white",style:{textAlign:"center"}},a+1))))},d=()=>{const[o,l,s]=n({count:5,columnCount:y,gap:x});return r.createElement(c,{className:l,style:s},o.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{as:"p",colour:"white",style:{textAlign:"center"}},a+1))))},m=()=>{const[o,l,s]=n({count:7,columnCount:y,gap:x,backgroundColour:"gray700"});return r.createElement(c,{className:l,style:s},o.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{as:"p",colour:"white",style:{textAlign:"center"}},a+1))))},i=()=>{const[o,l,s]=n({count:23,columnCount:y,gap:x});return r.createElement(c,{className:l,style:s},o.map((e,a)=>r.createElement(e,{key:a},r.createElement(w,{as:"p",colour:"white",style:{textAlign:"center"}},a+1))))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const count = 1;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap,
    backgroundColour: 'gray700'
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text as="p" colour="white" style={{
        textAlign: 'center'
      }}>
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const count = 5;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text as="p" colour="white" style={{
        textAlign: 'center'
      }}>
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const count = 7;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap,
    backgroundColour: 'gray700'
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text as="p" colour="white" style={{
        textAlign: 'center'
      }}>
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const count = 23;
  const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
    count,
    columnCount,
    gap
  });
  return <Box className={wrapperCls} style={wrapperStyle}>
            {attachedBoxes.map((AttachedBox, index) => <AttachedBox key={index}>
                    <Text as="p" colour="white" style={{
        textAlign: 'center'
      }}>
                        {index + 1}
                    </Text>
                </AttachedBox>)}
        </Box>;
}`,...i.parameters?.docs?.source}}};const $=["One","Five","Seven","TwentyThree"];export{d as Five,v as One,m as Seven,i as TwentyThree,$ as __namedExportsOrder,V as default};
