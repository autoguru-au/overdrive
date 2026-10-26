import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { useId, type ReactNode } from 'react';

import { typography, type HeadingTags } from '../../styles/typography';
import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';
import { Heading } from '../Heading/Heading';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './RangeMeter.css';
import { toAriaValue, toRatio, toSegments } from './rangeMeterMath';

/** The meaning of a zone. Each intent has one color. */
export type RangeMeterIntent = NonNullable<styles.ZoneVariants['intent']>;

export interface RangeMeterZone {
	/** The meaning of the zone, for example `success` for the expected range. */
	intent: RangeMeterIntent;
	/**
	 * Where the zone ends, in the units of `value`. The zone starts where the
	 * previous zone ends, or at `min`.
	 */
	end: number;
}

interface RangeMeterBaseProps extends TestIdProp {
	/**
	 * The value that the marker shows. A value out of the range shows at the
	 * nearer end of the track.
	 */
	value: number;
	/** The value at the start of the track. */
	min: number;
	/**
	 * The value at the end of the track. If `max` is not more than `min`, the
	 * track is neutral and the marker is in the centre.
	 */
	max: number;
	/**
	 * The zones, in order from `min`. The meter clips the zones to the range
	 * and shows the part after the last zone in a neutral color.
	 */
	zones: readonly RangeMeterZone[];
	/**
	 * The text that a screen reader announces for the value, for example
	 * "$171.00, 12% below the historical range". Without it, the screen reader
	 * announces the number only.
	 */
	valueText?: string;
	/**
	 * The heading element of the title. Use the level that fits the outline
	 * of the page.
	 * @default 'h2'
	 */
	titleAs?: HeadingTags;
	/**
	 * The text in the footer, below the track, for example the limits of the
	 * range. A screen reader announces it as the description of the meter.
	 */
	footer?: ReactNode;
	/** Additional class names for the root element. */
	className?: string;
}

interface RangeMeterTitleProps {
	/**
	 * The title in the header, above the track. It is also the accessible
	 * name of the meter.
	 */
	title: string;
	/** The accessible name of the meter, if it must be different from `title`. */
	'aria-label'?: string;
}

interface RangeMeterAriaLabelProps {
	/** Do not give `title` if the meter has no visible name. */
	title?: undefined;
	/** The accessible name of the meter, when the meter has no `title`. */
	'aria-label': string;
}

export type RangeMeterProps = RangeMeterBaseProps &
	(RangeMeterTitleProps | RangeMeterAriaLabelProps);

/**
 * A horizontal track with coloured zones and a marker that shows where one
 * value is in the range, for example a quoted price against the historical
 * price range.
 *
 * The meter has three parts: a header with the `title`, the body with the
 * track, and a footer with `footer`. Without `title` there is no header, and
 * without `footer` there is no footer. The meter has no border or card.
 *
 * The meter shows a value and is not interactive. It has the `meter` role, so
 * a screen reader announces the name, the value and the footer text. Give a
 * `valueText` that says what the value means, because the zone colours are not
 * available to a screen reader.
 *
 * The meter has no value if `value` is not a number, if `min` or `max` is not
 * finite, or if `min` is more than `max`. Then the track has no role, and
 * hidden text gives the name and the `valueText`.
 *
 * The component has no fixed text, locale or currency. Give all text in props.
 */
export const RangeMeter = ({
	value,
	min,
	max,
	zones,
	valueText,
	title,
	'aria-label': ariaLabel,
	titleAs = 'h2',
	footer,
	className,
	testId,
}: RangeMeterProps) => {
	const titleId = useId();
	const footerId = useId();

	const ratio = toRatio(value, min, max);
	const segments = toSegments(zones, min, max);
	const valueNow = toAriaValue(value, min, max);
	// A meter must have a value. Without one, the track is hidden from a
	// screen reader, and hidden text gives the name and the value text.
	const isMeter = valueNow !== undefined;
	const trackA11yProps = isMeter
		? {
				'aria-describedby': footer ? footerId : undefined,
				'aria-label': ariaLabel,
				'aria-labelledby': ariaLabel ? undefined : titleId,
				'aria-valuemax': max,
				'aria-valuemin': min,
				'aria-valuenow': valueNow,
				'aria-valuetext': valueText,
				role: 'meter',
			}
		: { 'aria-hidden': true };

	const { Component: Root, componentProps: rootProps } = useBox({
		className: clsx(styles.root, className),
		odComponent: 'range-meter',
		testId,
	});

	const header = title ? (
		<Heading
			align="center"
			as={titleAs}
			color="secondary"
			id={titleId}
			size="p3"
			weight="bold"
		>
			{title}
		</Heading>
	) : null;

	return (
		<Root {...rootProps}>
			{header}
			<div {...trackA11yProps} className={styles.track}>
				<div className={styles.zones}>
					{segments.map((segment) => (
						<div
							key={segment.start}
							className={styles.zone({ intent: segment.intent })}
							style={assignInlineVars({
								[styles.zoneSize]: `${segment.size * 100}%`,
							})}
						/>
					))}
				</div>
				{ratio === null ? null : (
					<div
						className={styles.marker}
						style={assignInlineVars({
							[styles.markerPosition]: `${ratio * 100}%`,
						})}
					/>
				)}
			</div>
			{isMeter ? null : (
				<>
					{title ? null : (
						<VisuallyHidden>{ariaLabel}</VisuallyHidden>
					)}
					{valueText ? (
						<VisuallyHidden>{valueText}</VisuallyHidden>
					) : null}
				</>
			)}
			{footer ? (
				<div
					className={typography({
						align: 'center',
						color: 'secondary',
						size: 'p3',
					})}
					id={footerId}
				>
					{footer}
				</div>
			) : null}
		</Root>
	);
};

RangeMeter.displayName = 'RangeMeter';
