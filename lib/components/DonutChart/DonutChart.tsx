import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useMemo, useRef } from 'react';

import type { TestIdProp } from '../../types';
import { isomorphicLayoutEffect } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';
import { Text } from '../Text/Text';
import {
	ChartHeader,
	ChartLegend,
	ChartTooltip,
	arcPath,
	keepInside,
	pie,
	sum,
	toDrawable,
	toPercent,
	useChartNavigation,
	type ChartFormatter,
	type ChartHeaderOptions,
	type ChartSeries,
} from '../private/Chart';

import * as styles from './DonutChart.css';

/**
 * The ring in SVG user units: the view box is 2 units wide. The inner radius
 * is 75% of the outer radius, as in Figma (56.25 / 75).
 */
const OUTER_RADIUS = 1;
const INNER_RADIUS = 0.75;
const VIEW_BOX = `${-OUTER_RADIUS} ${-OUTER_RADIUS} ${OUTER_RADIUS * 2} ${OUTER_RADIUS * 2}`;

/**
 * Gives the tooltip placement for an angle, clockwise from 12 o'clock. The
 * tooltip goes away from the centre of the ring.
 */
const placementAt = (angle: number): styles.TooltipPlacement => {
	const top = Math.cos(angle) > 0;
	const start = Math.sin(angle) < 0;
	if (top) return start ? 'top-start' : 'top-end';
	return start ? 'bottom-start' : 'bottom-end';
};

export interface DonutChartDatum<Key extends string = string>
	extends ChartSeries<Key> {
	/** The slice value. A negative, `NaN` or infinite value counts as 0. */
	value: number;
}

export interface DonutChartProps<Key extends string = string>
	extends TestIdProp,
		ChartHeaderOptions {
	/** The slices, clockwise from the 12 o'clock position. */
	data: DonutChartDatum<Key>[];
	/**
	 * The accessible name of the chart. The chart adds the total, so a screen
	 * reader hears, for example, "Spend by category, Total $26.4K".
	 */
	'aria-label': string;
	/**
	 * Formats the values in the centre, the legend, the tooltip and the screen
	 * reader text, for example with a compact currency format.
	 */
	formatValue: ChartFormatter;
	/** Formats the share of a slice. The value is from 0 to 1, for example with `Intl.NumberFormat` and `style: 'percent'`. */
	formatPercent: ChartFormatter;
	/** The caption under the total in the centre. */
	totalLabel: string;
	/** The text that shows in place of the chart when all values are 0. */
	emptyLabel: string;
	/**
	 * The label of the value row in the tooltip, for example "Spend". The
	 * tooltip shows only with `hideLegend`. Without a label, the row shows the
	 * value only.
	 */
	valueLabel?: string;
	/**
	 * The label of the share row in the tooltip, for example "Share". Without
	 * a label, the row shows the share only.
	 */
	shareLabel?: string;
	/**
	 * Hides the legend in the footer, so that only the ring shows. Hover or
	 * focus on a slice then shows a tooltip with the name, the value and the
	 * share of the slice.
	 * @default false
	 */
	hideLegend?: boolean;
	/** Additional class names for the root element. */
	className?: string;
}

/**
 * A ring chart that shows the share of each category, with the total in the
 * centre and a legend with the value and the share of each slice. With
 * `hideLegend`, only the ring shows, and a tooltip gives the details of a slice.
 *
 * The chart has three parts: a header with the `title`, the body with the
 * ring, and a footer with the legend or `emptyLabel`. Without `title` there is
 * no header. The chart has no border or card.
 *
 * Hover or focus on a slice dims the other slices and legend items. The chart
 * is one tab stop: the arrow keys move between the slices and Escape closes
 * the tooltip.
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
	valueLabel,
	shareLabel,
	title,
	description,
	titleAs = 'h2',
	hideLegend = false,
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
			const angle = (arcs[index].startAngle + arcs[index].endAngle) / 2;
			return {
				datum,
				value,
				share,
				path: arcPath(arcs[index], INNER_RADIUS, OUTER_RADIUS),
				accessibleName: `${datum.label}, ${value}, ${share}`,
				// The outer edge of the ring at the middle of the slice, as a
				// percentage of the ring box.
				tooltipX: toPercent(1 + Math.sin(angle), 2),
				tooltipY: toPercent(1 - Math.cos(angle), 2),
				placement: placementAt(angle),
			};
		});
		return {
			slices: items,
			// A slice of 0 has no area, so it gets no mark and no tab stop. The
			// legend still shows it.
			marks: items.filter((_, index) => values[index] > 0),
			total: grandTotal,
			formattedTotal: formatValue(grandTotal),
		};
	}, [data, formatValue, formatPercent]);

	const { activeIndex, focusedIndex, containerProps, getItemProps } =
		useChartNavigation(marks.length);
	const activeMark = activeIndex === null ? null : marks[activeIndex];

	// Keeps the tooltip in the viewport, for example on a narrow screen or when
	// the chart is at the top of the page.
	const tooltipRef = useRef<HTMLDivElement>(null);
	isomorphicLayoutEffect(() => {
		if (tooltipRef.current) {
			const { clientWidth, clientHeight } = document.documentElement;
			keepInside(tooltipRef.current, {
				left: 0,
				right: clientWidth,
				top: 0,
				bottom: clientHeight,
			});
		}
	}, [activeMark]);

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'donut-chart',
		testId,
	});

	const header = title ? (
		<ChartHeader
			description={description}
			title={title}
			titleAs={titleAs}
		/>
	) : null;

	if (total === 0) {
		// The skeleton disc is the body, and the empty text is the footer.
		return (
			<Root {...rootProps}>
				{header}
				<div aria-hidden className={styles.emptyDisc} />
				<Text align="center" as="p" color="secondary" size="3">
					{emptyLabel}
				</Text>
			</Root>
		);
	}

	// CSS shows this ring only for keyboard focus (`:focus-visible`).
	const focusedMark = focusedIndex === null ? null : marks[focusedIndex];

	return (
		<Root {...rootProps}>
			{header}
			<div className={styles.ring}>
				<svg
					// The centre is hidden from screen readers, so the name
					// gives the total.
					aria-label={`${ariaLabel}, ${totalLabel} ${formattedTotal}`}
					className={styles.svg}
					role="graphics-document"
					viewBox={VIEW_BOX}
					{...dataAttrs({ hasActive: activeIndex !== null })}
					{...containerProps}
				>
					{marks.map((mark, index) => (
						<path
							key={mark.datum.key}
							aria-label={mark.accessibleName}
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
				{hideLegend && activeMark ? (
					<ChartTooltip
						ref={tooltipRef}
						className={styles.tooltip({
							placement: activeMark.placement,
						})}
						color={activeMark.datum.color}
						rows={[
							{
								key: 'value',
								label: valueLabel,
								value: activeMark.value,
							},
							{
								key: 'share',
								label: shareLabel,
								value: activeMark.share,
							},
						]}
						style={assignInlineVars({
							[styles.tooltipX]: activeMark.tooltipX,
							[styles.tooltipY]: activeMark.tooltipY,
						})}
						title={activeMark.datum.label}
					/>
				) : null}
			</div>
			{hideLegend ? null : (
				<ChartLegend
					activeKey={activeMark?.datum.key}
					items={slices.map((slice) => ({
						key: slice.datum.key,
						label: slice.datum.label,
						color: slice.datum.color,
						detail: `${slice.value} (${slice.share})`,
					}))}
					layout="vertical"
				/>
			)}
		</Root>
	);
};

DonutChart.displayName = 'DonutChart';
