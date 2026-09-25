import{r as o,B as l,e}from"./iframe-DUkgvalV.js";import{B as m}from"./Button-3QnB9gMa.js";import{T as t}from"./Text-DzL8dYyv.js";import{S as d}from"./StandardModal-BidvE7_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CZlUp0F_.js";import"./resolveResponsiveProps-B8iv0r4y.js";import"./ProgressSpinner-dhucdQ5e.js";import"./Modal-Bd_u3i_0.js";import"./Portal-Dd-EH5zA.js";import"./index-D5QrLjuV.js";import"./index-CoZyPIWB.js";import"./XIcon-C5jclrQ9.js";const r=({primaryLabel:a,onPrimaryClick:n,secondaryLabel:c,onSecondaryClick:g,className:v,testId:b})=>o.createElement(l,{odComponent:"modal-footer",testId:b,display:"flex",alignItems:"center",justifyContent:"flexEnd",gap:"3",width:"full",paddingY:"5",paddingX:"5",className:v},c?o.createElement(m,{variant:"secondary",size:"medium",onClick:g},c):null,o.createElement(m,{variant:"primary",size:"medium",onClick:n},a));r.displayName="ModalFooter";try{r.displayName="ModalFooter",r.__docgenInfo={description:"Locked-down footer for the `footer` slot on `StandardModal`: one primary\naction and an optional secondary action, right-aligned with a 12px gap and\nstandard padding. Button variant, size and ordering are fixed so every\nmodal footer looks the same — only the labels and click handlers are the\nconsumer's.",displayName:"ModalFooter",props:{primaryLabel:{defaultValue:null,description:"Label for the primary action button, rendered on the far right.",name:"primaryLabel",required:!0,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:`Called when the primary button is clicked. Closing the modal is the
consumer's job — nothing here closes it, so a Save that validates or
awaits an async call never closes the modal before the work finishes.`,name:"onPrimaryClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},secondaryLabel:{defaultValue:null,description:`Label for the optional secondary button (e.g. Cancel), rendered to the
left of the primary. Omit for a single-button footer.`,name:"secondaryLabel",required:!1,type:{name:"string"}},onSecondaryClick:{defaultValue:null,description:"Called when the secondary button is clicked.",name:"onSecondaryClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:null,description:"Flexible className that accepts strings, arrays and objects",name:"className",required:!1,type:{name:"ClassValue"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{action:u}=__STORYBOOK_MODULE_ACTIONS__,z={title:"Components/Modal: Standard with Title",tags:["skip-themes"],component:d,argTypes:{children:{control:!1}}},p=a=>e.createElement("div",{style:{minHeight:"880px"}},e.createElement(a,null),e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris, malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod imperdiet."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac risus malesuada, quis varius purus interdum. Donec volutpat dolor in euismod hendrerit. Integer posuere tortor sit amet turpis viverra euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel. Etiam interdum odio a tortor fermentum, molestie interdum tellus bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar nunc."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec libero commodo egestas. Donec faucibus, felis eget euismod facilisis, urna tortor molestie ex, eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer ultrices massa commodo eleifend facilisis. Vestibulum dapibus magna cursus metus pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue est."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla quam magna, aliquet et odio non, porta condimentum tellus. Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies suscipit. Quisque sagittis tempus diam, malesuada posuere lorem sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc consequat porta."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada tellus. In nec fringilla elit. Cras vitae metus et leo convallis consectetur. Cras quis congue sapien, vitae aliquet ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum justo, a faucibus ex dictum non. Vestibulum et dui diam.")),s={args:{title:"Title",isOpen:!0,onRequestClose:u("onChange"),children:e.createElement(l,{padding:"7"},e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris, malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod imperdiet."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac risus malesuada, quis varius purus interdum. Donec volutpat dolor in euismod hendrerit. Integer posuere tortor sit amet turpis viverra euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel. Etiam interdum odio a tortor fermentum, molestie interdum tellus bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar nunc."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec libero commodo egestas. Donec faucibus, felis eget euismod facilisis, urna tortor molestie ex, eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer ultrices massa commodo eleifend facilisis. Vestibulum dapibus magna cursus metus pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue est."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla quam magna, aliquet et odio non, porta condimentum tellus. Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies suscipit. Quisque sagittis tempus diam, malesuada posuere lorem sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc consequat porta."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada tellus. In nec fringilla elit. Cras vitae metus et leo convallis consectetur. Cras quis congue sapien, vitae aliquet ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum justo, a faucibus ex dictum non. Vestibulum et dui diam."))},decorators:[p]},f=e.createElement(l,{padding:"7"},e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus.")),i={args:{title:"Add asset",isOpen:!0,onRequestClose:u("onRequestClose"),children:f,buttonCount:2},argTypes:{buttonCount:{control:{type:"inline-radio"},options:[1,2]},footer:{control:!1},children:{control:!1}},render:({buttonCount:a,...n})=>e.createElement(d,{...n,footer:e.createElement(r,{primaryLabel:"Confirm",onPrimaryClick:u("confirm"),secondaryLabel:a>=2?"Cancel":void 0,onSecondaryClick:u("cancel")})}),decorators:[p]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    ...args
  }) => <StandardModal {...args} footer={<ModalFooter primaryLabel="Confirm" onPrimaryClick={action('confirm')} secondaryLabel={buttonCount >= 2 ? 'Cancel' : undefined} onSecondaryClick={action('cancel')} />} />,
  decorators: [withPageBackground]
}`,...i.parameters?.docs?.source},description:{story:"The `footer` prop pins its content to the bottom of the modal with a 1px\ntop divider. The body area above scrolls; the footer stays put.\n`ModalFooter` is the locked-down footer for it: one primary action and an\noptional secondary action, with variant, size and ordering fixed so every\nmodal footer looks the same. Use the `buttonCount` control to preview one\nor two buttons.",...i.parameters?.docs?.description}}};const k=["Standard","WithFooterActions"];export{s as Standard,i as WithFooterActions,k as __namedExportsOrder,z as default};
