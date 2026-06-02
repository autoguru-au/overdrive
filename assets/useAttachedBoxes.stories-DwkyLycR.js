import{r as e,B as u}from"./iframe-CgOdRfj5.js";import{T as x}from"./Text-CvLQCa5h.js";import{u as m}from"./useAttachedBoxes-BluEJrES.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveResponsiveProps-Dx9ZmEau.js";import"./useMedia-DB_sMMbR.js";const S={title:"Layout/Attached Boxes [Hook]"},d=[2,3,4,5],y=["1","2","3","4"],c=()=>{const[r,a,o]=m({count:1,columnCount:d,gap:y,backgroundColour:"gray700"});return e.createElement(u,{className:a,style:o},r.map((s,t)=>e.createElement(s,{key:t},e.createElement(x,{as:"p",colour:"white",style:{textAlign:"center"}},t+1))))},n=()=>{const[r,a,o]=m({count:5,columnCount:d,gap:y});return e.createElement(u,{className:a,style:o},r.map((s,t)=>e.createElement(s,{key:t},e.createElement(x,{as:"p",colour:"white",style:{textAlign:"center"}},t+1))))},p=()=>{const[r,a,o]=m({count:7,columnCount:d,gap:y,backgroundColour:"gray700"});return e.createElement(u,{className:a,style:o},r.map((s,t)=>e.createElement(s,{key:t},e.createElement(x,{as:"p",colour:"white",style:{textAlign:"center"}},t+1))))},l=()=>{const[r,a,o]=m({count:23,columnCount:d,gap:y});return e.createElement(u,{className:a,style:o},r.map((s,t)=>e.createElement(s,{key:t},e.createElement(x,{as:"p",colour:"white",style:{textAlign:"center"}},t+1))))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const E=["One","Five","Seven","TwentyThree"];export{n as Five,c as One,p as Seven,l as TwentyThree,E as __namedExportsOrder,S as default};
