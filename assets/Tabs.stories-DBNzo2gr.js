import{f as Te}from"./index-mRD-OtaA.js";import{i as $}from"./isChromatic-AKtkhq4f.js";import{r as a,R as e}from"./index-CIentmI6.js";import{E as M}from"./Positioner-Cxy6r9k8.js";import{f as fe,u as Ee,b as he,o as ge,g as _e}from"./index--QB1QYf1.js";import{d as N}from"./index-D_iG_Vvt.js";import{f as de}from"./index-DxjsDk-K.js";import{B as E,c as ye,u as ve}from"./Box-Bevh8JBX.js";import{c as A}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import{B as F}from"./Button-BUKPFrHB.js";import{I as L}from"./Icon-CDjFf78x.js";import{I as Ce}from"./ArrowLeftIcon-C109zxlC.js";import{u as me}from"./useTextStyles-BBYvKUtt.js";import{I as xe}from"./ArrowRightIcon-L_O_oZ-T.js";/* empty css                                    */import{I as k}from"./Inline-CwPLTrv1.js";import{T as Pe}from"./Text-BOKces_e.js";import{S as ue}from"./Stack-TyX_rfI7.js";import{T as D}from"./Tooltip-MS6DJ684.js";import{I as Ie}from"./OttoIcon-LAPNYN5q.js";import{I as Se}from"./AlertIcon-DLwErAUj.js";import{S as we}from"./StarRating-CY_DYONa.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Portal-DM7Jye4r.js";import"./index-9RMPADTf.js";import"./index-Dg3X6TXP.js";import"./ThemeProvider-DCihBTvv.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-C4KudU4k.js";import"./ProgressSpinner-CyLHlAHx.js";import"./useNegativeMarginTop-B_Mwje1-.js";import"./StarHalfIcon-CHppFXdW.js";import"./StarIcon-BW5zhlRG.js";const g=a.createContext(null),R=({id:l,active:i=0,appearance:r="underlined",onChange:n,children:u})=>{const[s,o]=fe(i,n),m=Ee(l??void 0);return a.createElement(g.Provider,{value:a.useMemo(()=>({id:m,activeIndex:s,appearance:r,onChange:o}),[m,s,r,o])},u)};try{g.displayName="TabsContext",g.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{R.displayName="Tabs",R.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"underlined"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var Ne=A({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2"},active:{true:"_11wt3mu3"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu4"],[{appearance:"pill",active:!0},"_11wt3mu5"]]}),Le="_11wt3mu6",Be=A({defaultClassName:"_11wt3mu7",variantClassNames:{appearance:{underlined:"_11wt3mu8",pill:"_11wt3mu9"},active:{true:"_11wt3mua"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mub"],[{appearance:"pill",active:!0},"_11wt3muc"]]}),Ve=A({defaultClassName:"_1cu98lp0",variantClassNames:{appearance:{underlined:"_1cu98lp1",pill:"_1cu98lp2"},scroll:{true:"_1cu98lp3"}},defaultVariants:{},compoundVariants:[]}),We="_1cu98lp4";const Y={next:"scroll tabs right",prev:"scroll tabs left"},B=a.createContext(null),h=({children:l,stretch:i=!1,scrollable:r=!1})=>{N.invariant(!(i&&r),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const n=a.useRef(null),u=a.useRef(null),s=a.Children.map(de(l),(b,T)=>a.isValidElement(b)?e.createElement(B.Provider,{value:T},b):null),o=a.useContext(g);N.invariant(o!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:m}=o,[c,W]=a.useState({start:!1,end:!1}),f=he(()=>{if(r){const{scrollWidth:b,clientWidth:T,scrollLeft:O}=n.current,H=O>1,z=O<b-T-1;(H!==c.start||z!==c.end)&&W({start:H,end:z})}}),C=a.useCallback(()=>{f()},[]),y=b=>{if(n.current){const T=n.current.scrollLeft+b;_e(n.current,"scrollLeft",T,300)}},pe=()=>y(-n.current.clientWidth),be=()=>y(n.current.clientWidth);a.useEffect(()=>{const b=ge(n.current),T=()=>{f()};return b.addEventListener("resize",T,{passive:!0}),()=>{b.removeEventListener("resize",T)}},[]),a.useEffect(()=>{f()},[l,f]);const q=r&&(c.start||c.end);return e.createElement(E,{alignItems:"center",className:Ve({appearance:m,scroll:r})},q?e.createElement(F,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.start,onClick:pe,"aria-label":Y.prev},e.createElement(L,{icon:Ce})):null,e.createElement(E,{ref:n,className:[r&&We],onScroll:C},e.createElement(E,{ref:u,display:i?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",className:me({noWrap:!0})},s)),q?e.createElement(F,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!c.end,onClick:be,"aria-label":Y.next},e.createElement(L,{icon:xe})):null)};try{B.displayName="TabListContext",B.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{h.displayName="TabList",h.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const t=a.forwardRef(({children:l,id:i=null,indication:r=null,is:n="button"},u)=>{const s=a.useContext(g),o=a.useContext(B);N.invariant(s!==null&&o!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:m}=s,c=s.activeIndex===o,W=typeof i=="string"?i:`${s.id}-${o}-tab`,f={className:ye(ve({is:typeof n=="string"?n:"button",display:"inlineFlex",justifyContent:"center",backgroundColour:"transparent"}),me({noWrap:!0,size:"3",fontWeight:"bold",colour:"light"}),Ne({appearance:m,active:c})),role:"tab","aria-selected":c?"true":"false","data-controls":W,tabIndex:c?void 0:-1,onClick:()=>{var y;return(y=s.onChange)==null?void 0:y.call(s,o)},ref:u},C=a.createElement(k,{noWrap:!0,space:"2",alignY:"center",alignX:"center"},a.createElement("span",{className:Le},l),typeof r=="number"&&a.createElement(Pe,{strong:!0,is:"span",size:"2",align:"center",display:"block",colour:c?"white":"dark",className:Be({appearance:m,active:c})},r));return a.isValidElement(n)?a.cloneElement(n,f,C):a.createElement(n,f,C)});t.displayName="Tab";try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var ke="_1e18dwc0",Re="_15xyz920";const V=a.createContext(null),_=({renderInactivePanes:l=!1,children:i,paddingTop:r="6",paddingBottom:n="6"})=>a.createElement(E,{paddingTop:r,paddingBottom:n,className:Re,width:"full"},a.Children.map(de(i),(u,s)=>a.createElement(V.Provider,{value:{paneIndex:s,renderInactive:l}},u)));try{V.displayName="TabPanesContext",V.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{_.displayName="TabPanes",_.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}}}}}catch{}const d=({children:l,id:i=null})=>{const r=a.useContext(V),n=a.useContext(g);N.invariant(r!==null&&n!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:u,renderInactive:s}=r,o=typeof i=="string"?i:`${n.id}-${u}-tab`,m=n.activeIndex===u;return a.createElement(E,{display:m?void 0:"none","aria-hidden":m?void 0:!0,className:ke,tabIndex:0,role:"tabpanel",id:o,width:"full"},m||s?l:void 0)};try{d.displayName="TabPane",d.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const p=({label:l})=>{const[i,r]=a.useState($()?.5:Math.random()*5);return a.useEffect(()=>{const n=setInterval(()=>{r($()?.5:Math.random()*5)},1e3);return()=>{clearInterval(n)}},[]),e.createElement(we,{rating:i,label:l})},Ta={title:"Components/Tabs",component:R,tags:["updated"],decorators:[l=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},l())],args:{active:0,appearance:"underlined",onChange:Te()},argTypes:{children:{control:{disable:!0}}}},v={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,null,"Job History"),e.createElement(t,null,"Vehicle History"),e.createElement(t,null,"Driver"),e.createElement(t,null,"Example Rating")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B"),e.createElement(d,null,"Content C"),e.createElement(d,null,e.createElement(ue,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},x={args:{...v.args,appearance:"pill"}},P={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,{indication:2},"Tab 1"),e.createElement(t,{indication:0},"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},I={args:{children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(t,{indication:2},e.createElement(k,{alignY:"center"},"Tab 1",e.createElement(D,{alignment:M.BOTTOM,label:"This tab is a winner"},e.createElement(E,null,e.createElement(L,{icon:Ie}))))),e.createElement(t,null,e.createElement(k,{alignY:"center"},"Tab 2",e.createElement(D,{alignment:M.BOTTOM,label:"This tab is less awesome"},e.createElement(E,null,e.createElement(L,{icon:Se})))))),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))}},S={args:{children:e.createElement(e.Fragment,null,e.createElement(h,{stretch:!0},e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(_,null,e.createElement(d,null,"Content A"),e.createElement(d,null,e.createElement(ue,null,e.createElement(p,{label:"5"}),e.createElement(p,{label:"4"}),e.createElement(p,{label:"3"}),e.createElement(p,{label:"2"}),e.createElement(p,{label:"1"})))))}},w={args:{children:e.createElement(h,{scrollable:!0},e.createElement(t,null,"Hello"),e.createElement(t,{indication:5},"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"))}};var J,X,j;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(j=(X=v.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var U,G,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  }
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,re,se;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const fa=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Scrollable"];export{x as Pill,w as Scrollable,v as Standard,I as WithComplexTab,P as WithIndication,S as WithStretch,fa as __namedExportsOrder,Ta as default};
