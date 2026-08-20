import{e as r,B as o}from"./iframe-DGCWEvN6.js";import{T as c}from"./Text-ao7EXZo6.js";import{s as l,S as i}from"./Switch-CFszjKQY.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlledState-CGd6-Lix.js";import"./index-CA_YdZg4.js";import"./index-CnKfxc4E.js";import"./useFocusRing-Dj137Dr8.js";import"./VisuallyHidden-BDPXiLGO.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"Forms & Input Fields/Switch",component:i,tags:[],args:{name:"switch",value:"yes",isSelected:void 0,isDisabled:void 0,onChange:n()},argTypes:{children:{control:!1},isSelected:{control:"boolean"},disabled:{control:!1},toggled:{control:!1}}},e={args:{children:r.createElement(c,null,"Text description for the switch"),className:l}},s={render:a=>r.createElement(o,{display:"flex",alignItems:"center",style:{gap:"0.75rem"}},r.createElement(o,{as:"label",htmlFor:a.id},"Text description for the switch"),r.createElement(i,{...a})),args:{id:"test-switch-id"}},t={args:{isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Text>Text description for the switch</Text>,
    className: storyLabel
  }
}`,...e.parameters?.docs?.source},description:{story:"Passes in the text label and styles for the layout",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Box display="flex" alignItems="center" style={{
    gap: '0.75rem'
  }}>
            <Box as="label" htmlFor={args['id']}>
                Text description for the switch
            </Box>
            <Switch {...args} />
        </Box>,
  args: {
    id: 'test-switch-id'
  }
}`,...s.parameters?.docs?.source},description:{story:"Custom label using `id` and `htmlFor`",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};const T=["Uncontrolled","WithLabel","Disabled"];export{t as Disabled,e as Uncontrolled,s as WithLabel,T as __namedExportsOrder,y as default};
