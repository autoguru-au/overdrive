import{D as ee,Z as fe,J as we,r as i,e,m as V,f as ue,K as Ee,_ as ve,B as I,t as be,a0 as Ce,c as Se,F as _e,i as se}from"./iframe-qUC4cxwQ.js";import{F as le}from"./FlexInline-B6CjUKR_.js";import{F as pe}from"./FlexStack-plD3J6Ws.js";import{I as J}from"./Icon-DtufMYE4.js";import{E as ie}from"./Positioner-DJQK4T9F.js";import{S as xe}from"./StarRating-DO-Yz6h2.js";import{T as oe}from"./Tooltip-BkWA4Yd_.js";import{i as Pe}from"./flex-w52CMqHY.js";import{T as Be}from"./Text-DW2ue6Ex.js";import{B as ce}from"./Button-D_9ned8-.js";import{I as Ie}from"./ArrowLeftIcon-hOvK9SPI.js";import{I as Le}from"./ArrowRightIcon-8HhLIK5V.js";import{I as Re}from"./OttoIcon-B3d_anWX.js";import{I as ke}from"./WarningIcon-BxlYHIIT.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./Portal-BIoDE3by.js";import"./index-hcioG5kf.js";import"./index-rl8rPkT0.js";import"./StarIcon-BecsUl5f.js";import"./StarHalfIcon-Cq10TjAy.js";import"./ProgressSpinner-C4pSHKz3.js";var Ae=ee({defaultClassName:"_11wt3mu0",variantClassNames:{appearance:{underlined:"_11wt3mu1",pill:"_11wt3mu2",minimal:"_11wt3mu3",segmented:"_11wt3mu4"},active:{true:"_11wt3mu5"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3mu6"],[{appearance:"pill",active:!0},"_11wt3mu7"],[{appearance:"minimal",active:!0},"_11wt3mu8"],[{appearance:"segmented",active:!0},"_11wt3mu9"]]}),Ne="_11wt3mua",Ve=ee({defaultClassName:"_11wt3mub",variantClassNames:{appearance:{underlined:"_11wt3muc",pill:"_11wt3mud",minimal:"_11wt3mue",segmented:"_11wt3muf"},active:{true:"_11wt3mug"}},defaultVariants:{appearance:"underlined"},compoundVariants:[[{appearance:"underlined",active:!0},"_11wt3muh"],[{appearance:"pill",active:!0},"_11wt3mui"],[{appearance:"segmented",active:!0},"_11wt3muj"]]}),Me="_1cu98lp0",We=ee({defaultClassName:"_1cu98lp1",variantClassNames:{appearance:{underlined:"_1cu98lp2",pill:"_1cu98lp3",minimal:"_1cu98lp4",segmented:"_1cu98lp5 _1cu98lp0"},scroll:{true:"_1cu98lp6"}},defaultVariants:{},compoundVariants:[]}),qe="_1cu98lp7";const k=i.createContext(null),M=({id:t,active:a=0,appearance:l="underlined",onChange:o,children:c})=>{const[r,s]=fe(a,o),h=we(t??void 0),m=i.useRef(new Map),w=i.useCallback((S,T)=>{T?m.current.set(S,T):m.current.delete(S)},[]),p=i.useCallback(S=>m.current.get(S),[]),x=i.useCallback(()=>m.current.size,[]);return e.createElement(k.Provider,{value:i.useMemo(()=>({id:h,activeIndex:r,appearance:l,onChange:s,registerTab:w,getTab:p,getTabCount:x}),[h,r,l,s,w,p,x])},c)};M.displayName="Tabs";try{k.displayName="TabsContext",k.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{M.displayName="Tabs",M.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"Custom ID for the tabs container. Auto-generated if not provided.",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"Index of the currently active tab (0-based)",name:"active",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"underlined"},description:"Visual appearance style for the tabs",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"minimal"'},{value:'"underlined"'},{value:'"segmented"'}]}},children:{defaultValue:null,description:"Tab navigation and content elements (typically TabList and TabPanes)",name:"children",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Callback fired when the active tab changes",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const de={next:"scroll tabs right",prev:"scroll tabs left"},Oe=new Set(["ArrowRight","ArrowLeft","Home","End"]),me={ArrowRight:1,ArrowLeft:-1},X=i.createContext(null),g=({children:t,stretch:a,scrollable:l=!1,testId:o})=>{V.invariant(!(a&&l),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const c=i.useRef(null),r=i.useRef(null),s=i.useContext(k);V.invariant(s!==null,"This tablist isnt nested beneath <Tabs />");const{appearance:h,activeIndex:m,onChange:w}=s,p=h==="segmented",x=a??p;V.invariant(!(l&&p),'Tabs: `scrollable={true}` cannot be used with `appearance="segmented"`.');const S=i.Children.map(ue(t),(y,b)=>i.isValidElement(y)?e.createElement(X.Provider,{value:b},y):null),[T,W]=i.useState({start:!1,end:!1}),_=Ee(()=>{if(l){const{scrollWidth:y,clientWidth:b,scrollLeft:Z}=c.current,P=Z>1,C=Z<y-b-1;(P!==T.start||C!==T.end)&&W({start:P,end:C})}}),ge=i.useCallback(()=>{_()},[]),ae=y=>{if(c.current){const b=c.current.scrollLeft+y;Ce(c.current,"scrollLeft",b,300)}},he=()=>ae(-c.current.clientWidth),Te=()=>ae(c.current.clientWidth),ye=i.useCallback(y=>{const b=y.key;if(!r.current||!Oe.has(b))return;y.preventDefault();const P=s.getTabCount();if(P===0)return;let C=m??0;b in me?C=((m??0)+me[b]+P)%P:b==="Home"?C=0:b==="End"&&(C=P-1),C!==m&&(w?.(C),requestAnimationFrame(()=>{const re=s.getTab(C);re?.focus(),re?.scrollIntoView({block:"nearest",inline:"nearest"})}))},[m,w,s]);i.useEffect(()=>{const y=ve(c.current),b=()=>{_()};return y.addEventListener("resize",b,{passive:!0}),()=>{y.removeEventListener("resize",b)}},[]),i.useEffect(()=>{_()},[t,_]);const ne=l&&(T.start||T.end);return e.createElement(I,{alignItems:"center",odComponent:"tab-list",testId:o,className:[We({appearance:h,scroll:l}),x&&p&&qe]},ne?e.createElement(ce,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!T.start,onClick:he,"aria-label":de.prev},e.createElement(J,{icon:Ie})):null,e.createElement(I,{ref:c,className:[l&&Me],onScroll:ge},e.createElement(I,{ref:r,display:x||p?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",onKeyDown:ye,className:be({noWrap:!0})},S)),ne?e.createElement(ce,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!T.end,onClick:Te,"aria-label":de.next},e.createElement(J,{icon:Le})):null)};g.displayName="TabList";try{X.displayName="TabListContext",X.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{g.displayName="TabList",g.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:null,description:'Whether tabs stretch to fill the container, every tab the same width.\n\nDefaults to `false`, except on `appearance="segmented"`, where it defaults to\n`true`: segments share the bar evenly and no segment shrinks past its own label,\nso a bar too narrow for its labels scrolls rather than clipping one. Pass\n`stretch={false}` on `segmented` to size each segment to its own label instead,\nso the bar hugs its tabs.\n\nCannot be combined with `scrollable`.',name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:'Enable horizontal scrolling with navigation buttons. Cannot be combined with `stretch`, nor with `appearance="segmented"`.',name:"scrollable",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The list's `Tab` elements.",name:"children",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const n=i.forwardRef(({children:t,id:a=null,indication:l=null,as:o="button",testId:c},r)=>{const s=i.useContext(k),h=i.useContext(X);V.invariant(s!==null&&h!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const{appearance:m}=s,w=h,p=s.activeIndex===w,x=typeof a=="string"?a:`${s.id}-${w}-tab`,S=i.useCallback(_=>{s.registerTab(w,_??null),typeof r=="function"?r(_):r&&"current"in r&&(r.current=_)},[s,w,r]),T={className:Se(_e({as:typeof o=="string"?o:"button",display:"inline-flex",justifyContent:"center",backgroundColor:"transparent"}),be({color:"secondary",noWrap:!0,size:"3",weight:"bold"}),Ae({appearance:m,active:p})),role:"tab","aria-selected":p?"true":"false","data-controls":x,"data-od-component":"tab","data-testid":c,tabIndex:p?void 0:-1,onClick:()=>s.onChange?.(w),ref:S},W=e.createElement("div",{className:Pe({gap:"2",align:"center",justify:"center",noWrap:!0})},e.createElement("span",{className:Ne},t),typeof l=="number"&&e.createElement(Be,{strong:!0,as:"span",size:"2",align:"center",display:"block",color:p?"reverse":"primary",className:Ve({appearance:m,active:p})},l));return i.isValidElement(o)?i.cloneElement(o,T,W):i.createElement(o,T,W)});n.displayName="Tab";try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"The tab's label, and any decoration rendered alongside it.",name:"children",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:"null"},description:"Custom ID for the tab element. Auto-generated if not provided.",name:"id",required:!1,type:{name:"string"}},as:{defaultValue:{value:"button"},description:"Custom component or element to render the tab as. Defaults to a `button`.",name:"as",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},indication:{defaultValue:{value:"null"},description:"Optional numeric badge displayed after the label.",name:"indication",required:!1,type:{name:"number"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}var Fe="_1e18dwc0",He="_15xyz920";const G=i.createContext(null),f=({renderInactivePanes:t=!1,children:a,paddingTop:l="6",paddingBottom:o="6",testId:c})=>e.createElement(I,{paddingTop:l,paddingBottom:o,className:He,odComponent:"tab-panes",testId:c,width:"full"},i.Children.map(ue(a),(r,s)=>e.createElement(G.Provider,{value:{paneIndex:s,renderInactive:t}},r)));f.displayName="TabPanes";try{G.displayName="TabPanesContext",G.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{f.displayName="TabPanes",f.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The `TabPane` elements, one per tab.",name:"children",required:!1,type:{name:"ReactNode"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '0': string; '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '11': string; '12': string; none: string; }, `var(--${string})`>, { ...; }>, (\"mobile\" | ... 2 more ... | \"largeDes..."}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '0': string; '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '11': string; '12': string; none: string; }, `var(--${string})`>, { ...; }>, (\"mobile\" | ... 2 more ... | \"largeDes..."}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const d=({children:t,id:a=null,testId:l})=>{const o=i.useContext(G),c=i.useContext(k);V.invariant(o!==null&&c!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:r,renderInactive:s}=o,h=typeof a=="string"?a:`${c.id}-${r}-tab`,m=c.activeIndex===r;return e.createElement(I,{display:m?void 0:"none","aria-hidden":m?void 0:!0,className:Fe,odComponent:"tab-pane",testId:l,tabIndex:0,role:"tabpanel",id:h,width:"full"},m||s?t:void 0)};d.displayName="TabPane";try{d.displayName="TabPane",d.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:{value:"null"},description:"Custom ID for the tab panel element. Auto-generated if not provided.",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The panel's content.",name:"children",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:u,fn:De,userEvent:Q,within:te}=__STORYBOOK_MODULE_TEST__,v=({label:t})=>{const[a,l]=i.useState(se()?.5:Math.random()*5);return i.useEffect(()=>{const o=setInterval(()=>{l(se()?.5:Math.random()*5)},1e3);return()=>{clearInterval(o)}},[]),e.createElement(xe,{rating:a,label:t})},bt={title:"Components/Tabs",component:M,tags:[],decorators:[(t,a)=>e.createElement("div",{style:{maxWidth:a.parameters.wide?"100%":"500px",width:"100%"}},t())],args:{active:0,appearance:"underlined",onChange:De()},argTypes:{children:{control:{disable:!0}}}},E=t=>{const[a,l]=i.useState(t.active??0);return e.createElement(M,{...t,active:a,onChange:l})},ze=t=>{const a=t.closest('[data-od-component="tab-list"]');if(!(a instanceof HTMLElement))throw new Error("tab list root not found");return a},$e=t=>{const a=t.querySelector("span");if(!a)throw new Error("tab is missing its label span");return Math.round(a.getBoundingClientRect().left-t.getBoundingClientRect().left)},Y=[{label:"A deliberately long label",indication:1},{label:"Medium label",indication:41},{label:"Short",indication:0},{label:"Tiny",indication:17},{label:"Ok",indication:178}],R={args:{children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,null,"Job History"),e.createElement(n,null,"Vehicle History"),e.createElement(n,null,"Driver"),e.createElement(n,null,"Example Rating")),e.createElement(f,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B"),e.createElement(d,null,"Content C"),e.createElement(d,null,e.createElement(pe,null,e.createElement(v,{label:"5"}),e.createElement(v,{label:"4"}),e.createElement(v,{label:"3"}),e.createElement(v,{label:"2"}),e.createElement(v,{label:"1"})))))},render:t=>e.createElement(E,{...t})},q={args:{...R.args,appearance:"pill"},render:t=>e.createElement(E,{...t})},O={args:{children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,{indication:2},"Tab 1"),e.createElement(n,{indication:0},"Tab 2")),e.createElement(f,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))},render:t=>e.createElement(E,{...t})},F={args:{children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,{indication:2},e.createElement(le,{justify:"center"},"Tab 1",e.createElement(oe,{alignment:ie.BOTTOM,label:"This tab is a winner"},e.createElement(I,null,e.createElement(J,{icon:Re}))))),e.createElement(n,null,e.createElement(le,{justify:"center"},"Tab 2",e.createElement(oe,{alignment:ie.BOTTOM,label:"This tab is less awesome"},e.createElement(I,null,e.createElement(J,{icon:ke})))))),e.createElement(f,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B")))},render:t=>e.createElement(E,{...t})},H={args:{children:e.createElement(e.Fragment,null,e.createElement(g,{stretch:!0},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2")),e.createElement(f,null,e.createElement(d,null,"Content A"),e.createElement(d,null,e.createElement(pe,null,e.createElement(v,{label:"5"}),e.createElement(v,{label:"4"}),e.createElement(v,{label:"3"}),e.createElement(v,{label:"2"}),e.createElement(v,{label:"1"})))))},render:t=>e.createElement(E,{...t})},D={args:{...R.args,appearance:"minimal"},render:t=>e.createElement(E,{...t})},N={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,null,"Registration"),e.createElement(n,null,"VIN"),e.createElement(n,null,"Serial Number")),e.createElement(f,null,e.createElement(d,null,"Search by registration"),e.createElement(d,null,"Search by VIN"),e.createElement(d,null,"Search by serial number")))},render:t=>e.createElement(E,{...t})},z={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,{indication:3},"Open"),e.createElement(n,{indication:12},"In Progress"),e.createElement(n,null,"Closed")),e.createElement(f,null,e.createElement(d,null,"Content A"),e.createElement(d,null,"Content B"),e.createElement(d,null,"Content C")))},render:t=>e.createElement(E,{...t})},B={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(g,{stretch:!1},Y.map(({label:t,indication:a})=>e.createElement(n,{key:t,indication:a},t))),e.createElement(f,null,Y.map(({label:t})=>e.createElement(d,{key:t},t))))},parameters:{wide:!0},render:t=>e.createElement(E,{...t})},L={...B,args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(g,null,Y.map(({label:t,indication:a})=>e.createElement(n,{key:t,indication:a},t))),e.createElement(f,null,Y.map(({label:t})=>e.createElement(d,{key:t},t))))}},$={...B,tags:["test","!autodocs","skip-themes"],parameters:{wide:!0,chromatic:{disableSnapshot:!0}},play:async({canvasElement:t,step:a})=>{const l=te(t),o=l.getAllByRole("tab"),c=l.getByRole("tablist");await a("every segment insets its label equally",async()=>{const r=o.map(s=>$e(s));for(const s of r)await u(s).toBe(r[0])}),await a("segments size to their own label",async()=>{const r=o.map(s=>Math.round(s.getBoundingClientRect().width));await u(Math.max(...r)).toBe(r[0]),await u(Math.min(...r)).toBeLessThan(Math.max(...r))}),await a("the bar hugs its tabs",async()=>{await u(c.getBoundingClientRect().width).toBeLessThan(t.getBoundingClientRect().width)}),await a("the bar is 40px tall",async()=>{await u(Math.round(c.getBoundingClientRect().height)).toBe(40)}),await a("every tab stays reachable when too narrow",async()=>{const r=ze(c),s=r.parentElement,h=s.style.width;s.style.width="320px",await u(getComputedStyle(r).overflowX).toBe("auto"),await u(r.scrollWidth).toBeGreaterThan(r.clientWidth),s.style.width=h})}},j={...L,tags:["test","!autodocs","skip-themes"],parameters:{wide:!0,chromatic:{disableSnapshot:!0}},play:async({canvasElement:t,step:a})=>{const l=te(t),o=l.getAllByRole("tab"),c=l.getByRole("tablist");await a("the bar fills its container",async()=>{await u(Math.round(c.getBoundingClientRect().width)).toBe(Math.round(t.getBoundingClientRect().width))}),await a("every segment takes the same width",async()=>{const r=o.map(s=>Math.round(s.getBoundingClientRect().width));await u(Math.max(...r)-Math.min(...r)).toBeLessThanOrEqual(1)}),await a("no segment clips its label",async()=>{for(const r of o)await u(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth+1)})}},A={args:{appearance:"segmented",children:e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(n,null,"Open"),e.createElement(n,null,"Closed")),e.createElement(f,null,e.createElement(d,null,"Open bookings"),e.createElement(d,null,"Closed bookings")))},render:t=>e.createElement(E,{...t})},U={...N,tags:["!autodocs","skip-themes"],play:async({canvasElement:t,step:a})=>{const l=te(t),o=l.getAllByRole("tab");await a("first segment is selected by default",async()=>{await u(o[0]).toHaveAttribute("aria-selected","true"),await u(o[1]).toHaveAttribute("aria-selected","false")}),await a("clicking a segment selects it",async()=>{await Q.click(o[2]),await u(l.getAllByRole("tab",{name:"Serial Number"})[0]).toHaveAttribute("aria-selected","true")}),await a("ArrowRight wraps to the first segment",async()=>{await Q.keyboard("{ArrowRight}"),await u(l.getAllByRole("tab",{name:"Registration"})[0]).toHaveAttribute("aria-selected","true")}),await a("End jumps to the last segment",async()=>{await Q.keyboard("{End}"),await u(l.getAllByRole("tab",{name:"Serial Number"})[0]).toHaveAttribute("aria-selected","true")})}},K={args:{children:e.createElement(g,{scrollable:!0},e.createElement(n,null,"Hello"),e.createElement(n,{indication:5},"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"),e.createElement(n,null,"Hello"),e.createElement(n,null,"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"),e.createElement(n,null,"Hello"),e.createElement(n,null,"Why isnt"),e.createElement(n,null,"This a terribly"),e.createElement(n,null,"Long"),e.createElement(n,null,"Tab list"))},render:t=>e.createElement(E,{...t})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'pill'
  },
  render: args => <StatefulTabs {...args} />
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    appearance: 'minimal'
  },
  render: args => <StatefulTabs {...args} />
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'segmented',
    children: <>
                <TabList stretch={false}>
                    {unevenTabs.map(({
          label,
          indication
        }) => <Tab key={label} indication={indication}>
                            {label}
                        </Tab>)}
                </TabList>

                <TabPanes>
                    {unevenTabs.map(({
          label
        }) => <TabPane key={label}>{label}</TabPane>)}
                </TabPanes>
            </>
  },
  parameters: {
    wide: true
  },
  render: args => <StatefulTabs {...args} />
}`,...B.parameters?.docs?.source},description:{story:`\`stretch={false}\` sizes each segment to its own label, so every segment keeps the same
horizontal padding and the bar hugs its tabs rather than filling the container. Labels
of deliberately uneven length show it: no segment is squeezed to fit an equal share,
and none is clipped.`,...B.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...SegmentedUnevenLabels,
  args: {
    appearance: 'segmented',
    children: <>
                <TabList>
                    {unevenTabs.map(({
          label,
          indication
        }) => <Tab key={label} indication={indication}>
                            {label}
                        </Tab>)}
                </TabList>

                <TabPanes>
                    {unevenTabs.map(({
          label
        }) => <TabPane key={label}>{label}</TabPane>)}
                </TabPanes>
            </>
  }
}`,...L.parameters?.docs?.source},description:{story:`The default: the bar fills its container and every segment takes the same width, so the
group reads as one control whatever the labels say. No segment shrinks past its own
label, so nothing is clipped — a bar too narrow for its labels scrolls instead.`,...L.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...SegmentedUnevenLabels,
  tags: ['test', '!autodocs', 'skip-themes'],
  parameters: {
    wide: true,
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    const tablist = canvas.getByRole('tablist');
    await step('every segment insets its label equally', async () => {
      const insets = tabs.map(tab => labelInset(tab));
      for (const inset of insets) {
        await expect(inset).toBe(insets[0]);
      }
    });
    await step('segments size to their own label', async () => {
      const widths = tabs.map(tab => Math.round(tab.getBoundingClientRect().width));
      await expect(Math.max(...widths)).toBe(widths[0]);
      await expect(Math.min(...widths)).toBeLessThan(Math.max(...widths));
    });
    await step('the bar hugs its tabs', async () => {
      await expect(tablist.getBoundingClientRect().width).toBeLessThan(canvasElement.getBoundingClientRect().width);
    });
    await step('the bar is 40px tall', async () => {
      await expect(Math.round(tablist.getBoundingClientRect().height)).toBe(40);
    });
    await step('every tab stays reachable when too narrow', async () => {
      const bar = tabListRoot(tablist);
      const outer = bar.parentElement!;
      const restore = outer.style.width;
      outer.style.width = '320px';

      // the bar scrolls rather than hiding its trailing tabs
      await expect(getComputedStyle(bar).overflowX).toBe('auto');
      await expect(bar.scrollWidth).toBeGreaterThan(bar.clientWidth);
      outer.style.width = restore;
    });
  }
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...SegmentedStretched,
  tags: ['test', '!autodocs', 'skip-themes'],
  parameters: {
    wide: true,
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    const tablist = canvas.getByRole('tablist');
    await step('the bar fills its container', async () => {
      await expect(Math.round(tablist.getBoundingClientRect().width)).toBe(Math.round(canvasElement.getBoundingClientRect().width));
    });
    await step('every segment takes the same width', async () => {
      const widths = tabs.map(tab => Math.round(tab.getBoundingClientRect().width));
      await expect(Math.max(...widths) - Math.min(...widths)).toBeLessThanOrEqual(1);
    });
    await step('no segment clips its label', async () => {
      for (const tab of tabs) {
        await expect(tab.scrollWidth).toBeLessThanOrEqual(tab.clientWidth + 1);
      }
    });
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'segmented',
    children: <>
                <TabList>
                    <Tab>Open</Tab>
                    <Tab>Closed</Tab>
                </TabList>

                <TabPanes>
                    <TabPane>Open bookings</TabPane>
                    <TabPane>Closed bookings</TabPane>
                </TabPanes>
            </>
  },
  render: args => <StatefulTabs {...args} />
}`,...A.parameters?.docs?.source},description:{story:`Two short labels, stretched as segmented bars are by default: both segments fill the
container at the same width rather than shrinking to their text.`,...A.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const pt=["Standard","Pill","WithIndication","WithComplexTab","WithStretch","Minimal","Segmented","SegmentedWithIndication","SegmentedUnevenLabels","SegmentedStretched","SegmentedLayoutTest","SegmentedStretchedLayoutTest","SegmentedTwoLabels","SegmentedInteractionTest","Scrollable"];export{D as Minimal,q as Pill,K as Scrollable,N as Segmented,U as SegmentedInteractionTest,$ as SegmentedLayoutTest,L as SegmentedStretched,j as SegmentedStretchedLayoutTest,A as SegmentedTwoLabels,B as SegmentedUnevenLabels,z as SegmentedWithIndication,R as Standard,F as WithComplexTab,O as WithIndication,H as WithStretch,pt as __namedExportsOrder,bt as default};
