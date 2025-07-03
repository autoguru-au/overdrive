import{e as r}from"./iframe-BwudkRGz.js";import{B as s}from"./Badge-ojQh5L31.js";const m=["blue","red","green","yellow","neutral"],g={title:"Content/Badge",component:s},l={decorators:[],args:{label:"TITANIUM"}},o={decorators:[a=>r.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},r.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},a()))],args:{label:"TITANIUM"},render:a=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...a,colour:e})))},n={decorators:o.decorators,args:{label:"TITANIUM",size:"large"},render:a=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...a,colour:e})))},t={decorators:o.decorators,args:{label:"TITANIUM",size:"small"},render:a=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...a,colour:e})))},d={decorators:o.decorators,args:{label:"TITANIUM",look:"inverted"}},c={decorators:o.decorators,args:{label:"TITANIUM",look:"inverted"},render:a=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...a,colour:e})))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [],
  args: {
    label: 'TITANIUM'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const i=["Standard","StandardAllColours","LargeAllColours","SmallAllColours","Inverted","InvertedAllColours"];export{d as Inverted,c as InvertedAllColours,n as LargeAllColours,t as SmallAllColours,l as Standard,o as StandardAllColours,i as __namedExportsOrder,g as default};
