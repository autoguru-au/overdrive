import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import { typography } from '../../styles/typography';
import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';
import {
	ChartLegend,
	ChartTable,
	ChartTooltip,
	niceTicks,
	sum,
	toPercent,
	useChartNavigation,
	type ChartFormatter,
	type ChartSeries,
	type ChartView,
} from '../private/Chart';

import * as styles from './StackedBarChart.css';

export interface StackedBarChartDatum<Key extends string = string> {
	/** Identifies the column. Keep it stable and unique in the chart. */
	id: string;
	/**
	 * The column name, for example a formatted date range. The chart shows it
	 * on the X axis, in the tooltip, in the table and in the screen reader text.
	 */
	label: string;
	/**
	 * One value for each series key. A missing value counts as 0. The chart
	 * stacks positive values only, so a negative value counts as 0.
	 */
	values: Partial<Record<Key, number>>;
}

export interface StackedBarChartProps<Key extends string = string>
	extends TestIdProp {
	/** The columns, in display order. */
	data: StackedBarChartDatum<Key>[];
	/** The stacked series. The first series is at the bottom of each column. */
	series: ChartSeries<Key>[];
	/** The accessible name of the chart and its table. */
	'aria-label': string;
	/**
	 * Formats the values in the total labels, the tooltip, the table and the
	 * screen reader text, for example with `Intl.NumberFormat`.
	 */
	formatValue: ChartFormatter;
	/**
	 * Formats the Y axis ticks, for example with a compact currency format.
	 * @default formatValue
	 */
	formatTick?: ChartFormatter;
	/** The label of the total, in the tooltip, the table and the screen reader text. */
	totalLabel: string;
	/** The header of the first table column, which holds the column names. */
	categoryLabel: string;
	/**
	 * The approximate number of steps on the Y axis. The axis uses steps of 1,
	 * 2, 2.5 or 5 times a power of 10, so the exact number can change.
	 * @default 3
	 */
	tickCount?: number;
	/**
	 * Shows the graphic, or the same data as a table. In the `chart` view, a
	 * visually hidden table stays available to screen readers.
	 * @default 'chart'
	 */
	view?: ChartView;
	/** Additional class names for the root element. */
	className?: string;
}

const valueOf = <Key extends string>(
	datum: StackedBarChartDatum<Key>,
	key: Key,
): number => Math.max(0, datum.values[key] ?? 0);

/**
 * A column chart that stacks the values of each series, for example spend by
 * category for each week. Each column shows its total above it, and the Y axis
 * uses nice steps from 0.
 *
 * Hover or focus on a column shows a tooltip with each series value and the
 * total, and dims the other columns. The chart is one tab stop: the arrow keys
 * move between the columns and Escape closes the tooltip.
 *
 * The component has no fixed text, locale or currency. Give all text and the
 * formatters in props. The width follows the container; the height follows
 * the container when it has a height, with a minimum.
 */
export const StackedBarChart = <Key extends string = string>({
	data,
	series,
	'aria-label': ariaLabel,
	formatValue,
	formatTick = formatValue,
	totalLabel,
	categoryLabel,
	tickCount = 3,
	view = 'chart',
	className,
	testId,
}: StackedBarChartProps<Key>) => {
	const { totals, max, ticks } = useMemo(() => {
		const columnTotals = data.map((datum) =>
			sum(series.map((item) => valueOf(datum, item.key))),
		);
		const axis = niceTicks(
			columnTotals.reduce((top, total) => Math.max(top, total), 0),
			tickCount,
		);
		return { totals: columnTotals, max: axis.max, ticks: axis.ticks };
	}, [data, series, tickCount]);

	const { activeIndex, containerProps, getItemProps } = useChartNavigation(
		data.length,
	);

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'stacked-bar-chart',
		testId,
	});

	const describe = (datum: StackedBarChartDatum<Key>, index: number) =>
		[
			datum.label,
			`${totalLabel} ${formatValue(totals[index])}`,
			...series.map(
				(item) =>
					`${item.label} ${formatValue(valueOf(datum, item.key))}`,
			),
		].join(', ');

	const table = (
		<ChartTable
			aria-label={ariaLabel}
			columns={[
				categoryLabel,
				...series.map((item) => item.label),
				totalLabel,
			]}
			rows={data.map((datum, index) => ({
				id: datum.id,
				cells: [
					datum.label,
					...series.map((item) =>
						formatValue(valueOf(datum, item.key)),
					),
					formatValue(totals[index]),
				],
			}))}
			hidden={view === 'chart'}
		/>
	);

	if (view === 'table') {
		return <Root {...rootProps}>{table}</Root>;
	}

	return (
		<Root
			{...rootProps}
			{...dataAttrs({ hasActive: activeIndex !== null })}
		>
			<ChartLegend items={series} layout="horizontal" />
			<div className={styles.body}>
				<div aria-hidden className={styles.gridLines}>
					{ticks.map((tick) => (
						<span
							key={tick}
							className={styles.gridLine({
								baseline: tick === 0,
							})}
							style={assignInlineVars({
								[styles.tickPosition]: toPercent(tick, max),
							})}
						/>
					))}
				</div>
				<div
					aria-hidden
					className={clsx(
						styles.yAxis,
						typography({ size: '2', color: 'secondary' }),
					)}
				>
					{ticks.map((tick) => (
						<span
							key={tick}
							className={styles.tick}
							style={assignInlineVars({
								[styles.tickPosition]: toPercent(tick, max),
							})}
						>
							{formatTick(tick)}
						</span>
					))}
				</div>
				<div
					aria-label={ariaLabel}
					className={styles.plot}
					role="graphics-document"
					{...containerProps}
				>
					{data.map((datum, index) => {
						const isActive = index === activeIndex;
						const total = totals[index];
						const values = series.map((item) =>
							valueOf(datum, item.key),
						);

						return (
							<div
								key={datum.id}
								aria-label={describe(datum, index)}
								className={styles.column}
								role="graphics-symbol"
								style={assignInlineVars({
									[styles.columnSize]: toPercent(total, max),
								})}
								{...getItemProps(index)}
								{...dataAttrs({ active: isActive })}
							>
								<div className={styles.barArea}>
									<span
										aria-hidden
										className={clsx(
											styles.valueLabel,
											typography({
												size: '2',
												weight: 'semiBold',
												color: 'secondary',
											}),
										)}
									>
										{formatValue(total)}
									</span>
									<span aria-hidden className={styles.stack}>
										{series.map((item, layer) => (
											<span
												key={item.key}
												className={styles.segment}
												style={assignInlineVars({
													[styles.segmentColor]:
														item.color,
													[styles.segmentSize]:
														toPercent(
															values[layer],
															total,
														),
												})}
											/>
										))}
									</span>
									{isActive ? (
										<span
											className={styles.tooltipRail({
												side:
													index < data.length / 2
														? 'end'
														: 'start',
											})}
										>
											<ChartTooltip
												className={styles.tooltip}
												title={datum.label}
												// The top segment first, as in the column.
												rows={series
													.map((item, layer) => ({
														key: item.key,
														label: item.label,
														color: item.color,
														value: formatValue(
															values[layer],
														),
													}))
													.reverse()}
												total={{
													label: totalLabel,
													value: formatValue(total),
												}}
											/>
										</span>
									) : null}
								</div>
								<span
									aria-hidden
									className={clsx(
										styles.axisLabel,
										typography(
											isActive
												? {
														size: '2',
														weight: 'bold',
														color: 'primary',
													}
												: {
														size: '2',
														color: 'secondary',
													},
										),
									)}
								>
									{datum.label}
								</span>
							</div>
						);
					})}
				</div>
			</div>
			{table}
		</Root>
	);
};

StackedBarChart.displayName = 'StackedBarChart';
