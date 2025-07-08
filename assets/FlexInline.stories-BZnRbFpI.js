import{x as B,z as V,e,v as m,y as q}from"./iframe-CvODe0lv.js";import{i as A}from"./flex-m0qJglgy.js";import{B as u}from"./Button-DrLYyTDM.js";import"./Icon-CRKWC-ID.js";import"./resolveResponsiveProps-Dj_dR-0O.js";import"./ProgressSpinner-2irF96n3.js";var k="_1l3ycav0";const t=({as:n,children:c,expand:v,align:y,center:f,end:h,fullWidth:x,gap:E="2",noWrap:I,justify:b,reverse:S,spaceBetween:F,start:w,...C})=>{const{Component:W,componentProps:_}=B({as:n,odComponent:"flex-inline",className:k,...A({align:y,center:f,end:h,fullWidth:x,gap:E,noWrap:I,justify:b,reverse:S,spaceBetween:F,start:w}),...V({expand:v})});return e.createElement(W,{...C,..._},c)};t.displayName="FlexInline";try{t.displayName="FlexInline",t.__docgenInfo={description:"A horizontal layout component that arranges items with consistent spacing\nwithout wrapping content within additional components.\n\n- Supports responsive spacing and alignment\n- Can be reversed, centered, or justified\n- Wrapping behavior can be controlled\n\nThe `inline` function is available to apply the same flex layout option\nto any html element. Example use\n`<div className={inline({ gap: '3', end: true })} />`\n\n**Note**: Responsive props (`align`, `justify`) take precedence over\nshortcut props (`center`, `start`, etc.).",displayName:"FlexInline",props:{as:{defaultValue:null,description:"Name of HTML tag to render the component as",name:"as",required:!1,type:{name:"ElementType"}},align:{defaultValue:{value:"start"},description:"Main-axis horizontal alignment of items (_responsive_)",name:"align",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ spaceAround: string; 'space-around': string; spaceBetween: string; 'space-between': string; 'space-evenly': string; center: string; centre: string; end: string; flexEnd: string; flexStart: string; start: string; stretch: string; }, { ...; }>, ("mobile" | ... 2 more ... | ...`}},center:{defaultValue:null,description:"Shortcut center horizontal alignment",name:"center",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"Shortcut end/bottom alignment",name:"end",required:!1,type:{name:"boolean"}},expand:{defaultValue:null,description:"Child elements should fill available space",name:"expand",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Adds 100% width",name:"fullWidth",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Item horizontal spacing (_responsive_)",name:"gap",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9", { vars: { [x: string]: `var(--${string})`; }; gap: `var(--${string})`; }>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | .....'}},noWrap:{defaultValue:null,description:"Prevent items from wrapping to the next row",name:"noWrap",required:!1,type:{name:"boolean"}},justify:{defaultValue:null,description:"Cross-axis vertical alignment of items (_responsive_)",name:"justify",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<{ baseline: "baseline"; center: string; centre: string; end: string; flexEnd: string; flexStart: string; start: string; stretch: string; }, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 ...'}},reverse:{defaultValue:null,description:"Reverse item order",name:"reverse",required:!1,type:{name:"boolean"}},spaceBetween:{defaultValue:null,description:"Shortcut `space-between` justification",name:"spaceBetween",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"Shortcut start/top alignment",name:"start",required:!1,type:{name:"boolean"}}}}}catch{}const N={paddingX:"4",borderStyle:"solid",borderWidth:"1",borderColor:"hard",display:"flex",alignItems:"center",justifyContent:"center"},p=n=>({className:q({height:n,...N}),style:{minWidth:"150px"}}),a=()=>e.createElement("div",{...p("8")},"1"),r=()=>e.createElement("div",{...p("9")},"2"),l=()=>e.createElement("div",{...p("7")},"3"),T={title:"Layout/Flex/Flex Inline",tags:["new","skip-themes"],component:t,args:{as:void 0,gap:"6",start:!1,center:!1,end:!1,expand:!1,noWrap:!1,reverse:!1,spaceBetween:!1,align:void 0,justify:void 0},argTypes:{as:{options:["div","span","ul","section","p"]},align:{options:m.justifyContent},justify:{options:m.alignItems},gap:{options:m.spaceWithNone}}},d={render:n=>e.createElement(t,{...n,"data-custom-attr":"flex-inline-story"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null))},i={...d,args:{align:["start","center","end"],gap:["2","4","6"]}},s={args:{center:!0,gap:"4"},render:n=>e.createElement(t,{...n,role:"group"},e.createElement(u,{variant:"primary"},"Primary Action"),e.createElement(u,{variant:"secondary"},"Secondary"),e.createElement(u,{variant:"secondary"},"Cancel"))},g={width:"300px",border:"2px dashed #ccc",padding:"10px"},o={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("h4",null,"Center"),e.createElement(t,{center:!0,gap:"4"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Space Between"),e.createElement(t,{spaceBetween:!0,gap:"4"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Expanded Children"),e.createElement(t,{expand:!0,gap:"4"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"Reversed Order"),e.createElement(t,{reverse:!0,gap:"4"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null))),e.createElement("div",null,e.createElement("h4",null,"No Wrap"),e.createElement("div",{style:g},e.createElement(t,{noWrap:!0,gap:"2"},e.createElement(a,null),e.createElement(r,null),e.createElement(l,null),e.createElement("div",{...p("8")},"4")))),e.createElement("div",null,e.createElement("h4",null,"Wrapping"),e.createElement("div",{style:g},e.createElement(t,{gap:"2"},Array.from({length:8},(n,c)=>e.createElement("div",{key:c,...p("6"),style:{minWidth:"60px"}},c+1))))))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <FlexInline {...args} data-custom-attr="flex-inline-story">
            <Item1 />
            <Item2 />
            <Item3 />
        </FlexInline>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Layout variants to demonstrate alignment, expanded children, reverse order, and wrapping behavior.",...o.parameters?.docs?.description}}};const L=["Standard","Responsive","InteractiveElements","MoreExamples"];export{s as InteractiveElements,o as MoreExamples,i as Responsive,d as Standard,L as __namedExportsOrder,T as default};
