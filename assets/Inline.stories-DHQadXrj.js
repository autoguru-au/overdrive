import{u as h,r as c,f as V,e,y as X,v as a,S as W}from"./iframe-B6_QgceS.js";import{B as d}from"./Button-CCCYISAN.js";import{T as t}from"./Text-Bm62SiFA.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-DnZ774vR.js";import"./resolveResponsiveProps-CzS1S_1C.js";import"./ProgressSpinner-5ZIHGJzu.js";const P=({children:n})=>n?typeof n=="boolean"?e.createElement(t,{"aria-hidden":!0},"•"):c.isValidElement(n)?e.createElement("div",{"aria-hidden":!0},n):e.createElement(t,{"aria-hidden":!0},n):null,r=({as:n="div",children:u,className:v,alignX:x,alignY:p="center",dividers:m,noWrap:y,space:E="2",width:w})=>{const{Component:C,componentProps:T}=h({as:n,className:v,odComponent:"inline",alignItems:p,display:"flex",flexDirection:"row",flexWrap:y?"nowrap":"wrap",gap:E,justifyContent:x,width:w}),g=c.useMemo(()=>V(u),[u]),b=X(n),{Component:S,componentProps:B}=h({as:b,alignItems:p,display:"flex",flexWrap:"nowrap",useVar:"gap"});return g.length===0?null:e.createElement(C,{...T},c.Children.map(g,(f,I)=>f&&e.createElement(S,{...B},m&&I>0&&e.createElement(P,null,m),f)))};try{r.displayName="Inline",r.__docgenInfo={description:`Inline arranges child elements horizontally, side by side.
It allows you to control the spacing between items, alignment (horizontal and vertical),
wrapping behavior, and optionally add dividers. Useful for creating a row layout.`,displayName:"Inline",props:{alignX:{defaultValue:null,description:"Sets the horizontal alignment",name:"alignX",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ spaceAround: string; 'space-around': string; spaceBetween: string; 'space-between': string; 'space-evenly': string; center: string; centre: string; end: string; flexEnd: string; flexStart: string; start: string; stretch: string; }, { ...; }>, ("mobile" | ... 2 more ... | ...`}},alignY:{defaultValue:{value:"center"},description:"Sets the vertical alignment",name:"alignY",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<{ baseline: "baseline"; center: string; centre: string; end: string; flexEnd: string; flexStart: string; start: string; stretch: string; }, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 ...'}},children:{defaultValue:{value:"false (items wrap)"},description:"Control wrapping - `true` prevents items from wrapping to the next line when they overflow the container width",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dividers:{defaultValue:null,description:"A divider element to render between each child. Accepts `true`/`false` for default separator or custom JSX",name:"dividers",required:!1,type:{name:"ReactNode"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"2"},description:"Defines the gap between list items. Accepts responsive values",name:"space",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9", { vars: { [x: string]: `var(--${string})`; }; gap: `var(--${string})`; }>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | .....'}},as:{defaultValue:{value:"div"},description:"Name of HTML tag or a React/JSX component to render the component as",name:"as",required:!1,type:{name:"AsProp"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<{ 'fit-content': \"fit-content\"; 'max-content': \"max-content\"; 'min-content': \"min-content\"; full: \"100%\"; auto: \"auto\"; '1': `var(--${string})`; '2': `var(--${string})`; '3': `var(--${string})`; '4': `var(--${string})`; '5': `var(--${string})`; '6': `var(--${string})`; '7':..."}}}}}catch{}const N={title:"Layout/Inline",tags:[],component:r,render:n=>e.createElement(r,{...n},e.createElement(t,null,"Mazda"),e.createElement(t,null,"CX3"),e.createElement(t,null,"Petrol"),e.createElement(t,null,"2020")),args:{as:void 0,dividers:!1,space:"2",noWrap:!1,width:void 0,alignX:void 0,alignY:"center"},argTypes:{space:{options:a.spaceWithNone},width:{options:a.width},alignX:{options:a.justifyContent},alignY:{options:a.alignItems}}},l={},i={args:{dividers:!0}},s={args:{dividers:e.createElement("div",{style:{backgroundColor:"red",width:"6px",height:"6px"}})}},o={args:{width:"full",alignX:"space-between"},render:n=>e.createElement(W,null,e.createElement(r,{...n},e.createElement(t,null,"Mazda"),e.createElement(t,null,"CX3"),e.createElement(t,null,"Petrol"),e.createElement(t,null,"2020"),e.createElement(d,null,"Buy")),e.createElement(r,{...n},e.createElement(t,null,"Mazda"),e.createElement(t,null,"CX3"),e.createElement(t,null,"Petrol"),e.createElement(t,null,"2020"),e.createElement(d,null,"Buy")),e.createElement(r,{...n},e.createElement(t,null,"Mazda"),e.createElement(t,null,"CX3"),e.createElement(t,null,"Petrol"),e.createElement(t,null,"2020"),e.createElement(d,null,"Buy")))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dividers: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    dividers: <div style={{
      backgroundColor: 'red',
      width: '6px',
      height: '6px'
    }} />
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'full',
    alignX: 'space-between'
  },
  render: args => <Stack>
            <Inline {...args}>
                <Text>Mazda</Text>
                <Text>CX3</Text>
                <Text>Petrol</Text>
                <Text>2020</Text>
                <Button>Buy</Button>
            </Inline>
            <Inline {...args}>
                <Text>Mazda</Text>
                <Text>CX3</Text>
                <Text>Petrol</Text>
                <Text>2020</Text>
                <Button>Buy</Button>
            </Inline>
            <Inline {...args}>
                <Text>Mazda</Text>
                <Text>CX3</Text>
                <Text>Petrol</Text>
                <Text>2020</Text>
                <Button>Buy</Button>
            </Inline>
        </Stack>
}`,...o.parameters?.docs?.source}}};const R=["Standard","Dividers","CustomDividers","WithFullWidth"];export{s as CustomDividers,i as Dividers,l as Standard,o as WithFullWidth,R as __namedExportsOrder,N as default};
