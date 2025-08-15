import{e,H as t,o}from"./iframe-BHL7crnr.js";import{F as c}from"./FlexInline-Dm_9g0au.js";import{F as n}from"./FlexStack-B0bMtCPe.js";import{l as i,v as d}from"./styles.css-Boq2LdGR.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-CyrJktwy.js";const l=({label:a,cssVar:r})=>e.createElement(n,{gap:"1",key:a},e.createElement("div",{className:d({shape:"rectangle"}),style:{background:r}}),e.createElement("span",{className:i},a)),s=({vars:a})=>e.createElement(c,{gap:"5"},Object.entries(a).map(([r,g])=>e.createElement(n,{gap:"1",key:r},e.createElement("div",{className:d({shape:"rectangle"}),style:{background:g}}),e.createElement("span",{className:i},r)))),p=({vars:a})=>e.createElement(n,{gap:"5"},e.createElement(c,{gap:"5"},e.createElement(l,{label:"Border",cssVar:a.border}),e.createElement(l,{label:"Foreground",cssVar:a.foreground})),e.createElement(c,{gap:"5"},e.createElement(l,{label:"Background strong",cssVar:a.background.strong}),e.createElement(l,{label:"Background standard",cssVar:a.background.standard}),e.createElement(l,{label:"Background mild",cssVar:a.background.mild}))),b={title:"Foundation/Legacy Coloursets",tags:["!autodocs"]},m={render:()=>e.createElement(n,{gap:"7"},e.createElement("hgroup",null,e.createElement(t,{as:"h1"},"Intentional Colours"),e.createElement("p",null,"These colours are being phased out but include use with flat-red and neutral themes plus colour overrides."),e.createElement("p",null,"Use the theme selection menu options in the top bar to view alternate colour mappings.")),e.createElement(c,{gap:"8"},e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2"},"Body"),e.createElement(s,{vars:o.body})),e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2"},"Foreground"),e.createElement(s,{vars:o.colours.foreground})),e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2"},"Background"),e.createElement(s,{vars:o.colours.background})),e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2"},"Border"),e.createElement(s,{vars:o.border.colours}))),e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2"},"Typography"),e.createElement(s,{vars:o.typography.colour})),e.createElement(n,{gap:"6"},e.createElement(t,{as:"h2",mt:"4"},"Intentional colour sets"),e.createElement(c,{gap:"8"},Object.entries(o.colours.intent).map(([a,r])=>e.createElement("div",{key:a},e.createElement(t,{as:"h4",mb:"4",className:i},a),e.createElement(p,{vars:r}))))))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <FlexStack gap="7">
                <hgroup>
                    <Heading as="h1">Intentional Colours</Heading>
                    <p>
                        These colours are being phased out but include use with
                        flat-red and neutral themes plus colour overrides.
                    </p>
                    <p>
                        Use the theme selection menu options in the top bar to
                        view alternate colour mappings.
                    </p>
                </hgroup>
                <FlexInline gap="8">
                    <FlexStack gap="6">
                        <Heading as="h2">Body</Heading>
                        <SemanticSwatches vars={overdriveTokens.body} />
                    </FlexStack>
                    <FlexStack gap="6">
                        <Heading as="h2">Foreground</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.foreground} />
                    </FlexStack>
                    <FlexStack gap="6">
                        <Heading as="h2">Background</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.background} />
                    </FlexStack>
                    <FlexStack gap="6">
                        <Heading as="h2">Border</Heading>
                        <SemanticSwatches vars={overdriveTokens.border.colours} />
                    </FlexStack>
                </FlexInline>
                <FlexStack gap="6">
                    <Heading as="h2">Typography</Heading>
                    <SemanticSwatches vars={overdriveTokens.typography.colour} />
                </FlexStack>
                <FlexStack gap="6">
                    <Heading as="h2" mt="4">
                        Intentional colour sets
                    </Heading>
                    <FlexInline gap="8">
                        {Object.entries(overdriveTokens.colours.intent).map(([title, vars]) => <div key={title}>
                                    <Heading as="h4" mb="4" className={labels}>
                                        {title}
                                    </Heading>
                                    <IntentionalSwatches vars={vars} />
                                </div>)}
                    </FlexInline>
                </FlexStack>
            </FlexStack>;
  }
}`,...m.parameters?.docs?.source}}};const F=["LegacyColoursets"];export{m as LegacyColoursets,F as __namedExportsOrder,b as default};
