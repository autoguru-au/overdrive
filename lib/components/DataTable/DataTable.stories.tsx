import { AlertCircleIcon } from '@autoguru/icons';
import { Meta, type StoryObj } from '@storybook/react-vite';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import isChromatic from 'chromatic/isChromatic';
import React, { useState } from 'react';

import { arrayRingLookup } from '../../utils';
import { Actions } from '../Actions/Actions';
import { Badge } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { FlexInline } from '../Flex/FlexInline';
import { inline, stack } from '../Flex/flex';
import { Icon } from '../Icon/Icon';
import { TableCell } from '../Table/TableCell';
import { TableHeadCell } from '../Table/TableHeadCell';
import { TableRow } from '../Table/TableRow';
import { TableRowGroup } from '../Table/TableRowGroup';
import { Text } from '../Text/Text';

import { DataTable } from './DataTable';
import { rowEntering, staggerIndex } from './DataTable.css';

const meta: Meta<typeof DataTable> = {
	title: 'Components/DataTable',
	component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Standard: Story = {
	args: {
		columnTemplate: 'auto 2fr 1fr auto',
		minWidth: '600px',
		'aria-label': 'Bookings',
	},
	render: (args) => (
		<DataTable {...args}>
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
	),
};

const sortFlow = ['asc', 'desc', 'none'] as const;
const sortFlowRingLookup = arrayRingLookup([...sortFlow]);

type SortDir = 'asc' | 'desc' | 'none';

const useSortState = (initial: Record<string, SortDir>) => {
	const [sort, setSort] = useState(initial);

	const sortSetter = (which: string) => () => {
		setSort((prev) => ({
			...prev,
			[which]: sortFlowRingLookup(
				sortFlow.indexOf(prev[which]) + 1,
			) as SortDir,
		}));
	};

	return [sort, sortSetter] as const;
};

export const WithSorting: Story = {
	render: () => {
		const [sort, sortSetter] = useSortState({
			price: 'asc',
			status: 'none',
			age: 'none',
		});

		return (
			<DataTable
				columnTemplate="auto 2fr 1fr 1fr auto auto"
				minWidth="700px"
				aria-label="Bookings with sorting"
			>
				<TableRowGroup>
					<TableRow>
						<TableHeadCell>ID</TableHeadCell>
						<TableHeadCell>Mechanic Name</TableHeadCell>
						<TableHeadCell
							sort={sort.price}
							align="right"
							onSort={sortSetter('price')}
						>
							Price
						</TableHeadCell>
						<TableHeadCell
							sort={sort.status}
							onSort={sortSetter('status')}
						>
							Status
						</TableHeadCell>
						<TableHeadCell
							sort={sort.age}
							onSort={sortSetter('age')}
						>
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
			</DataTable>
		);
	},
};

const generateRows = (count: number) =>
	Array.from({ length: count }, (_, i) => ({
		id: 100_000 + i,
		name: [
			'My Auto Service',
			'Magic Spanners',
			'Super Special Cars',
			'Quick Fix Autos',
			'Top Gear Mechanics',
		][i % 5],
		location: [
			'Gold Coast',
			'Brisbane CBD',
			'Sydney CBD',
			'Melbourne',
			'Perth',
		][i % 5],
		vehicle: [
			'Audi A4',
			'Porsche Macan',
			'Maserati Levante',
			'BMW X5',
			'Toyota Camry',
		][i % 5],
		price: `$${(isChromatic() ? 2500 : Math.random() * 5000 + 50).toFixed(2)}`,
		status: (['Paid', 'Unpaid', 'Dispute', 'Complete'] as const)[i % 4],
		statusColour: (['green', 'yellow', 'red', 'green'] as const)[i % 4],
	}));

export const LargeDataset: Story = {
	render: () => {
		const rows = generateRows(25);

		return (
			<DataTable
				columnTemplate="auto 2fr 1fr 1fr auto auto"
				minWidth="900px"
				maxHeight="400px"
				stickyHead
				aria-label="Large fleet dataset"
			>
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
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.id}</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.location}</TableCell>
								<TableCell>{row.vehicle}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell>
									<FlexInline>
										<Badge
											label={row.status}
											colour={row.statusColour}
										/>
									</FlexInline>
								</TableCell>
							</TableRow>
						))}
					</TableRowGroup>
			</DataTable>
		);
	},
};

export const SmallContainer: Story = {
	decorators: [
		(Story) => (
			<Box
				style={{ maxWidth: '320px' }}
				borderWidth="1"
				borderColour="gray"
				padding="2"
			>
				<Story />
			</Box>
		),
	],
	render: () => {
		const rows = generateRows(15);

		return (
			<DataTable
				columnTemplate="auto 2fr 1fr 1fr auto auto"
				minWidth="800px"
				maxHeight="300px"
				stickyHead
				aria-label="Responsive fleet table"
			>
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
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.location}</TableCell>
							<TableCell>{row.vehicle}</TableCell>
							<TableCell align="right">{row.price}</TableCell>
							<TableCell>
								<FlexInline>
									<Badge
										label={row.status}
										colour={row.statusColour}
									/>
								</FlexInline>
							</TableCell>
						</TableRow>
					))}
				</TableRowGroup>
			</DataTable>
		);
	},
};

const animatedRows = Array.from({ length: 10 }, (_, i) => ({
	id: 200_000 + i,
	name: [
		'My Auto Service',
		'Magic Spanners',
		'Super Special Cars',
		'Quick Fix Autos',
		'Top Gear Mechanics',
	][i % 5],
	location: ['Gold Coast', 'Brisbane CBD', 'Sydney CBD', 'Melbourne', 'Perth'][
		i % 5
	],
	price: `$${(isChromatic() ? 1500 : Math.random() * 3000 + 80).toFixed(2)}`,
	status: (['Paid', 'Unpaid', 'Dispute', 'Complete'] as const)[i % 4],
	statusColour: (['green', 'yellow', 'red', 'green'] as const)[i % 4],
}));

export const Animated: Story = {
	render: () => (
		<DataTable
			columnTemplate="auto 2fr 1fr auto auto"
			aria-label="Animated fleet table"
		>
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
				{animatedRows.map((row, i) => (
					<TableRow
						key={row.id}
						className={rowEntering}
						style={assignInlineVars({
							[staggerIndex]: String(i),
						})}
					>
						<TableCell>{row.id}</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.location}</TableCell>
						<TableCell align="right">{row.price}</TableCell>
						<TableCell>
							<FlexInline>
								<Badge
									label={row.status}
									colour={row.statusColour}
								/>
							</FlexInline>
						</TableCell>
					</TableRow>
				))}
			</TableRowGroup>
		</DataTable>
	),
};

const vehicleImageUrl =
	'https://cdn.imagin.studio/getImage?customer=au-autoguru&target=car&tailoring=autoguru&make=audi&modelFamily=a6&modelYear=2026&paintId=pspc0004sspc0336&angle=001&zoomType=fullscreen&zoomLevel=1&width=2100&height=900&aspectRatio=21%3A9&fileType=png';

const fleetRows = [
	{
		asset: 'Audi A6',
		rego: 'SD73 PYY',
		year: '2020',
		bookingId: '#12273536',
		update: 'Service due in 6 days',
		updateIcon: AlertCircleIcon,
		status: 'Requested HA',
		statusColour: 'yellow' as const,
		alert: '14/06/20',
	},
	{
		asset: 'Audi A6',
		rego: 'SD73 PYY',
		year: '2020',
		bookingId: '#12273536',
		update: 'Service overdue by 2,000 kms',
		updateIcon: AlertCircleIcon,
		status: 'Supplier Uncontactable',
		statusColour: 'yellow' as const,
		alert: '14/06/20',
	},
	{
		asset: 'Audi A6',
		rego: 'SD73 PYY',
		year: '2020',
		bookingId: '#12273536',
		update: 'Service due in 5 days',
		updateIcon: AlertCircleIcon,
		status: 'Requested HA',
		statusColour: 'yellow' as const,
		alert: '14/06/20',
	},
	{
		asset: 'Audi A6',
		rego: 'SD73 PYY',
		year: '2022',
		bookingId: '#12273539',
		update: null,
		updateIcon: null,
		status: 'Complete',
		statusColour: 'green' as const,
		alert: '16/06/20',
	},
	{
		asset: 'Audi A6',
		rego: 'AB12 CDE',
		year: '2021',
		bookingId: '#12273540',
		update: 'Service due in 12 days',
		updateIcon: AlertCircleIcon,
		status: 'Requested HA',
		statusColour: 'yellow' as const,
		alert: '18/06/20',
	},
	{
		asset: 'Audi A6',
		rego: 'FG34 HIJ',
		year: '2019',
		bookingId: '#12273541',
		update: 'Service overdue by 500 kms',
		updateIcon: AlertCircleIcon,
		status: 'Dispute',
		statusColour: 'red' as const,
		alert: '20/06/20',
	},
];

export const ComplexCells: Story = {
	render: () => {
		const [sort, sortSetter] = useSortState({
			rego: 'none',
			year: 'none',
			bookingId: 'none',
			updated: 'none',
			status: 'none',
			alert: 'none',
		});

		return (
			<DataTable
				columnTemplate="120px auto auto auto 2fr auto auto"
				padding="5"
				maxHeight="500px"
				stickyHead
				minWidth="900px"
				aria-label="Fleet portal — requires action"
			>
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
					{fleetRows.map((row, i) => (
						<TableRow
							key={i}
							className={rowEntering}
							style={assignInlineVars({ [staggerIndex]: String(i) })}
						>
							<TableCell>
								<div className={stack({ gap: '1', align: 'center' })}>
									<img
										src={vehicleImageUrl}
										alt={row.asset}
										style={{ width: '100px', height: 'auto', objectFit: 'contain' }}
									/>
									<Text size="2" colour="muted">{row.asset}</Text>
								</div>
							</TableCell>
							<TableCell>{row.rego}</TableCell>
							<TableCell>{row.year}</TableCell>
							<TableCell>{row.bookingId}</TableCell>
							<TableCell>
								{row.update ? (
									<div className={inline({ gap: '1', align: 'center' })}>
										<Icon icon={row.updateIcon!} size="small" aria-hidden />
										<Text size="3" colour="dark">{row.update}</Text>
									</div>
								) : null}
							</TableCell>
							<TableCell>
								<FlexInline>
									<Badge label={row.status} colour={row.statusColour} />
								</FlexInline>
							</TableCell>
							<TableCell>{row.alert}</TableCell>
						</TableRow>
					))}
				</TableRowGroup>
			</DataTable>
		);
	},
};
