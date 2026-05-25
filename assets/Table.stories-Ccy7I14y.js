import{r as x,e,a as B}from"./iframe-Bgojgvh3.js";import{A as c}from"./Actions-mVCspiZh.js";import{B as o}from"./Badge-BIlNEWQa.js";import{B as t}from"./Button-MaHJeRQV.js";import{F as i}from"./FlexInline-LVImArYn.js";import{s as r}from"./flex-BQOk51AP.js";import{T as a}from"./Text-B_BF7zuX.js";import{d as C,T as g,a as s,b as n,c as l}from"./Table-RYIJGisY.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-CLTEr0rm.js";import"./resolveResponsiveProps-bZ1ETmzV.js";/* empty css                                            */import"./Icon-C6zvq-dF.js";import"./ProgressSpinner-B6rTLSDg.js";import"./SortIcon-BiiFTKb9.js";const V={title:"Components/Table",component:C},E=["asc","desc","none"],v=B(E),m={args:{columnTemplate:"repeat(7, auto)"},render:p=>{const[u,z]=x.useState({price:"asc",status:"desc"}),T=d=>()=>{z(b=>({...b,[d]:v(E.lastIndexOf(b[d])+1)}))};return e.createElement(C,{...p},e.createElement(g,null,e.createElement(s,null,e.createElement(n,null,"ID"),e.createElement(n,null,"Mechanic Name"),e.createElement(n,null,"Vehicle"),e.createElement(n,{sort:u.price,align:"right",onSort:T("price")},"Price"),e.createElement(n,{sort:u.status,align:"left",onSort:T("status")},"Status"),e.createElement(n,null,"Age"),e.createElement(n,{align:"right"}))),e.createElement(g,null,e.createElement(s,null,e.createElement(l,null,"522698"),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"My Auto Service & Repair"),e.createElement(a,{size:"2",colour:"muted"},"Gold Coast"))),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"ABC123"),e.createElement(a,{noWrap:!0,size:"2",colour:"muted"},"Audi A4"))),e.createElement(l,{align:"right"},"$99.00"),e.createElement(l,null,e.createElement(i,null,e.createElement(o,{label:"Paid",colour:"green"}))),e.createElement(l,null,"2min"),e.createElement(l,{align:"right"},e.createElement(c,{noWrap:!0},e.createElement(t,{size:"small",variant:"danger"},"Delete"),e.createElement(t,{size:"small"},"View")))),e.createElement(s,null,e.createElement(l,null,"597194"),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"Magic Spanners"),e.createElement(a,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"ABC123"),e.createElement(a,{noWrap:!0,size:"2",colour:"muted"},"Prosche Macan"))),e.createElement(l,{align:"right"},"$102.00"),e.createElement(l,null,e.createElement(i,null,e.createElement(o,{label:"Paid",colour:"green"}),e.createElement(o,{label:"Dispute",colour:"red"}))),e.createElement(l,null,"5min"),e.createElement(l,{align:"right"},e.createElement(c,{noWrap:!0},e.createElement(t,{size:"small",variant:"danger"},"Delete"),e.createElement(t,{size:"small"},"View")))),e.createElement(s,null,e.createElement(l,null,"789456"),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"Super Special Cars"),e.createElement(a,{size:"2",colour:"muted"},"Sydney CBD"))),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"ABC123"),e.createElement(a,{noWrap:!0,size:"2",colour:"muted"},"Maserati Levante"))),e.createElement(l,{align:"right"},"$2,495.45"),e.createElement(l,null,e.createElement(i,null,e.createElement(o,{label:"Paid",colour:"green"}),e.createElement(o,{label:"Complete",colour:"green"}))),e.createElement(l,null,"5hr"),e.createElement(l,{align:"right"},e.createElement(c,{noWrap:!0},e.createElement(t,{size:"small",variant:"danger"},"Delete"),e.createElement(t,{size:"small"},"View")))),e.createElement(s,null,e.createElement(l,null,"159753"),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"Humans 'n Cars"),e.createElement(a,{size:"2",colour:"muted"},"Brisbane CBD"))),e.createElement(l,null,e.createElement("div",{className:r({gap:"2"})},e.createElement(a,{size:"3",colour:"dark"},"ABC123"),e.createElement(a,{size:"2",colour:"muted"},"Koenigsegg Agera RS"))),e.createElement(l,{align:"right"},"$11,158.46"),e.createElement(l,null,e.createElement(i,null,e.createElement(o,{label:"Unpaid",colour:"yellow"}))),e.createElement(l,null,"15hr"),e.createElement(l,{align:"right"},e.createElement(c,{noWrap:!0},e.createElement(t,{size:"small",variant:"danger"},"Delete"),e.createElement(t,{size:"small"},"View"))))))}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const y=["Standard"];export{m as Standard,y as __namedExportsOrder,V as default};
