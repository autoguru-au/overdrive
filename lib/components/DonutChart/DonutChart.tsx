import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';
import { Text } from '../Text/Text';
import {
	ChartLegend,
	ChartTable,
	arcPath,
	pie,
	sum,
	useChartNavigation,
	type ChartFormatter,
	type ChartSeries,
	type ChartView,
} from '../private/Chart';

import * as styles from './DonutChart.css';

/**
 * The ring in SVG user units: the view box is 2 units wide. The inner radius
 * is 75% of the outer radius, as in Figma (56.25 / 75).
 */
const OUTER_RADIUS = 1;
const INNER_RADIUS = 0.75;
const VIEW_BOX = `${-OUTER_RADIUS} ${-OUTER_RADIUS} ${OUTER_RADIUS * 2} ${OUTER_RADIUS * 2}`;

export interface DonutChartDatum<Key extends string = string>
	extends ChartSeries<Key> {
	/** The slice value. A negative value counts as 0. */
	value: number;
}

export interface DonutChartProps<Key extends string = string>
	extends TestIdProp {
	/** The slices, clockwise from the 12 o'clock position. */
	data: DonutChartDatum<Key>[];
	/** The accessible name of the chart and its table. */
	'aria-label': string;
	/**
	 * Formats the values in the centre, the legend, the table and the screen
	 * reader text, for example with a compact currency format.
	 */
	formatValue: ChartFormatter;
	/** Formats the share of a slice. The value is from 0 to 1, for example with `Intl.NumberFormat` and `style: 'percent'`. */
	formatPercent: ChartFormatter;
	/** The caption under the total in the centre, and the label of the total row in the table. */
	totalLabel: string;
	/** The text that shows in place of the chart when all values are 0. */
	emptyLabel: string;
	/** The header of the first table column, which holds the slice names. */
	categoryLabel: string;
	/** The header of the table column that holds the values. */
	valueLabel: string;
	/** The header of the table column that holds the shares. */
	shareLabel: string;
	/**
	 * Shows the graphic, or the same data as a table. In the `chart` view, a
	 * visually hidden table stays available to screen readers.
	 * @default 'chart'
	 */
	view?: ChartView;
	/** Additional class names for the root element. */
	className?: string;
}

/**
 * A ring chart that shows the share of each category, with the total in the
 * centre and a legend with the value and the share of each slice.
 *
 * Hover or focus on a slice dims the other slices and legend items. The chart
 * is one tab stop: the arrow keys move between the slices.
 *
 * The component has no fixed text, locale or currency. Give all text and the
 * formatters in props.
 */
export const DonutChart = <Key extends string = string>({
	data,
	'aria-label': ariaLabel,
	formatValue,
	formatPercent,
	totalLabel,
	emptyLabel,
	categoryLabel,
	valueLabel,
	shareLabel,
	view = 'chart',
	className,
	testId,
}: DonutChartProps<Key>) => {
	const { values, total, arcs } = useMemo(() => {
		const sliceValues = data.map((datum) => Math.max(0, datum.value));
		return {
			values: sliceValues,
			total: sum(sliceValues),
			arcs: pie(sliceValues),
		};
	}, [data]);

	const { activeIndex, focusedIndex, containerProps, getItemProps } =
		useChartNavigation(data.length);

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'donut-chart',
		testId,
	});

	const shareOf = (value: number) =>
		formatPercent(total > 0 ? value / total : 0);

	const table = (
		<ChartTable
			aria-label={ariaLabel}
			columns={[categoryLabel, valueLabel, shareLabel]}
			rows={[
				...data.map((datum, index) => ({
					id: datum.key,
					cells: [
						datum.label,
						formatValue(values[index]),
						shareOf(values[index]),
					],
				})),
				{
					id: 'total',
					cells: [totalLabel, formatValue(total), shareOf(total)],
				},
			]}
			hidden={view === 'chart'}
		/>
	);

	if (view === 'table') {
		return <Root {...rootProps}>{table}</Root>;
	}

	if (total === 0) {
		return (
			<Root {...rootProps}>
				<div aria-hidden className={styles.emptyDisc} />
				<Text as="p" size="3" color="secondary">
					{emptyLabel}
				</Text>
			</Root>
		);
	}

	// CSS shows this ring only for keyboard focus (`:focus-visible`).
	const focusedArc = focusedIndex === null ? null : arcs[focusedIndex];

	return (
		<Root {...rootProps}>
			<div className={styles.ring}>
				<svg
					aria-label={ariaLabel}
					className={styles.svg}
					role="graphics-document"
					viewBox={VIEW_BOX}
					{...dataAttrs({ hasActive: activeIndex !== null })}
					{...containerProps}
				>
					{data.map((datum, index) => (
						<path
							key={datum.key}
							aria-label={`${datum.label}, ${formatValue(values[index])}, ${shareOf(values[index])}`}
							className={styles.slice}
							d={arcPath(arcs[index], INNER_RADIUS, OUTER_RADIUS)}
							fillRule="evenodd"
							role="graphics-symbol"
							style={assignInlineVars({
								[styles.sliceColor]: datum.color,
							})}
							{...getItemProps(index)}
							{...dataAttrs({ active: index === activeIndex })}
						/>
					))}
					{focusedArc ? (
						<path
							aria-hidden
							className={styles.focusRing}
							d={arcPath(focusedArc, INNER_RADIUS, OUTER_RADIUS)}
							fillRule="evenodd"
						/>
					) : null}
				</svg>
				<div aria-hidden className={styles.centre}>
					<Text size="8" weight="bold" color="primary">
						{formatValue(total)}
					</Text>
					<Text size="3" weight="bold" color="secondary">
						{totalLabel}
					</Text>
				</div>
			</div>
			<ChartLegend
				activeKey={
					activeIndex === null ? undefined : data[activeIndex].key
				}
				items={data.map((datum, index) => ({
					key: datum.key,
					label: datum.label,
					color: datum.color,
					detail: `${formatValue(values[index])} (${shareOf(values[index])})`,
				}))}
				layout="vertical"
			/>
			{table}
		</Root>
	);
};

DonutChart.displayName = 'DonutChart';
