import{R as e}from"./index-DVCUSwsV.js";import{o as p}from"./theme.css-CgnscP65.js";import{S as r,l as t,g as u,v as g,c as k}from"./index-Ciwx9AWJ.js";import{H as c}from"./Heading-sl8mRLG7.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-DIPDnkNs.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";/* empty css                             *//* empty css                             *//* empty css                             */import"./useTextStyles-CPzSss8t.js";function C(a){return a.replace(/([A-Z])/g," $1").trim()}function S(a){return a.replace(/([A-Z])/g,"-$1").trim().toLocaleLowerCase()}const F={title:"Foundation/Theme Colours",tags:["!autodocs","updated"]},s={render:()=>e.createElement(r,null,e.createElement("hgroup",null,e.createElement(c,null,"Theme Colours"),e.createElement("p",{style:{fontStyle:"italic"}},"These colours are a work in progress. Tokens may be added, renamed or colours reassigned.")),e.createElement(r,{space:"md"},Object.entries(p.color).filter(([a])=>a!=="gamut").map(([a,i])=>e.createElement(r,{key:a},e.createElement(c,{as:"h2",className:t},a),e.createElement("div",{className:u},Object.entries(i).map(([o,d])=>e.createElement(r,{space:"xxs",key:o},e.createElement("div",{className:g({shape:"rectangle"}),style:{background:d}}),e.createElement("div",{className:t},C(o)),e.createElement("code",{className:k},"--od-color-",a,"-",S(o)))))))))};var l,m,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
                                <Heading as="h2" className={labels}>
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
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const O=["ThemeColours"];export{s as ThemeColours,O as __namedExportsOrder,F as default};
