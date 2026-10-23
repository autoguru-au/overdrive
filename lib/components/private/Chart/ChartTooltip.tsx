import clsx from 'clsx';
import React, { forwardRef, type CSSProperties } from 'react';

import { typography } from '../../../styles/typography';
import { Text } from '../../Text/Text';

import * as styles from './Chart.css';
import { ChartSwatch } from './ChartLegend';

export interface ChartTooltipRow {
	/** Identifies the row. Keep it unique in the tooltip. */
	key: string;
	/** The row name, for example a series name. Without it, the row shows the value only. */
	label?: string;
	/** The series colour. Without a colour, the row has no swatch. */
	color?: string;
	/** The formatted value. */
	value: string;
}

export interface ChartTooltipProps {
	/** The name of the chart item, for example the column label. */
	title: string;
	/** The colour of the item. If it is set, a swatch shows before the title. */
	color?: string;
	/** The rows, in display order. */
	rows: ChartTooltipRow[];
	/** The label and the formatted value of the total row. Without it, the card has no total row. */
	total?: { label: string; value: string };
	/** Additional class names for the card, for example to place it. */
	className?: string;
	/** Inline styles, for example the CSS variables that place the card. */
	style?: CSSProperties;
}

/**
 * The details card of the active chart item. It is hidden from assistive
 * technology, because the accessible name of the item gives the same data.
 */
export const ChartTooltip = forwardRef<HTMLDivElement, ChartTooltipProps>(
	({ title, color, rows, total, className, style }, ref) => (
		<div
			ref={ref}
			aria-hidden
			className={clsx(styles.tooltip, className)}
			data-od-component="chart-tooltip"
			style={style}
		>
			<Text
				className={styles.tooltipTitle}
				color="primary"
				size="3"
				weight="semiBold"
			>
				{color ? <ChartSwatch color={color} /> : null}
				{title}
			</Text>
			<span className={styles.tooltipRule} />
			{rows.map((row) => (
				<span
					key={row.key}
					className={clsx(
						styles.tooltipRow({ swatch: row.color !== undefined }),
						typography({ size: '2', color: 'secondary' }),
					)}
				>
					{row.color ? (
						<ChartSwatch color={row.color} size="small" />
					) : null}
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
			{total ? (
				<>
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
						<span className={styles.tooltipValue}>
							{total.value}
						</span>
					</span>
				</>
			) : null}
		</div>
	),
);

ChartTooltip.displayName = 'ChartTooltip';
