import{v as a,e as o,s as i}from"./iframe-BXi-qtkr.js";import{F as n}from"./FlexStack-CfuUPKNf.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DdEC88PH.js";const p={padding:"4",borderStyle:"solid",borderWidth:"1",borderColor:"hard",textAlign:"center"},c=(t=5)=>[...new Array(t).keys()].map(r=>o.createElement("div",{className:i(p),style:{minWidth:"100px"},key:r},r+1)),u={title:"Layout/Flex/Flex Stack",tags:["new","skip-themes"],component:n,args:{as:void 0,gap:"6",start:!1,center:!1,end:!1,reverse:!1,align:void 0,justify:void 0},argTypes:{as:{options:["div","span","ul","section","p"]},align:{options:a.alignItems},justify:{options:a.justifyContent},gap:{options:a.spaceWithNone}}},s={render:t=>o.createElement(n,{...t,"data-custom-attr":"flex-stack-story"},c())},e={...s,args:{align:["start","center","end"],gap:["2","4","6"]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <FlexStack {...args} data-custom-attr="flex-stack-story">
            {items()}
        </FlexStack>
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Standard,
  args: {
    align: ['start', 'center', 'end'],
    gap: ['2', '4', '6']
  }
}`,...e.parameters?.docs?.source},description:{story:"Responsive properties that change based on viewport size",...e.parameters?.docs?.description}}};const y=["Standard","Responsive"];export{e as Responsive,s as Standard,y as __namedExportsOrder,u as default};
