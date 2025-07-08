import{B as t,e as o}from"./iframe-CQI638ZW.js";const i={title:"Primitives/Box",tags:[],component:t,args:{as:"div",children:"Hello box!",colour:"primary",backgroundColour:"primary",borderRadius:"none",borderColour:"gray",borderWidth:"2",display:"inline-flex",margin:void 0,padding:"6",textAlign:void 0}},s={},e={args:{children:"Resize the viewport",padding:["3","6","8"]}},r={render:()=>o.createElement(t,{id:"so-basic",odComponent:"box-basic",testId:"basically-perfect","data-custom-attribute":"somewhat less basic"},"The most basic box (or is it?)")};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Resize the viewport',
    padding: ['3', '6', '8']
  }
}`,...e.parameters?.docs?.source},description:{story:"This story demonstrates the responsive props for `padding`, using an array of values.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box id="so-basic" odComponent="box-basic" testId="basically-perfect" data-custom-attribute="somewhat less basic">
            The most basic box (or is it?)
        </Box>
}`,...r.parameters?.docs?.source},description:{story:"Demonstrates the `odComponent` and `testId` props that map to data attributes built into Box and a custom attribute",...r.parameters?.docs?.description}}};const d=["Standard","ResponsiveProps","DataAttributes"];export{r as DataAttributes,e as ResponsiveProps,s as Standard,d as __namedExportsOrder,i as default};
