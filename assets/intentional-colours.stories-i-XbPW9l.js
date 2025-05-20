import{R as e}from"./index-DVCUSwsV.js";import{o}from"./theme.css-CgnscP65.js";import{S as a,l as m,v as p}from"./index-Ciwx9AWJ.js";import{H as n}from"./Heading-sl8mRLG7.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-DIPDnkNs.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";/* empty css                             *//* empty css                             *//* empty css                             */import"./useTextStyles-CPzSss8t.js";const s=({label:t,cssVar:r})=>e.createElement(a,{space:"xxs",key:t},e.createElement("div",{className:p({shape:"rectangle"}),style:{background:r}}),e.createElement("span",{className:m},t)),c=({vars:t})=>e.createElement(a,{space:"sm",horizontal:!0},Object.entries(t).map(([r,g])=>e.createElement(a,{space:"xxs",key:r},e.createElement("div",{className:p({shape:"rectangle"}),style:{background:g}}),e.createElement("span",{className:m},r)))),h=({vars:t})=>e.createElement(a,{space:"sm"},e.createElement(a,{space:"sm",horizontal:!0},e.createElement(s,{label:"Border",cssVar:t.border}),e.createElement(s,{label:"Foreground",cssVar:t.foreground})),e.createElement(a,{space:"sm",horizontal:!0},e.createElement(s,{label:"Background strong",cssVar:t.background.strong}),e.createElement(s,{label:"Background standard",cssVar:t.background.standard}),e.createElement(s,{label:"Background mild",cssVar:t.background.mild}))),z={title:"Foundation/Legacy Coloursets",tags:["!autodocs"]},l={render:()=>e.createElement(a,null,e.createElement("hgroup",null,e.createElement(n,{as:"h1"},"Intentional Colours"),e.createElement("p",null,"These colours are being phased out but include use with flat-red and neutral themes plus colour overrides."),e.createElement("p",null,"Use the theme selection menu options in the top bar to view alternate colour mappings.")),e.createElement(a,{space:"md",horizontal:!0},e.createElement(a,null,e.createElement(n,{as:"h2"},"Body"),e.createElement(c,{vars:o.body})),e.createElement(a,null,e.createElement(n,{as:"h2"},"Foreground"),e.createElement(c,{vars:o.colours.foreground})),e.createElement(a,null,e.createElement(n,{as:"h2"},"Background"),e.createElement(c,{vars:o.colours.background})),e.createElement(a,null,e.createElement(n,{as:"h2"},"Border"),e.createElement(c,{vars:o.border.colours}))),e.createElement(a,null,e.createElement(n,{as:"h2"},"Typography"),e.createElement(c,{vars:o.typography.colour})),e.createElement(a,null,e.createElement(n,{as:"h2"},"Intentional colour sets"),e.createElement(a,{space:"lg",horizontal:!0},Object.entries(o.colours.intent).map(([t,r])=>e.createElement("div",{key:t},e.createElement(n,{as:"h4",className:m},t),e.createElement(h,{vars:r}))))))};var i,d,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Stack>
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
                <Stack space="md" horizontal>
                    <Stack>
                        <Heading as="h2">Body</Heading>
                        <SemanticSwatches vars={overdriveTokens.body} />
                    </Stack>
                    <Stack>
                        <Heading as="h2">Foreground</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.foreground} />
                    </Stack>
                    <Stack>
                        <Heading as="h2">Background</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.background} />
                    </Stack>
                    <Stack>
                        <Heading as="h2">Border</Heading>
                        <SemanticSwatches vars={overdriveTokens.border.colours} />
                    </Stack>
                </Stack>
                <Stack>
                    <Heading as="h2">Typography</Heading>
                    <SemanticSwatches vars={overdriveTokens.typography.colour} />
                </Stack>
                <Stack>
                    <Heading as="h2">Intentional colour sets</Heading>
                    <Stack space="lg" horizontal>
                        {Object.entries(overdriveTokens.colours.intent).map(([title, vars]) => <div key={title}>
                                    <Heading as="h4" className={labels}>
                                        {title}
                                    </Heading>
                                    <IntentionalSwatches vars={vars} />
                                </div>)}
                    </Stack>
                </Stack>
            </Stack>;
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["LegacyColoursets"];export{l as LegacyColoursets,x as __namedExportsOrder,z as default};
