import clsx from 'clsx';
import React, { type FunctionComponent } from 'react';

import { typography } from '../../../styles/typography';
import { Text } from '../../Text/Text';

import * as styles from './Chart.css';
import { ChartSwatch } from './ChartLegend';

export interface ChartTooltipRow {
	/** The series key. */
	key: string;
	/** The series name. */
	label: string;
	/** The series colour. */
	color: string;
	/** The formatted value. */
	value: string;
}

export interface ChartTooltipProps {
	/** The name of the chart item, for example the column label. */
	title: string;
	/** One row for each series, in display order. */
	rows: ChartTooltipRow[];
	/** The label and the formatted value of the total row. */
	total: { label: string; value: string };
	/** Additional class names for the card, for example to place it. */
	className?: string;
}

/**
 * The details card of the active chart item. It is hidden from assistive
 * technology, because the accessible name of the item gives the same data.
 */
export const ChartTooltip: FunctionComponent<ChartTooltipProps> = ({
	title,
	rows,
	total,
	className,
}) => (
	<div
		aria-hidden
		className={clsx(styles.tooltip, className)}
		data-od-component="chart-tooltip"
	>
		<Text size="3" weight="semiBold" color="primary">
			{title}
		</Text>
		<span className={styles.tooltipRule} />
		{rows.map((row) => (
			<span
				key={row.key}
				className={clsx(
					styles.tooltipRow,
					typography({ size: '2', color: 'secondary' }),
				)}
			>
				<ChartSwatch color={row.color} size="small" />
				{row.label}
				<span
					className={clsx(
						styles.tooltipValue,
						typography({
							size: '2',
							weight: 'semiBold',
							color: 'primary',
						}),
					)}
				>
					{row.value}
				</span>
			</span>
		))}
		<span className={styles.tooltipRule} />
		<span
			className={clsx(
				styles.tooltipTotalRow,
				typography({
					size: '2',
					weight: 'semiBold',
					color: 'primary',
				}),
			)}
		>
			{total.label}
			<span className={styles.tooltipValue}>{total.value}</span>
		</span>
	</div>
);

ChartTooltip.displayName = 'ChartTooltip';
