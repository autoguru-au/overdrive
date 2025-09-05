import{e as r}from"./iframe-PgZJ2afo.js";import{B as s}from"./Badge-B2gBj5GV.js";import"./preload-helper-D9Z9MdNV.js";const m=["blue","red","green","yellow","neutral"],i={title:"Content/Badge",component:s},l={decorators:[],args:{label:"TITANIUM"}},a={decorators:[o=>r.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},r.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},o()))],args:{label:"TITANIUM"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},n={decorators:a.decorators,args:{label:"TITANIUM",size:"large"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},t={decorators:a.decorators,args:{label:"TITANIUM",size:"small"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},d={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"}},c={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [],
  args: {
    label: 'TITANIUM'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '10px'
  }}>
                <div style={{
      display: 'grid',
      gap: '10px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(10px, max-content))'
    }}>
                    {story()}
                </div>
            </div>],
  args: {
    label: 'TITANIUM'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'large'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'small'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...c.parameters?.docs?.source}}};const I=["Standard","StandardAllColours","LargeAllColours","SmallAllColours","Inverted","InvertedAllColours"];export{d as Inverted,c as InvertedAllColours,n as LargeAllColours,t as SmallAllColours,l as Standard,a as StandardAllColours,I as __namedExportsOrder,i as default};
