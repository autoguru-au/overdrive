import{D as K,V as de,J as me,r as n,e,m as L,f as ne,K as ue,X as be,B as x,t as re,Y as pe,c as Te,F as ge,i as Y}from"./iframe-knNj_dc4.js";import{F as G}from"./FlexInline-Bk50ppJw.js";import{F as le}from"./FlexStack-Dc3IvYGq.js";import{I as M}from"./Icon-Pa4szK58.js";import{E as Q}from"./Positioner-Dd5y2L8a.js";import{S as Ee}from"./StarRating-Bq8XPua7.js";import{T as Z}from"./Tooltip-BTilXpLw.js";import{i as fe}from"./flex-te1JVRl7.js";import{T as he}from"./Text-DYxReNNp.js";import{B as ee}from"./Button-_xGdpBwV.js";import{I as ye}from"./ArrowLeftIcon-DrN1NiwH.js";import{I as ve}from"./ArrowRightIcon-D9Z1X6BV.js";import{I as _e}from"./OttoIcon-DO_v2vXG.js";import{I as Ce}from"./WarningIcon-YKSQxyDw.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveResponsiveProps-B51dRZJs.js";import"./Portal-ChV_0yn6.js";import"./index-De_gLM3F.js";import"./index-Crah3-4N.js";import"./StarIcon-DF0ntHjh.js";import"./StarHalfIcon-oUDnKbo-.js";import"./ProgressSpinner-twp3-hnc.js";var we=K({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2",minimal:"_11wt3mu3",segmented:"_11wt3mu4"},active:{true:"_11wt3mu5"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu6"],[{appearance:"pill",active:!0},"_11wt3mu7"],[{appearance:"minimal",active:!0},"_11wt3mu8"],[{appearance:"segmented",active:!0},"_11wt3mu9"]]}),Se="_11wt3mua",xe=K({defaultClassName:"_11wt3mub",variantClassNames:{appearance:{underlined:"_11wt3muc",pill:"_11wt3mud",minimal:"_11wt3mue",segmented:"_11wt3muf"},active:{true:"_11wt3mug"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3muh"],[{appearance:"pill",active:!0},"_11wt3mui"],[{appearance:"segmented",active:!0},"_11wt3muj"]]}),Pe=K({defaultClassName:"_1cu98lp0",variantClassNames:{appearance:{underlined:"_1cu98lp1",pill:"_1cu98lp2",minimal:"_1cu98lp3",segmented:"_1cu98lp4"},scroll:{true:"_1cu98lp5"}},defaultVariants:{},compoundVariants:[]}),Ie="_1cu98lp6";const I=n.createContext(null),R=({id:a,active:s=0,appearance:l="underlined",onChange:r,children:o})=>{const[d,c]=de(s,r),b=me(a??void 0),m=n.useRef(new Map),C=n.useCallback((h,g)=>{g?m.current.set(h,g):m.current.delete(h)},[]),w=n.useCallback(h=>m.current.get(h),[]),p=n.useCallback(()=>m.current.size,[]);return e.createElement(I.Provider,{value:n.useMemo(()=>({id:b,activeIndex:d,appearance:l,onChange:c,registerTab:C,getTab:w,getTabCount:p}),[b,d,l,c,C,w,p])},o)};R.displayName="Tabs";try{I.displayName="TabsContext",I.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{R.displayName="Tabs",R.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"Custom ID for the tabs container. Auto-generated if not provided.",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"Index of the currently active tab (0-based)",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"Visual appearance style for the tabs",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"minimal"'},{value:'"underlined"'},{value:'"segmented"'}]}},children:{defaultValue:null,description:"Tab navigation and content elements (typically TabList and TabPanes)",name:"children",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback fired when the active tab changes",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const ae={next:"scroll tabs right",prev:"scroll tabs left"},Ne=new Set(["ArrowRight","ArrowLeft","Home","End"]),te={ArrowRight:1,ArrowLeft:-1},D=n.createContext(null),f=({children:a,stretch:s=!1,scrollable:l=!1})=>{L.invariant(!(s&&l),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const r=n.useRef(null),o=n.useRef(null),d=n.Children.map(ne(a),(T,u)=>n.isValidElement(T)?e.createElement(D.Provider,{value:u},T):null),c=n.useContext(I);L.invariant(c!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:b,activeIndex:m,onChange:C}=c,w=b==="segmented";L.invariant(!(l&&w),'Tabs: `scrollable={true}` cannot be used with `appearance="segmented"`.');const[p,h]=n.useState({start:!1,end:!1}),g=ue(()=>{if(l){const{scrollWidth:T,clientWidth:u,scrollLeft:$}=r.current,S=$>1,y=$<T-u-1;(S!==p.start||y!==p.end)&&h({start:S,end:y})}}),se=n.useCallback(()=>{g()},[]),J=T=>{if(r.current){const u=r.current.scrollLeft+T;pe(r.current,"scrollLeft",u,300)}},ie=()=>J(-r.current.clientWidth),ce=()=>J(r.current.clientWidth),oe=n.useCallback(T=>{const u=T.key;if(!o.current||!Ne.has(u))return;T.preventDefault();const S=c.getTabCount();if(S===0)return;let y=m??0;u in te?y=((m??0)+te[u]+S)%S:u==="Home"?y=0:u==="End"&&(y=S-1),y!==m&&(C?.(y),requestAnimationFrame(()=>{const X=c.getTab(y);X?.focus(),X?.scrollIntoView({block:"nearest",inline:"nearest"})}))},[m,C,c]);n.useEffect(()=>{const T=be(r.current),u=()=>{g()};return T.addEventListener("resize",u,{passive:!0}),()=>{T.removeEventListener("resize",u)}},[]),n.useEffect(()=>{g()},[a,g]);const U=l&&(p.start||p.end);return e.createElement(x,{alignItems:"center",className:Pe({appearance:b,scroll:l})},U?e.createElement(ee,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!p.start,onClick:ie,"aria-label":ae.prev},e.createElement(M,{icon:ye})):null,e.createElement(x,{ref:r,className:[l&&Ie],onScroll:se},e.createElement(x,{ref:o,display:s||w?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",onKeyDown:oe,className:re({noWrap:!0})},d)),U?e.createElement(ee,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!p.end,onClick:ce,"aria-label":ae.next},e.createElement(M,{icon:ve})):null)};f.displayName="TabList";try{D.displayName="TabListContext",D.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{f.displayName="TabList",f.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const t=n.forwardRef(({children:a,id:s=null,indication:l=null,as:r="button"},o)=>{const d=n.useContext(I),c=n.useContext(D);L.invariant(d!==null&&c!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:b}=d,m=d.activeIndex===c,C=typeof s=="string"?s:`${d.id}-${c}-tab`,w=n.useCallback(g=>{c!=null&&d.registerTab(c,g??null),typeof o=="function"?o(g):o&&"current"in o&&(o.current=g)},[d,c,o]),p={className:Te(ge({as:typeof r=="string"?r:"button",display:"inline-flex",justifyContent:"center",backgroundColor:"transparent"}),re({color:"secondary",noWrap:!0,size:"3",weight:"bold"}),we({appearance:b,active:m})),role:"tab","aria-selected":m?"true":"false","data-controls":C,tabIndex:m?void 0:-1,onClick:()=>d.onChange?.(c),ref:w},h=e.createElement("div",{className:fe({gap:"2",align:"center",justify:"center",noWrap:!0})},e.createElement("span",{className:Se},a),typeof l=="number"&&e.createElement(he,{strong:!0,as:"span",size:"2",align:"center",display:"block",color:m?"reverse":"primary",className:xe({appearance:b,active:m})},l));return n.isValidElement(r)?n.cloneElement(r,p,h):n.createElement(r,p,h)});t.displayName="Tab";try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}},as:{defaultValue:{value:"button"},description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var Ae="_1e18dwc0",Le="_15xyz920";const z=n.createContext(null),v=({renderInactivePanes:a=!1,children:s,paddingTop:l="6",paddingBottom:r="6"})=>e.createElement(x,{paddingTop:l,paddingBottom:r,className:Le,width:"full"},n.Children.map(ne(s),(o,d)=>e.createElement(z.Provider,{value:{paneIndex:d,renderInactive:a}},o)));v.displayName="TabPanes";try{z.displayName="TabPanesContext",z.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{v.displayName="TabPanes",v.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '0': string; '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '11': string; '12': string; none: string; }, `var(--${string})`>, { ...; }>, (\"mobile\" | ... 2 more ... | \"largeDes..."}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '0': string; '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '11': string; '12': string; none: string; }, `var(--${string})`>, { ...; }>, (\"mobile\" | ... 2 more ... | \"largeDes..."}}}}}catch{}const i=({children:a,id:s=null})=>{const l=n.useContext(z),r=n.useContext(I);L.invariant(l!==null&&r!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:o,renderInactive:d}=l,c=typeof s=="string"?s:`${r.id}-${o}-tab`,b=r.activeIndex===o;return e.createElement(x,{display:b?void 0:"none","aria-hidden":b?void 0:!0,className:Ae,tabIndex:0,role:"tabpanel",id:c,width:"full"},b||d?a:void 0)};i.displayName="TabPane";try{i.displayName="TabPane",i.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const{expect:N,fn:Re,userEvent:j,within:ke}=__STORYBOOK_MODULE_TEST__,E=({label:a})=>{const[s,l]=n.useState(Y()?.5:Math.random()*5);return n.useEffect(()=>{const r=setInterval(()=>{l(Y()?.5:Math.random()*5)},1e3);return()=>{clearInterval(r)}},[]),e.createElement(Ee,{rating:s,label:a})},ta={title:"Components/Tabs",component:R,tags:[],decorators:[a=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},a())],args:{active:0,appearance:"underlined",onChange:Re()},argTypes:{children:{control:{disable:!0}}}},_=a=>{const[s,l]=n.useState(a.active??0);return e.createElement(R,{...a,active:s,onChange:l})},P={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,null,"Job History"),e.createElement(t,null,"Vehicle History"),e.createElement(t,null,"Driver"),e.createElement(t,null,"Example Rating")),e.createElement(v,null,e.createElement(i,null,"Content A"),e.createElement(i,null,"Content B"),e.createElement(i,null,"Content C"),e.createElement(i,null,e.createElement(le,null,e.createElement(E,{label:"5"}),e.createElement(E,{label:"4"}),e.createElement(E,{label:"3"}),e.createElement(E,{label:"2"}),e.createElement(E,{label:"1"})))))},render:a=>e.createElement(_,{...a})},k={args:{...P.args,appearance:"pill"},render:a=>e.createElement(_,{...a})},B={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,{indication:2},"Tab 1"),e.createElement(t,{indication:0},"Tab 2")),e.createElement(v,null,e.createElement(i,null,"Content A"),e.createElement(i,null,"Content B")))},render:a=>e.createElement(_,{...a})},V={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,{indication:2},e.createElement(G,{justify:"center"},"Tab 1",e.createElement(Z,{alignment:Q.BOTTOM,label:"This tab is a winner"},e.createElement(x,null,e.createElement(M,{icon:_e}))))),e.createElement(t,null,e.createElement(G,{justify:"center"},"Tab 2",e.createElement(Z,{alignment:Q.BOTTOM,label:"This tab is less awesome"},e.createElement(x,null,e.createElement(M,{icon:Ce})))))),e.createElement(v,null,e.createElement(i,null,"Content A"),e.createElement(i,null,"Content B")))},render:a=>e.createElement(_,{...a})},W={args:{children:e.createElement(e.Fragment,null,e.createElement(f,{stretch:!0},e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(v,null,e.createElement(i,null,"Content A"),e.createElement(i,null,e.createElement(le,null,e.createElement(E,{label:"5"}),e.createElement(E,{label:"4"}),e.createElement(E,{label:"3"}),e.createElement(E,{label:"2"}),e.createElement(E,{label:"1"})))))},render:a=>e.createElement(_,{...a})},H={args:{...P.args,appearance:"minimal"},render:a=>e.createElement(_,{...a})},A={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,null,"Registration"),e.createElement(t,null,"VIN"),e.createElement(t,null,"Serial Number")),e.createElement(v,null,e.createElement(i,null,"Search by registration"),e.createElement(i,null,"Search by VIN"),e.createElement(i,null,"Search by serial number")))},render:a=>e.createElement(_,{...a})},F={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,{indication:3},"Open"),e.createElement(t,{indication:12},"In Progress"),e.createElement(t,null,"Closed")),e.createElement(v,null,e.createElement(i,null,"Content A"),e.createElement(i,null,"Content B"),e.createElement(i,null,"Content C")))},render:a=>e.createElement(_,{...a})},O={...A,tags:["!autodocs","skip-themes"],play:async({canvasElement:a,step:s})=>{const l=ke(a),r=l.getAllByRole("tab");await s("first segment is selected by default",async()=>{await N(r[0]).toHaveAttribute("aria-selected","true"),await N(r[1]).toHaveAttribute("aria-selected","false")}),await s("clicking a segment selects it",async()=>{await j.click(r[2]),await N(l.getAllByRole("tab",{name:"Serial Number"})[0]).toHaveAttribute("aria-selected","true")}),await s("ArrowRight wraps to the first segment",async()=>{await j.keyboard("{ArrowRight}"),await N(l.getAllByRole("tab",{name:"Registration"})[0]).toHaveAttribute("aria-selected","true")}),await s("End jumps to the last segment",async()=>{await j.keyboard("{End}"),await N(l.getAllByRole("tab",{name:"Serial Number"})[0]).toHaveAttribute("aria-selected","true")})}},q={args:{children:e.createElement(f,{scrollable:!0},e.createElement(t,null,"Hello"),e.createElement(t,{indication:5},"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"))},render:a=>e.createElement(_,{...a})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList>
                    <Tab>Job History</Tab>
                    <Tab>Vehicle History</Tab>
                    <Tab>Driver</Tab>
                    <Tab>Example Rating</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>Content B</TabPane>
                    <TabPane>Content C</TabPane>
                    <TabPane>
                        <FlexStack>
                            <TestChild label="5" />
                            <TestChild label="4" />
                            <TestChild label="3" />
                            <TestChild label="2" />
                            <TestChild label="1" />
                        </FlexStack>
                    </TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  },
  render: args => <StatefulTabs {...args} />
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList>
                    <Tab indication={2}>Tab 1</Tab>
                    <Tab indication={0}>Tab 2</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>Content B</TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList>
                    <Tab indication={2}>
                        <FlexInline justify="center">
                            Tab 1
                            <Tooltip alignment={EAlignment.BOTTOM} label="This tab is a winner">
                                <Box>
                                    <Icon icon={OttoIcon} />
                                </Box>
                            </Tooltip>
                        </FlexInline>
                    </Tab>
                    <Tab>
                        <FlexInline justify="center">
                            Tab 2
                            <Tooltip alignment={EAlignment.BOTTOM} label="This tab is less awesome">
                                <Box>
                                    <Icon icon={WarningIcon} />
                                </Box>
                            </Tooltip>
                        </FlexInline>
                    </Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>Content B</TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList stretch>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>
                        <FlexStack>
                            <TestChild label="5" />
                            <TestChild label="4" />
                            <TestChild label="3" />
                            <TestChild label="2" />
                            <TestChild label="1" />
                        </FlexStack>
                    </TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'minimal'
  },
  render: args => <StatefulTabs {...args} />
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'segmented',
    children: <>
                <TabList>
                    <Tab>Registration</Tab>
                    <Tab>VIN</Tab>
                    <Tab>Serial Number</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Search by registration</TabPane>
                    <TabPane>Search by VIN</TabPane>
                    <TabPane>Search by serial number</TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'segmented',
    children: <>
                <TabList>
                    <Tab indication={3}>Open</Tab>
                    <Tab indication={12}>In Progress</Tab>
                    <Tab>Closed</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>Content B</TabPane>
                    <TabPane>Content C</TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Segmented,
  tags: ['!autodocs', 'skip-themes'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    await step('first segment is selected by default', async () => {
      await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    });
    await step('clicking a segment selects it', async () => {
      await userEvent.click(tabs[2]);
      await expect(canvas.getAllByRole('tab', {
        name: 'Serial Number'
      })[0]).toHaveAttribute('aria-selected', 'true');
    });
    await step('ArrowRight wraps to the first segment', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await expect(canvas.getAllByRole('tab', {
        name: 'Registration'
      })[0]).toHaveAttribute('aria-selected', 'true');
    });
    await step('End jumps to the last segment', async () => {
      await userEvent.keyboard('{End}');
      await expect(canvas.getAllByRole('tab', {
        name: 'Serial Number'
      })[0]).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    children: <TabList scrollable>
                <Tab>Hello</Tab>
                <Tab indication={5}>Why isnt</Tab>
                <Tab>This a terribly</Tab>
                <Tab>Long</Tab>
                <Tab>Tab list</Tab>
                <Tab>Hello</Tab>
                <Tab>Why isnt</Tab>
                <Tab>This a terribly</Tab>
                <Tab>Long</Tab>
                <Tab>Tab list</Tab>
                <Tab>Hello</Tab>
                <Tab>Why isnt</Tab>
                <Tab>This a terribly</Tab>
                <Tab>Long</Tab>
                <Tab>Tab list</Tab>
            </TabList>
  },
  render: args => <StatefulTabs {...args} />
}`,...q.parameters?.docs?.source}}};const na=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Minimal","Segmented","SegmentedWithIndication","SegmentedInteractionTest","Scrollable"];export{H as Minimal,k as Pill,q as Scrollable,A as Segmented,O as SegmentedInteractionTest,F as SegmentedWithIndication,P as Standard,V as WithComplexTab,B as WithIndication,W as WithStretch,na as __namedExportsOrder,ta as default};
