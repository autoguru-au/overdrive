import{e,H as t,o as n}from"./iframe-CQI638ZW.js";import{S as r,l as c,g as d,v as i,c as u}from"./index-C4exzySg.js";function p(a){return a.replace(/([A-Z])/g," $1").trim()}function g(a){return a.replace(/([A-Z])/g,"-$1").trim().toLocaleLowerCase()}const S={title:"Foundation/Theme Colours",tags:["!autodocs","updated"]},s={render:()=>e.createElement(r,null,e.createElement("hgroup",null,e.createElement(t,null,"Theme Colours"),e.createElement("p",{style:{fontStyle:"italic"}},"These colours are a work in progress. Tokens may be added, renamed or colours reassigned.")),e.createElement(r,{space:"md"},Object.entries(n.color).filter(([a])=>a!=="gamut").map(([a,l])=>e.createElement(r,{key:a},e.createElement(t,{as:"h2",className:c},a),e.createElement("div",{className:d},Object.entries(l).map(([o,m])=>e.createElement(r,{space:"xxs",key:o},e.createElement("div",{className:i({shape:"rectangle"}),style:{background:m}}),e.createElement("div",{className:c},p(o)),e.createElement("code",{className:u},"--od-color-",a,"-",g(o)))))))))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const h=["ThemeColours"];export{s as ThemeColours,h as __namedExportsOrder,S as default};
