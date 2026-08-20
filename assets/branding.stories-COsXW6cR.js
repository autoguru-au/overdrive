import{e,B as c,O as y,S as t,H as v}from"./iframe-DGCWEvN6.js";import{B as d}from"./Button-DHWT8xBo.js";import{F as a}from"./FlexInline-tapVR-tM.js";import{T as m}from"./Text-ao7EXZo6.js";import{S as p}from"./Switch-CFszjKQY.js";import{C as u}from"./CheckBox-CTyLYtrb.js";import{R as h,a as g}from"./Radio-CBBDBXdw.js";import{T as B}from"./TextLink-CggrdrqF.js";import{B as i}from"./Badge-D9ZNHb8E.js";import{A as E}from"./Alert-D53dk3s6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-72km-RG4.js";import"./resolveResponsiveProps-Bwlb5skK.js";import"./ProgressSpinner-BF-2GB5h.js";import"./flex-ReQCT27X.js";import"./useControlledState-CGd6-Lix.js";import"./index-CA_YdZg4.js";import"./index-CnKfxc4E.js";import"./useFocusRing-Dj137Dr8.js";import"./VisuallyHidden-BDPXiLGO.js";import"./CheckableBase-CNMVyYiG.js";import"./MinusIcon-D3IDuAZ-.js";import"./CheckIcon-Bv2HbEij.js";import"./IntentStripe-BXpoyf9f.js";import"./WarningIcon-DSj5-1em.js";import"./InformationIcon-CTjVncse.js";import"./AlertCircleIcon-DrWGrQWs.js";import"./XIcon-DS_Qaa0Q.js";const x=[{name:"No branding",note:"The base theme as every unbranded consumer sees it."},{name:"Violet",overrides:{primaryBackground:"#6d39a8",primaryForeground:"#ffffff",linkColor:"#6d39a8"},note:"A dark brand, with its on-brand content supplied as white."},{name:"Amber",overrides:{primaryBackground:"#e5bc01",linkColor:"#8a6f00"},note:"A bright brand, with on-brand content derived as dark ink."}],s=({children:r})=>e.createElement(m,{size:"2",colour:"light"},r),C=()=>e.createElement(t,{space:"2"},e.createElement(s,null,"Buttons"),e.createElement(a,{gap:"3",justify:"center"},e.createElement(d,{variant:"primary"},"Button"),e.createElement(d,{variant:"primary",outlined:!0},"Button"))),k=({idPrefix:r})=>e.createElement(t,{space:"2"},e.createElement(s,null,"Selection controls (on / off)"),e.createElement(a,{gap:"4",justify:"center"},e.createElement(p,{isSelected:!0,"aria-label":"On"}),e.createElement(p,{"aria-label":"Off"}),e.createElement(u,{checked:!0,value:"on","aria-label":"Checked"}),e.createElement(u,{value:"off","aria-label":"Unchecked"}),e.createElement(c,{display:"inline-flex"},e.createElement(h,{name:`${r}-on`,value:"on"},e.createElement(g,{value:"on","aria-label":"Selected"}))),e.createElement(c,{display:"inline-flex"},e.createElement(h,{name:`${r}-off`,value:""},e.createElement(g,{value:"off","aria-label":"Not selected"}))))),w=()=>e.createElement(t,{space:"2"},e.createElement(s,null,"Opt-in — needs linkColor"),e.createElement(a,{gap:"4",justify:"center"},e.createElement(B,{href:"#branding"},"A link"),e.createElement(m,{colour:"primary"},'colour="primary"'))),O=()=>e.createElement(t,{space:"3"},e.createElement(s,null,"Fixed — status never follows a brand"),e.createElement(a,{gap:"2"},e.createElement(i,{label:"Success",colour:"green"}),e.createElement(i,{label:"Critical",colour:"red"}),e.createElement(i,{label:"Info",colour:"blue"}),e.createElement(i,{label:"Caution",colour:"yellow"})),e.createElement(a,{gap:"3"},e.createElement(E,{intent:"success",inline:!0},"Success message"),e.createElement(E,{intent:"information",inline:!0},"Info message"))),b=({name:r,overrides:o,note:l})=>{const f=r.toLowerCase().replaceAll(/\W+/g,"-");return e.createElement(c,{padding:"5",borderWidth:"1",borderColour:"light",borderRadius:"lg"},e.createElement(y,{colorOverrides:o},e.createElement(t,{space:"4"},e.createElement(t,{space:"1"},e.createElement(v,{as:"h3"},r),e.createElement("div",{style:{minHeight:"2.75rem"}},e.createElement(m,{size:"2",colour:"light"},l))),e.createElement(C,null),e.createElement(k,{idPrefix:f}),e.createElement(w,null),e.createElement(O,null))))},re={title:"Foundation/Branding"},n={render:()=>{const[r,...o]=x;return e.createElement("div",{style:{display:"grid",gap:"24px",justifyItems:"start"}},e.createElement(b,{...r}),e.createElement("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:`repeat(${o.length}, minmax(26rem, max-content))`,alignItems:"stretch"}},o.map(l=>e.createElement(b,{key:l.name,...l}))))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`What a tenant's brand colour reaches, and what it deliberately does not.

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
OptionGrid's selected card, all of which still read the body-text token.`,...n.parameters?.docs?.description}}};const te=["Branding"];export{n as Branding,te as __namedExportsOrder,re as default};
