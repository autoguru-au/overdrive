import{e,B as A,i as y,r as D,a as k}from"./iframe-BNimcw7I.js";import{A as S}from"./Actions-CRGwsFP1.js";import{B as s}from"./Badge-CYJJHuLM.js";import{B as h}from"./Button-C8v7PRHz.js";import{F as c}from"./FlexInline-oZGTbWO9.js";import{s as B,i as G}from"./flex-CPK3nu_7.js";import{I as v}from"./Icon-Cj-g7sro.js";import{T as i,a as o,b as t,c as l}from"./Table-ds5qfFsB.js";import{T as R}from"./Text-Bm6LeYFJ.js";import{D as u}from"./DataTable-C5Llongv.js";import{I as m}from"./AlertCircleIcon-CpYDYk0q.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-BiGUExAm.js";import"./resolveResponsiveProps-CokS9ksv.js";/* empty css                                            */import"./ProgressSpinner-BekTt4R6.js";import"./SortIcon-DJSlSLUw.js";import"./ScrollPane-DzQ1i2BR.js";const ae={title:"Components/DataTable",component:u},b={args:{columnTemplate:"auto 2fr 1fr auto",minWidth:"600px","aria-label":"Bookings"},render:r=>e.createElement(u,{...r},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Name"),e.createElement(t,null,"Location"),e.createElement(t,{align:"right"},"Price"))),e.createElement(i,null,e.createElement(o,null,e.createElement(l,null,"522698"),e.createElement(l,null,"My Auto Service & Repair"),e.createElement(l,null,"Gold Coast"),e.createElement(l,{align:"right"},"$99.00")),e.createElement(o,null,e.createElement(l,null,"597194"),e.createElement(l,null,"Magic Spanners"),e.createElement(l,null,"Brisbane CBD"),e.createElement(l,{align:"right"},"$102.00")),e.createElement(o,null,e.createElement(l,null,"789456"),e.createElement(l,null,"Super Special Cars"),e.createElement(l,null,"Sydney CBD"),e.createElement(l,{align:"right"},"$2,495.45"))))},x=["asc","desc","none"],M=k([...x]),I=r=>{const[a,n]=D.useState(r);return[a,w=>()=>{n(H=>({...H,[w]:M(x.indexOf(H[w])+1)}))}]},d={render:()=>{const[r,a]=I({price:"asc",status:"none",age:"none"});return e.createElement(u,{columnTemplate:"auto 2fr 1fr 1fr auto auto",minWidth:"700px","aria-label":"Bookings with sorting"},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Mechanic Name"),e.createElement(t,{sort:r.price,align:"right",onSort:a("price")},"Price"),e.createElement(t,{sort:r.status,onSort:a("status")},"Status"),e.createElement(t,{sort:r.age,onSort:a("age")},"Age"),e.createElement(t,{align:"right"},"Actions"))),e.createElement(i,null,e.createElement(o,null,e.createElement(l,null,"522698"),e.createElement(l,null,"My Auto Service & Repair"),e.createElement(l,{align:"right"},"$99.00"),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:"Paid",colour:"green"}))),e.createElement(l,null,"2min"),e.createElement(l,{align:"right"},e.createElement(S,{noWrap:!0},e.createElement(h,{size:"small"},"View")))),e.createElement(o,null,e.createElement(l,null,"597194"),e.createElement(l,null,"Magic Spanners"),e.createElement(l,{align:"right"},"$102.00"),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:"Unpaid",colour:"yellow"}))),e.createElement(l,null,"5min"),e.createElement(l,{align:"right"},e.createElement(S,{noWrap:!0},e.createElement(h,{size:"small"},"View")))),e.createElement(o,null,e.createElement(l,null,"789456"),e.createElement(l,null,"Super Special Cars"),e.createElement(l,{align:"right"},"$2,495.45"),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:"Dispute",colour:"red"}))),e.createElement(l,null,"5hr"),e.createElement(l,{align:"right"},e.createElement(S,{noWrap:!0},e.createElement(h,{size:"small"},"View"))))))}},f=r=>Array.from({length:r},(a,n)=>({id:1e5+n,name:["My Auto Service","Magic Spanners","Super Special Cars","Quick Fix Autos","Top Gear Mechanics"][n%5],location:["Gold Coast","Brisbane CBD","Sydney CBD","Melbourne","Perth"][n%5],vehicle:["Audi A4","Porsche Macan","Maserati Levante","BMW X5","Toyota Camry"][n%5],price:`$${(y()?2500:Math.random()*5e3+50).toFixed(2)}`,status:["Paid","Unpaid","Dispute","Complete"][n%4],statusColour:["green","yellow","red","green"][n%4]})),T={render:()=>{const r=f(25);return e.createElement(u,{columnTemplate:"auto 2fr 1fr 1fr auto auto",minWidth:"900px",maxHeight:"400px",stickyHead:!0,"aria-label":"Large fleet dataset"},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Mechanic"),e.createElement(t,null,"Location"),e.createElement(t,null,"Vehicle"),e.createElement(t,{align:"right"},"Price"),e.createElement(t,null,"Status"))),e.createElement(i,null,r.map(a=>e.createElement(o,{key:a.id},e.createElement(l,null,a.id),e.createElement(l,null,a.name),e.createElement(l,null,a.location),e.createElement(l,null,a.vehicle),e.createElement(l,{align:"right"},a.price),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:a.status,colour:a.statusColour})))))))}},C={decorators:[r=>e.createElement(A,{style:{maxWidth:"320px"},borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(r,null))],render:()=>{const r=f(15);return e.createElement(u,{columnTemplate:"auto 2fr 1fr 1fr auto auto",minWidth:"800px",maxHeight:"300px",stickyHead:!0,"aria-label":"Responsive fleet table"},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Mechanic"),e.createElement(t,null,"Location"),e.createElement(t,null,"Vehicle"),e.createElement(t,{align:"right"},"Price"),e.createElement(t,null,"Status"))),e.createElement(i,null,r.map(a=>e.createElement(o,{key:a.id},e.createElement(l,null,a.id),e.createElement(l,null,a.name),e.createElement(l,null,a.location),e.createElement(l,null,a.vehicle),e.createElement(l,{align:"right"},a.price),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:a.status,colour:a.statusColour})))))))}},F=Array.from({length:10},(r,a)=>({id:2e5+a,name:["My Auto Service","Magic Spanners","Super Special Cars","Quick Fix Autos","Top Gear Mechanics"][a%5],location:["Gold Coast","Brisbane CBD","Sydney CBD","Melbourne","Perth"][a%5],price:`$${(y()?1500:Math.random()*3e3+80).toFixed(2)}`,status:["Paid","Unpaid","Dispute","Complete"][a%4],statusColour:["green","yellow","red","green"][a%4]})),p={render:()=>e.createElement(u,{columnTemplate:"auto 2fr 1fr auto auto","aria-label":"Animated fleet table"},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"ID"),e.createElement(t,null,"Mechanic"),e.createElement(t,null,"Location"),e.createElement(t,{align:"right"},"Price"),e.createElement(t,null,"Status"))),e.createElement(i,null,F.map((r,a)=>e.createElement(o,{key:r.id,staggerIndex:a},e.createElement(l,null,r.id),e.createElement(l,null,r.name),e.createElement(l,null,r.location),e.createElement(l,{align:"right"},r.price),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:r.status,colour:r.statusColour})))))))},W="https://cdn.imagin.studio/getImage?customer=au-autoguru&target=car&tailoring=autoguru&make=audi&modelFamily=a6&modelYear=2026&paintId=pspc0004sspc0336&angle=001&zoomType=fullscreen&zoomLevel=1&width=2100&height=900&aspectRatio=21%3A9&fileType=png",P=[{asset:"Audi A6",rego:"SD73 PYY",year:"2020",bookingId:"#12273536",update:"Service due in 6 days",updateIcon:m,status:"Requested HA",statusColour:"yellow",alert:"14/06/20"},{asset:"Audi A6",rego:"SD73 PYY",year:"2020",bookingId:"#12273536",update:"Service overdue by 2,000 kms",updateIcon:m,status:"Supplier Uncontactable",statusColour:"yellow",alert:"14/06/20"},{asset:"Audi A6",rego:"SD73 PYY",year:"2020",bookingId:"#12273536",update:"Service due in 5 days",updateIcon:m,status:"Requested HA",statusColour:"yellow",alert:"14/06/20"},{asset:"Audi A6",rego:"SD73 PYY",year:"2022",bookingId:"#12273539",update:null,updateIcon:null,status:"Complete",statusColour:"green",alert:"16/06/20"},{asset:"Audi A6",rego:"AB12 CDE",year:"2021",bookingId:"#12273540",update:"Service due in 12 days",updateIcon:m,status:"Requested HA",statusColour:"yellow",alert:"18/06/20"},{asset:"Audi A6",rego:"FG34 HIJ",year:"2019",bookingId:"#12273541",update:"Service overdue by 500 kms",updateIcon:m,status:"Dispute",statusColour:"red",alert:"20/06/20"}],g={render:()=>{const[r,a]=I({rego:"none",year:"none",bookingId:"none",updated:"none",status:"none",alert:"none"});return e.createElement(u,{columnTemplate:"120px auto auto auto 2fr auto auto",padding:"5",maxHeight:"500px",stickyHead:!0,minWidth:"900px","aria-label":"Fleet portal — requires action"},e.createElement(i,null,e.createElement(o,null,e.createElement(t,null,"Asset"),e.createElement(t,{sort:r.rego,onSort:a("rego")},"Rego"),e.createElement(t,{sort:r.year,onSort:a("year")},"Year"),e.createElement(t,{sort:r.bookingId,onSort:a("bookingId")},"Booking ID"),e.createElement(t,{sort:r.updated,onSort:a("updated")},"Updated"),e.createElement(t,{sort:r.status,onSort:a("status")},"Status"),e.createElement(t,{sort:r.alert,onSort:a("alert")},"Alert"))),e.createElement(i,null,P.map((n,E)=>e.createElement(o,{key:E,staggerIndex:E},e.createElement(l,null,e.createElement("div",{className:B({gap:"1",align:"center"})},e.createElement("img",{src:W,alt:n.asset,style:{width:"100px",height:"auto",objectFit:"contain"}}),e.createElement(R,{size:"2",colour:"muted"},n.asset))),e.createElement(l,null,n.rego),e.createElement(l,null,n.year),e.createElement(l,null,n.bookingId),e.createElement(l,null,n.update?e.createElement("div",{className:G({gap:"1",align:"center"})},e.createElement(v,{icon:n.updateIcon,size:"small","aria-hidden":!0}),e.createElement(R,{size:"3",colour:"dark"},n.update)):null),e.createElement(l,null,e.createElement(c,null,e.createElement(s,{label:n.status,colour:n.statusColour}))),e.createElement(l,null,n.alert)))))}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columnTemplate: 'auto 2fr 1fr auto',
    minWidth: '600px',
    'aria-label': 'Bookings'
  },
  render: args => <DataTable {...args}>
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Location</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                <TableRow>
                    <TableCell>522698</TableCell>
                    <TableCell>My Auto Service & Repair</TableCell>
                    <TableCell>Gold Coast</TableCell>
                    <TableCell align="right">$99.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>597194</TableCell>
                    <TableCell>Magic Spanners</TableCell>
                    <TableCell>Brisbane CBD</TableCell>
                    <TableCell align="right">$102.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>789456</TableCell>
                    <TableCell>Super Special Cars</TableCell>
                    <TableCell>Sydney CBD</TableCell>
                    <TableCell align="right">$2,495.45</TableCell>
                </TableRow>
            </TableRowGroup>
        </DataTable>
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, sortSetter] = useSortState({
      price: 'asc',
      status: 'none',
      age: 'none'
    });
    return <DataTable columnTemplate="auto 2fr 1fr 1fr auto auto" minWidth="700px" aria-label="Bookings with sorting">
                <TableRowGroup>
                    <TableRow>
                        <TableHeadCell>ID</TableHeadCell>
                        <TableHeadCell>Mechanic Name</TableHeadCell>
                        <TableHeadCell sort={sort.price} align="right" onSort={sortSetter('price')}>
                            Price
                        </TableHeadCell>
                        <TableHeadCell sort={sort.status} onSort={sortSetter('status')}>
                            Status
                        </TableHeadCell>
                        <TableHeadCell sort={sort.age} onSort={sortSetter('age')}>
                            Age
                        </TableHeadCell>
                        <TableHeadCell align="right">Actions</TableHeadCell>
                    </TableRow>
                </TableRowGroup>
                <TableRowGroup>
                    <TableRow>
                        <TableCell>522698</TableCell>
                        <TableCell>My Auto Service & Repair</TableCell>
                        <TableCell align="right">$99.00</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Paid" colour="green" />
                            </FlexInline>
                        </TableCell>
                        <TableCell>2min</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>597194</TableCell>
                        <TableCell>Magic Spanners</TableCell>
                        <TableCell align="right">$102.00</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Unpaid" colour="yellow" />
                            </FlexInline>
                        </TableCell>
                        <TableCell>5min</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>789456</TableCell>
                        <TableCell>Super Special Cars</TableCell>
                        <TableCell align="right">$2,495.45</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label="Dispute" colour="red" />
                            </FlexInline>
                        </TableCell>
                        <TableCell>5hr</TableCell>
                        <TableCell align="right">
                            <Actions noWrap>
                                <Button size="small">View</Button>
                            </Actions>
                        </TableCell>
                    </TableRow>
                </TableRowGroup>
            </DataTable>;
  }
}`,...d.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = generateRows(25);
    return <DataTable columnTemplate="auto 2fr 1fr 1fr auto auto" minWidth="900px" maxHeight="400px" stickyHead aria-label="Large fleet dataset">
                    <TableRowGroup>
                        <TableRow>
                            <TableHeadCell>ID</TableHeadCell>
                            <TableHeadCell>Mechanic</TableHeadCell>
                            <TableHeadCell>Location</TableHeadCell>
                            <TableHeadCell>Vehicle</TableHeadCell>
                            <TableHeadCell align="right">Price</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                        </TableRow>
                    </TableRowGroup>
                    <TableRowGroup>
                        {rows.map(row => <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.vehicle}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell>
                                    <FlexInline>
                                        <Badge label={row.status} colour={row.statusColour} />
                                    </FlexInline>
                                </TableCell>
                            </TableRow>)}
                    </TableRowGroup>
            </DataTable>;
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Box style={{
    maxWidth: '320px'
  }} borderWidth="1" borderColour="gray" padding="2">
                <Story />
            </Box>],
  render: () => {
    const rows = generateRows(15);
    return <DataTable columnTemplate="auto 2fr 1fr 1fr auto auto" minWidth="800px" maxHeight="300px" stickyHead aria-label="Responsive fleet table">
                <TableRowGroup>
                    <TableRow>
                        <TableHeadCell>ID</TableHeadCell>
                        <TableHeadCell>Mechanic</TableHeadCell>
                        <TableHeadCell>Location</TableHeadCell>
                        <TableHeadCell>Vehicle</TableHeadCell>
                        <TableHeadCell align="right">Price</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                    </TableRow>
                </TableRowGroup>
                <TableRowGroup>
                    {rows.map(row => <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.vehicle}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell>
                                <FlexInline>
                                    <Badge label={row.status} colour={row.statusColour} />
                                </FlexInline>
                            </TableCell>
                        </TableRow>)}
                </TableRowGroup>
            </DataTable>;
  }
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable columnTemplate="auto 2fr 1fr auto auto" aria-label="Animated fleet table">
            <TableRowGroup>
                <TableRow>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Mechanic</TableHeadCell>
                    <TableHeadCell>Location</TableHeadCell>
                    <TableHeadCell align="right">Price</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                </TableRow>
            </TableRowGroup>
            <TableRowGroup>
                {animatedRows.map((row, i) => <TableRow key={row.id} staggerIndex={i}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.location}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell>
                            <FlexInline>
                                <Badge label={row.status} colour={row.statusColour} />
                            </FlexInline>
                        </TableCell>
                    </TableRow>)}
            </TableRowGroup>
        </DataTable>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, sortSetter] = useSortState({
      rego: 'none',
      year: 'none',
      bookingId: 'none',
      updated: 'none',
      status: 'none',
      alert: 'none'
    });
    return <DataTable columnTemplate="120px auto auto auto 2fr auto auto" padding="5" maxHeight="500px" stickyHead minWidth="900px" aria-label="Fleet portal — requires action">
                <TableRowGroup>
                    <TableRow>
                        <TableHeadCell>Asset</TableHeadCell>
                        <TableHeadCell sort={sort.rego} onSort={sortSetter('rego')}>Rego</TableHeadCell>
                        <TableHeadCell sort={sort.year} onSort={sortSetter('year')}>Year</TableHeadCell>
                        <TableHeadCell sort={sort.bookingId} onSort={sortSetter('bookingId')}>Booking ID</TableHeadCell>
                        <TableHeadCell sort={sort.updated} onSort={sortSetter('updated')}>Updated</TableHeadCell>
                        <TableHeadCell sort={sort.status} onSort={sortSetter('status')}>Status</TableHeadCell>
                        <TableHeadCell sort={sort.alert} onSort={sortSetter('alert')}>Alert</TableHeadCell>
                    </TableRow>
                </TableRowGroup>
                <TableRowGroup>
                    {fleetRows.map((row, i) => <TableRow key={i} staggerIndex={i}>
                            <TableCell>
                                <div className={stack({
              gap: '1',
              align: 'center'
            })}>
                                    <img src={vehicleImageUrl} alt={row.asset} style={{
                width: '100px',
                height: 'auto',
                objectFit: 'contain'
              }} />
                                    <Text size="2" colour="muted">{row.asset}</Text>
                                </div>
                            </TableCell>
                            <TableCell>{row.rego}</TableCell>
                            <TableCell>{row.year}</TableCell>
                            <TableCell>{row.bookingId}</TableCell>
                            <TableCell>
                                {row.update ? <div className={inline({
              gap: '1',
              align: 'center'
            })}>
                                        <Icon icon={row.updateIcon!} size="small" aria-hidden />
                                        <Text size="3" colour="dark">{row.update}</Text>
                                    </div> : null}
                            </TableCell>
                            <TableCell>
                                <FlexInline>
                                    <Badge label={row.status} colour={row.statusColour} />
                                </FlexInline>
                            </TableCell>
                            <TableCell>{row.alert}</TableCell>
                        </TableRow>)}
                </TableRowGroup>
            </DataTable>;
  }
}`,...g.parameters?.docs?.source}}};const te=["Standard","WithSorting","LargeDataset","SmallContainer","Animated","ComplexCells"];export{p as Animated,g as ComplexCells,T as LargeDataset,C as SmallContainer,b as Standard,d as WithSorting,te as __namedExportsOrder,ae as default};
