import{r as t,R as e}from"./index-UyvCXs0Z.js";import{d as k,e as P}from"./index-BJSya_LC.js";import{d as q}from"./index-D_iG_Vvt.js";import{B as g,c as $}from"./Box-BZBbKvYV.js";import{I as G}from"./Icon-DcPNnT7l.js";import{I as L}from"./ArrowUpIcon-DNXE4o4I.js";import{I as b}from"./Inline-Tz3l7KBY.js";import{T as n}from"./Text-BLBByk4R.js";import{V as F}from"./VisuallyHidden-ByHnd5WU.js";import{S as d}from"./Stack-CInYNX1D.js";import{B as T}from"./Badge-BMrEW4I9.js";import{A as v}from"./Actions-BIBXI3hb.js";import{B as m}from"./Button-C8rarPIR.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-ByY9IofJ.js";import"./useNegativeMarginTop-DNM2Rbyz.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ptSZJ0kX.js";/* empty css                                  */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Column-Do0ENOcU.js";import"./ProgressSpinner-Bcqw29R3.js";var O="wqeywm0";const V=t.createContext(null),z=({padding:l,stickyHead:r,children:o})=>{const c=t.useMemo(()=>({padding:l,stickyHead:r}),[l,r]);return t.createElement(V.Provider,{value:c},o)},N=()=>{const l=t.useContext(V);return q.invariant(l!==null,"Make sure you've got a <Table /> component in your tree"),l};try{z.displayName="TableContextProvider",z.__docgenInfo={description:"",displayName:"TableContextProvider",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"none"'}]}},stickyHead:{defaultValue:null,description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}const y=t.forwardRef(({children:l,padding:r="4",stickyHead:o=!1,columnTemplate:c},s)=>t.createElement(z,{padding:r,stickyHead:o},t.createElement(g,{ref:s,role:"grid",width:"full",style:{gridTemplateColumns:c},className:O},l)));try{y.displayName="Table",y.__docgenInfo={description:"",displayName:"Table",props:{columnTemplate:{defaultValue:null,description:"",name:"columnTemplate",required:!0,type:{name:"string"}},padding:{defaultValue:{value:"4"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"none"'}]}},stickyHead:{defaultValue:{value:"false"},description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}var j="_10xbrtd0";const a=t.forwardRef(({padding:l,align:r="left","aria-label":o,children:c},s)=>{const u=N(),x=l??(u==null?void 0:u.padding)??"none";return t.createElement(g,{ref:s,role:"gridcell",scope:"row",display:"flex",alignItems:"center",justifyContent:k(r),padding:x,borderColourBottom:"light",borderWidthBottom:"1","aria-label":o,className:j},typeof c=="string"||typeof c=="number"?t.createElement(n,{is:"span",align:r,colour:"dark",display:"block",size:"3"},c):c)});try{a.displayName="TableCell",a.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"none"'}]}}}}}catch{}var K="_1a20v5n0",U="_1a20v5n1",S={root:["_1a20v5n2","_1a20v5n3"],none:"_1a20v5n4",asc:"_1a20v5n5",desc:"_1a20v5n6"},X="_1a20v5n7";const R=l=>l==="asc"?"ascending":l==="desc"?"descending":"none",i=t.forwardRef(({align:l="left",onSort:r,sort:o,padding:c,"aria-label":s,children:u},x)=>{const C=N(),B=c??(C==null?void 0:C.padding)??"none",W=t.useCallback(M=>{typeof r=="function"&&r(M)},[r]),E=typeof o=="string",h=t.createElement(G,{icon:L,size:"small",className:$([S.root,S[o??"none"]])}),w=t.createElement(b,{alignY:"center",alignX:k(l),space:"1"},l==="right"&&E?h:null,t.createElement(n,{strong:!0,size:"2",is:"span",className:U},u,E?t.createElement(F,{is:"span"}," ","sorted ",R(o)):null),(l==="left"||l==="center")&&E?h:null);return t.createElement(g,{ref:x,role:"columnheader",scope:"col",display:"flex",alignItems:"center",justifyContent:k(l),padding:o?void 0:B,backgroundColour:"gray100",borderColourBottom:"light",borderWidthBottom:"1","aria-sort":E?R(o):void 0,"aria-label":s,className:C.stickyHead&&X,onClick:o?W:void 0},o?t.createElement(g,{is:"button",display:"block",width:"full",padding:B,tabIndex:-1,className:K},w):w)});try{i.displayName="TableHeadCell",i.__docgenInfo={description:"",displayName:"TableHeadCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"none"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"((event: MouseEvent) => void)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}}}}}catch{}const p=t.forwardRef(({children:l,onClick:r},o)=>t.createElement(g,{ref:o,display:"contents",role:"row",onClick:r},l));try{p.displayName="TableRow",p.__docgenInfo={description:"",displayName:"TableRow",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}}}catch{}const _=t.forwardRef(({children:l},r)=>t.createElement(g,{ref:r,role:"rowgroup",display:"contents"},l));try{_.displayName="TableRowGroup",_.__docgenInfo={description:"",displayName:"TableRowGroup",props:{}}}catch{}const ve={title:"Components/Table",component:y},D=["asc","desc","none"],Y=P(D),f={args:{columnTemplate:"repeat(7, auto)"},render:l=>{const[r,o]=t.useState({price:"asc",status:"desc"}),c=s=>()=>{o(u=>({...u,[s]:Y(D.lastIndexOf(u[s])+1)}))};return e.createElement(y,{...l},e.createElement(_,null,e.createElement(p,null,e.createElement(i,null,"ID"),e.createElement(i,null,"Mechanic Name"),e.createElement(i,null,"Vehicle"),e.createElement(i,{sort:r.price,align:"right",onSort:c("price")},"Price"),e.createElement(i,{sort:r.status,align:"left",onSort:c("status")},"Status"),e.createElement(i,null,"Age"),e.createElement(i,{align:"right"}))),e.createElement(_,null,e.createElement(p,null,e.createElement(a,null,"522698"),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"My Auto Service & Repair"),e.createElement(n,{size:"2",colour:"muted"},"Gold Coast"))),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"ABC123"),e.createElement(n,{noWrap:!0,size:"2",colour:"muted"},"Audi A4"))),e.createElement(a,{align:"right"},"$99.00"),e.createElement(a,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}))),e.createElement(a,null,"2min"),e.createElement(a,{padding:"1",align:"right"},e.createElement(v,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(a,null,"597194"),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"Magic Spanners"),e.createElement(n,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"ABC123"),e.createElement(n,{noWrap:!0,size:"2",colour:"muted"},"Prosche Macan"))),e.createElement(a,{align:"right"},"$102.00"),e.createElement(a,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Dispute",colour:"red"}))),e.createElement(a,null,"5min"),e.createElement(a,{padding:"1",align:"right"},e.createElement(v,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(a,null,"789456"),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"Super Special Cars"),e.createElement(n,{size:"2",colour:"muted"},"Sydney CBD"))),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"ABC123"),e.createElement(n,{noWrap:!0,size:"2",colour:"muted"},"Maserati Levante"))),e.createElement(a,{align:"right"},"$2,495.45"),e.createElement(a,null,e.createElement(b,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Complete",colour:"green"}))),e.createElement(a,null,"5hr"),e.createElement(a,{padding:"1",align:"right"},e.createElement(v,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View")))),e.createElement(p,null,e.createElement(a,null,"159753"),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"Humans 'n Cars"),e.createElement(n,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement(d,{space:"1"},e.createElement(n,{size:"3",colour:"dark"},"ABC123"),e.createElement(n,{size:"2",colour:"muted"},"Koenigsegg Agera RS"))),e.createElement(a,{align:"right"},"$11,158.46"),e.createElement(a,null,e.createElement(b,null,e.createElement(T,{label:"Unpaid",colour:"yellow"}))),e.createElement(a,null,"15hr"),e.createElement(a,{padding:"1",align:"right"},e.createElement(v,{noWrap:!0},e.createElement(m,{size:"small",variant:"danger"},"Delete"),e.createElement(m,{size:"small"},"View"))))))}};var A,I,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                        <TableCell padding="1" align="right">
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
                        <TableCell padding="1" align="right">
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
                        <TableCell padding="1" align="right">
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
                        <TableCell padding="1" align="right">
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
}`,...(H=(I=f.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const fe=["Standard"];export{f as Standard,fe as __namedExportsOrder,ve as default};
