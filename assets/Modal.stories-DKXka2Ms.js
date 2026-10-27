import{r as e,B as m}from"./iframe-BqRRH7-4.js";import{u as d}from"./index-CaeamQYG.js";import{T as t}from"./Text-Dqt-92eI.js";import{M as l}from"./Modal-CK7oZdFo.js";import"./preload-helper-PPVm8Dsz.js";import"./styles.css-DDIhtuNc.js";import"./Portal-DW5sOgWP.js";import"./index-BMDQTYBq.js";import"./index-3BnS4p5I.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,{expect:o,fn:g,waitFor:v,within:b}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Modal",component:l,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:!1}},render:({isOpen:r,onRequestClose:i,...a})=>e.createElement(l,{...a,...d(r,i)})},c=()=>e.createElement(e.Fragment,null,e.createElement(m,{backgroundColor:"gray200",padding:"5",borderRadius:"medium"},e.createElement("p",null,"Hello, I am a modal body!")),e.createElement(t,{size:"p1",color:"secondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris, malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod imperdiet."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac risus malesuada, quis varius purus interdum. Donec volutpat dolor in euismod hendrerit. Integer posuere tortor sit amet turpis viverra euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel. Etiam interdum odio a tortor fermentum, molestie interdum tellus bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar nunc."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec libero commodo egestas. Donec faucibus, felis eget euismod facilisis, urna tortor molestie ex, eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer ultrices massa commodo eleifend facilisis. Vestibulum dapibus magna cursus metus pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue est."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nulla quam magna, aliquet et odio non, porta condimentum tellus. Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies suscipit. Quisque sagittis tempus diam, malesuada posuere lorem sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc consequat porta."),e.createElement("br",null),e.createElement(t,{size:"p1",color:"secondary"},"Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada tellus. In nec fringilla elit. Cras vitae metus et leo convallis consectetur. Cras quis congue sapien, vitae aliquet ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum justo, a faucibus ex dictum non. Vestibulum et dui diam.")),n={args:{isOpen:!0,onRequestClose:p("onRequestClose"),children:e.createElement(c,null)}},s={tags:["test","!autodocs","skip-themes"],args:{isOpen:!0,onRequestClose:g(),children:e.createElement(c,null)},play:async({args:r,userEvent:i,step:a})=>{const u=b(document.body);await a("other keys leave the modal open",async()=>{await i.keyboard("{Enter}"),await o(u.getAllByRole("presentation")[0]).toBeInTheDocument()}),await a("Escape closes the modal",async()=>{await i.keyboard("{Escape}"),await v(async()=>{await o(u.queryAllByRole("presentation")).toHaveLength(0)})}),await a("reports the escapeKeyDown reason",async()=>{await o(r.onRequestClose).toHaveBeenCalledWith("escapeKeyDown")})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onRequestClose: action('onRequestClose'),
    children: <ModalContent />
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs', 'skip-themes'],
  args: {
    isOpen: true,
    onRequestClose: fn(),
    children: <ModalContent />
  },
  play: async ({
    args,
    userEvent,
    step
  }) => {
    // The modal renders through a Portal, so it sits outside \`canvasElement\`
    // — scope queries to the document body rather than the story canvas.
    const portal = within(document.body);
    await step('other keys leave the modal open', async () => {
      await userEvent.keyboard('{Enter}');
      await expect(portal.getAllByRole('presentation')[0]).toBeInTheDocument();
    });
    await step('Escape closes the modal', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(async () => {
        await expect(portal.queryAllByRole('presentation')).toHaveLength(0);
      });
    });
    await step('reports the escapeKeyDown reason', async () => {
      await expect(args.onRequestClose).toHaveBeenCalledWith('escapeKeyDown');
    });
  }
}`,...s.parameters?.docs?.source},description:{story:"Keyboard behaviour for `closeOnEscapeKeyDown`. Kept off the docs page but\nleft in the sidebar, so you can watch the steps run in the Interactions\npanel.",...s.parameters?.docs?.description}}};const x=["Standard","KeyboardTest"];export{s as KeyboardTest,n as Standard,x as __namedExportsOrder,D as default};
