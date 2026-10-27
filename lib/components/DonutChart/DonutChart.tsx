import { assignInlineVars, setElementVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';

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
	pie,
	sum,
	toDrawable,
	useChartNavigation,
	useKeepInside,
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
 * The type sizes of the total in the centre, from the largest. The total gets
 * the largest size that fits the hole, because a compact number is longer in
 * some locales, for example "26,4 tys. zł".
 */
const TOTAL_SIZES = ['8', '7', '6', '5'] as const;

/** The part of the hole width that the total can use, so that a gap stays between the total and the ring. */
const TOTAL_MAX_SHARE = 0.9;

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
	 * The label of the value row in the tooltip, for example "Spend". Without
	 * a label, the row shows the value only.
	 */
	valueLabel?: string;
	/**
	 * The label of the share row in the tooltip, for example "Share". Without
	 * a label, the row shows the share only.
	 */
	shareLabel?: string;
	/**
	 * Hides the legend in the footer, so that only the ring shows.
	 * @default false
	 */
	hideLegend?: boolean;
	/**
	 * Hides the tooltip. If `false`, hover or focus on a slice shows a tooltip
	 * with the name, the value and the share of the slice. With `hideLegend`,
	 * the tooltip always shows, because it is then the only text for the
	 * slices.
	 * @default false
	 */
	hideTooltip?: boolean;
	/** Additional class names for the root element. */
	className?: string;
}

/**
 * A ring chart that shows the share of each category, with the total in the
 * centre and a legend with the value and the share of each slice. A tooltip
 * gives the details of the active slice. With `hideLegend`, only the ring
 * shows. `hideTooltip` removes the tooltip, but only when the legend shows.
 *
 * The chart has three parts: a header with the `title`, the body with the
 * ring, and a footer with the legend or `emptyLabel`. Without `title` there is
 * no header. The chart has no border or card.
 *
 * Hover or focus on a slice dims the other slices and their legend swatches.
 * The text does not dim. The chart is one tab stop: the arrow keys move between
 * the slices and Escape closes the tooltip.
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
	hideTooltip = false,
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
				// part of the ring box.
				anchorX: (1 + Math.sin(angle)) / 2,
				anchorY: (1 - Math.cos(angle)) / 2,
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

	// Without the legend and the tooltip, the slices have no visible text and
	// only the colours tell them apart (WCAG 1.4.1).
	const showTooltip = hideLegend || !hideTooltip;

	const { activeIndex, focusedIndex, containerProps, getItemProps } =
		useChartNavigation(
			marks.map((mark) => mark.datum.key),
			{ hasTooltip: showTooltip },
		);
	const activeMark = activeIndex === null ? null : marks[activeIndex];

	// The tooltip is fixed, so that a parent with `overflow: hidden` does not
	// cut it, for example a card with rounded corners.
	const ringRef = useRef<HTMLDivElement>(null);
	const placeTooltip = (tooltip: HTMLElement) => {
		const ring = ringRef.current?.getBoundingClientRect();
		if (!ring || !activeMark) return;
		// A fixed box is relative to the viewport, or to an ancestor with a
		// transform, for example in a drawer. At 0, the box shows where that
		// area starts, and it gives the size of the tooltip.
		tooltip.style.removeProperty('transform');
		setElementVars(tooltip, {
			[styles.tooltipX]: '0px',
			[styles.tooltipY]: '0px',
		});
		const box = tooltip.getBoundingClientRect();
		const { marginLeft, marginTop } = getComputedStyle(tooltip);
		const [side, align] = activeMark.placement.split('-');
		const x =
			ring.left +
			ring.width * activeMark.anchorX -
			(box.left - Number.parseFloat(marginLeft)) -
			(align === 'start' ? box.width : 0);
		const y =
			ring.top +
			ring.height * activeMark.anchorY -
			(box.top - Number.parseFloat(marginTop)) -
			(side === 'top' ? box.height : 0);
		setElementVars(tooltip, {
			[styles.tooltipX]: `${x}px`,
			[styles.tooltipY]: `${y}px`,
		});
	};

	// Keeps the tooltip in the viewport, for example on a narrow screen or when
	// the chart is at the top of the page. `showTooltip` adds or removes the
	// tooltip, the legend can move the ring, and the labels change its size.
	const tooltipRef = useRef<HTMLDivElement>(null);
	useKeepInside(
		tooltipRef,
		[activeMark, showTooltip, hideLegend, valueLabel, shareLabel],
		{ place: placeTooltip },
	);

	// Steps down the type size of the total until it fits the hole. When the
	// text changes, the step starts again at the largest size.
	const centreRef = useRef<HTMLDivElement>(null);
	const [totalFit, setTotalFit] = useState({ text: formattedTotal, step: 0 });
	const totalStep = totalFit.text === formattedTotal ? totalFit.step : 0;
	isomorphicLayoutEffect(() => {
		const centre = centreRef.current;
		const text = centre?.firstElementChild;
		if (!centre || !text || totalStep === TOTAL_SIZES.length - 1) return;
		// The centre covers the ring box, so the hole is part of its width.
		const hole = centre.clientWidth * (INNER_RADIUS / OUTER_RADIUS);
		if (text.getBoundingClientRect().width > hole * TOTAL_MAX_SHARE) {
			setTotalFit({ text: formattedTotal, step: totalStep + 1 });
		}
	}, [formattedTotal, totalStep]);

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

	// The centre is hidden from screen readers, so the name gives the total.
	const chartLabel = `${ariaLabel}, ${totalLabel} ${formattedTotal}`;

	if (total === 0) {
		// The skeleton disc is the body, and the empty text is the footer. The
		// disc keeps the chart name, so that a screen reader can tell empty
		// charts apart without a title.
		return (
			<Root {...rootProps}>
				{header}
				<div
					aria-label={chartLabel}
					className={styles.emptyDisc}
					role="img"
				/>
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
			<div ref={ringRef} className={styles.ring}>
				<svg
					aria-label={chartLabel}
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
				<div ref={centreRef} aria-hidden className={styles.centre}>
					<Text
						size={TOTAL_SIZES[totalStep]}
						weight="bold"
						color="primary"
					>
						{formattedTotal}
					</Text>
					<Text size="3" weight="bold" color="secondary">
						{totalLabel}
					</Text>
				</div>
				{showTooltip && activeMark ? (
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
