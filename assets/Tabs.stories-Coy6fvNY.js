import{z as k,R as G,I as Q,r as a,l as w,f as J,e,J as Z,T as ee,B as E,t as U,U as ae,c as te,E as ne,w as z}from"./iframe-C_ToDWZR.js";import{F as H}from"./FlexInline-31P_fOav.js";import{F as K}from"./FlexStack-BAKQDn1A.js";import{I as N}from"./Icon-B1NaPOMJ.js";import{E as M}from"./Positioner-DvPMR0gm.js";import{S as le}from"./StarRating-Dj9yU_Oi.js";import{T as $}from"./Tooltip-CSdDuQuR.js";import{i as re}from"./flex-DO0HZIc7.js";import{T as se}from"./Text-BJAzHH1m.js";import{B as D}from"./Button-C6X-pLj4.js";import{I as ie}from"./ArrowLeftIcon-CXI6f9cy.js";import{I as oe}from"./ArrowRightIcon-CXPEUk2H.js";import{I as ce}from"./OttoIcon-D9jcw7m_.js";import{I as de}from"./AlertIcon-BSIIiejr.js";import"./preload-helper-D9Z9MdNV.js";import"./resolveResponsiveProps-D4tqr0Ct.js";import"./Portal-CXMxGxj-.js";import"./index-C1mDI6Gs.js";import"./index-BokhajKM.js";import"./StarHalfIcon-C7bAQ9Xc.js";import"./StarIcon-CMN-R1x3.js";import"./ProgressSpinner-Bemph7Ca.js";var ue=k({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2",minimal:"_11wt3mu3"},active:{true:"_11wt3mu4"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu5"],[{appearance:"pill",active:!0},"_11wt3mu6"],[{appearance:"minimal",active:!0},"_11wt3mu7"]]}),me="_11wt3mu8",pe=k({defaultClassName:"_11wt3mu9",variantClassNames:{appearance:{underlined:"_11wt3mua",pill:"_11wt3mub",minimal:"_11wt3muc"},active:{true:"_11wt3mud"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mue"],[{appearance:"pill",active:!0},"_11wt3muf"]]}),be=k({defaultClassName:"_1cu98lp0",variantClassNames:{appearance:{underlined:"_1cu98lp1",pill:"_1cu98lp2",minimal:"_1cu98lp3"},scroll:{true:"_1cu98lp4"}},defaultVariants:{},compoundVariants:[]}),Te="_1cu98lp5";const h=a.createContext(null),W=({id:l,active:s=0,appearance:r="underlined",onChange:n,children:m})=>{const[i,o]=G(s,n),u=Q(l??void 0);return a.createElement(h.Provider,{value:a.useMemo(()=>({id:u,activeIndex:i,appearance:r,onChange:o}),[u,i,r,o])},m)};try{h.displayName="TabsContext",h.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{W.displayName="Tabs",W.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"minimal"'},{value:'"underlined"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const j={next:"scroll tabs right",prev:"scroll tabs left"},L=a.createContext(null),f=({children:l,stretch:s=!1,scrollable:r=!1})=>{w.invariant(!(s&&r),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const n=a.useRef(null),m=a.useRef(null),i=a.Children.map(J(l),(b,T)=>a.isValidElement(b)?e.createElement(L.Provider,{value:T},b):null),o=a.useContext(h);w.invariant(o!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:u}=o,[c,B]=a.useState({start:!1,end:!1}),g=Z(()=>{if(r){const{scrollWidth:b,clientWidth:T,scrollLeft:R}=n.current,O=R>1,q=R<b-T-1;(O!==c.start||q!==c.end)&&B({start:O,end:q})}}),v=a.useCallback(()=>{g()},[]),A=b=>{if(n.current){const T=n.current.scrollLeft+b;ae(n.current,"scrollLeft",T,300)}},X=()=>A(-n.current.clientWidth),Y=()=>A(n.current.clientWidth);a.useEffect(()=>{const b=ee(n.current),T=()=>{g()};return b.addEventListener("resize",T,{passive:!0}),()=>{b.removeEventListener("resize",T)}},[]),a.useEffect(()=>{g()},[l,g]);const F=r&&(c.start||c.end);return e.createElement(E,{alignItems:"center",className:be({appearance:u,scroll:r})},F?e.createElement(D,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.start,onClick:X,"aria-label":j.prev},e.createElement(N,{icon:ie})):null,e.createElement(E,{ref:n,className:[r&&Te],onScroll:v},e.createElement(E,{ref:m,display:s?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",className:U({noWrap:!0})},i)),F?e.createElement(D,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.end,onClick:Y,"aria-label":j.next},e.createElement(N,{icon:oe})):null)};try{L.displayName="TabListContext",L.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{f.displayName="TabList",f.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const t=a.forwardRef(({children:l,id:s=null,indication:r=null,as:n="button"},m)=>{const i=a.useContext(h),o=a.useContext(L);w.invariant(i!==null&&o!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:u}=i,c=i.activeIndex===o,B=typeof s=="string"?s:`${i.id}-${o}-tab`,g={className:te(ne({as:typeof n=="string"?n:"button",display:"inline-flex",justifyContent:"center",backgroundColour:"transparent"}),U({colour:"light",noWrap:!0,size:"3",weight:"bold"}),ue({appearance:u,active:c})),role:"tab","aria-selected":c?"true":"false","data-controls":B,tabIndex:c?void 0:-1,onClick:()=>i.onChange?.(o),ref:m},v=a.createElement("div",{className:re({gap:"2",align:"center",justify:"center",noWrap:!0})},a.createElement("span",{className:me},l),typeof r=="number"&&a.createElement(se,{strong:!0,as:"span",size:"2",align:"center",display:"block",colour:c?"white":"dark",className:pe({appearance:u,active:c})},r));return a.isValidElement(n)?a.cloneElement(n,g,v):a.createElement(n,g,v)});t.displayName="Tab";try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}},as:{defaultValue:{value:"button"},description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var ge="_1e18dwc0",Ee="_15xyz920";const V=a.createContext(null),_=({renderInactivePanes:l=!1,children:s,paddingTop:r="6",paddingBottom:n="6"})=>a.createElement(E,{paddingTop:r,paddingBottom:n,className:Ee,width:"full"},a.Children.map(J(s),(m,i)=>a.createElement(V.Provider,{value:{paneIndex:i,renderInactive:l}},m)));try{V.displayName="TabPanesContext",V.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{_.displayName="TabPanes",_.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const d=({children:l,id:s=null})=>{const r=a.useContext(V),n=a.useContext(h);w.invariant(r!==null&&n!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:m,renderInactive:i}=r,o=typeof s=="string"?s:`${n.id}-${m}-tab`,u=n.activeIndex===m;return a.createElement(E,{display:u?void 0:"none","aria-hidden":u?void 0:!0,className:ge,tabIndex:0,role:"tabpanel",id:o,width:"full"},u||i?l:void 0)};try{d.displayName="TabPane",d.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const{fn:fe}=__STORYBOOK_MODULE_TEST__,p=({label:l})=>{const[s,r]=a.useState(z()?.5:Math.random()*5);return a.useEffect(()=>{const n=setInterval(()=>{r(z()?.5:Math.random()*5)},1e3);return()=>{clearInterval(n)}},[]),e.createElement(le,{rating:s,label:l})},He={title:"Components/Tabs",component:W,tags:[],decorators:[l=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},l())],args:{active:0,appearance:"underlined",onChange:fe()},argTypes:{children:{control:{disable:!0}}}},y={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,null,"Job History"),e.createElement(t,null,"Vehicle History"),e.createElement(t,null,"Driver"),e.createElement(t,null,"Example Rating")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B"),e.createElement(d,null,"Content C"),e.createElement(d,null,e.createElement(K,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},C={args:{...y.args,appearance:"pill"}},x={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,{indication:2},"Tab 1"),e.createElement(t,{indication:0},"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},P={args:{children:e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(t,{indication:2},e.createElement(H,{justify:"center"},"Tab 1",e.createElement($,{alignment:M.BOTTOM,label:"This tab is a winner"},e.createElement(E,null,e.createElement(N,{icon:ce}))))),e.createElement(t,null,e.createElement(H,{justify:"center"},"Tab 2",e.createElement($,{alignment:M.BOTTOM,label:"This tab is less awesome"},e.createElement(E,null,e.createElement(N,{icon:de})))))),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},I={args:{children:e.createElement(e.Fragment,null,e.createElement(f,{stretch:!0},e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,e.createElement(K,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},S={args:{children:e.createElement(f,{scrollable:!0},e.createElement(t,null,"Hello"),e.createElement(t,{indication:5},"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"))}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
  }
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  }
}`,...S.parameters?.docs?.source}}};const Me=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Scrollable"];export{C as Pill,S as Scrollable,y as Standard,P as WithComplexTab,x as WithIndication,I as WithStretch,Me as __namedExportsOrder,He as default};
