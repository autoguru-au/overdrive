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
	/**
	 * A row after the body, for example the totals: the row header first, then
	 * one formatted value for each other column.
	 */
	footer?: string[];
	/** Keeps the table for screen readers only. */
	hidden?: boolean;
}

const renderCells = (cells: string[]) => (
	<>
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
	</>
);

/** The chart data as a plain data table: the table view, or the screen reader alternative of the graphic. */
export const ChartTable: FunctionComponent<ChartTableProps> = ({
	'aria-label': ariaLabel,
	columns,
	rows,
	footer,
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
					{columns.map((column, index) => (
						<th
							// Header text can repeat, for example a series label and
							// the total label. The column order is fixed.
							// eslint-disable-next-line react/no-array-index-key
							key={index}
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
					<tr key={id}>{renderCells(cells)}</tr>
				))}
			</tbody>
			{footer ? (
				<tfoot>
					<tr>{renderCells(footer)}</tr>
				</tfoot>
			) : null}
		</table>
	);

	return hidden ? <VisuallyHidden>{table}</VisuallyHidden> : table;
};

ChartTable.displayName = 'ChartTable';
