import{r as t,h as P,B as g,J as x,c as q,e,S as d,K as $}from"./iframe-Dl5X8CFQ.js";import{A as y}from"./Actions-DTTGCuew.js";import{B as T}from"./Badge-Bb9eYHtZ.js";import{B as m}from"./Button-cM3Tku_S.js";import{I as b}from"./Inline-DS_RBcHB.js";import{T as r}from"./Text-CZG_rW-B.js";import{I as G}from"./Icon-IKMSJ4nR.js";import{V as L}from"./VisuallyHidden-Dq9KUPLF.js";import{I as F}from"./ArrowUpIcon-DfQXnf7v.js";import"./Column-CKp8fJIF.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./useNegativeMarginTop-14a5w23w.js";import"./ProgressSpinner-DAmI66fJ.js";import"./useTextStyles-BJe2PR_c.js";var K="wqeywm0";const N=t.createContext(null),z=({padding:a,stickyHead:n,children:o})=>{const s=t.useMemo(()=>({padding:a,stickyHead:n}),[a,n]);return t.createElement(N.Provider,{value:s},o)},V=()=>{const a=t.useContext(N);return P.invariant(a!==null,"Make sure you've got a <Table /> component in your tree"),a};try{z.displayName="TableContextProvider",z.__docgenInfo={description:"",displayName:"TableContextProvider",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:null,description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}const C=t.forwardRef(({children:a,padding:n="4",stickyHead:o=!1,columnTemplate:s},c)=>t.createElement(z,{padding:n,stickyHead:o},t.createElement(g,{ref:c,role:"grid",width:"full",style:{gridTemplateColumns:s},className:K},a)));C.displayName="Table";try{C.displayName="Table",C.__docgenInfo={description:"",displayName:"Table",props:{columnTemplate:{defaultValue:null,description:"",name:"columnTemplate",required:!0,type:{name:"string"}},padding:{defaultValue:{value:"4"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:{value:"false"},description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}var O="_10xbrtd0";const l=t.forwardRef(({padding:a,align:n="left","aria-label":o,children:s},c)=>{const u=V(),k=a??(u==null?void 0:u.padding)??"none";return t.createElement(g,{ref:c,role:"gridcell",display:"flex",alignItems:"center",position:"relative",justifyContent:x(n),padding:k,borderBottomWidth:"1","aria-label":o,className:O},typeof s=="string"||typeof s=="number"?t.createElement(r,{as:"span",colour:"dark",display:"block",size:"3"},s):s)});l.displayName="TableCell";try{l.displayName="TableCell",l.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}}}}}catch{}var j="_1a20v5n0",U="_1a20v5n1",S={root:["_1a20v5n2","_1a20v5n3"],none:"_1a20v5n4",asc:"_1a20v5n5",desc:"_1a20v5n6"},J="_1a20v5n7";const R=a=>a==="asc"?"ascending":a==="desc"?"descending":"none",i=t.forwardRef(({align:a="left",onSort:n,sort:o,padding:s,"aria-label":c,children:u},k)=>{const v=V(),h=s??(v==null?void 0:v.padding)??"none",W=t.useCallback(M=>{typeof n=="function"&&n(M)},[n]),f=typeof o=="string",B=t.createElement(G,{icon:F,size:"small",className:q([S.root,S[o??"none"]])}),w=t.createElement(b,{alignY:"center",alignX:x(a),space:"1"},a==="right"&&f?B:null,t.createElement(r,{strong:!0,size:"3",as:"span",className:U},u,f?t.createElement(L,{as:"span"}," ","sorted ",R(o)):null),(a==="left"||a==="center")&&f?B:null);return t.createElement(g,{as:"th",ref:k,role:"columnheader",scope:"col",display:"flex",alignItems:"center",justifyContent:x(a),padding:o?void 0:h,borderBottomColour:"dark",borderBottomWidth:"1","aria-sort":f?R(o):void 0,"aria-label":c,className:v.stickyHead&&J,onClick:o?W:void 0},o?t.createElement(g,{as:"button",display:"block",width:"full",padding:h,tabIndex:-1,className:j},w):w)});i.displayName="TableHeadCell";try{i.displayName="TableHeadCell",i.__docgenInfo={description:"",displayName:"TableHeadCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"none"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"((event: MouseEvent) => void)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const p=t.forwardRef(({children:a,onClick:n},o)=>t.createElement(g,{ref:o,display:"contents",role:"row",onClick:n},a));p.displayName="TableRow";try{p.displayName="TableRow",p.__docgenInfo={description:"",displayName:"TableRow",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}}}catch{}const E=t.forwardRef(({children:a},n)=>t.createElement(g,{ref:n,role:"rowgroup",display:"contents"},a));E.displayName="TableRowGroup";try{E.displayName="TableRowGroup",E.__docgenInfo={description:"",displayName:"TableRowGroup",props:{}}}catch{}const de={title:"Components/Table",component:C},D=["asc","desc","none"],X=$(D),_={args:{columnTemplate:"repeat(7, auto)"},render:a=>{const[n,o]=t.useState({price:"asc",status:"desc"}),s=c=>()=>{o(u=>({...u,[c]:X(D.lastIndexOf(u[c])+1)}))};return e.createElement(C,{...a},e.createElement(E,null,e.createElement(p,null,e.createElement(i,null,"ID"),e.createElement(i,null,"Mechanic Name"),e.createElement(i,null,"Vehicle"),e.createElement(i,{sort:n.price,align:"right",onSort:s("price")},"Price"),e.createElement(i,{sort:n.status,align:"left",onSort:s("status")},"Status"),e.createElement(i,null,"Age"),e.createElement(i,{align:"right"}))),e.createElement(E,null,e.createElement(p,null,e.createElement(l,null,"522698"),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"My Auto Service & Repair"),e.createElement(r,{size:"2",colour:"muted"},"Gold Coast"))),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Audi A4"))),e.createElement(l,{align:"right"},"$99.00"),e.createElement(l,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}))),e.createElement(l,null,"2min"),e.createElement(l,{align:"right"},e.createElement(y,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(l,null,"597194"),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Magic Spanners"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Prosche Macan"))),e.createElement(l,{align:"right"},"$102.00"),e.createElement(l,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Dispute",colour:"red"}))),e.createElement(l,null,"5min"),e.createElement(l,{align:"right"},e.createElement(y,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(l,null,"789456"),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Super Special Cars"),e.createElement(r,{size:"2",colour:"muted"},"Sydney CBD"))),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Maserati Levante"))),e.createElement(l,{align:"right"},"$2,495.45"),e.createElement(l,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Complete",colour:"green"}))),e.createElement(l,null,"5hr"),e.createElement(l,{align:"right"},e.createElement(y,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(l,null,"159753"),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Humans 'n Cars"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(l,null,e.createElement(d,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{size:"2",colour:"muted"},"Koenigsegg Agera RS"))),e.createElement(l,{align:"right"},"$11,158.46"),e.createElement(l,null,e.createElement(b,null,e.createElement(T,{label:"Unpaid",colour:"yellow"}))),e.createElement(l,null,"15hr"),e.createElement(l,{align:"right"},e.createElement(y,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View"))))))}};var A,H,I;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    columnTemplate: 'repeat(7, auto)'
  },
  render: args => {
    const [sort, setsort] = useState<Record<string, 'asc' | 'desc' | 'none'>>({
      price: 'asc',
      status: 'desc'
    });
    const sortSetter = which => () => {
      setsort(prev => {
        return {
          ...prev,
          [which]: sortFlowRingLookup(sortFlow.lastIndexOf(prev[which]) + 1)
        };
      });
    };
    return <Table {...args}>
                <TableRowGroup>
                    <TableRow>
                        <TableHeadCell>ID</TableHeadCell>
                        <TableHeadCell>Mechanic Name</TableHeadCell>
                        <TableHeadCell>Vehicle</TableHeadCell>
                        <TableHeadCell sort={sort.price} align="right" onSort={sortSetter('price')}>
                            Price
                        </TableHeadCell>
                        <TableHeadCell sort={sort.status} align="left" onSort={sortSetter('status')}>
                            Status
                        </TableHeadCell>
                        <TableHeadCell>Age</TableHeadCell>
                        <TableHeadCell align="right" />
                    </TableRow>
                </TableRowGroup>
                <TableRowGroup>
                    <TableRow>
                        <TableCell>522698</TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    My Auto Service & Repair
                                </Text>
                                <Text size="2" colour="muted">
                                    Gold Coast
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Audi A4
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell align="right">$99.00</TableCell>
                        <TableCell>
                            <Inline>
                                <Badge label="Paid" colour="green" />
                            </Inline>
                        </TableCell>
                        <TableCell>2min</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small" variant="danger">
                                    Delete
                                </Button>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>597194</TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    Magic Spanners
                                </Text>
                                <Text size="2" colour="muted">
                                    Brisbane CBD
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Prosche Macan
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell align="right">$102.00</TableCell>
                        <TableCell>
                            <Inline>
                                <Badge label="Paid" colour="green" />
                                <Badge label="Dispute" colour="red" />
                            </Inline>
                        </TableCell>
                        <TableCell>5min</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small" variant="danger">
                                    Delete
                                </Button>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>789456</TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    Super Special Cars
                                </Text>
                                <Text size="2" colour="muted">
                                    Sydney CBD
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Maserati Levante
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell align="right">$2,495.45</TableCell>
                        <TableCell>
                            <Inline>
                                <Badge label="Paid" colour="green" />
                                <Badge label="Complete" colour="green" />
                            </Inline>
                        </TableCell>
                        <TableCell>5hr</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small" variant="danger">
                                    Delete
                                </Button>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>159753</TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    Humans &apos;n Cars
                                </Text>
                                <Text size="2" colour="muted">
                                    Brisbane CBD
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell>
                            <Stack space="1">
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text size="2" colour="muted">
                                    Koenigsegg Agera RS
                                </Text>
                            </Stack>
                        </TableCell>
                        <TableCell align="right">$11,158.46</TableCell>
                        <TableCell>
                            <Inline>
                                <Badge label="Unpaid" colour="yellow" />
                            </Inline>
                        </TableCell>
                        <TableCell>15hr</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small" variant="danger">
                                    Delete
                                </Button>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                </TableRowGroup>
            </Table>;
  }
}`,...(I=(H=_.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const me=["Standard"];export{_ as Standard,me as __namedExportsOrder,de as default};
