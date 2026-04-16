import { AlertCircleIcon, CalendarIcon, CarIcon } from '@autoguru/icons';
import { Meta, type StoryObj } from '@storybook/react-vite';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import React, { useState } from 'react';

import { arrayRingLookup } from '../../utils';
import { Actions } from '../Actions/Actions';
import { Badge } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { FlexInline } from '../Flex/FlexInline';
import { stack } from '../Flex/flex';
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
		price: `$${(Math.random() * 5000 + 50).toFixed(2)}`,
		status: (['Paid', 'Unpaid', 'Dispute', 'Complete'] as const)[i % 4],
		statusColour: (['green', 'yellow', 'red', 'green'] as const)[i % 4],
	}));

export const LargeDataset: Story = {
	render: () => {
		const rows = generateRows(25);

		return (
			<Box style={{ maxHeight: '400px' }} overflow="auto">
				<DataTable
					columnTemplate="auto 2fr 1fr 1fr auto auto"
					minWidth="900px"
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
			</Box>
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
	render: () => (
		<DataTable
			columnTemplate="auto 2fr 1fr 1fr auto auto"
			minWidth="800px"
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
				<TableRow>
					<TableCell>522698</TableCell>
					<TableCell>My Auto Service & Repair</TableCell>
					<TableCell>Gold Coast</TableCell>
					<TableCell>Audi A4</TableCell>
					<TableCell align="right">$99.00</TableCell>
					<TableCell>
						<FlexInline>
							<Badge label="Paid" colour="green" />
						</FlexInline>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>597194</TableCell>
					<TableCell>Magic Spanners</TableCell>
					<TableCell>Brisbane CBD</TableCell>
					<TableCell>Porsche Macan</TableCell>
					<TableCell align="right">$102.00</TableCell>
					<TableCell>
						<FlexInline>
							<Badge label="Unpaid" colour="yellow" />
						</FlexInline>
					</TableCell>
				</TableRow>
			</TableRowGroup>
		</DataTable>
	),
};

export const ComplexCells: Story = {
	render: () => {
		const [sort, sortSetter] = useSortState({
			updated: 'none',
			status: 'none',
		});

		return (
			<DataTable
				columnTemplate="1fr auto auto auto 2fr auto auto"
				minWidth="900px"
				aria-label="Fleet vehicles"
			>
				<TableRowGroup>
					<TableRow>
						<TableHeadCell>Asset</TableHeadCell>
						<TableHeadCell>Rego</TableHeadCell>
						<TableHeadCell>Year</TableHeadCell>
						<TableHeadCell>Booking ID</TableHeadCell>
						<TableHeadCell
							sort={sort.updated}
							onSort={sortSetter('updated')}
						>
							Updated
						</TableHeadCell>
						<TableHeadCell
							sort={sort.status}
							onSort={sortSetter('status')}
						>
							Status
						</TableHeadCell>
						<TableHeadCell>Alert</TableHeadCell>
					</TableRow>
				</TableRowGroup>
				<TableRowGroup>
					<TableRow>
						<TableCell>
							<div className={stack({ gap: '1' })}>
								<Icon
									icon={CarIcon}
									size="medium"
									aria-hidden
								/>
								<Text size="2" colour="muted">
									Audi S3
								</Text>
							</div>
						</TableCell>
						<TableCell>SD73 PYY</TableCell>
						<TableCell>2020</TableCell>
						<TableCell>#12273536</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={AlertCircleIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="dark">
									Service due in 6 days
								</Text>
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline>
								<Badge label="Requested HA" colour="yellow" />
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={CalendarIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="muted">
									14/06/20
								</Text>
							</FlexInline>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<div className={stack({ gap: '1' })}>
								<Icon
									icon={CarIcon}
									size="medium"
									aria-hidden
								/>
								<Text size="2" colour="muted">
									Toyota Camry
								</Text>
							</div>
						</TableCell>
						<TableCell>AB12 CDE</TableCell>
						<TableCell>2021</TableCell>
						<TableCell>#12273537</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={AlertCircleIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="dark">
									Service overdue by 2,000 kms
								</Text>
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline>
								<Badge
									label="Supplier Uncontactable"
									colour="yellow"
								/>
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={CalendarIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="muted">
									14/06/20
								</Text>
							</FlexInline>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<div className={stack({ gap: '1' })}>
								<Icon
									icon={CarIcon}
									size="medium"
									aria-hidden
								/>
								<Text size="2" colour="muted">
									BMW X5
								</Text>
							</div>
						</TableCell>
						<TableCell>FG34 HIJ</TableCell>
						<TableCell>2019</TableCell>
						<TableCell>#12273538</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={AlertCircleIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="dark">
									Service due in 5 days
								</Text>
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline>
								<Badge label="Requested HA" colour="yellow" />
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={CalendarIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="muted">
									15/06/20
								</Text>
							</FlexInline>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<div className={stack({ gap: '1' })}>
								<Icon
									icon={CarIcon}
									size="medium"
									aria-hidden
								/>
								<Text size="2" colour="muted">
									Porsche Macan
								</Text>
							</div>
						</TableCell>
						<TableCell>KL56 MNO</TableCell>
						<TableCell>2022</TableCell>
						<TableCell>#12273539</TableCell>
						<TableCell />
						<TableCell>
							<FlexInline>
								<Badge label="Complete" colour="green" />
							</FlexInline>
						</TableCell>
						<TableCell>
							<FlexInline gap="1">
								<Icon
									icon={CalendarIcon}
									size="small"
									aria-hidden
								/>
								<Text size="3" colour="muted">
									16/06/20
								</Text>
							</FlexInline>
						</TableCell>
					</TableRow>
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
	price: `$${(Math.random() * 3000 + 80).toFixed(2)}`,
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
