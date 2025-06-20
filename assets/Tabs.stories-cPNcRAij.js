import{q as O,M as be,C as Te,r as a,d as N,f as de,e,D as ge,N as Ee,B as E,A as he,P as fe,c as _e,t as ye,w as ve,S as ue,l as $}from"./iframe-CFwUcJnX.js";import{I as L}from"./Icon-DeLX8lrb.js";import{I as k}from"./Inline-C4wfw7Gl.js";import{E as z}from"./Positioner-83ka4NNT.js";import{S as Ce}from"./StarRating-CTkTe-iM.js";import{T as D}from"./Tooltip-CNnMRxh5.js";import{T as xe}from"./Text-Bekh4-oh.js";import{B as Y}from"./Button-2-3Rsj-q.js";import{I as Pe}from"./ArrowLeftIcon-JvIZyBXr.js";import{I as Se}from"./ArrowRightIcon-BhhUtyZq.js";import{I as Ie}from"./OttoIcon-DBudKiJQ.js";import{I as we}from"./AlertIcon-jKABqS5_.js";import"./resolveResponsiveProps-BLCo0nz9.js";import"./useNegativeMarginTop-CiLZ67so.js";import"./Portal-BR6J7moE.js";import"./index-CxiwmT52.js";import"./index-B85a9uKh.js";import"./StarHalfIcon-Dz9oS4IZ.js";import"./StarIcon-Dj421zNK.js";import"./ProgressSpinner-CMx0jE5W.js";var Ne=O({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2"},active:{true:"_11wt3mu3"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu4"],[{appearance:"pill",active:!0},"_11wt3mu5"]]}),Le="_11wt3mu6",Ve=O({defaultClassName:"_11wt3mu7",variantClassNames:{appearance:{underlined:"_11wt3mu8",pill:"_11wt3mu9"},active:{true:"_11wt3mua"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mub"],[{appearance:"pill",active:!0},"_11wt3muc"]]}),Be=O({defaultClassName:"_1cu98lp0",variantClassNames:{appearance:{underlined:"_1cu98lp1",pill:"_1cu98lp2"},scroll:{true:"_1cu98lp3"}},defaultVariants:{},compoundVariants:[]}),We="_1cu98lp4";const f=a.createContext(null),A=({id:l,active:i=0,appearance:r="underlined",onChange:n,children:m})=>{const[s,o]=be(i,n),u=Te(l??void 0);return a.createElement(f.Provider,{value:a.useMemo(()=>({id:u,activeIndex:s,appearance:r,onChange:o}),[u,s,r,o])},m)};try{f.displayName="TabsContext",f.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{A.displayName="Tabs",A.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"underlined"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const F={next:"scroll tabs right",prev:"scroll tabs left"},V=a.createContext(null),h=({children:l,stretch:i=!1,scrollable:r=!1})=>{N.invariant(!(i&&r),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const n=a.useRef(null),m=a.useRef(null),s=a.Children.map(de(l),(b,T)=>a.isValidElement(b)?e.createElement(V.Provider,{value:T},b):null),o=a.useContext(f);N.invariant(o!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:u}=o,[c,W]=a.useState({start:!1,end:!1}),g=ge(()=>{if(r){const{scrollWidth:b,clientWidth:T,scrollLeft:q}=n.current,M=q>1,H=q<b-T-1;(M!==c.start||H!==c.end)&&W({start:M,end:H})}}),C=a.useCallback(()=>{g()},[]),y=b=>{if(n.current){const T=n.current.scrollLeft+b;fe(n.current,"scrollLeft",T,300)}},me=()=>y(-n.current.clientWidth),pe=()=>y(n.current.clientWidth);a.useEffect(()=>{const b=Ee(n.current),T=()=>{g()};return b.addEventListener("resize",T,{passive:!0}),()=>{b.removeEventListener("resize",T)}},[]),a.useEffect(()=>{g()},[l,g]);const R=r&&(c.start||c.end);return e.createElement(E,{alignItems:"center",className:Be({appearance:u,scroll:r})},R?e.createElement(Y,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.start,onClick:me,"aria-label":F.prev},e.createElement(L,{icon:Pe})):null,e.createElement(E,{ref:n,className:[r&&We],onScroll:C},e.createElement(E,{ref:m,display:i?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",className:he({noWrap:!0})},s)),R?e.createElement(Y,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.end,onClick:pe,"aria-label":F.next},e.createElement(L,{icon:Se})):null)};try{V.displayName="TabListContext",V.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{h.displayName="TabList",h.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const t=a.forwardRef(({children:l,id:i=null,indication:r=null,is:n="button"},m)=>{const s=a.useContext(f),o=a.useContext(V);N.invariant(s!==null&&o!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:u}=s,c=s.activeIndex===o,W=typeof i=="string"?i:`${s.id}-${o}-tab`,g={className:_e(ve({as:typeof n=="string"?n:"button",display:"inline-flex",justifyContent:"center",backgroundColour:"transparent"}),ye({colour:"light",noWrap:!0,size:"3",weight:"bold"}),Ne({appearance:u,active:c})),role:"tab","aria-selected":c?"true":"false","data-controls":W,tabIndex:c?void 0:-1,onClick:()=>{var y;return(y=s.onChange)==null?void 0:y.call(s,o)},ref:m},C=a.createElement(k,{noWrap:!0,space:"2",alignY:"center",alignX:"center"},a.createElement("span",{className:Le},l),typeof r=="number"&&a.createElement(xe,{strong:!0,as:"span",size:"2",align:"center",display:"block",colour:c?"white":"dark",className:Ve({appearance:u,active:c})},r));return a.isValidElement(n)?a.cloneElement(n,g,C):a.createElement(n,g,C)});t.displayName="Tab";try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}},is:{defaultValue:{value:"button"},description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var ke="_1e18dwc0",Ae="_15xyz920";const B=a.createContext(null),_=({renderInactivePanes:l=!1,children:i,paddingTop:r="6",paddingBottom:n="6"})=>a.createElement(E,{paddingTop:r,paddingBottom:n,className:Ae,width:"full"},a.Children.map(de(i),(m,s)=>a.createElement(B.Provider,{value:{paneIndex:s,renderInactive:l}},m)));try{B.displayName="TabPanesContext",B.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{_.displayName="TabPanes",_.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const d=({children:l,id:i=null})=>{const r=a.useContext(B),n=a.useContext(f);N.invariant(r!==null&&n!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:m,renderInactive:s}=r,o=typeof i=="string"?i:`${n.id}-${m}-tab`,u=n.activeIndex===m;return a.createElement(E,{display:u?void 0:"none","aria-hidden":u?void 0:!0,className:ke,tabIndex:0,role:"tabpanel",id:o,width:"full"},u||s?l:void 0)};try{d.displayName="TabPane",d.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const{fn:Oe}=__STORYBOOK_MODULE_TEST__,p=({label:l})=>{const[i,r]=a.useState($()?.5:Math.random()*5);return a.useEffect(()=>{const n=setInterval(()=>{r($()?.5:Math.random()*5)},1e3);return()=>{clearInterval(n)}},[]),e.createElement(Ce,{rating:i,label:l})},na={title:"Components/Tabs",component:A,tags:[],decorators:[l=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},l())],args:{active:0,appearance:"underlined",onChange:Oe()},argTypes:{children:{control:{disable:!0}}}},v={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,null,"Job History"),e.createElement(t,null,"Vehicle History"),e.createElement(t,null,"Driver"),e.createElement(t,null,"Example Rating")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B"),e.createElement(d,null,"Content C"),e.createElement(d,null,e.createElement(ue,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},x={args:{...v.args,appearance:"pill"}},P={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,{indication:2},"Tab 1"),e.createElement(t,{indication:0},"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},S={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,{indication:2},e.createElement(k,{alignY:"center"},"Tab 1",e.createElement(D,{alignment:z.BOTTOM,label:"This tab is a winner"},e.createElement(E,null,e.createElement(L,{icon:Ie}))))),e.createElement(t,null,e.createElement(k,{alignY:"center"},"Tab 2",e.createElement(D,{alignment:z.BOTTOM,label:"This tab is less awesome"},e.createElement(E,null,e.createElement(L,{icon:we})))))),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},I={args:{children:e.createElement(e.Fragment,null,e.createElement(h,{stretch:!0},e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,e.createElement(ue,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},w={args:{children:e.createElement(h,{scrollable:!0},e.createElement(t,null,"Hello"),e.createElement(t,{indication:5},"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"))}};var J,U,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
                        <Stack>
                            <TestChild label="5" />
                            <TestChild label="4" />
                            <TestChild label="3" />
                            <TestChild label="2" />
                            <TestChild label="1" />
                        </Stack>
                    </TabPane>
                </TabPanes>
            </>
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var j,K,G;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  }
}`,...(G=(K=x.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Q,Z,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList>
                    <Tab indication={2}>
                        <Inline alignY="center">
                            Tab 1
                            <Tooltip alignment={EAlignment.BOTTOM} label="This tab is a winner">
                                <Box>
                                    <Icon icon={OttoIcon} />
                                </Box>
                            </Tooltip>
                        </Inline>
                    </Tab>
                    <Tab>
                        <Inline alignY="center">
                            Tab 2
                            <Tooltip alignment={EAlignment.BOTTOM} label="This tab is less awesome">
                                <Box>
                                    <Icon icon={AlertIcon} />
                                </Box>
                            </Tooltip>
                        </Inline>
                    </Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>Content B</TabPane>
                </TabPanes>
            </>
  }
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,re,se;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    children: <>
                <TabList stretch>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Content A</TabPane>
                    <TabPane>
                        <Stack>
                            <TestChild label="5" />
                            <TestChild label="4" />
                            <TestChild label="3" />
                            <TestChild label="2" />
                            <TestChild label="1" />
                        </Stack>
                    </TabPane>
                </TabPanes>
            </>
  }
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const la=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Scrollable"];export{x as Pill,w as Scrollable,v as Standard,S as WithComplexTab,P as WithIndication,I as WithStretch,la as __namedExportsOrder,na as default};
