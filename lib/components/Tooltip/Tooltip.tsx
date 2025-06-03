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
	const [isOpen, setIsOpen] = useState(incomingIsOpen);
	const childRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLElement>(null);

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

	useEffect(() => {
		let timeout;
		if (isOpen && typeof closeAfter === 'number')
			timeout = setTimeout(() => setIsOpen(false), closeAfter);

		return () => (timeout ? clearTimeout(timeout) : void 0);
	}, [closeAfter, isOpen, label]);

	return label?.length > 0 ? (
		<>
			{(() => {
				const childrenArray = Children.toArray(children);
				
				// If there's only one child, use the existing logic
				if (childrenArray.length === 1) {
					const singleChild = childrenArray[0] as ReactElement;
					return cloneElement(singleChild, {
						// @ts-expect-error ref does not exist on the type
						ref: triggerRef,
						onMouseEnter: enterHandler,
						onMouseLeave: leaveHandler,
					});
				}
				
				// If there are multiple children, wrap them in a span
				return (
					<span
						ref={triggerRef}
						onMouseEnter={enterHandler}
						onMouseLeave={leaveHandler}
					>
						{children}
					</span>
				);
			})()}
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
					ref={childRef}
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
