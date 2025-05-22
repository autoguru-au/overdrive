import{B as t,e as a}from"./iframe-C_bA5shj.js";const P={title:"Primatives/Box",tags:["polymorphic"],component:t,args:{as:"div",children:"Hello box!",colour:"primary",backgroundColour:"primary",borderRadius:"none",borderColour:"gray",borderWidth:"2",display:"inline-flex",margin:void 0,padding:"6",textAlign:void 0}},s={},e={args:{children:"Resize the viewport",padding:["3","6","8"]}},o={render:()=>a.createElement(t,{id:"so-basic",odComponent:"box-basic",testId:"basically-perfect","data-custom-attribute":"somewhat less basic"},"The most basic box (or is it?)")},r={render:()=>a.createElement(t,{as:a.createElement(t,{as:"a",href:"#hello"}),backgroundColor:"accent",borderColor:"info",borderWidth:"1",className:"keep-my-custom-class-name",p:"4"},"Styled props merged with custom component")};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Resize the viewport',
    padding: ['3', '6', '8']
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"This story demonstrates the responsive props for `padding`, using an array of values.",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var b,g,h,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Box id="so-basic" odComponent="box-basic" testId="basically-perfect" data-custom-attribute="somewhat less basic">
            The most basic box (or is it?)
        </Box>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Demonstrates the `odComponent` and `testId` props that map to data attributes built into Box and a custom attribute",...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var f,C,v,B,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box as={<Box as="a" href="#hello" />} backgroundColor="accent" borderColor="info" borderWidth="1" className="keep-my-custom-class-name" p="4">
            Styled props merged with custom component
        </Box>
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source},description:{story:"Passing in a React element to `as` props to merge style props",...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};const R=["Standard","ResponsiveProps","DataAttributes","ComponentAsProp"];export{r as ComponentAsProp,o as DataAttributes,e as ResponsiveProps,s as Standard,R as __namedExportsOrder,P as default};
