import * as React from 'react';
import {
	Children,
	cloneElement,
	ComponentProps,
	FunctionComponent,
	ReactElement,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
	useId,
} from 'react';

import { Box } from '../Box/Box';
import { Positioner } from '../Positioner/Positioner';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';

import * as styles from './Tooltip.css';

type ToolTipSize = 'medium' | 'large';

export interface TooltipProps {
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
	}, [closeAfter, isOpen, label]);

	// Determine if we need to wrap children or can use them directly
	const renderTrigger = () => {
		const childrenArray = Children.toArray(children);

		// Check if we have a single child that is a React Fragment
		if (childrenArray.length === 1) {
			const singleChild = childrenArray[0] as ReactElement;

			// If the single child is a Fragment, we need to check its children
			if (singleChild.type === React.Fragment) {
				// Fragment contains multiple children, so wrap them
				return (
					<span
						ref={triggerRef}
						onMouseEnter={enterHandler}
						onMouseLeave={leaveHandler}
						onFocus={focusHandler}
						onBlur={blurHandler}
						tabIndex={0}
						style={{ display: 'inline-block' }}
						aria-describedby={isOpen ? tooltipId : undefined}
					>
						{children}
					</span>
				);
			}

			// Single non-fragment child, clone it with the trigger props
			return cloneElement(singleChild, {
				// @ts-expect-error ref does not exist on the type
				ref: triggerRef,
				onMouseEnter: enterHandler,
				onMouseLeave: leaveHandler,
				onFocus: focusHandler,
				onBlur: blurHandler,
				tabIndex: (singleChild.props as any).tabIndex ?? 0,
				'aria-describedby': isOpen ? tooltipId : undefined,
			});
		}

		// Multiple children at the top level, wrap them in a span
		return (
			<span
				ref={triggerRef}
				onMouseEnter={enterHandler}
				onMouseLeave={leaveHandler}
				onFocus={focusHandler}
				onBlur={blurHandler}
				tabIndex={0}
				style={{ display: 'inline-block' }}
				aria-describedby={isOpen ? tooltipId : undefined}
			>
				{children}
			</span>
		);
	};

	return label?.length > 0 ? (
		<>
			{renderTrigger()}
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
	) : (
		<>{children}</>
	);
};

Tooltip.displayName = 'Tooltip';
