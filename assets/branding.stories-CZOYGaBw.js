import{e,B as o,O as v,S as n,H as k}from"./iframe-knNj_dc4.js";import{B as p}from"./Button-_xGdpBwV.js";import{F as t}from"./FlexInline-Bk50ppJw.js";import{T as m}from"./Text-DYxReNNp.js";import{S as u}from"./Switch-DhhQXGfv.js";import{C as g}from"./CheckBox-DNQAZWJc.js";import{R as h,a as b}from"./Radio-BsnIghWt.js";import{T as d}from"./TextLink-dQY7xZeA.js";import{B as s}from"./Badge-lbLkn92t.js";import{A as E}from"./Alert-hZ6hb5Jf.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Pa4szK58.js";import"./resolveResponsiveProps-B51dRZJs.js";import"./ProgressSpinner-twp3-hnc.js";import"./flex-te1JVRl7.js";import"./useControlledState-BmdLsbQc.js";import"./index-De_gLM3F.js";import"./index-Crah3-4N.js";import"./useFocusRing-CroUmTIx.js";import"./VisuallyHidden-B4Hpy2k_.js";import"./CheckableBase-iEwYDj0I.js";import"./MinusIcon-BS6LbxN1.js";import"./CheckIcon-COPMQjF1.js";import"./IntentStripe-eH65UjZu.js";import"./WarningIcon-YKSQxyDw.js";import"./InformationIcon-D3hVYxAj.js";import"./AlertCircleIcon-Bib5bVgZ.js";import"./XIcon-xnrVbS0S.js";const B=[{name:"No branding",note:"The base theme as every unbranded consumer sees it."},{name:"Violet",overrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"},note:"A dark brand, with its on-brand content supplied as white."},{name:"Amber",overrides:{primaryBackground:"#e5bc01",linkColor:"#e5bc01"},note:"A bright brand: on-brand content derives as dark ink, and the link darkens to stay legible on pale surfaces."}],c=({children:r})=>e.createElement(m,{size:"2",colour:"light"},r),C=()=>e.createElement(n,{space:"2"},e.createElement(c,null,"Buttons"),e.createElement(t,{gap:"3",justify:"center"},e.createElement(p,{variant:"primary"},"Button"),e.createElement(p,{variant:"primary",outlined:!0},"Button"))),x=({idPrefix:r})=>e.createElement(n,{space:"2"},e.createElement(c,null,"Selection controls (on / off)"),e.createElement(t,{gap:"4",justify:"center"},e.createElement(u,{isSelected:!0,"aria-label":"On"}),e.createElement(u,{"aria-label":"Off"}),e.createElement(g,{checked:!0,value:"on","aria-label":"Checked"}),e.createElement(g,{value:"off","aria-label":"Unchecked"}),e.createElement(o,{display:"inline-flex"},e.createElement(h,{name:`${r}-on`,value:"on"},e.createElement(b,{value:"on","aria-label":"Selected"}))),e.createElement(o,{display:"inline-flex"},e.createElement(h,{name:`${r}-off`,value:""},e.createElement(b,{value:"off","aria-label":"Not selected"}))))),w=()=>e.createElement(n,{space:"2"},e.createElement(c,null,"Opt-in — needs linkColor"),e.createElement(t,{gap:"4",justify:"center"},e.createElement(d,{href:"#branding"},"A link"),e.createElement(m,{colour:"primary"},'colour="primary"')),e.createElement(o,{backgroundColor:"gray900",borderRadius:"1",padding:"3"},e.createElement(t,{gap:"4",justify:"center"},e.createElement(d,{href:"#branding"},"A link on a dark surface")),e.createElement(o,{backgroundColor:"white",borderRadius:"1",marginTop:"3",padding:"3"},e.createElement(t,{gap:"4",justify:"center"},e.createElement(d,{href:"#branding"},"A link on a card inside it"))))),T=()=>e.createElement(n,{space:"3"},e.createElement(c,null,"Fixed — status never follows a brand"),e.createElement(t,{gap:"2"},e.createElement(s,{label:"Success",colour:"green"}),e.createElement(s,{label:"Critical",colour:"red"}),e.createElement(s,{label:"Info",colour:"blue"}),e.createElement(s,{label:"Caution",colour:"yellow"})),e.createElement(t,{gap:"3"},e.createElement(E,{intent:"success",inline:!0},"Success message"),e.createElement(E,{intent:"information",inline:!0},"Info message"))),f=({name:r,overrides:l,note:i})=>{const y=r.toLowerCase().replaceAll(/\W+/g,"-");return e.createElement(o,{padding:"5",borderWidth:"1",borderColour:"light",borderRadius:"lg"},e.createElement(v,{colorOverrides:l},e.createElement(n,{space:"4"},e.createElement(n,{space:"1"},e.createElement(k,{as:"h3"},r),e.createElement("div",{style:{minHeight:"2.75rem"}},e.createElement(m,{size:"2",colour:"light"},i))),e.createElement(C,null),e.createElement(x,{idPrefix:y}),e.createElement(w,null),e.createElement(T,null))))},re={title:"Foundation/Branding"},a={render:()=>{const[r,...l]=B;return e.createElement("div",{style:{display:"grid",gap:"24px",justifyItems:"start"}},e.createElement(f,{...r}),e.createElement("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:`repeat(${l.length}, minmax(26rem, max-content))`,alignItems:"stretch"}},l.map(i=>e.createElement(f,{key:i.name,...i}))))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [control, ...brands] = BRANDS;
    return <div style={{
      display: 'grid',
      gap: '24px',
      justifyItems: 'start'
    }}>
                <BrandCard {...control} />
                <div style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: \`repeat(\${brands.length}, minmax(26rem, max-content))\`,
        alignItems: 'stretch'
      }}>
                    {brands.map(brand => <BrandCard key={brand.name} {...brand} />)}
                </div>
            </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:`What a tenant's brand colour reaches, and what it deliberately does not.

Branding is delivered entirely through \`OverdriveProvider\`'s \`colorOverrides\`
prop — there is no separate tenant theming system. In production the value
arrives as one or two colours from a GraphQL \`TenantBranding\` field:

\`\`\`tsx
<OverdriveProvider
  colorOverrides={{
    primaryBackground: brandColour,
    primaryForeground: brandTextColour, // optional — derived when absent
    linkColor: brandColour,             // optional — opt in per app
  }}
>
\`\`\`

The control sits on its own row: no overrides at all, so it shows what every
unbranded consumer renders today. The brands share the row beneath it. In each
card the first three groups should differ from the control; the last group must
be identical in all three.

Anything not shown here does **not** follow a brand yet — notably a text
input's active border, Tabs, ToggleButtons, a Calendar's selected day and an
OptionGrid's selected card, all of which still read the body-text token.`,...a.parameters?.docs?.description}}};const te=["Branding"];export{a as Branding,te as __namedExportsOrder,re as default};
