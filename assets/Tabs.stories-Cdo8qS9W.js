import{a as C}from"./index-B-lxVbXh.js";import{i as z}from"./isChromatic-AKtkhq4f.js";import{r as t,R as e}from"./index-UyvCXs0Z.js";import{E as M}from"./Positioner-CX2oa-9Q.js";import{f as be,u as pe,b as Te,o as he,g as fe}from"./index-BJSya_LC.js";import{d as V}from"./index-D_iG_Vvt.js";import{f as de}from"./index-ByY9IofJ.js";import{B as T,u as H,c as F}from"./Box-Wo8GEp05.js";import{B as Y}from"./Button-BERT_2cH.js";import{I as L}from"./Icon-BTE0U7UX.js";import{I as Ee,a as ge}from"./OttoIcon-C1QyVjTK.js";import{u as me}from"./useTextStyles-B_nt0YsF.js";import{I as ye}from"./ArrowRightIcon-BImX12fV.js";import{I as A}from"./Inline-CSsMbfnV.js";import{T as Ce}from"./Text-CMqz-Wg5.js";import{S as ue}from"./Stack-BcWWxnLv.js";import{T as D}from"./Tooltip-DK78JBpe.js";import{I as _e}from"./AlertIcon-XSLHSbHF.js";import{S as ve}from"./StarRating-hZr_KYAN.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Portal-v7eqpybR.js";import"./index-ijGxv8TO.js";import"./index-rbvpFaDF.js";import"./ThemeProvider-CiKbc3fE.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-C4KudU4k.js";import"./ProgressSpinner-CS29R0Em.js";import"./useNegativeMarginTop-DUAGAzOn.js";import"./StarHalfIcon-7uPKFcXN.js";import"./StarIcon-CPn0OLOx.js";const y=t.createContext(null),R=({id:l,active:i=0,onChange:r,children:n})=>{const[c,s]=be(i,r),o=pe(l??void 0);return t.createElement(y.Provider,{value:t.useMemo(()=>({id:o,activeIndex:c,onChange:s}),[o,c])},n)};try{y.displayName="TabsContext",y.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{R.displayName="Tabs",R.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var X={default:"_11wt3mu0",active:"_11wt3mu1"},xe="_11wt3mu2",j={default:"_11wt3mu3",active:"_11wt3mu4"},J={default:"_1cu98lp0",scroll:"_1cu98lp1"},Ie="_1cu98lp2";const B=t.createContext(null),h=({children:l,stretch:i=!1,scrollable:r=!1})=>{V.invariant(!(i&&r),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const n=t.useRef(null),c=t.useRef(null),s=t.Children.map(de(l),(b,p)=>t.isValidElement(b)?t.createElement(B.Provider,{value:p},b):null),[o,d]=t.useState({start:!1,end:!1}),E=Te(()=>{if(r){const{scrollWidth:b,clientWidth:p,scrollLeft:q}=n.current,O=q>1,$=q<b-p-1;(O!==o.start||$!==o.end)&&d({start:O,end:$})}}),W=t.useCallback(()=>{E()},[]),g=b=>{if(n.current){const p=n.current.scrollLeft+b;fe(n.current,"scrollLeft",p,300)}},_=()=>void g(-n.current.clientWidth),v=()=>void g(n.current.clientWidth);t.useEffect(()=>{const b=he(n.current),p=()=>{E()};return b.addEventListener("resize",p,{passive:!0}),()=>{b.removeEventListener("resize",p)}},[]),t.useEffect(()=>{E()},[l]);const k=r&&(o.start||o.end);return t.createElement(T,{overflow:"hidden",alignItems:"center",className:[J.default,k&&J.scroll]},k?t.createElement(Y,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!o.start,onClick:_},t.createElement(L,{icon:Ee})):null,t.createElement(T,{ref:n,className:[r&&Ie],onScroll:W},t.createElement(T,{ref:c,display:i?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",className:me({noWrap:!0})},s)),k?t.createElement(Y,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!o.end,onClick:v},t.createElement(L,{icon:ye})):null)};try{B.displayName="TabListContext",B.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{h.displayName="TabList",h.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const a=t.forwardRef(({children:l,id:i=null,indication:r=null,is:n="button"},c)=>{const s=t.useContext(y),o=t.useContext(B);V.invariant(s!==null&&o!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const d=s.activeIndex===o,E=H({display:"inlineBlock",paddingX:"1",borderRadius:"pill"}),W=typeof i=="string"?i:`${s.id}-${o}-tab`,g={className:F(H({is:typeof n=="string"?n:"button",display:"inlineFlex",justifyContent:"center",backgroundColour:"transparent",marginRight:"6"}),me({noWrap:!0,size:"3",fontWeight:"bold",colour:"light"}),X.default,{[X.active]:d}),role:"tab","aria-selected":d?"true":"false","aria-controls":W,tabIndex:d?void 0:-1,onClick:()=>{var v;return(v=s.onChange)==null?void 0:v.call(s,o)},ref:c},_=t.createElement(A,{noWrap:!0,space:"2",alignY:"center",alignX:"center"},t.createElement("span",{className:xe},l),typeof r=="number"&&t.createElement(Ce,{strong:!0,is:"span",size:"2",align:"center",display:"block",colour:d?"white":"dark",className:F(j.default,E,{[j.active]:d})},r));return t.isValidElement(n)?t.cloneElement(n,g,_):t.createElement(n,g,_)});try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var Se="_1e18dwc0",Pe="_15xyz920";const N=t.createContext(null),f=({renderInactivePanes:l=!1,children:i,paddingTop:r="6",paddingBottom:n="6"})=>t.createElement(T,{paddingTop:r,paddingBottom:n,className:Pe,width:"full"},t.Children.map(de(i),(c,s)=>t.createElement(N.Provider,{value:{paneIndex:s,renderInactive:l}},c)));try{N.displayName="TabPanesContext",N.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{f.displayName="TabPanes",f.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}}}}}catch{}const u=({children:l,id:i=null})=>{const r=t.useContext(N),n=t.useContext(y);V.invariant(r!==null&&n!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:c,renderInactive:s}=r,o=typeof i=="string"?i:`${n.id}-${c}-tab`,d=n.activeIndex===c;return t.createElement(T,{display:d?void 0:"none","aria-hidden":d?void 0:!0,className:Se,tabIndex:0,role:"tabpanel",id:o,width:"full"},d||s?l:void 0)};try{u.displayName="TabPane",u.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const m=({label:l})=>{const[i,r]=t.useState(z()?.5:Math.random()*5);return t.useEffect(()=>{const n=setInterval(()=>{r(z()?.5:Math.random()*5)},1e3);return()=>{clearInterval(n)}},[]),e.createElement(ve,{rating:i,label:l})},rt={title:"Components/Tabs",component:R,decorators:[l=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},l())],argTypes:{children:{control:{disable:!0}}}},x={args:{active:0,onChange:C("onChange"),children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(a,null,"Tab 1"),e.createElement(a,null,"Tab 2")),e.createElement(f,null,e.createElement(u,null,"Content A"),e.createElement(u,null,e.createElement(ue,null,e.createElement(m,{label:"5"}),e.createElement(m,{label:"4"}),e.createElement(m,{label:"3"}),e.createElement(m,{label:"2"}),e.createElement(m,{label:"1"})))))}},I={args:{active:0,onChange:C("onChange"),children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(a,{indication:2},"Tab 1"),e.createElement(a,{indication:0},"Tab 2")),e.createElement(f,null,e.createElement(u,null,"Content A"),e.createElement(u,null,"Content B")))}},S={args:{active:0,onChange:C("onChange"),children:e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(a,{indication:2},e.createElement(A,{alignY:"center"},"Tab 1",e.createElement(D,{alignment:M.BOTTOM,label:"This tab is a winner"},e.createElement(T,null,e.createElement(L,{icon:ge}))))),e.createElement(a,null,e.createElement(A,{alignY:"center"},"Tab 2",e.createElement(D,{alignment:M.BOTTOM,label:"This tab is less awesome"},e.createElement(T,null,e.createElement(L,{icon:_e})))))),e.createElement(f,null,e.createElement(u,null,"Content A"),e.createElement(u,null,"Content B")))}},P={args:{active:0,onChange:C("onChange"),children:e.createElement(e.Fragment,null,e.createElement(h,{stretch:!0},e.createElement(a,null,"Tab 1"),e.createElement(a,null,"Tab 2")),e.createElement(f,null,e.createElement(u,null,"Content A"),e.createElement(u,null,e.createElement(ue,null,e.createElement(m,{label:"5"}),e.createElement(m,{label:"4"}),e.createElement(m,{label:"3"}),e.createElement(m,{label:"2"}),e.createElement(m,{label:"1"})))))}},w={args:{active:0,onChange:C("onChange"),children:e.createElement(h,{scrollable:!0},e.createElement(a,null,"Hello"),e.createElement(a,{indication:5},"Why isnt"),e.createElement(a,null,"This a terribly"),e.createElement(a,null,"Long"),e.createElement(a,null,"Tab list"),e.createElement(a,null,"Hello"),e.createElement(a,null,"Why isnt"),e.createElement(a,null,"This a terribly"),e.createElement(a,null,"Long"),e.createElement(a,null,"Tab list"),e.createElement(a,null,"Hello"),e.createElement(a,null,"Why isnt"),e.createElement(a,null,"This a terribly"),e.createElement(a,null,"Long"),e.createElement(a,null,"Tab list"))}};var U,G,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    active: 0,
    onChange: action('onChange'),
    children: <>
                <TabList>
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
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    active: 0,
    onChange: action('onChange'),
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    active: 0,
    onChange: action('onChange'),
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
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,re,oe;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    active: 0,
    onChange: action('onChange'),
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
}`,...(oe=(re=P.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,se,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    active: 0,
    onChange: action('onChange'),
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
}`,...(ce=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};const ot=["Standard","WithIndication","WithComplexTab","WithStretch","Scrollable"];export{w as Scrollable,x as Standard,S as WithComplexTab,I as WithIndication,P as WithStretch,ot as __namedExportsOrder,rt as default};
