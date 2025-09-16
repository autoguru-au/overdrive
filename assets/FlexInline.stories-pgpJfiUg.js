import{v as d,e,s as E}from"./iframe-ilUwcptX.js";import{F as t}from"./FlexInline-Bdgux0-Z.js";import{B as p}from"./Button-B9wh2I7n.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-BfQbQ2qz.js";import"./Icon-DIVFT0TM.js";import"./resolveResponsiveProps-CDLJUN0S.js";import"./ProgressSpinner-g4eEavT9.js";const g={paddingX:"4",borderStyle:"solid",borderWidth:"1",borderColor:"hard",display:"flex",alignItems:"center",justifyContent:"center"},m=n=>({className:E({height:n,...g}),style:{minWidth:"150px"}}),r=()=>e.createElement("div",{...m("8")},"1"),a=()=>e.createElement("div",{...m("9")},"2"),l=()=>e.createElement("div",{...m("7")},"3"),C={title:"Layout/Flex/Flex Inline",tags:["new","skip-themes"],component:t,args:{as:void 0,gap:"6",start:!1,center:!1,end:!1,expand:!1,noWrap:!1,reverse:!1,spaceBetween:!1,align:void 0,justify:void 0},argTypes:{as:{options:["div","span","ul","section","p"]},align:{options:d.justifyContent},justify:{options:d.alignItems},gap:{options:d.spaceWithNone}}},c={render:n=>e.createElement(t,{...n,"data-custom-attr":"flex-inline-story"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null))},i={...c,args:{align:["start","center","end"],gap:["2","4","6"]}},s={args:{center:!0,gap:"4"},render:n=>e.createElement(t,{...n,role:"group"},e.createElement(p,{variant:"primary"},"Primary Action"),e.createElement(p,{variant:"secondary"},"Secondary"),e.createElement(p,{variant:"secondary"},"Cancel"))},v={width:"300px",border:"2px dashed #ccc",padding:"10px"},o={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("h4",null,"Center"),e.createElement(t,{center:!0,gap:"4"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Space Between"),e.createElement(t,{spaceBetween:!0,gap:"4"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Expanded Children"),e.createElement(t,{expand:!0,gap:"4"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Reversed Order"),e.createElement(t,{reverse:!0,gap:"4"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"No Wrap"),e.createElement("div",{style:v},e.createElement(t,{noWrap:!0,gap:"2"},e.createElement(r,null),e.createElement(a,null),e.createElement(l,null),e.createElement("div",{...m("8")},"4")))),e.createElement("div",null,e.createElement("h4",null,"Wrapping"),e.createElement("div",{style:v},e.createElement(t,{gap:"2"},Array.from({length:8},(n,u)=>e.createElement("div",{key:u,...m("6"),style:{minWidth:"60px"}},u+1))))))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FlexInline {...args} data-custom-attr="flex-inline-story">
            <Item1 />
            <Item2 />
            <Item3 />
        </FlexInline>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Standard,
  args: {
    align: ['start', 'center', 'end'],
    gap: ['2', '4', '6']
  }
}`,...i.parameters?.docs?.source},description:{story:"Responsive properties that change based on viewport size",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    center: true,
    gap: '4'
  },
  render: args => <FlexInline {...args} role="group">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary">Cancel</Button>
        </FlexInline>
}`,...s.parameters?.docs?.source},description:{story:"FlexInline with interactive button elements, demonstrating keyboard navigation and focus management.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
            <div>
                <h4>Center</h4>
                <FlexInline center gap="4">
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </FlexInline>
            </div>
            <div>
                <h4>Space Between</h4>
                <FlexInline spaceBetween gap="4">
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </FlexInline>
            </div>
            <div>
                <h4>Expanded Children</h4>
                <FlexInline expand gap="4">
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </FlexInline>
            </div>
            <div>
                <h4>Reversed Order</h4>
                <FlexInline reverse gap="4">
                    <Item1 />
                    <Item2 />
                    <Item3 />
                </FlexInline>
            </div>
            <div>
                <h4>No Wrap</h4>
                <div style={styleContainer}>
                    <FlexInline noWrap gap="2">
                        <Item1 />
                        <Item2 />
                        <Item3 />
                        <div {...itemProps('8')}>4</div>
                    </FlexInline>
                </div>
            </div>
            <div>
                <h4>Wrapping</h4>
                <div style={styleContainer}>
                    <FlexInline gap="2">
                        {Array.from({
            length: 8
          }, (_, i) => <div key={i} {...itemProps('6')} style={{
            minWidth: '60px'
          }}>
                                {i + 1}
                            </div>)}
                    </FlexInline>
                </div>
            </div>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Layout variants to demonstrate alignment, expanded children, reverse order, and wrapping behavior.",...o.parameters?.docs?.description}}};const W=["Standard","Responsive","InteractiveElements","MoreExamples"];export{s as InteractiveElements,o as MoreExamples,i as Responsive,c as Standard,W as __namedExportsOrder,C as default};
