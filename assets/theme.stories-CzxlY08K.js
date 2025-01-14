import{R as e}from"./index-sWIihdb-.js";import{t as o}from"./theme.css-8GHyazG9.js";import{S as a,l as m,v as g}from"./index-ygVncmNs.js";import{H as n}from"./Heading-Cp_z8dAf.js";import"./_commonjsHelpers-C932wzq6.js";import"./Box-00gOjviF.js";import"./useTextStyles-DdPcDMrx.js";const c=({label:t,cssVar:r})=>e.createElement(a,{horizontal:!0,alignItems:"center",style:{gap:"10px"},key:t},e.createElement("div",{className:g(),style:{background:r}}),e.createElement("span",{className:m},t)),s=({vars:t})=>e.createElement(a,{space:"lg",horizontal:!0},Object.entries(t).map(([r,h])=>e.createElement(a,{horizontal:!0,alignItems:"center",style:{gap:"10px"},key:r},e.createElement("div",{className:g(),style:{background:h}}),e.createElement("span",{className:m},r)))),p=({vars:t})=>e.createElement(a,{space:"lg",horizontal:!0},e.createElement(a,{space:"sm"},e.createElement(c,{label:"Background standard",cssVar:t.background.standard}),e.createElement(c,{label:"Background mild",cssVar:t.background.mild}),e.createElement(c,{label:"Background strong",cssVar:t.background.strong})),e.createElement(c,{label:"Foreground",cssVar:t.foreground}),e.createElement(c,{label:"Border",cssVar:t.border})),w={title:"Foundation/Theme Colours",tags:["!autodocs"]},l={render:()=>e.createElement(a,null,e.createElement("hgroup",null,e.createElement(n,{is:"h1"},"Theme Colours"),e.createElement("p",null,"Use the theme selection menu options in the top bar to view alternate colour mappings.")),e.createElement(a,null,e.createElement(n,{is:"h2"},"Body"),e.createElement(s,{vars:o.body})),e.createElement(a,null,e.createElement(n,{is:"h2"},"Foreground"),e.createElement(s,{vars:o.colours.foreground})),e.createElement(a,null,e.createElement(n,{is:"h2"},"Background"),e.createElement(s,{vars:o.colours.background})),e.createElement(a,null,e.createElement(n,{is:"h2"},"Border"),e.createElement(s,{vars:o.border.colours})),e.createElement(a,null,e.createElement(n,{is:"h2"},"Intentional colour sets"),e.createElement(a,null,Object.entries(o.colours.intent).map(([t,r])=>e.createElement(e.Fragment,null,e.createElement(n,{is:"h4",className:m},t),e.createElement(p,{vars:r}))))))};var i,u,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Stack>
                <hgroup>
                    <Heading is="h1">Theme Colours</Heading>
                    <p>
                        Use the theme selection menu options in the top bar to
                        view alternate colour mappings.
                    </p>
                </hgroup>
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

                <Stack>
                    <Heading is="h2">Intentional colour sets</Heading>
                    <Stack>
                        {Object.entries(themeContractVars.colours.intent).map(([title, vars]) => <>
                                    <Heading is="h4" className={labels}>
                                        {title}
                                    </Heading>
                                    <IntentionalSwatches vars={vars} />
                                </>)}
                    </Stack>
                </Stack>
            </Stack>;
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const V=["ThemeColours"];export{l as ThemeColours,V as __namedExportsOrder,w as default};
