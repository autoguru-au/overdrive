import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useMemo, useRef } from 'react';

import { typography } from '../../styles/typography';
import type { TestIdProp } from '../../types';
import { isomorphicLayoutEffect } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';
import {
	ChartHeader,
	ChartLegend,
	ChartTooltip,
	keepInside,
	niceTicks,
	sum,
	toDrawable,
	toPercent,
	useChartNavigation,
	type ChartFormatter,
	type ChartHeaderOptions,
	type ChartSeries,
} from '../private/Chart';

import * as styles from './StackedBarChart.css';

export interface StackedBarChartDatum<Key extends string = string> {
	/** Identifies the column. Keep it stable and unique in the chart. */
	id: string;
	/**
	 * The column name, for example a formatted date range. The chart shows it
	 * on the X axis, in the tooltip and in the screen reader text.
	 */
	label: string;
	/**
	 * One value for each series key. The chart stacks positive values only,
	 * so a missing, negative, `NaN` or infinite value counts as 0.
	 */
	values: Partial<Record<Key, number>>;
}

export interface StackedBarChartProps<Key extends string = string>
	extends TestIdProp,
		ChartHeaderOptions {
	/** The columns, in display order. */
	data: StackedBarChartDatum<Key>[];
	/** The stacked series. The first series is at the bottom of each column. */
	series: ChartSeries<Key>[];
	/** The accessible name of the chart. */
	'aria-label': string;
	/**
	 * Formats the values in the total labels, the tooltip and the screen
	 * reader text, for example with `Intl.NumberFormat`.
	 */
	formatValue: ChartFormatter;
	/**
	 * Formats the Y axis ticks, for example with a compact currency format.
	 * @default formatValue
	 */
	formatTick?: ChartFormatter;
	/** The label of the total, in the tooltip and the screen reader text. */
	totalLabel: string;
	/**
	 * The approximate number of steps on the Y axis. The axis uses steps of 1,
	 * 2, 2.5 or 5 times a power of 10, so the exact number can change.
	 * @default 3
	 */
	tickCount?: number;
	/**
	 * Hides the legend in the footer. The column tooltip still gives the name
	 * of each series.
	 * @default false
	 */
	hideLegend?: boolean;
	/** Additional class names for the root element. */
	className?: string;
}

/**
 * A column chart that stacks the values of each series, for example spend by
 * category for each week. Each column shows its total above it, and the Y axis
 * uses nice steps from 0.
 *
 * The chart has three parts: a header with the `title`, the body with the
 * columns, and a footer with the legend. Without `title` there is no header,
 * and with `hideLegend` there is no footer. The chart has no border or card.
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
	tickCount = 3,
	title,
	description,
	titleAs = 'h2',
	hideLegend = false,
	className,
	testId,
}: StackedBarChartProps<Key>) => {
	// The values and the text change only with the data, not with each hover.
	const { columns, max, ticks } = useMemo(() => {
		const items = data.map((datum) => {
			const values = series.map((item) =>
				toDrawable(datum.values[item.key] ?? 0),
			);
			const total = sum(values);
			const formattedValues = values.map((value) => formatValue(value));
			const formattedTotal = formatValue(total);
			return {
				datum,
				values,
				total,
				formattedValues,
				formattedTotal,
				accessibleName: [
					datum.label,
					`${totalLabel} ${formattedTotal}`,
					...series.map(
						(item, layer) =>
							`${item.label} ${formattedValues[layer]}`,
					),
				].join(', '),
			};
		});
		const axis = niceTicks(
			items.reduce((top, item) => Math.max(top, item.total), 0),
			tickCount,
		);
		return { columns: items, max: axis.max, ticks: axis.ticks };
	}, [data, series, formatValue, totalLabel, tickCount]);

	const { activeIndex, containerProps, getItemProps } = useChartNavigation(
		columns.length,
	);

	const bodyRef = useRef<HTMLDivElement>(null);
	const railRef = useRef<HTMLSpanElement>(null);
	// Keeps the tooltip inside the chart body, for example with one column or
	// on a narrow screen.
	isomorphicLayoutEffect(() => {
		if (railRef.current && bodyRef.current) {
			keepInside(
				railRef.current,
				bodyRef.current.getBoundingClientRect(),
			);
		}
	}, [activeIndex, columns]);

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'stacked-bar-chart',
		testId,
	});

	const header = title ? (
		<ChartHeader
			description={description}
			title={title}
			titleAs={titleAs}
		/>
	) : null;

	return (
		<Root
			{...rootProps}
			{...dataAttrs({ hasActive: activeIndex !== null })}
		>
			{header}
			<div ref={bodyRef} className={styles.body}>
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
					{columns.map((column, index) => {
						const isActive = index === activeIndex;

						return (
							<div
								key={column.datum.id}
								aria-label={column.accessibleName}
								className={styles.column}
								role="graphics-symbol"
								style={assignInlineVars({
									[styles.columnSize]: toPercent(
										column.total,
										max,
									),
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
										{column.formattedTotal}
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
															column.values[
																layer
															],
															column.total,
														),
												})}
											/>
										))}
									</span>
									{isActive ? (
										<span
											ref={railRef}
											className={styles.tooltipRail({
												side:
													index < columns.length / 2
														? 'end'
														: 'start',
											})}
										>
											<ChartTooltip
												className={styles.tooltip}
												title={column.datum.label}
												// The top segment first, as in the column.
												rows={series
													.map((item, layer) => ({
														key: item.key,
														label: item.label,
														color: item.color,
														value: column
															.formattedValues[
															layer
														],
													}))
													.reverse()}
												total={{
													label: totalLabel,
													value: column.formattedTotal,
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
									{column.datum.label}
								</span>
							</div>
						);
					})}
				</div>
			</div>
			{hideLegend ? null : (
				<ChartLegend items={series} layout="horizontal" />
			)}
		</Root>
	);
};

StackedBarChart.displayName = 'StackedBarChart';
