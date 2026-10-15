import{r as c,B as d,e}from"./iframe-DYr4QcUl.js";import{u as g}from"./index-qn6AHRQH.js";import{B as p}from"./Button-jyQCl5Lh.js";import{T as t}from"./Text-_NqxEwbM.js";import{S as m}from"./StandardModal-DRwD6ecJ.js";import"./preload-helper-PPVm8Dsz.js";import"./styles.css-BhRox2Ho.js";import"./Icon-ClIl3lqs.js";import"./resolveResponsiveProps-CwCD898-.js";import"./ProgressSpinner-CBe-pJ1U.js";import"./Modal-Cq2fi3hr.js";import"./Portal-BTs0nJn5.js";import"./index-BZm1UysS.js";import"./index-9RTDjsm6.js";import"./XIcon-Cgv5MgU8.js";const o=({primaryLabel:a,onPrimaryClick:s,secondaryLabel:i,onSecondaryClick:l,className:b,testId:f})=>c.createElement(d,{odComponent:"modal-footer",testId:f,display:"flex",alignItems:"center",justifyContent:"flexEnd",gap:"3",width:"full",paddingY:"5",paddingX:"5",className:b},i?c.createElement(p,{variant:"secondary",size:"medium",onClick:l},i):null,c.createElement(p,{variant:"primary",size:"medium",onClick:s},a));o.displayName="ModalFooter";try{o.displayName="ModalFooter",o.__docgenInfo={description:"Locked-down footer for the `footer` slot on `StandardModal`: one primary\naction and an optional secondary action, right-aligned with a 12px gap and\nstandard padding. Button variant, size and ordering are fixed so every\nmodal footer looks the same — only the labels and click handlers are the\nconsumer's.",displayName:"ModalFooter",props:{primaryLabel:{defaultValue:null,description:"Label for the primary action button, rendered on the far right.",name:"primaryLabel",required:!0,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:`Called when the primary button is clicked. Closing the modal is the
consumer's job — nothing here closes it, so a Save that validates or
awaits an async call never closes the modal before the work finishes.`,name:"onPrimaryClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},secondaryLabel:{defaultValue:null,description:`Label for the optional secondary button (e.g. Cancel), rendered to the
left of the primary. Omit for a single-button footer.`,name:"secondaryLabel",required:!1,type:{name:"string"}},onSecondaryClick:{defaultValue:null,description:"Called when the secondary button is clicked.",name:"onSecondaryClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:null,description:"Flexible className that accepts strings, arrays and objects",name:"className",required:!1,type:{name:"ClassValue"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{action:n}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Components/Modal: Standard with Title",tags:["skip-themes"],component:m,argTypes:{children:{control:!1}},render:({isOpen:a,onRequestClose:s,...i})=>e.createElement(m,{...i,...g(a,s)})},v=a=>e.createElement("div",{style:{minHeight:"880px"}},e.createElement(a,null),e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris, malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod imperdiet."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac risus malesuada, quis varius purus interdum. Donec volutpat dolor in euismod hendrerit. Integer posuere tortor sit amet turpis viverra euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel. Etiam interdum odio a tortor fermentum, molestie interdum tellus bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar nunc."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec libero commodo egestas. Donec faucibus, felis eget euismod facilisis, urna tortor molestie ex, eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer ultrices massa commodo eleifend facilisis. Vestibulum dapibus magna cursus metus pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue est."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla quam magna, aliquet et odio non, porta condimentum tellus. Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies suscipit. Quisque sagittis tempus diam, malesuada posuere lorem sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc consequat porta."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada tellus. In nec fringilla elit. Cras vitae metus et leo convallis consectetur. Cras quis congue sapien, vitae aliquet ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum justo, a faucibus ex dictum non. Vestibulum et dui diam.")),r={args:{title:"Title",isOpen:!0,onRequestClose:n("onChange"),children:e.createElement(d,{padding:"7"},e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris, malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod imperdiet."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac risus malesuada, quis varius purus interdum. Donec volutpat dolor in euismod hendrerit. Integer posuere tortor sit amet turpis viverra euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel. Etiam interdum odio a tortor fermentum, molestie interdum tellus bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar nunc."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec libero commodo egestas. Donec faucibus, felis eget euismod facilisis, urna tortor molestie ex, eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer ultrices massa commodo eleifend facilisis. Vestibulum dapibus magna cursus metus pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue est."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla quam magna, aliquet et odio non, porta condimentum tellus. Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies suscipit. Quisque sagittis tempus diam, malesuada posuere lorem sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc consequat porta."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada tellus. In nec fringilla elit. Cras vitae metus et leo convallis consectetur. Cras quis congue sapien, vitae aliquet ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum justo, a faucibus ex dictum non. Vestibulum et dui diam."))},decorators:[v]},q=e.createElement(d,{padding:"7"},e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus.")),u={args:{title:"Add asset",isOpen:!0,onRequestClose:n("onRequestClose"),children:q,buttonCount:2},argTypes:{buttonCount:{control:{type:"inline-radio"},options:[1,2]},footer:{control:!1},children:{control:!1}},render:({buttonCount:a,isOpen:s,onRequestClose:i,...l})=>e.createElement(m,{...l,...g(s,i),footer:e.createElement(o,{primaryLabel:"Confirm",onPrimaryClick:n("confirm"),secondaryLabel:a>=2?"Cancel":void 0,onSecondaryClick:n("cancel")})}),decorators:[v]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    isOpen: true,
    onRequestClose: action('onChange'),
    children: <Box padding="7">
                <Text size="p1" color="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis convallis neque a laoreet maximus. Vestibulum hendrerit
                    quam at mi venenatis faucibus at vel nisi. In ut risus et
                    ipsum tincidunt tempor. Suspendisse potenti. Praesent
                    faucibus posuere risus, at congue mauris porttitor ut. Donec
                    sit amet elit vitae purus dictum aliquet quis ut ligula.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Vestibulum dui sapien,
                    porttitor ac erat vel, malesuada rutrum mauris. Nam arcu
                    tellus, pretium ut aliquet eget, ultrices vel est. Maecenas
                    dapibus volutpat eros a volutpat.
                </Text>
                <br />
                <Text size="p1" color="secondary">
                    Sed ante dui, sagittis sit amet tortor nec, egestas
                    tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet
                    pharetra risus, a posuere magna. Pellentesque finibus arcu
                    vitae orci luctus sagittis. Proin porta metus ut dapibus
                    pharetra. Sed interdum mi et tristique aliquam. Curabitur
                    finibus at dolor eu fermentum. Cras diam mauris, malesuada
                    quis lacinia eu, porttitor at lectus. Duis pellentesque ante
                    eget efficitur lacinia. Vivamus ornare venenatis tortor
                    euismod imperdiet.
                </Text>
                <br />
                <Text size="p1" color="secondary">
                    Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla
                    tempus semper velit, id ullamcorper orci molestie vel. Sed
                    maximus nisi ac risus malesuada, quis varius purus interdum.
                    Donec volutpat dolor in euismod hendrerit. Integer posuere
                    tortor sit amet turpis viverra euismod. Mauris scelerisque
                    ex diam, eget sodales erat accumsan vel. Etiam interdum odio
                    a tortor fermentum, molestie interdum tellus bibendum.
                    Vivamus vitae pulvinar ante. Aenean convallis aliquam velit
                    congue ultricies. Aenean vel blandit erat. Mauris quis
                    auctor nibh. Morbi dui ipsum, lobortis non nisi vitae,
                    convallis pulvinar nunc.
                </Text>
                <br />
                <Text size="p1" color="secondary">
                    Morbi mollis massa in eros tempus, ut venenatis ligula
                    posuere. Nam ut ante lectus. Integer congue risus arcu, et
                    ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae
                    consectetur vitae, volutpat a elit. Nulla luctus faucibus
                    ipsum vitae maximus. Quisque in est nec libero commodo
                    egestas. Donec faucibus, felis eget euismod facilisis, urna
                    tortor molestie ex, eu eleifend leo tellus vel ligula.
                    Mauris et urna massa. Integer ultrices massa commodo
                    eleifend facilisis. Vestibulum dapibus magna cursus metus
                    pellentesque tempor. Donec blandit elementum feugiat. Sed
                    nec congue est.
                </Text>
                <br />
                <Text size="p1" color="secondary">
                    Nulla quam magna, aliquet et odio non, porta condimentum
                    tellus. Maecenas fringilla sodales erat eu facilisis. Nunc
                    rutrum purus quis diam tempus laoreet. Fusce gravida arcu et
                    lectus ultricies suscipit. Quisque sagittis tempus diam,
                    malesuada posuere lorem sagittis et. Duis eget eros nibh.
                    Aenean at augue tincidunt nunc consequat porta.
                </Text>
                <br />
                <Text size="p1" color="secondary">
                    Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel
                    malesuada tellus. In nec fringilla elit. Cras vitae metus et
                    leo convallis consectetur. Cras quis congue sapien, vitae
                    aliquet ante. Integer sed lorem pretium, vestibulum arcu eu,
                    imperdiet mauris. Nam blandit pharetra feugiat. Maecenas
                    eget ante metus. Vivamus pretium ipsum justo, a faucibus ex
                    dictum non. Vestibulum et dui diam.
                </Text>
            </Box>
  },
  decorators: [withPageBackground]
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Add asset',
    isOpen: true,
    onRequestClose: action('onRequestClose'),
    children: shortBody,
    buttonCount: 2
  },
  argTypes: {
    buttonCount: {
      control: {
        type: 'inline-radio'
      },
      options: [1, 2]
    },
    footer: {
      control: false
    },
    children: {
      control: false
    }
  },
  render: ({
    buttonCount,
    isOpen,
    onRequestClose,
    ...args
  }) => <StandardModal {...args} {...useModalOpenState(isOpen, onRequestClose)} footer={<ModalFooter primaryLabel="Confirm" onPrimaryClick={action('confirm')} secondaryLabel={buttonCount >= 2 ? 'Cancel' : undefined} onSecondaryClick={action('cancel')} />} />,
  decorators: [withPageBackground]
}`,...u.parameters?.docs?.source},description:{story:"The `footer` prop pins its content to the bottom of the modal with a 1px\ntop divider. The body area above scrolls; the footer stays put.\n`ModalFooter` is the locked-down footer for it: one primary action and an\noptional secondary action, with variant, size and ordering fixed so every\nmodal footer looks the same. Use the `buttonCount` control to preview one\nor two buttons.",...u.parameters?.docs?.description}}};const O=["Standard","WithFooterActions"];export{r as Standard,u as WithFooterActions,O as __namedExportsOrder,w as default};
