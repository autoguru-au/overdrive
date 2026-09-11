import type { ClassValue } from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import * as styles from './StepProgress.css';

/** Circle diameter and type scale. */
export type StepProgressSize = 'large' | 'small';

/** Where the label sits relative to the numbered circle. */
export type StepProgressArrangement = 'vertical' | 'horizontal';

export interface StepProgressItemProps extends TestIdProp {
	/** The position shown inside the circle, 1-based. */
	number: number;
	/**
	 * The step's name. Keep it to one to three words — a long label wraps and
	 * pushes the circles in a sequence out of alignment.
	 */
	label?: ReactNode;
	/**
	 * Renders the label to assistive technology only, leaving a bare numbered
	 * circle on screen. The number alone does not say what the step is, so the
	 * label is still required.
	 * @default false
	 */
	hideLabel?: boolean;
	/**
	 * `vertical` puts the label under the circle, `horizontal` beside it.
	 * @default 'vertical'
	 */
	arrangement?: StepProgressArrangement;
	/**
	 * Circle diameter and the type scale that follows it — `large` is a 32px
	 * circle, `small` a 24px one.
	 * @default 'large'
	 */
	size?: StepProgressSize;
	/**
	 * Marks this step as the user's current position, filling the circle.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Restyles the step for a dark panel or hero — labels go white and the
	 * selected circle takes the brand accent.
	 * @default false
	 */
	onDark?: boolean;
	/** Additional class names merged after the component's own styles. */
	className?: ClassValue;
}

/**
 * A single numbered step: a circle carrying the step's position, with an
 * optional label beside or beneath it.
 *
 * `StepProgressItem` is presentational — it carries no list or current-position
 * semantics of its own. Use `StepProgress` to render a sequence, which supplies
 * the surrounding `nav`/`ol` and marks the current step for assistive
 * technology. Reach for `StepProgressItem` directly only when you are building a
 * layout `StepProgress` does not cover, and supply those semantics yourself.
 */
export const StepProgressItem: FunctionComponent<StepProgressItemProps> = ({
	number,
	label,
	hideLabel = false,
	arrangement = 'vertical',
	size = 'large',
	selected = false,
	onDark = false,
	className,
	testId,
}) => {
	const { Component: Root, componentProps: rootProps } = useBox({
		as: 'span',
		className: [styles.step({ arrangement }), className],
		odComponent: 'step-progress-item',
		testId,
	});

	const { Component: Circle, componentProps: circleProps } = useBox({
		as: 'span',
		className: styles.circle({ size, selected, onDark }),
	});

	return (
		<Root {...rootProps}>
			<Circle {...circleProps}>{number}</Circle>
			{label && hideLabel ? (
				<VisuallyHidden as="span">{label}</VisuallyHidden>
			) : null}
			{label && !hideLabel ? (
				<span className={styles.label({ size, selected, onDark })}>
					{label}
				</span>
			) : null}
		</Root>
	);
};

StepProgressItem.displayName = 'StepProgressItem';
