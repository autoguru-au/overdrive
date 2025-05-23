import{e,H as t,o as u}from"./iframe-B8iXgyt9.js";import{S as r,l as c,g as p,v as g,c as k}from"./index-fyR1MO4e.js";function C(a){return a.replace(/([A-Z])/g," $1").trim()}function S(a){return a.replace(/([A-Z])/g,"-$1").trim().toLocaleLowerCase()}const v={title:"Foundation/Theme Colours",tags:["!autodocs","updated"]},s={render:()=>e.createElement(r,null,e.createElement("hgroup",null,e.createElement(t,null,"Theme Colours"),e.createElement("p",{style:{fontStyle:"italic"}},"These colours are a work in progress. Tokens may be added, renamed or colours reassigned.")),e.createElement(r,{space:"md"},Object.entries(u.color).filter(([a])=>a!=="gamut").map(([a,d])=>e.createElement(r,{key:a},e.createElement(t,{as:"h2",className:c},a),e.createElement("div",{className:p},Object.entries(d).map(([o,i])=>e.createElement(r,{space:"xxs",key:o},e.createElement("div",{className:g({shape:"rectangle"}),style:{background:i}}),e.createElement("div",{className:c},C(o)),e.createElement("code",{className:k},"--od-color-",a,"-",S(o)))))))))};var l,m,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const y=["ThemeColours"];export{s as ThemeColours,y as __namedExportsOrder,v as default};
