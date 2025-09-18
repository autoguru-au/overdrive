import{z as H,R as ne,I as re,r as a,e,m as W,f as G,J as le,T as se,B as v,t as Q,U as ie,c as oe,E as ce,i as $}from"./iframe-B-UydsVC.js";import{F as j}from"./FlexInline-ukQBg-hG.js";import{F as Z}from"./FlexStack-bT1fubnG.js";import{I as A}from"./Icon-CjAt03gg.js";import{E as J}from"./Positioner-CkJirKdW.js";import{S as de}from"./StarRating-DJY9T2ea.js";import{T as K}from"./Tooltip-yLOH4t5n.js";import{i as ue}from"./flex-BILhuLeF.js";import{T as me}from"./Text-6ljzy1H8.js";import{B as U}from"./Button-Fvi381wq.js";import{I as be}from"./ArrowLeftIcon-4z3PF_Qg.js";import{I as pe}from"./ArrowRightIcon-CRszHymz.js";import{I as Te}from"./OttoIcon-CXfIMP8K.js";import{I as ge}from"./AlertIcon-3HeUnez5.js";import"./preload-helper-D9Z9MdNV.js";import"./resolveResponsiveProps-DY7mOkL1.js";import"./Portal-GwAjzS1C.js";import"./index-BSu28wPM.js";import"./index-yHu8MUUS.js";import"./StarHalfIcon-C4XnzvFd.js";import"./StarIcon-CqaBPBx6.js";import"./ProgressSpinner-B-Cll_7D.js";var fe=H({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2",minimal:"_11wt3mu3"},active:{true:"_11wt3mu4"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu5"],[{appearance:"pill",active:!0},"_11wt3mu6"],[{appearance:"minimal",active:!0},"_11wt3mu7"]]}),Ee="_11wt3mu8",he=H({defaultClassName:"_11wt3mu9",variantClassNames:{appearance:{underlined:"_11wt3mua",pill:"_11wt3mub",minimal:"_11wt3muc"},active:{true:"_11wt3mud"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mue"],[{appearance:"pill",active:!0},"_11wt3muf"]]}),ye=H({defaultClassName:"_1cu98lp0",variantClassNames:{appearance:{underlined:"_1cu98lp1",pill:"_1cu98lp2",minimal:"_1cu98lp3"},scroll:{true:"_1cu98lp4"}},defaultVariants:{},compoundVariants:[]}),_e="_1cu98lp5";const S=a.createContext(null),R=({id:t,active:i=0,appearance:l="underlined",onChange:r,children:o})=>{const[c,s]=ne(i,r),T=re(t??void 0),d=a.useRef(new Map),y=a.useCallback((m,h)=>{h?d.current.set(m,h):d.current.delete(m)},[]),g=a.useCallback(m=>d.current.get(m),[]),_=a.useCallback(()=>d.current.size,[]);return e.createElement(S.Provider,{value:a.useMemo(()=>({id:T,activeIndex:c,appearance:l,onChange:s,registerTab:y,getTab:g,getTabCount:_}),[T,c,l,s,y,g,_])},o)};try{S.displayName="TabsContext",S.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{R.displayName="Tabs",R.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"minimal"'},{value:'"underlined"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const X={next:"scroll tabs right",prev:"scroll tabs left"},Ce=new Set(["ArrowRight","ArrowLeft","Home","End"]),Y={ArrowRight:1,ArrowLeft:-1},F=a.createContext(null),x=({children:t,stretch:i=!1,scrollable:l=!1})=>{W.invariant(!(i&&l),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const r=a.useRef(null),o=a.useRef(null),c=a.Children.map(G(t),(b,u)=>a.isValidElement(b)?e.createElement(F.Provider,{value:u},b):null),s=a.useContext(S);W.invariant(s!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:T,activeIndex:d,onChange:y}=s,[g,_]=a.useState({start:!1,end:!1}),m=le(()=>{if(l){const{scrollWidth:b,clientWidth:u,scrollLeft:q}=r.current,C=q>1,E=q<b-u-1;(C!==g.start||E!==g.end)&&_({start:C,end:E})}}),h=a.useCallback(()=>{m()},[]),M=b=>{if(r.current){const u=r.current.scrollLeft+b;ie(r.current,"scrollLeft",u,300)}},ee=()=>M(-r.current.clientWidth),te=()=>M(r.current.clientWidth),ae=a.useCallback(b=>{const u=b.key;if(!o.current||!Ce.has(u))return;b.preventDefault();const C=s.getTabCount();if(C===0)return;let E=d??0;u in Y?E=((d??0)+Y[u]+C)%C:u==="Home"?E=0:u==="End"&&(E=C-1),E!==d&&(y?.(E),requestAnimationFrame(()=>{const D=s.getTab(E);D?.focus(),D?.scrollIntoView({block:"nearest",inline:"nearest"})}))},[d,y,s]);a.useEffect(()=>{const b=se(r.current),u=()=>{m()};return b.addEventListener("resize",u,{passive:!0}),()=>{b.removeEventListener("resize",u)}},[]),a.useEffect(()=>{m()},[t,m]);const z=l&&(g.start||g.end);return e.createElement(v,{alignItems:"center",className:ye({appearance:T,scroll:l})},z?e.createElement(U,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!g.start,onClick:ee,"aria-label":X.prev},e.createElement(A,{icon:be})):null,e.createElement(v,{ref:r,className:[l&&_e],onScroll:h},e.createElement(v,{ref:o,display:i?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",onKeyDown:ae,className:Q({noWrap:!0})},c)),z?e.createElement(U,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!g.end,onClick:te,"aria-label":X.next},e.createElement(A,{icon:pe})):null)};try{F.displayName="TabListContext",F.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{x.displayName="TabList",x.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const n=a.forwardRef(({children:t,id:i=null,indication:l=null,as:r="button"},o)=>{const c=a.useContext(S),s=a.useContext(F);W.invariant(c!==null&&s!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:T}=c,d=c.activeIndex===s,y=typeof i=="string"?i:`${c.id}-${s}-tab`,g=a.useCallback(h=>{s!=null&&c.registerTab(s,h??null),typeof o=="function"?o(h):o&&"current"in o&&(o.current=h)},[c,s,o]),_={className:oe(ce({as:typeof r=="string"?r:"button",display:"inline-flex",justifyContent:"center",backgroundColour:"transparent"}),Q({colour:"light",noWrap:!0,size:"3",weight:"bold"}),fe({appearance:T,active:d})),role:"tab","aria-selected":d?"true":"false","data-controls":y,tabIndex:d?void 0:-1,onClick:()=>c.onChange?.(s),ref:g},m=e.createElement("div",{className:ue({gap:"2",align:"center",justify:"center",noWrap:!0})},e.createElement("span",{className:Ee},t),typeof l=="number"&&e.createElement(me,{strong:!0,as:"span",size:"2",align:"center",display:"block",colour:d?"white":"dark",className:he({appearance:T,active:d})},l));return a.isValidElement(r)?a.cloneElement(r,_,m):a.createElement(r,_,m)});n.displayName="Tab";try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}},as:{defaultValue:{value:"button"},description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var ve="_1e18dwc0",xe="_15xyz920";const O=a.createContext(null),w=({renderInactivePanes:t=!1,children:i,paddingTop:l="6",paddingBottom:r="6"})=>e.createElement(v,{paddingTop:l,paddingBottom:r,className:xe,width:"full"},a.Children.map(G(i),(o,c)=>e.createElement(O.Provider,{value:{paneIndex:c,renderInactive:t}},o)));try{O.displayName="TabPanesContext",O.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{w.displayName="TabPanes",w.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const p=({children:t,id:i=null})=>{const l=a.useContext(O),r=a.useContext(S);W.invariant(l!==null&&r!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:o,renderInactive:c}=l,s=typeof i=="string"?i:`${r.id}-${o}-tab`,T=r.activeIndex===o;return e.createElement(v,{display:T?void 0:"none","aria-hidden":T?void 0:!0,className:ve,tabIndex:0,role:"tabpanel",id:s,width:"full"},T||c?t:void 0)};try{p.displayName="TabPane",p.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const{fn:Se}=__STORYBOOK_MODULE_TEST__,f=({label:t})=>{const[i,l]=a.useState($()?.5:Math.random()*5);return a.useEffect(()=>{const r=setInterval(()=>{l($()?.5:Math.random()*5)},1e3);return()=>{clearInterval(r)}},[]),e.createElement(de,{rating:i,label:t})},Ue={title:"Components/Tabs",component:R,tags:[],decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t())],args:{active:0,appearance:"underlined",onChange:Se()},argTypes:{children:{control:{disable:!0}}}},I=t=>{const[i,l]=a.useState(t.active??0);return e.createElement(R,{...t,active:i,onChange:l})},P={args:{children:e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement(n,null,"Job History"),e.createElement(n,null,"Vehicle History"),e.createElement(n,null,"Driver"),e.createElement(n,null,"Example Rating")),e.createElement(w,null,e.createElement(p,null,"Content A"),e.createElement(p,null,"Content B"),e.createElement(p,null,"Content C"),e.createElement(p,null,e.createElement(Z,null,e.createElement(f,{label:"5"}),e.createElement(f,{label:"4"}),e.createElement(f,{label:"3"}),e.createElement(f,{label:"2"}),e.createElement(f,{label:"1"})))))},render:t=>e.createElement(I,{...t})},L={args:{...P.args,appearance:"pill"},render:t=>e.createElement(I,{...t})},N={args:{children:e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement(n,{indication:2},"Tab 1"),e.createElement(n,{indication:0},"Tab 2")),e.createElement(w,null,e.createElement(p,null,"Content A"),e.createElement(p,null,"Content B")))},render:t=>e.createElement(I,{...t})},k={args:{children:e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement(n,{indication:2},e.createElement(j,{justify:"center"},"Tab 1",e.createElement(K,{alignment:J.BOTTOM,label:"This tab is a winner"},e.createElement(v,null,e.createElement(A,{icon:Te}))))),e.createElement(n,null,e.createElement(j,{justify:"center"},"Tab 2",e.createElement(K,{alignment:J.BOTTOM,label:"This tab is less awesome"},e.createElement(v,null,e.createElement(A,{icon:ge})))))),e.createElement(w,null,e.createElement(p,null,"Content A"),e.createElement(p,null,"Content B")))},render:t=>e.createElement(I,{...t})},V={args:{children:e.createElement(e.Fragment,null,e.createElement(x,{stretch:!0},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2")),e.createElement(w,null,e.createElement(p,null,"Content A"),e.createElement(p,null,e.createElement(Z,null,e.createElement(f,{label:"5"}),e.createElement(f,{label:"4"}),e.createElement(f,{label:"3"}),e.createElement(f,{label:"2"}),e.createElement(f,{label:"1"})))))},render:t=>e.createElement(I,{...t})},B={args:{children:e.createElement(x,{scrollable:!0},e.createElement(n,null,"Hello"),e.createElement(n,{indication:5},"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"),e.createElement(n,null,"Hello"),e.createElement(n,null,"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"),e.createElement(n,null,"Hello"),e.createElement(n,null,"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"))},render:t=>e.createElement(I,{...t})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  },
  render: args => <StatefulTabs {...args} />
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
                                    <Icon icon={AlertIcon} />
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
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const Xe=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Scrollable"];export{L as Pill,B as Scrollable,P as Standard,k as WithComplexTab,N as WithIndication,V as WithStretch,Xe as __namedExportsOrder,Ue as default};
