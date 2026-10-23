import clsx from 'clsx';
import React, { type FunctionComponent } from 'react';

import { typography } from '../../../styles/typography';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

import * as styles from './Chart.css';

export interface ChartTableRow {
	/** Identifies the row. Keep it stable and unique in the table. */
	id: string;
	/** The row header first, then one formatted value for each other column. */
	cells: string[];
}

export interface ChartTableProps {
	/** The accessible name of the table. Use the name of the chart. */
	'aria-label': string;
	/** The column headers. The first one is the header of the row header column. */
	columns: string[];
	/** The body rows, in display order. */
	rows: ChartTableRow[];
	/** Keeps the table for screen readers only. */
	hidden?: boolean;
}

/** The chart data as a plain data table: the table view, or the screen reader alternative of the graphic. */
export const ChartTable: FunctionComponent<ChartTableProps> = ({
	'aria-label': ariaLabel,
	columns,
	rows,
	hidden = false,
}) => {
	const table = (
		<table
			aria-label={ariaLabel}
			className={clsx(
				styles.table,
				typography({ size: '3', color: 'primary' }),
			)}
		>
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column}
							className={clsx(
								styles.tableHeadCell,
								typography({ size: '3', weight: 'semiBold' }),
							)}
							scope="col"
						>
							{column}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map(({ id, cells }) => (
					<tr key={id}>
						<th
							className={clsx(
								styles.tableCell,
								typography({ size: '3', weight: 'normal' }),
							)}
							scope="row"
						>
							{cells[0]}
						</th>
						{cells.slice(1).map((value, index) => (
							// A row has a fixed column order, so the position is a stable key.
							// eslint-disable-next-line react/no-array-index-key
							<td key={index} className={styles.tableCell}>
								{value}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);

	return hidden ? <VisuallyHidden>{table}</VisuallyHidden> : table;
};

ChartTable.displayName = 'ChartTable';
