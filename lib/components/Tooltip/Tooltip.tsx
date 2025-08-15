import { invariant } from '@autoguru/utilities';
import React, {
	Children,
	cloneElement,
	isValidElement,
	type ReactNode,
} from 'react';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { EAlignment } from '../Positioner/alignment';

import * as styles from './Tooltip.css';
import { useTooltip, type ToolTipSize } from './useTooltip/useTooltip';

export interface TooltipProps extends TestIdProp {
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

/**
 * Renders a tooltip that appears when the user hovers over or focuses on the trigger element.
 *
 * If the provided children are not keyboard-focusable, you can supply set `wrapper` to true to
 * ensure keyboard accessibility. You can also give a tag name to the `wrapper` prop.
 *
 * This component can operate in either controlled or uncontrolled mode:
 * - In uncontrolled mode, it opens on hover/focus and can auto-close after a specified delay.
 * - In controlled mode, its visibility is managed externally via the `isOpen` prop.
 */
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
		Children.count(children) === 1 &&
			isValidElement(Children.only(children)),
		'Tooltips without a wrapper should have a single React element as a child',
	);

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
