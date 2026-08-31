import { CaretRightIcon } from '@autoguru/icons';
import type { ClassValue } from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import { useNullCheck } from '../../hooks/useNullCheck';
import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';
import { Icon } from '../Icon/Icon';

import * as styles from './StepProgress.css';
import {
	StepProgressItem,
	type StepProgressItemProps,
	type StepProgressSize,
} from './StepProgressItem';

/** Which way the sequence runs. */
export type StepProgressLayout = 'horizontal' | 'vertical';

export interface StepProgressProps extends TestIdProp {
	/**
	 * The step names, in order. The array's length is the number of steps —
	 * the design covers three to five.
	 */
	steps: ReactNode[];
	/**
	 * The user's current position in the flow, 1-based. Steps behind it are
	 * drawn the same as steps ahead of it: the design has no "completed" state.
	 */
	activeStep: number;
	/**
	 * `horizontal` runs the steps across with their labels beneath; `vertical`
	 * runs them down with their labels beside.
	 * @default 'horizontal'
	 */
	layout?: StepProgressLayout;
	/** @default 'large' */
	size?: StepProgressSize;
	/**
	 * Restyles the sequence for a dark panel or hero.
	 * @default false
	 */
	onDark?: boolean;
	/**
	 * Drops the labels to assistive technology only, leaving a row of numbered
	 * circles — a fallback for widths that cannot fit the labels. Prefer the
	 * `vertical` layout where there is room for it.
	 * @default false
	 */
	hideLabels?: boolean;
	/**
	 * Names the navigation landmark, distinguishing it from any other on the
	 * page.
	 * @default 'Progress'
	 */
	'aria-label'?: string;
	/** Additional class names merged after the component's own styles. */
	className?: ClassValue;
}

interface ConnectorProps {
	layout: StepProgressLayout;
	size: StepProgressSize;
}

/**
 * Connectors take the same grey as an unselected circle's ring, which reads on
 * a light and a dark surface alike — so there is nothing to vary with `onDark`.
 */
const Connector: FunctionComponent<ConnectorProps> = ({ layout, size }) => {
	const { Component: Cell, componentProps: cellProps } = useBox({
		as: 'span',
		className: styles.connector({ layout, size }),
		odComponent: 'step-progress-connector',
		'aria-hidden': true,
	});

	return (
		<Cell {...cellProps}>
			{layout === 'horizontal' ? (
				<Icon icon={CaretRightIcon} size="medium" />
			) : (
				<span className={styles.connectorLine} />
			)}
		</Cell>
	);
};

Connector.displayName = 'StepProgressConnector';

/**
 * Shows the user where they are in a multi-step flow — a checkout, a wizard, a
 * long form — as a sequence of numbered steps joined by connectors.
 *
 * Progress is linear and driven entirely by `activeStep`; the component holds no
 * state of its own. There is no "completed" appearance, so steps the user has
 * already been through look the same as the ones ahead.
 *
 * It renders a `nav` landmark around an ordered list, with the current step
 * marked `aria-current="step"`. The steps are not interactive — this reports
 * position, it does not navigate. For breadcrumb-style navigation where each
 * stage is a link, use `Breadcrumbs`.
 */
export const StepProgress: FunctionComponent<StepProgressProps> = ({
	steps,
	activeStep,
	layout = 'horizontal',
	size = 'large',
	onDark = false,
	hideLabels = false,
	className,
	testId,
	'aria-label': ariaLabel = 'Progress',
}) => {
	useNullCheck(
		steps.length >= 2,
		'StepProgress: a sequence needs at least two steps — use a progress bar for anything shorter.',
	);

	const { Component: Root, componentProps: rootProps } = useBox({
		as: 'nav',
		className,
		odComponent: 'step-progress',
		testId,
		'aria-label': ariaLabel,
	});

	const { Component: List, componentProps: listProps } = useBox({
		as: 'ol',
		className: styles.list({ layout }),
	});

	// `horizontal` stacks each step's label under its circle, and vice versa.
	const arrangement: StepProgressItemProps['arrangement'] =
		layout === 'horizontal' ? 'vertical' : 'horizontal';

	return (
		<Root {...rootProps}>
			<List {...listProps}>
				{steps.map((label, index) => {
					const isCurrent = index + 1 === activeStep;

					return (
						<li
							className={styles.item}
							// The steps are a fixed, ordered sequence; there is
							// no stable id to key on and reordering is not a
							// case this component supports.
							key={index}
							{...(isCurrent ? { 'aria-current': 'step' } : {})}
						>
							<StepProgressItem
								arrangement={arrangement}
								hideLabel={hideLabels}
								label={label}
								number={index + 1}
								onDark={onDark}
								selected={isCurrent}
								size={size}
							/>
							{index < steps.length - 1 ? (
								<Connector layout={layout} size={size} />
							) : null}
						</li>
					);
				})}
			</List>
		</Root>
	);
};

StepProgress.displayName = 'StepProgress';
