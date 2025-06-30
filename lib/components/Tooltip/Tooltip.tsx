import { invariant } from '@autoguru/utilities';
import React, {
	Children,
	cloneElement,
	isValidElement,
	type ReactNode,
} from 'react';

import {
	useTooltip,
	type ToolTipSize,
} from '../../hooks/useTooltip/useTooltip';
import type { TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { EAlignment } from '../Positioner/alignment';

import * as styles from './Tooltip.css';

export interface TooltipProps extends TestId {
	/** Size of the tooltip text */
	size?: ToolTipSize;
	/** Whether the tooltip is open. When provided, the tooltip becomes controlled */
	isOpen?: boolean;
	/** Text content displayed in the tooltip */
	label: string;
	/** Position of the tooltip relative to the trigger element */
	alignment?: EAlignment;
	/** The element(s) that trigger the tooltip on hover or focus */
	children: ReactNode;
	/** Auto-close the tooltip after this many milliseconds. Set to null to disable auto-close */
	closeAfter?: number | null;
	/** An HTML tag to wrap the tooltip trigger with if children do not contain a keyboard focusable element */
	wrapper?: boolean | keyof React.JSX.IntrinsicElements;
}

export const Tooltip = ({
	alignment = EAlignment.RIGHT,
	isOpen,
	label,
	children,
	size = 'medium',
	closeAfter = null,
	testId,
	wrapper,
}: TooltipProps) => {
	const { PositionedTooltip, triggerRef, triggerProps } = useTooltip({
		isOpen,
		closeAfter,
	});

	// return early if no label provided
	if (!label) return <>{children}</>;

	// return wrapped output
	if (wrapper) {
		const TagName =
			typeof wrapper === 'string'
				? (wrapper as React.ElementType)
				: 'span';
		return (
			<>
				<TagName
					ref={triggerRef}
					{...triggerProps}
					tabIndex={0}
					{...dataAttrs({ testid: testId })}
				>
					{children}
				</TagName>
				<PositionedTooltip
					alignment={alignment}
					className={styles.root}
					label={label}
					size={size}
				/>
			</>
		);
	}

	invariant(
		isValidElement(children),
		'Tooltips without a wrapper should have a single child component',
	);
	if (!isValidElement(children)) return <>{children}</>;

	// nested React component which receices spread props
	return (
		<>
			{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
			{cloneElement(Children.only(children) as React.ReactElement<any>, {
				...triggerProps,
				ref: triggerRef,
			})}
			<PositionedTooltip
				alignment={alignment}
				className={styles.root}
				label={label}
				size={size}
			/>
		</>
	);
};

Tooltip.displayName = 'Tooltip';

export const TooltipOnComponent = ({
	alignment = EAlignment.RIGHT,
	isOpen,
	label,
	children,
	size = 'medium',
	closeAfter = null,
}: Omit<TooltipProps, 'testId'>) => {
	const { PositionedTooltip, triggerRef, triggerProps } = useTooltip({
		isOpen,
		closeAfter,
	});

	// return early if no label provided or non component children
	if (!label || !isValidElement(children)) return <>{children}</>;

	return (
		<>
			{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
			{cloneElement(Children.only(children) as React.ReactElement<any>, {
				...triggerProps,
				ref: triggerRef,
			})}
			<PositionedTooltip
				alignment={alignment}
				className={styles.root}
				label={label}
				size={size}
			/>
		</>
	);
};

TooltipOnComponent.displayName = 'TooltipOnComponent';
