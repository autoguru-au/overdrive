import{r as t,j as D,B as b,P as x,c as W,e,S as u,Q as M}from"./iframe-Bw60F3r3.js";import{A as f}from"./Actions-CoyNV1i2.js";import{B as T}from"./Badge-CCmI0oXS.js";import{B as d}from"./Button-C8Kz0zNw.js";import{I as g}from"./Inline-BWeOzgzx.js";import{T as r}from"./Text-Dp2MR2jg.js";import{I as P}from"./Icon-DL18B8I0.js";import{V as q}from"./VisuallyHidden-C4AMhhmD.js";import{I as $}from"./ArrowUpIcon-DmN9Jsvj.js";import"./Column-DiJk33U-.js";import"./resolveResponsiveProps-DGdp35wv.js";import"./ProgressSpinner-DSbr-4aD.js";var G="wqeywm0";const A=t.createContext(null),k=({padding:l,stickyHead:n,children:o})=>{const s=t.useMemo(()=>({padding:l,stickyHead:n}),[l,n]);return t.createElement(A.Provider,{value:s},o)},H=()=>{const l=t.useContext(A);return D.invariant(l!==null,"Make sure you've got a <Table /> component in your tree"),l};try{k.displayName="TableContextProvider",k.__docgenInfo={description:"",displayName:"TableContextProvider",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:null,description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}const C=t.forwardRef(({children:l,padding:n="4",stickyHead:o=!1,columnTemplate:s},i)=>t.createElement(k,{padding:n,stickyHead:o},t.createElement(b,{ref:i,role:"grid",width:"full",style:{gridTemplateColumns:s},className:G,odComponent:"table"},l)));C.displayName="Table";try{C.displayName="Table",C.__docgenInfo={description:"",displayName:"Table",props:{columnTemplate:{defaultValue:null,description:"",name:"columnTemplate",required:!0,type:{name:"string"}},padding:{defaultValue:{value:"4"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:{value:"false"},description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}var L="_10xbrtd0";const a=t.forwardRef(({padding:l,align:n="left","aria-label":o,children:s},i)=>{const p=H(),_=l??p?.padding??"none";return t.createElement(b,{ref:i,role:"gridcell",display:"flex",alignItems:"center",position:"relative",justifyContent:x(n),padding:_,borderBottomWidth:"1","aria-label":o,className:L},typeof s=="string"||typeof s=="number"?t.createElement(r,{as:"span",colour:"dark",display:"block",size:"3"},s):s)});a.displayName="TableCell";try{a.displayName="TableCell",a.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}}}}}catch{}var F="_1a20v5n0",j="_1a20v5n1",S={root:["_1a20v5n2","_1a20v5n3"],none:"_1a20v5n4",asc:"_1a20v5n5",desc:"_1a20v5n6"},O="_1a20v5n7";const R=l=>l==="asc"?"ascending":l==="desc"?"descending":"none",c=t.forwardRef(({align:l="left",onSort:n,sort:o,padding:s,"aria-label":i,children:p},_)=>{const z=H(),B=s??z?.padding??"none",N=t.useCallback(V=>{typeof n=="function"&&n(V)},[n]),v=typeof o=="string",h=t.createElement(P,{icon:$,size:"small",className:W([S.root,S[o??"none"]])}),w=t.createElement(g,{alignY:"center",alignX:x(l),space:"1"},l==="right"&&v?h:null,t.createElement(r,{strong:!0,size:"3",as:"span",align:l,className:j},p,v?t.createElement(q,{as:"span"}," ","sorted ",R(o)):null),(l==="left"||l==="center")&&v?h:null);return t.createElement(b,{as:"th",ref:_,role:"columnheader",scope:"col",display:"flex",alignItems:"center",justifyContent:x(l),padding:o?void 0:B,borderBottomColour:"dark",borderBottomWidth:"1","aria-sort":v?R(o):void 0,"aria-label":i,className:z.stickyHead&&O,onClick:o?N:void 0},o?t.createElement(b,{as:"button",display:"block",width:"full",padding:B,tabIndex:-1,className:F},w):w)});c.displayName="TableHeadCell";try{c.displayName="TableHeadCell",c.__docgenInfo={description:"",displayName:"TableHeadCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"desc"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"((event: MouseEvent) => void)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const m=t.forwardRef(({children:l,onClick:n},o)=>t.createElement(b,{ref:o,display:"contents",role:"row",onClick:n},l));m.displayName="TableRow";try{m.displayName="TableRow",m.__docgenInfo={description:"",displayName:"TableRow",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}}}catch{}const E=t.forwardRef(({children:l},n)=>t.createElement(b,{ref:n,role:"rowgroup",display:"contents"},l));E.displayName="TableRowGroup";try{E.displayName="TableRowGroup",E.__docgenInfo={description:"",displayName:"TableRowGroup",props:{}}}catch{}const oe={title:"Components/Table",component:C},I=["asc","desc","none"],K=M(I),y={args:{columnTemplate:"repeat(7, auto)"},render:l=>{const[n,o]=t.useState({price:"asc",status:"desc"}),s=i=>()=>{o(p=>({...p,[i]:K(I.lastIndexOf(p[i])+1)}))};return e.createElement(C,{...l},e.createElement(E,null,e.createElement(m,null,e.createElement(c,null,"ID"),e.createElement(c,null,"Mechanic Name"),e.createElement(c,null,"Vehicle"),e.createElement(c,{sort:n.price,align:"right",onSort:s("price")},"Price"),e.createElement(c,{sort:n.status,align:"left",onSort:s("status")},"Status"),e.createElement(c,null,"Age"),e.createElement(c,{align:"right"}))),e.createElement(E,null,e.createElement(m,null,e.createElement(a,null,"522698"),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"My Auto Service & Repair"),e.createElement(r,{size:"2",colour:"muted"},"Gold Coast"))),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Audi A4"))),e.createElement(a,{align:"right"},"$99.00"),e.createElement(a,null,e.createElement(g,null,e.createElement(T,{label:"Paid",colour:"green"}))),e.createElement(a,null,"2min"),e.createElement(a,{align:"right"},e.createElement(f,{noWrap:!0},e.createElement(d,{size:"small",variant:"danger"},"Delete"),e.createElement(d,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"597194"),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Magic Spanners"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Prosche Macan"))),e.createElement(a,{align:"right"},"$102.00"),e.createElement(a,null,e.createElement(g,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Dispute",colour:"red"}))),e.createElement(a,null,"5min"),e.createElement(a,{align:"right"},e.createElement(f,{noWrap:!0},e.createElement(d,{size:"small",variant:"danger"},"Delete"),e.createElement(d,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"789456"),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Super Special Cars"),e.createElement(r,{size:"2",colour:"muted"},"Sydney CBD"))),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Maserati Levante"))),e.createElement(a,{align:"right"},"$2,495.45"),e.createElement(a,null,e.createElement(g,null,e.createElement(T,{label:"Paid",colour:"green"}),e.createElement(T,{label:"Complete",colour:"green"}))),e.createElement(a,null,"5hr"),e.createElement(a,{align:"right"},e.createElement(f,{noWrap:!0},e.createElement(d,{size:"small",variant:"danger"},"Delete"),e.createElement(d,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"159753"),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"Humans 'n Cars"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement(u,{space:"1"},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{size:"2",colour:"muted"},"Koenigsegg Agera RS"))),e.createElement(a,{align:"right"},"$11,158.46"),e.createElement(a,null,e.createElement(g,null,e.createElement(T,{label:"Unpaid",colour:"yellow"}))),e.createElement(a,null,"15hr"),e.createElement(a,{align:"right"},e.createElement(f,{noWrap:!0},e.createElement(d,{size:"small",variant:"danger"},"Delete"),e.createElement(d,{size:"small"},"View"))))))}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const se=["Standard"];export{y as Standard,se as __namedExportsOrder,oe as default};
