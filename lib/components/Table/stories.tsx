import * as React from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Inline } from '../Inline';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeadCell,
	TableRow,
} from '.';

export default {
	title: 'Components|Table',
};

export const Standard = () => (
	<Table>
		<TableHead>
			<TableRow>
				<TableHeadCell>ID</TableHeadCell>
				<TableHeadCell>Mechanic Name</TableHeadCell>
				<TableHeadCell>Vehicle</TableHeadCell>
				<TableHeadCell>Rego</TableHeadCell>
				<TableHeadCell sortDirection="desc" align="right">
					Price
				</TableHeadCell>
				<TableHeadCell sortDirection="asc">Status</TableHeadCell>
				<TableHeadCell />
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow>
				<TableCell>123</TableCell>
				<TableCell>Bobs Spanners</TableCell>
				<TableCell>Toyota Corolla </TableCell>
				<TableCell>ABC123</TableCell>
				<TableCell align="right">$99.00</TableCell>
				<TableCell>
					<Inline>
						<Badge label="Booked" colour="green" />
						<Badge label="Payment due" colour="red" />
					</Inline>
				</TableCell>
				<TableCell padding="1">
					<Button size="small">View</Button>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>456</TableCell>
				<TableCell>Janes Sports Cars</TableCell>
				<TableCell>Toyota Corolla </TableCell>
				<TableCell>ABC123</TableCell>
				<TableCell align="right">$102.00</TableCell>
				<TableCell>
					<Inline>
						<Badge label="Booked" colour="green" />
						<Badge label="Paid" colour="green" />
					</Inline>
				</TableCell>
				<TableCell padding="1">
					<Button size="small">View</Button>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>789</TableCell>
				<TableCell>All About Cars</TableCell>
				<TableCell>Toyota Corolla </TableCell>
				<TableCell>ABC123</TableCell>
				<TableCell align="right">$2,495.45</TableCell>
				<TableCell>
					<Inline>
						<Badge label="Booked" colour="green" />
						<Badge label="Payment due" colour="red" />
						<Badge label="Disputed" colour="red" />
					</Inline>
				</TableCell>
				<TableCell padding="1">
					<Button size="small">View</Button>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);
