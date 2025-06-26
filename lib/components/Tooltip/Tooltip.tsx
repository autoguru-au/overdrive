import React, {
	Children,
	cloneElement,
	isValidElement,
	type ComponentProps,
	type ReactNode,
} from 'react';

import { useTooltip } from '../../hooks';
import { sprinkles } from '../../styles/sprinkles.css';
import type { TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Positioner } from '../Positioner/Positioner';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';

import * as styles from './Tooltip.css';

type ToolTipSize = 'medium' | 'large';

export interface TooltipProps extends TestId {
	/**
	 * Size of the tooltip text
	 * @default 'medium'
	 */
	size?: ToolTipSize;
	/**
	 * Whether the tooltip is open. When provided, the tooltip becomes controlled
	 */
	isOpen?: boolean;
	/**
	 * Text content displayed in the tooltip
	 */
	label: string;
	/**
	 * Position of the tooltip relative to the trigger element
	 */
	alignment?: EAlignment;
	/**
	 * The element(s) that trigger the tooltip on hover or focus
	 */
	children: ReactNode;
	/**
	 * Auto-close the tooltip after this many milliseconds. Set to null to disable auto-close
	 */
	closeAfter?: number | null;
}

const sizeMap: Record<ToolTipSize, ComponentProps<typeof Text>['size']> = {
	medium: '2',
	large: '3',
};

export const Tooltip = ({
	alignment = EAlignment.RIGHT,
	isOpen: incomingIsOpen,
	label,
	children,
	size = 'medium',
	closeAfter = null,
	testId,
}: TooltipProps) => {
	const { isOpen, triggerRef, triggerProps, tooltipBoxProps } = useTooltip({
		isOpen: incomingIsOpen,
		closeAfter,
	});

	// return early if no label provided
	if (!label) return <>{children}</>;

	return (
		<>
			<span
				ref={triggerRef}
				{...triggerProps}
				tabIndex={0}
				className={sprinkles({ display: 'inline-block' })}
				{...dataAttrs({ testid: testId })}
			>
				{children}
			</span>
			<Positioner
				triggerRef={triggerRef}
				alignment={alignment}
				isOpen={isOpen}
			>
				<Box {...tooltipBoxProps} className={styles.root}>
					<Text size={sizeMap[size]} colour="white">
						{label}
					</Text>
				</Box>
			</Positioner>
		</>
	);
};

Tooltip.displayName = 'Tooltip';

export const TooltipInteractive = ({
	alignment = EAlignment.RIGHT,
	isOpen: incomingIsOpen,
	label,
	children,
	size = 'medium',
	closeAfter = null,
}: Omit<TooltipProps, 'testId'>) => {
	const { isOpen, triggerRef, triggerProps, tooltipBoxProps } = useTooltip({
		isOpen: incomingIsOpen,
		closeAfter,
	});

	// return early if no label provided or non component children
	if (!label || !isValidElement(children)) return <>{children}</>;

	return (
		<>
			{cloneElement(Children.only(children) as React.ReactElement<any>, {
				...triggerProps,
				ref: triggerRef,
			})}
			<Positioner
				triggerRef={triggerRef}
				alignment={alignment}
				isOpen={isOpen}
			>
				<Box {...tooltipBoxProps} className={styles.root}>
					<Text size={sizeMap[size]} colour="white">
						{label}
					</Text>
				</Box>
			</Positioner>
		</>
	);
};

TooltipInteractive.displayName = 'TooltipInteractive';
