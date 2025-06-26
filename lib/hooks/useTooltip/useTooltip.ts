import React, { useCallback, useEffect, useRef, useState, useId } from 'react';

export interface UseTooltipOptions {
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

export interface UseTooltipReturn {
	/**
	 * Whether the tooltip is currently open
	 */
	isOpen: boolean;
	/**
	 * Unique ID for the tooltip element
	 */
	tooltipId: string;
	/**
	 * Ref to attach to the trigger element
	 */
	triggerRef: React.RefObject<HTMLElement | null>;
	/**
	 * Ref to attach to the tooltip element
	 */
	tooltipRef: React.RefObject<HTMLDivElement | null>;
	/**
	 * Props to spread on the trigger element
	 */
	triggerProps: {
		onMouseEnter: () => void;
		onMouseLeave: () => void;
		onFocus: () => void;
		onBlur: () => void;
		'aria-describedby': string | undefined;
	};
	/**
	 * Props for the tooltip Box component for consistent styling
	 */
	tooltipBoxProps: {
		id: string;
		ref: React.RefObject<HTMLDivElement | null>;
		width: 'full';
		pointerEvents: 'none';
		userSelect: 'none';
		overflow: 'hidden';
		borderRadius: '1';
		boxShadow: '4';
		backgroundColour: 'gray900';
		paddingY: '2';
		paddingX: '3';
		role: 'tooltip';
	};
}

/**
 * Hook for managing tooltip state and interactions
 */
export const useTooltip = ({
	isOpen: controlledIsOpen,
	closeAfter = null,
	onOpenChange,
}: UseTooltipOptions = {}): UseTooltipReturn => {
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

	const tooltipBoxProps = {
		id: tooltipId,
		ref: tooltipRef,
		width: 'full' as const,
		pointerEvents: 'none' as const,
		userSelect: 'none' as const,
		overflow: 'hidden' as const,
		borderRadius: '1' as const,
		boxShadow: '4' as const,
		backgroundColour: 'gray900' as const,
		paddingY: '2' as const,
		paddingX: '3' as const,
		role: 'tooltip' as const,
	};

	return {
		isOpen,
		tooltipId,
		triggerRef,
		tooltipRef,
		triggerProps,
		tooltipBoxProps,
	};
};
