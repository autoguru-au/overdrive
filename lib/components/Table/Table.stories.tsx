import { Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { arrayRingLookup } from '../../utils';
import { Actions } from '../Actions';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Inline } from '../Inline';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { Table, TableCell, TableHeadCell, TableRow, TableRowGroup } from '.';

const meta: Meta<typeof Table> = {
	title: 'Components/Table',
	component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const sortFlow = ['asc', 'desc', 'none'];
const sortFlowRingLookup = arrayRingLookup(sortFlow);

export const Standard: Story = {
	args: {
		columnTemplate: 'repeat(7, auto)',
	},
	render: (args) => {
		const [sort, setsort] = useState<
			Record<string, 'asc' | 'desc' | 'none'>
		>({
			price: 'asc',
			status: 'desc',
		});

		const sortSetter = (which) => () => {
			setsort((prev) => {
				return {
					...prev,
					[which]: sortFlowRingLookup(
						sortFlow.lastIndexOf(prev[which]) + 1,
					),
				};
			});
		};

		return (
			<Table {...args}>
				<TableRowGroup>
					<TableRow>
						<TableHeadCell>ID</TableHeadCell>
						<TableHeadCell>Mechanic Name</TableHeadCell>
						<TableHeadCell>Vehicle</TableHeadCell>
						<TableHeadCell
							sort={sort.price}
							align="right"
							onSort={sortSetter('price')}
						>
							Price
						</TableHeadCell>
						<TableHeadCell
							sort={sort.status}
							align="left"
							onSort={sortSetter('status')}
						>
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
			</Table>
		);
	},
};
