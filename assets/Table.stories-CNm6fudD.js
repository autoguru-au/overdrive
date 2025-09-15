import{r as t,l as D,B as T,P as _,c as W,e,Q as M}from"./iframe-C5x-mm7q.js";import{A as E}from"./Actions-sp576Q55.js";import{B as g}from"./Badge-B8zp4GA6.js";import{B as u}from"./Button--_eamnxu.js";import{F as f}from"./FlexInline-BUzk4YJo.js";import{i as F,a as d}from"./flex-BQ2abrn-.js";import{T as r}from"./Text-B_TnC6LV.js";import{I as P}from"./Icon-BmkmqnM-.js";import{V as q}from"./VisuallyHidden-DT-E-rXR.js";import{I as $}from"./ArrowUpIcon-C2PvlKyF.js";import"./preload-helper-D9Z9MdNV.js";import"./Column-8q3ALPCJ.js";import"./resolveResponsiveProps-BvoLHqG9.js";import"./ProgressSpinner-CBrwSGmV.js";var G="wqeywm0";const A=t.createContext(null),z=({padding:l,stickyHead:n,children:o})=>{const s=t.useMemo(()=>({padding:l,stickyHead:n}),[l,n]);return t.createElement(A.Provider,{value:s},o)},S=()=>{const l=t.useContext(A);return D.invariant(l!==null,"Make sure you've got a <Table /> component in your tree"),l};try{z.displayName="TableContextProvider",z.__docgenInfo={description:"",displayName:"TableContextProvider",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:null,description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}const b=t.forwardRef(({children:l,padding:n="4",stickyHead:o=!1,columnTemplate:s},c)=>t.createElement(z,{padding:n,stickyHead:o},t.createElement(T,{ref:c,role:"grid",width:"full",style:{gridTemplateColumns:s},className:G,odComponent:"table"},l)));b.displayName="Table";try{b.displayName="Table",b.__docgenInfo={description:"",displayName:"Table",props:{columnTemplate:{defaultValue:null,description:"",name:"columnTemplate",required:!0,type:{name:"string"}},padding:{defaultValue:{value:"4"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},stickyHead:{defaultValue:{value:"false"},description:"",name:"stickyHead",required:!1,type:{name:"boolean"}}}}}catch{}var L="_10xbrtd0";const a=t.forwardRef(({padding:l,align:n="left","aria-label":o,children:s},c)=>{const p=S(),x=l??p?.padding??"none";return t.createElement(T,{ref:c,role:"gridcell",display:"flex",alignItems:"center",position:"relative",justifyContent:_(n),padding:x,borderBottomWidth:"1","aria-label":o,className:L},typeof s=="string"||typeof s=="number"?t.createElement(r,{as:"span",colour:"dark",display:"block",size:"3"},s):s)});a.displayName="TableCell";try{a.displayName="TableCell",a.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}}}}}catch{}var j="_1a20v5n0",O="_1a20v5n1",N={root:["_1a20v5n2","_1a20v5n3"],asc:"_1a20v5n4",desc:"_1a20v5n5",none:"_1a20v5n6"},K="_1a20v5n7";const R=l=>l==="asc"?"ascending":l==="desc"?"descending":"none",i=t.forwardRef(({align:l="left",onSort:n,sort:o,padding:s,"aria-label":c,children:p},x)=>{const B=S(),h=s??B?.padding??"none",I=t.useCallback(V=>{typeof n=="function"&&n(V)},[n]),v=typeof o=="string",w=t.createElement(P,{icon:$,size:"small",className:W([N.root,N[o??"none"]])}),k=t.createElement("div",{className:F({gap:"1",align:_(l),justify:"center"})},l==="right"&&v?w:null,t.createElement(r,{strong:!0,size:"3",as:"span",align:l,className:O},p,v?t.createElement(q,{as:"span"}," ","sorted ",R(o)):null),(l==="left"||l==="center")&&v?w:null);return t.createElement(T,{as:"th",ref:x,role:"columnheader",scope:"col",display:"flex",alignItems:"center",justifyContent:_(l),padding:o?void 0:h,borderBottomColour:"dark",borderBottomWidth:"1","aria-sort":v?R(o):void 0,"aria-label":c,className:B.stickyHead&&K,onClick:o?I:void 0},o?t.createElement(T,{as:"button",display:"block",width:"full",padding:h,tabIndex:-1,className:j},k):k)});i.displayName="TableHeadCell";try{i.displayName="TableHeadCell",i.__docgenInfo={description:"",displayName:"TableHeadCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"none"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"((event: MouseEvent) => void)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ConditionalStyleWithResponsiveArray<Values<MapLeafNodes<{ '1': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; none: string; }, `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: str..."}}}}}catch{}const m=t.forwardRef(({children:l,onClick:n},o)=>t.createElement(T,{ref:o,display:"contents",role:"row",onClick:n},l));m.displayName="TableRow";try{m.displayName="TableRow",m.__docgenInfo={description:"",displayName:"TableRow",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}}}catch{}const C=t.forwardRef(({children:l},n)=>t.createElement(T,{ref:n,role:"rowgroup",display:"contents"},l));C.displayName="TableRowGroup";try{C.displayName="TableRowGroup",C.__docgenInfo={description:"",displayName:"TableRowGroup",props:{}}}catch{}const ce={title:"Components/Table",component:b},H=["asc","desc","none"],U=M(H),y={args:{columnTemplate:"repeat(7, auto)"},render:l=>{const[n,o]=t.useState({price:"asc",status:"desc"}),s=c=>()=>{o(p=>({...p,[c]:U(H.lastIndexOf(p[c])+1)}))};return e.createElement(b,{...l},e.createElement(C,null,e.createElement(m,null,e.createElement(i,null,"ID"),e.createElement(i,null,"Mechanic Name"),e.createElement(i,null,"Vehicle"),e.createElement(i,{sort:n.price,align:"right",onSort:s("price")},"Price"),e.createElement(i,{sort:n.status,align:"left",onSort:s("status")},"Status"),e.createElement(i,null,"Age"),e.createElement(i,{align:"right"}))),e.createElement(C,null,e.createElement(m,null,e.createElement(a,null,"522698"),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"My Auto Service & Repair"),e.createElement(r,{size:"2",colour:"muted"},"Gold Coast"))),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Audi A4"))),e.createElement(a,{align:"right"},"$99.00"),e.createElement(a,null,e.createElement(f,null,e.createElement(g,{label:"Paid",colour:"green"}))),e.createElement(a,null,"2min"),e.createElement(a,{align:"right"},e.createElement(E,{noWrap:!0},e.createElement(u,{size:"small",variant:"danger"},"Delete"),e.createElement(u,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"597194"),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"Magic Spanners"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Prosche Macan"))),e.createElement(a,{align:"right"},"$102.00"),e.createElement(a,null,e.createElement(f,null,e.createElement(g,{label:"Paid",colour:"green"}),e.createElement(g,{label:"Dispute",colour:"red"}))),e.createElement(a,null,"5min"),e.createElement(a,{align:"right"},e.createElement(E,{noWrap:!0},e.createElement(u,{size:"small",variant:"danger"},"Delete"),e.createElement(u,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"789456"),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"Super Special Cars"),e.createElement(r,{size:"2",colour:"muted"},"Sydney CBD"))),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{noWrap:!0,size:"2",colour:"muted"},"Maserati Levante"))),e.createElement(a,{align:"right"},"$2,495.45"),e.createElement(a,null,e.createElement(f,null,e.createElement(g,{label:"Paid",colour:"green"}),e.createElement(g,{label:"Complete",colour:"green"}))),e.createElement(a,null,"5hr"),e.createElement(a,{align:"right"},e.createElement(E,{noWrap:!0},e.createElement(u,{size:"small",variant:"danger"},"Delete"),e.createElement(u,{size:"small"},"View")))),e.createElement(m,null,e.createElement(a,null,"159753"),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"Humans 'n Cars"),e.createElement(r,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(a,null,e.createElement("div",{className:d({gap:"2"})},e.createElement(r,{size:"3",colour:"dark"},"ABC123"),e.createElement(r,{size:"2",colour:"muted"},"Koenigsegg Agera RS"))),e.createElement(a,{align:"right"},"$11,158.46"),e.createElement(a,null,e.createElement(f,null,e.createElement(g,{label:"Unpaid",colour:"yellow"}))),e.createElement(a,null,"15hr"),e.createElement(a,{align:"right"},e.createElement(E,{noWrap:!0},e.createElement(u,{size:"small",variant:"danger"},"Delete"),e.createElement(u,{size:"small"},"View"))))))}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    My Auto Service & Repair
                                </Text>
                                <Text size="2" colour="muted">
                                    Gold Coast
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Audi A4
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell align="right">$99.00</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Paid" colour="green" />
                            </FlexInline>
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
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    Magic Spanners
                                </Text>
                                <Text size="2" colour="muted">
                                    Brisbane CBD
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Prosche Macan
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell align="right">$102.00</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Paid" colour="green" />
                                <Badge label="Dispute" colour="red" />
                            </FlexInline>
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
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    Super Special Cars
                                </Text>
                                <Text size="2" colour="muted">
                                    Sydney CBD
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text noWrap size="2" colour="muted">
                                    Maserati Levante
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell align="right">$2,495.45</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Paid" colour="green" />
                                <Badge label="Complete" colour="green" />
                            </FlexInline>
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
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    Humans &apos;n Cars
                                </Text>
                                <Text size="2" colour="muted">
                                    Brisbane CBD
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={stack({
              gap: '2'
            })}>
                                <Text size="3" colour="dark">
                                    ABC123
                                </Text>
                                <Text size="2" colour="muted">
                                    Koenigsegg Agera RS
                                </Text>
                            </div>
                        </TableCell>
                        <TableCell align="right">$11,158.46</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Unpaid" colour="yellow" />
                            </FlexInline>
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
}`,...y.parameters?.docs?.source}}};const ue=["Standard"];export{y as Standard,ue as __namedExportsOrder,ce as default};
