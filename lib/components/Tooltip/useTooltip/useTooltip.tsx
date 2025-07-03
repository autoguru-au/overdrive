import React, { useCallback, useEffect, useRef, useState, useId } from 'react';

import { Box } from '../../Box/Box';
import { Positioner } from '../../Positioner/Positioner';
import { EAlignment } from '../../Positioner/alignment';
import { Text, type TextProps } from '../../Text/Text';

export type ToolTipSize = 'medium' | 'large';

export interface UseTooltipProps {
	/**
	 * Whether the tooltip should be controlled externally
	 */
	isOpen?: boolean;
	/**
	 * Auto-close the tooltip after this many milliseconds
	 */
	closeAfter?: number | null;
	/**
	 * Called when the tooltip open state changes
	 */
	onOpenChange?: (isOpen: boolean) => void;
}

const sizeMap: Record<ToolTipSize, TextProps['size']> = {
	medium: '2',
	large: '3',
};

/**
 * Hook for managing tooltip state and interactions
 */
export const useTooltip = ({
	isOpen: controlledIsOpen,
	closeAfter = null,
	onOpenChange,
}: UseTooltipProps) => {
	const tooltipId = useId();
	const [internalIsOpen, setInternalIsOpen] = useState(false);
	const triggerRef = useRef<HTMLElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Use controlled state if provided, otherwise use internal state
	const isOpen =
		typeof controlledIsOpen === 'boolean'
			? controlledIsOpen
			: internalIsOpen;

	const setIsOpen = useCallback(
		(newIsOpen: boolean) => {
			if (typeof controlledIsOpen !== 'boolean') {
				setInternalIsOpen(newIsOpen);
			}
			onOpenChange?.(newIsOpen);
		},
		[controlledIsOpen, onOpenChange],
	);

	const enterHandler = useCallback(() => {
		if (leaveTimer.current) {
			clearTimeout(leaveTimer.current);
			leaveTimer.current = null;
		}
		setIsOpen(true);
	}, [setIsOpen]);

	const leaveHandler = useCallback(() => {
		if (leaveTimer.current) {
			clearTimeout(leaveTimer.current);
		}
		leaveTimer.current = setTimeout(() => {
			setIsOpen(false);
		}, 500); // 500ms delay
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
	}, [closeAfter, isOpen, setIsOpen]);

	// Cleanup timer on unmount
	useEffect(() => {
		return () => {
			if (leaveTimer.current) {
				clearTimeout(leaveTimer.current);
			}
		};
	}, []);

	const triggerProps = {
		onMouseEnter: enterHandler,
		onMouseLeave: leaveHandler,
		onFocus: focusHandler,
		onBlur: blurHandler,
		'aria-describedby': isOpen ? tooltipId : undefined,
	};

	const PositionedTooltip = useCallback(
		({
			alignment = EAlignment.RIGHT,
			className,
			label,
			size = 'medium',
		}: {
			alignment?: EAlignment;
			className?: string;
			label: string;
			size?: ToolTipSize;
		}) => {
			const textSize = sizeMap[size];

			return (
				<Positioner
					triggerRef={triggerRef}
					alignment={alignment}
					isOpen={isOpen}
				>
					<Box
						className={className}
						id={tooltipId}
						ref={tooltipRef}
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
						<Text size={textSize} colour="white">
							{label}
						</Text>
					</Box>
				</Positioner>
			);
		},
		[isOpen, tooltipId],
	);

	return {
		isOpen,
		triggerRef,
		triggerProps,
		PositionedTooltip,
	};
};
