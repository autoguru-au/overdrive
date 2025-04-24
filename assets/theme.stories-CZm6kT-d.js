import{R as e}from"./index-DVCUSwsV.js";import{o as p}from"./theme.css-CFHhYxCZ.js";import{S as r,l as t,g as u,v as g,c as k}from"./index-CbxjHjVC.js";import{H as c}from"./Heading-ChPWx1RV.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-Mcr8v5d2.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./vanilla-extract-sprinkles-createRuntimeSprinkles.esm-gvoir1Kq.js";/* empty css                             *//* empty css                             *//* empty css                             */import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-nxerGMDs.js";function C(a){return a.replace(/([A-Z])/g," $1").trim()}function S(a){return a.replace(/([A-Z])/g,"-$1").trim().toLocaleLowerCase()}const j={title:"Foundation/Theme Colours",tags:["!autodocs","updated"]},o={render:()=>e.createElement(r,null,e.createElement("hgroup",null,e.createElement(c,null,"Theme Colours"),e.createElement("p",{style:{fontStyle:"italic"}},"These colours are a work in progress. Tokens may be added, renamed or colours reassigned.")),e.createElement(r,{space:"md"},Object.entries(p.color).filter(([a])=>a!=="gamut").map(([a,n])=>e.createElement(r,{key:a},e.createElement(c,{is:"h2",className:t},a),e.createElement("div",{className:u},Object.entries(n).map(([s,d])=>e.createElement(r,{space:"xxs",key:s},e.createElement("div",{className:g({shape:"rectangle"}),style:{background:d}}),e.createElement("div",{className:t},C(s)),e.createElement("code",{className:k},"--od-color-",a,"-",S(s)))))))))};var l,m,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Stack>
                <hgroup>
                    <Heading>Theme Colours</Heading>
                    <p style={{
          fontStyle: 'italic'
        }}>
                        These colours are a work in progress. Tokens may be
                        added, renamed or colours reassigned.
                    </p>
                </hgroup>
                <Stack space="md">
                    {Object.entries(overdriveTokens.color).filter(([key]) => key !== 'gamut').map(([group, colours]) => <Stack key={group}>
                                <Heading is="h2" className={labels}>
                                    {group}
                                </Heading>

                                <div className={gridSwatches}>
                                    {Object.entries(colours).map(([colour, cssVar]) => <Stack space="xxs" key={colour}>
                                                <div className={variantColourSwatch({
                shape: 'rectangle'
              })} style={{
                background: cssVar
              } as React.CSSProperties}></div>

                                                <div className={labels}>
                                                    {spacesFromCamelCase(colour)}
                                                </div>
                                                <code className={codeVariable}>
                                                    --od-color-{group}-
                                                    {kebabCaseFromCamelCase(colour)}
                                                </code>
                                            </Stack>)}
                                </div>
                            </Stack>)}
                </Stack>
            </Stack>;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const V=["ThemeColours"];export{o as ThemeColours,V as __namedExportsOrder,j as default};
