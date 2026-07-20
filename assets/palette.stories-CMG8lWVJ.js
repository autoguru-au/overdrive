import{e,H as c,p as d,z as p,r as f}from"./iframe-BIDnS-AI.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Foundation/Colour Palette",tags:["!autodocs"]},x=[{label:"Adventure Green",token:"Green-500",hex:d.green[500],text:"#212338"},{label:"Zest Yellow",token:"Yellow-500",hex:d.yellow[500],text:"#212338"},{label:"Tarmac Black",token:"Gray-900",hex:d.gray[900],text:"#ffffff"}],n=o=>Object.fromEntries(Object.entries(p[o]).reverse().map(([a,r])=>[`${a} `,r.toUpperCase()])),m={display:"flex",flexDirection:"column",border:"1px solid #e4e7ea",borderRadius:12,overflow:"hidden",background:"#ffffff"},g={display:"flex",alignItems:"center",gap:10,padding:"11px 16px",borderBottom:"1px solid #eef0f2",fontSize:13,fontWeight:700,color:"#212338"},u={fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",color:"#00574c",background:"#e5f4ef",borderRadius:999,padding:"3px 9px"},y={flex:1,background:"#f6f7f9",color:"#212338",margin:0,padding:"16px 20px",fontSize:12.5,lineHeight:1.75,overflowX:"auto",fontFamily:'ui-monospace, "SF Mono", Menlo, Consolas, monospace'},l=({title:o,colors:a})=>e.createElement("div",{style:{display:"flex",gap:16,alignItems:"flex-start",padding:"14px 0",borderTop:"1px solid #eef0f2"}},e.createElement("div",{style:{flex:"0 0 96px",fontWeight:700,fontSize:14}},o),e.createElement("div",{style:{flex:1,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(72px, 1fr))",gap:8}},Object.entries(a).map(([r,t])=>e.createElement("div",{key:r},e.createElement("div",{style:{background:t,height:48,borderRadius:6,boxShadow:"inset 0 0 0 1px rgba(33, 35, 56, 0.1)"}}),e.createElement("div",{style:{fontSize:11,fontWeight:600,color:"#212338",marginTop:6}},r.trim()),e.createElement("div",{style:{fontSize:10,color:"#5c6172",fontFamily:'ui-monospace, "SF Mono", Menlo, monospace'}},t))))),v=["green","yellow","blue","red","gray"],h=()=>{const[o,a]=f.useState("green"),r=Object.entries(p[o]);return e.createElement("div",{style:{background:"#ffffff",border:"1px solid #e4e7ea",borderRadius:16,padding:24,boxShadow:"0 1px 2px rgba(33, 35, 56, 0.04), 0 8px 24px rgba(33, 35, 56, 0.06)"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20}},e.createElement("span",{style:{fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:"#5c6172",marginRight:2}},"Colour"),v.map(t=>e.createElement("button",{key:t,type:"button",title:t,"aria-label":t,"aria-pressed":t===o,onClick:()=>a(t),style:{width:26,height:26,borderRadius:"50%",padding:0,border:t===o?"2px solid #212338":"2px solid rgba(33, 35, 56, 0.15)",background:p[t][500],cursor:"pointer",boxShadow:t===o?"0 0 0 3px rgba(33, 35, 56, 0.1)":"none",transition:"box-shadow 120ms ease, border-color 120ms ease"}})),e.createElement("span",{style:{marginLeft:"auto",color:"#212338",fontWeight:700,fontSize:15,textTransform:"capitalize"}},o)),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(9, 1fr)",gap:6,margin:"0 0 20px"}},r.map(([t,i])=>e.createElement("div",{key:t,title:`--od-color-gamut-${o}-${t}`},e.createElement("div",{style:{background:i,borderRadius:8,height:60,boxShadow:"inset 0 0 0 1px rgba(33, 35, 56, 0.1)"}}),e.createElement("div",{style:{color:"#5c6172",fontSize:11,textAlign:"center",marginTop:6,fontFamily:'ui-monospace, "SF Mono", Menlo, monospace'}},t,e.createElement("br",null),i.toUpperCase())))),e.createElement("pre",{style:{background:"#f6f7f9",color:"#212338",margin:0,padding:"16px 20px",borderRadius:10,fontSize:12.5,lineHeight:1.7,overflowX:"auto",fontFamily:'ui-monospace, "SF Mono", Menlo, Consolas, monospace'}},r.map(([t,i])=>`--od-color-gamut-${o}-${t}: ${i.toUpperCase()};`).join(`
`)))},s={render:()=>e.createElement("div",null,e.createElement(c,null,"Colour Palette"),e.createElement("p",{style:{maxWidth:720}},"The AutoGuru Design System colour ramps. Every colour ships from step 100 (lightest) to 900 (darkest) as a CSS custom property."),e.createElement("div",{style:{display:"flex",gap:16,margin:"24px 0 40px"}},e.createElement("div",{style:{flex:"0 0 96px",fontWeight:700,fontSize:14}},"Core brand"),e.createElement("div",{style:{flex:1,display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:16}},x.map(({label:o,token:a,hex:r,text:t})=>e.createElement("div",{key:a},e.createElement("div",{style:{fontSize:12,color:"#5c6172",marginBottom:8}},o),e.createElement("div",{style:{background:r,borderRadius:12,height:120,padding:16,display:"flex",flexDirection:"column",justifyContent:"flex-end",color:t}},e.createElement("div",{style:{fontWeight:700,fontSize:15}},a),e.createElement("div",{style:{fontSize:13,opacity:.85}},r.toUpperCase())))))),e.createElement("div",{style:{margin:"8px 0 40px"}},e.createElement(l,{title:"Green",colors:n("green")}),e.createElement(l,{title:"Gray",colors:n("gray")}),e.createElement(l,{title:"Yellow",colors:n("yellow")}),e.createElement(l,{title:"Blue",colors:n("blue")}),e.createElement(l,{title:"Red",colors:n("red")}),e.createElement(l,{title:"White",colors:{white:d.white.toUpperCase()}})),e.createElement(c,{as:"h2"},"Usage"),e.createElement("p",{style:{maxWidth:720}},"Every ramp step ships as a CSS custom property. Pair text and background steps that meet WCAG AA contrast (4.5:1 for normal text)."),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:16,margin:"16px 0 8px",alignItems:"stretch"}},e.createElement("div",{style:m},e.createElement("div",{style:g},e.createElement("span",{style:u},"Tokens")," Custom properties"),e.createElement("pre",{style:y},["--od-color-gamut-gray-{100-900}","--od-color-gamut-green-{100-900}","--od-color-gamut-blue-{100-900}","--od-color-gamut-yellow-{100-900}","--od-color-gamut-red-{100-900}","--od-color-gamut-white"].join(`
`))),e.createElement("div",{style:m},e.createElement("div",{style:g},e.createElement("span",{style:u},"CSS")," Button sample"),e.createElement("pre",{style:y},["button.green {","  color: var(--od-color-gamut-white);","  background-color: var(--od-color-gamut-green-800);","  border: 1px solid var(--od-color-gamut-green-900);","","  &:hover {","    background-color: var(--od-color-gamut-green-900);","  }","}"].join(`
`)))),e.createElement(c,{as:"h2"},"Dynamic Palette"),e.createElement("p",{style:{maxWidth:720}},"Pick a colour to explore its ramp and the exact custom properties it ships. Every swatch and value below is a real token from ",e.createElement("code",null,"lib/themes/base/colours.ts"),"."),e.createElement(h,null))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
            <Heading>Colour Palette</Heading>
            <p style={{
      maxWidth: 720
    }}>
                The AutoGuru Design System colour ramps. Every colour ships from
                step 100 (lightest) to 900 (darkest) as a CSS custom property.
            </p>

            <div style={{
      display: 'flex',
      gap: 16,
      margin: '24px 0 40px'
    }}>
                <div style={{
        flex: '0 0 96px',
        fontWeight: 700,
        fontSize: 14
      }}>
                    Core brand
                </div>
                <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 16
      }}>
                    {coreBrand.map(({
          label,
          token,
          hex,
          text
        }) => <div key={token}>
                            <div style={{
            fontSize: 12,
            color: '#5c6172',
            marginBottom: 8
          }}>
                                {label}
                            </div>
                            <div style={{
            background: hex,
            borderRadius: 12,
            height: 120,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            color: text
          }}>
                                <div style={{
              fontWeight: 700,
              fontSize: 15
            }}>
                                    {token}
                                </div>
                                <div style={{
              fontSize: 13,
              opacity: 0.85
            }}>
                                    {hex.toUpperCase()}
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>

            <div style={{
      margin: '8px 0 40px'
    }}>
                <RampRow title="Green" colors={ramp('green')} />
                <RampRow title="Gray" colors={ramp('gray')} />
                <RampRow title="Yellow" colors={ramp('yellow')} />
                <RampRow title="Blue" colors={ramp('blue')} />
                <RampRow title="Red" colors={ramp('red')} />
                <RampRow title="White" colors={{
        white: colourMap.white.toUpperCase()
      }} />
            </div>

            <Heading as="h2">Usage</Heading>
            <p style={{
      maxWidth: 720
    }}>
                Every ramp step ships as a CSS custom property. Pair text and
                background steps that meet WCAG AA contrast (4.5:1 for normal
                text).
            </p>

            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 16,
      margin: '16px 0 8px',
      alignItems: 'stretch'
    }}>
                <div style={codeCard}>
                    <div style={codeHead}>
                        <span style={codeTag}>Tokens</span> Custom properties
                    </div>
                    <pre style={codeBody}>
                        {['--od-color-gamut-gray-{100-900}', '--od-color-gamut-green-{100-900}', '--od-color-gamut-blue-{100-900}', '--od-color-gamut-yellow-{100-900}', '--od-color-gamut-red-{100-900}', '--od-color-gamut-white'].join('\\n')}
                    </pre>
                </div>
                <div style={codeCard}>
                    <div style={codeHead}>
                        <span style={codeTag}>CSS</span> Button sample
                    </div>
                    <pre style={codeBody}>
                        {['button.green {', '  color: var(--od-color-gamut-white);', '  background-color: var(--od-color-gamut-green-800);', '  border: 1px solid var(--od-color-gamut-green-900);', '', '  &:hover {', '    background-color: var(--od-color-gamut-green-900);', '  }', '}'].join('\\n')}
                    </pre>
                </div>
            </div>

            <Heading as="h2">Dynamic Palette</Heading>
            <p style={{
      maxWidth: 720
    }}>
                Pick a colour to explore its ramp and the exact custom
                properties it ships. Every swatch and value below is a real
                token from <code>lib/themes/base/colours.ts</code>.
            </p>

            <DynamicPalette />
        </div>
}`,...s.parameters?.docs?.source}}};const C=["ColourPalette"];export{s as ColourPalette,C as __namedExportsOrder,S as default};
