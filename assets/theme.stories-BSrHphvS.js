import{R as e}from"./index-CIentmI6.js";import{t as c}from"./theme.css-DwdNUWuP.js";import{S as t,l as m,v as h}from"./index-BwXw2N9Y.js";import{H as n}from"./Heading-DgO3C_Fp.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-Bevh8JBX.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./vanilla-extract-sprinkles-createRuntimeSprinkles.esm-gvoir1Kq.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-BBYvKUtt.js";const o=({label:a,cssVar:r})=>e.createElement(t,{space:"xxs",key:a},e.createElement("div",{className:h({shape:"rectangle"}),style:{background:r}}),e.createElement("span",{className:m},a)),s=({vars:a})=>e.createElement(t,{space:"sm",horizontal:!0},Object.entries(a).map(([r,p])=>e.createElement(t,{space:"xxs",key:r},e.createElement("div",{className:h({shape:"rectangle"}),style:{background:p}}),e.createElement("span",{className:m},r)))),g=({vars:a})=>e.createElement(t,{space:"sm"},e.createElement(t,{space:"sm",horizontal:!0},e.createElement(o,{label:"Border",cssVar:a.border}),e.createElement(o,{label:"Foreground",cssVar:a.foreground})),e.createElement(t,{space:"sm",horizontal:!0},e.createElement(o,{label:"Background strong",cssVar:a.background.strong}),e.createElement(o,{label:"Background standard",cssVar:a.background.standard}),e.createElement(o,{label:"Background mild",cssVar:a.background.mild}))),B={title:"Foundation/Theme Colours",tags:["!autodocs"]},l={render:()=>e.createElement(t,null,e.createElement("hgroup",null,e.createElement(n,{is:"h1"},"Theme Colours"),e.createElement("p",null,"Use the theme selection menu options in the top bar to view alternate colour mappings.")),e.createElement(t,{space:"md",horizontal:!0},e.createElement(t,null,e.createElement(n,{is:"h2"},"Body"),e.createElement(s,{vars:c.body})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Foreground"),e.createElement(s,{vars:c.colours.foreground})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Background"),e.createElement(s,{vars:c.colours.background})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Border"),e.createElement(s,{vars:c.border.colours}))),e.createElement(t,null,e.createElement(n,{is:"h2"},"Typography"),e.createElement(s,{vars:c.typography.colour})),e.createElement(t,null,e.createElement(n,{is:"h2"},"Intentional colour sets"),e.createElement(t,{space:"lg",horizontal:!0},Object.entries(c.colours.intent).map(([a,r])=>e.createElement("div",{key:a},e.createElement(n,{is:"h4",className:m},a),e.createElement(g,{vars:r}))))))};var i,d,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Stack>
                <hgroup>
                    <Heading is="h1">Theme Colours</Heading>
                    <p>
                        Use the theme selection menu options in the top bar to
                        view alternate colour mappings.
                    </p>
                </hgroup>
                <Stack space="md" horizontal>
                    <Stack>
                        <Heading is="h2">Body</Heading>
                        <SemanticSwatches vars={themeContractVars.body} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Foreground</Heading>
                        <SemanticSwatches vars={themeContractVars.colours.foreground} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Background</Heading>
                        <SemanticSwatches vars={themeContractVars.colours.background} />
                    </Stack>
                    <Stack>
                        <Heading is="h2">Border</Heading>
                        <SemanticSwatches vars={themeContractVars.border.colours} />
                    </Stack>
                </Stack>
                <Stack>
                    <Heading is="h2">Typography</Heading>
                    <SemanticSwatches vars={themeContractVars.typography.colour} />
                </Stack>
                <Stack>
                    <Heading is="h2">Intentional colour sets</Heading>
                    <Stack space="lg" horizontal>
                        {Object.entries(themeContractVars.colours.intent).map(([title, vars]) => <div key={title}>
                                    <Heading is="h4" className={labels}>
                                        {title}
                                    </Heading>
                                    <IntentionalSwatches vars={vars} />
                                </div>)}
                    </Stack>
                </Stack>
            </Stack>;
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const f=["ThemeColours"];export{l as ThemeColours,f as __namedExportsOrder,B as default};
