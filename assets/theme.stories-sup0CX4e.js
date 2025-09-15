import{e,H as t,o as n}from"./iframe-C5x-mm7q.js";import{F as r}from"./FlexStack-D3zRyL02.js";import{l,g as i,v as d,c as p}from"./styles.css-C7l8eVXk.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-BQ2abrn-.js";function u(a){return a.replace(/([A-Z])/g," $1").trim()}function g(a){return a.replace(/([A-Z])/g,"-$1").trim().toLocaleLowerCase()}const v={title:"Foundation/Theme Colours",tags:["!autodocs","updated"]},s={render:()=>e.createElement(r,{gap:"7"},e.createElement("hgroup",null,e.createElement(t,null,"Theme Colours"),e.createElement("p",{style:{fontStyle:"italic"}},"These colours are a work in progress. Tokens may be added, renamed or colours reassigned.")),e.createElement(r,{gap:"7"},Object.entries(n.color).filter(([a])=>a!=="gamut").map(([a,c])=>e.createElement(r,{gap:"4",key:a},e.createElement(t,{as:"h2",className:l},a),e.createElement("div",{className:i},Object.entries(c).map(([o,m])=>e.createElement(r,{gap:"1",key:o},e.createElement("div",{className:d({shape:"rectangle"}),style:{background:m}}),e.createElement("div",{className:l},u(o)),e.createElement("code",{className:p},"--od-color-",a,"-",g(o)))))))))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <FlexStack gap="7">
                <hgroup>
                    <Heading>Theme Colours</Heading>
                    <p style={{
          fontStyle: 'italic'
        }}>
                        These colours are a work in progress. Tokens may be
                        added, renamed or colours reassigned.
                    </p>
                </hgroup>
                <FlexStack gap="7">
                    {Object.entries(overdriveTokens.color).filter(([key]) => key !== 'gamut').map(([group, colours]) => <FlexStack gap="4" key={group}>
                                <Heading as="h2" className={labels}>
                                    {group}
                                </Heading>

                                <div className={gridSwatches}>
                                    {Object.entries(colours).map(([colour, cssVar]) => <FlexStack gap="1" key={colour}>
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
                                            </FlexStack>)}
                                </div>
                            </FlexStack>)}
                </FlexStack>
            </FlexStack>;
  }
}`,...s.parameters?.docs?.source}}};const F=["ThemeColours"];export{s as ThemeColours,F as __namedExportsOrder,v as default};
