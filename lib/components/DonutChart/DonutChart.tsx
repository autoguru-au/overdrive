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
	toDrawable,
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
	// The values and the text change only with the data, not with each hover.
	const { slices, marks, total, formattedTotal } = useMemo(() => {
		const values = data.map((datum) => toDrawable(datum.value));
		const arcs = pie(values);
		const grandTotal = sum(values);
		const items = data.map((datum, index) => {
			const value = formatValue(values[index]);
			const share = formatPercent(
				grandTotal > 0 ? values[index] / grandTotal : 0,
			);
			return {
				datum,
				value,
				share,
				path: arcPath(arcs[index], INNER_RADIUS, OUTER_RADIUS),
				description: `${datum.label}, ${value}, ${share}`,
			};
		});
		return {
			slices: items,
			// A slice of 0 has no area, so it gets no mark and no tab stop. The
			// legend and the table still show it.
			marks: items.filter((_, index) => values[index] > 0),
			total: grandTotal,
			formattedTotal: formatValue(grandTotal),
		};
	}, [data, formatValue, formatPercent]);

	const table = useMemo(
		() => (
			<ChartTable
				aria-label={ariaLabel}
				columns={[categoryLabel, valueLabel, shareLabel]}
				rows={slices.map((slice) => ({
					id: slice.datum.key,
					cells: [slice.datum.label, slice.value, slice.share],
				}))}
				footer={[
					totalLabel,
					formattedTotal,
					formatPercent(total > 0 ? 1 : 0),
				]}
				hidden={view === 'chart'}
			/>
		),
		[
			ariaLabel,
			categoryLabel,
			formatPercent,
			formattedTotal,
			shareLabel,
			slices,
			total,
			totalLabel,
			valueLabel,
			view,
		],
	);

	const { activeIndex, focusedIndex, containerProps, getItemProps } =
		useChartNavigation(marks.length);

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'donut-chart',
		testId,
	});

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
	const focusedMark = focusedIndex === null ? null : marks[focusedIndex];

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
					{marks.map((mark, index) => (
						<path
							key={mark.datum.key}
							aria-label={mark.description}
							className={styles.slice}
							d={mark.path}
							fillRule="evenodd"
							role="graphics-symbol"
							style={assignInlineVars({
								[styles.sliceColor]: mark.datum.color,
							})}
							{...getItemProps(index)}
							{...dataAttrs({ active: index === activeIndex })}
						/>
					))}
					{focusedMark ? (
						<path
							aria-hidden
							className={styles.focusRing}
							d={focusedMark.path}
							fillRule="evenodd"
						/>
					) : null}
				</svg>
				<div aria-hidden className={styles.centre}>
					<Text size="8" weight="bold" color="primary">
						{formattedTotal}
					</Text>
					<Text size="3" weight="bold" color="secondary">
						{totalLabel}
					</Text>
				</div>
			</div>
			<ChartLegend
				activeKey={
					activeIndex === null
						? undefined
						: marks[activeIndex].datum.key
				}
				items={slices.map((slice) => ({
					key: slice.datum.key,
					label: slice.datum.label,
					color: slice.datum.color,
					detail: `${slice.value} (${slice.share})`,
				}))}
				layout="vertical"
			/>
			{table}
		</Root>
	);
};

DonutChart.displayName = 'DonutChart';
