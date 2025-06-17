import React, {
	type ComponentProps,
	type FunctionComponent,
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
	useId,
} from 'react';

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
	size?: ToolTipSize;
	isOpen?: boolean;
	label: string;
	alignment?: EAlignment;
	children: ReactNode;
	closeAfter?: number;
}

const sizeMap: Record<ToolTipSize, ComponentProps<typeof Text>['size']> = {
	medium: '2',
	large: '3',
};

export const Tooltip: FunctionComponent<TooltipProps> = ({
	alignment = EAlignment.RIGHT,
	isOpen: incomingIsOpen,
	label,
	children,
	size = 'medium',
	closeAfter = null,
	testId,
}) => {
	const tooltipId = useId();
	const [isOpen, setIsOpen] = useState(incomingIsOpen);
	const triggerRef = useRef<HTMLElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	const leaveTimer = useRef<ReturnType<typeof setTimeout>>(null);

	const enterHandler = useCallback(() => {
		if (leaveTimer.current) {
			clearTimeout(leaveTimer.current);
		}
		setIsOpen(true);
	}, [setIsOpen]);

	const leaveHandler = useCallback(() => {
		leaveTimer.current = setTimeout(() => {
			setIsOpen(false);
		}, 1e3 / 2);
	}, [setIsOpen]);

	const focusHandler = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const blurHandler = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	// Handle the closeAfter prop
	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;
		if (isOpen && typeof closeAfter === 'number') {
			timeout = setTimeout(() => setIsOpen(false), closeAfter);
		}

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	}, [closeAfter, isOpen]);

	// return early if no label provided
	if (!label) return <>{children}</>;

	return (
		<>
			<span
				ref={triggerRef}
				onMouseEnter={enterHandler}
				onMouseLeave={leaveHandler}
				onFocus={focusHandler}
				onBlur={blurHandler}
				tabIndex={0}
				className={sprinkles({ display: 'inline-block' })}
				aria-describedby={isOpen ? tooltipId : undefined}
				{...dataAttrs({ testid: testId })}
			>
				{children}
			</span>
			<Positioner
				triggerRef={triggerRef}
				alignment={alignment}
				isOpen={
					typeof incomingIsOpen === 'boolean'
						? incomingIsOpen
						: isOpen
				}
			>
				<Box
					id={tooltipId}
					ref={tooltipRef}
					className={styles.root}
					width="full"
					pointerEvents="none"
					userSelect="none"
					overflow="hidden"
					borderRadius="1"
					boxShadow="4"
					backgroundColour="gray900"
					paddingY="2"
					paddingX="3"
					role="tooltip"
				>
					<Text size={sizeMap[size]} colour="white">
						{label}
					</Text>
				</Box>
			</Positioner>
		</>
	);
};

Tooltip.displayName = 'Tooltip';
