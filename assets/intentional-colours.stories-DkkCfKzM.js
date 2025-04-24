import{R as e}from"./index-DVCUSwsV.js";import{o}from"./theme.css-CFHhYxCZ.js";import{S as t,l as i,v as p}from"./index-CbxjHjVC.js";import{H as n}from"./Heading-ChPWx1RV.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-Mcr8v5d2.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./vanilla-extract-sprinkles-createRuntimeSprinkles.esm-gvoir1Kq.js";/* empty css                             *//* empty css                             *//* empty css                             */import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-nxerGMDs.js";const s=({label:a,cssVar:r})=>e.createElement(t,{space:"xxs",key:a},e.createElement("div",{className:p({shape:"rectangle"}),style:{background:r}}),e.createElement("span",{className:i},a)),c=({vars:a})=>e.createElement(t,{space:"sm",horizontal:!0},Object.entries(a).map(([r,g])=>e.createElement(t,{space:"xxs",key:r},e.createElement("div",{className:p({shape:"rectangle"}),style:{background:g}}),e.createElement("span",{className:i},r)))),h=({vars:a})=>e.createElement(t,{space:"sm"},e.createElement(t,{space:"sm",horizontal:!0},e.createElement(s,{label:"Border",cssVar:a.border}),e.createElement(s,{label:"Foreground",cssVar:a.foreground})),e.createElement(t,{space:"sm",horizontal:!0},e.createElement(s,{label:"Background strong",cssVar:a.background.strong}),e.createElement(s,{label:"Background standard",cssVar:a.background.standard}),e.createElement(s,{label:"Background mild",cssVar:a.background.mild}))),C={title:"Foundation/Legacy Coloursets",tags:["!autodocs"]},l={render:()=>e.createElement(t,null,e.createElement("hgroup",null,e.createElement(n,{is:"h1"},"Intentional Colours"),e.createElement("p",null,"These colours are being phased out but include use with flat-red and neutral themes plus colour overrides."),e.createElement("p",null,"Use the theme selection menu options in the top bar to view alternate colour mappings.")),e.createElement(t,{space:"md",horizontal:!0},e.createElement(t,null,e.createElement(n,{is:"h2"},"Body"),e.createElement(c,{vars:o.body})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Foreground"),e.createElement(c,{vars:o.colours.foreground})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Background"),e.createElement(c,{vars:o.colours.background})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Border"),e.createElement(c,{vars:o.border.colours}))),e.createElement(t,null,e.createElement(n,{is:"h2"},"Typography"),e.createElement(c,{vars:o.typography.colour})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Intentional colour sets"),e.createElement(t,{space:"lg",horizontal:!0},Object.entries(o.colours.intent).map(([a,r])=>e.createElement("div",{key:a},e.createElement(n,{is:"h4",className:i},a),e.createElement(h,{vars:r}))))))};var m,d,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Stack>
                <hgroup>
                    <Heading is="h1">Intentional Colours</Heading>
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
                        <Heading is="h2">Body</Heading>
                        <SemanticSwatches vars={overdriveTokens.body} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Foreground</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.foreground} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Background</Heading>
                        <SemanticSwatches vars={overdriveTokens.colours.background} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Border</Heading>
                        <SemanticSwatches vars={overdriveTokens.border.colours} />
                    </Stack>
                </Stack>
                <Stack>
                    <Heading is="h2">Typography</Heading>
                    <SemanticSwatches vars={overdriveTokens.typography.colour} />
                </Stack>
                <Stack>
                    <Heading is="h2">Intentional colour sets</Heading>
                    <Stack space="lg" horizontal>
                        {Object.entries(overdriveTokens.colours.intent).map(([title, vars]) => <div key={title}>
                                    <Heading is="h4" className={labels}>
                                        {title}
                                    </Heading>
                                    <IntentionalSwatches vars={vars} />
                                </div>)}
                    </Stack>
                </Stack>
            </Stack>;
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const I=["LegacyColoursets"];export{l as LegacyColoursets,I as __namedExportsOrder,C as default};
