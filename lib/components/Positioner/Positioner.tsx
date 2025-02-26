import type { Placement } from '@floating-ui/core';
import {
	autoUpdate,
	computePosition,
	flip,
	offset,
	shift,
} from '@floating-ui/dom';
import * as React from 'react';
import {
	ComponentPropsWithoutRef,
	FunctionComponent,
	ReactNode,
	RefObject,
	useCallback,
	useEffect,
	useRef,
} from 'react';

import { isBrowser, setRef } from '../../utils';
import { Box } from '../Box';
import { Portal } from '../Portal';

import * as styles from './Positioner.css';
import { EAlignment } from './alignment';

export { EAlignment } from './alignment';

export interface Props
	extends Exclude<
		ComponentPropsWithoutRef<typeof Box>,
		'aria-hidden' | 'className'
	> {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement | null>;
	triggerOffset?: number;
	children?: ReactNode;
}

export const Positioner: FunctionComponent<Props> = ({
	alignment = EAlignment.BOTTOM_LEFT,
	isOpen = false,
	triggerRef,
	triggerOffset = 12,
	children,
	...boxProps
}) => {
	if (!isBrowser) return null;

	const placement = convertPlacement(alignment);

	const floatingRef = useRef<HTMLDivElement>(null);
	const cleanupRef = useRef<(() => void) | null>(null);

	const setupPositioning = useCallback(() => {
		if (!floatingRef.current || !triggerRef.current || !isOpen) return;

		// Clean up previous positioning if it exists
		if (cleanupRef.current) {
			cleanupRef.current();
			cleanupRef.current = null;
		}

		// Set up auto-updating positioning
		const cleanup = autoUpdate(
			triggerRef.current,
			floatingRef.current,
			() => {
				if (!triggerRef.current || !floatingRef.current) return;

				computePosition(triggerRef.current, floatingRef.current, {
					placement,
					middleware: [
						offset(triggerOffset),
						flip(),
						shift({
							padding: 8,
							crossAxis: true,
						}),
					],
				})
					.then(({ x, y }) => {
						if (!floatingRef.current) return;

						Object.assign(floatingRef.current.style, {
							left: `${x}px`,
							top: `${y}px`,
						});
						// Return the coordinates to maintain proper Promise chaining
						return { x, y };
					})
					.catch((error) => {
						// Handle or log positioning errors
						console.error('Positioning error:', error);
						// Re-throw the error to maintain proper Promise chaining
						throw error;
					});
			},
		);

		// Store cleanup function
		cleanupRef.current = cleanup;
	}, [isOpen, placement, triggerOffset]);

	// Setup positioning when dependencies change
	useEffect(() => {
		setupPositioning();
	}, [setupPositioning]);

	// Clean up when component unmounts
	useEffect(() => {
		return () => {
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = null;
			}
		};
	}, []);

	// Clean up when isOpen changes to false
	useEffect(() => {
		if (!isOpen && cleanupRef.current) {
			cleanupRef.current();
			cleanupRef.current = null;
		}
	}, [isOpen]);

	// Handle ref assignment
	const handleRef = useCallback(
		(node: HTMLDivElement | null) => {
			setRef(floatingRef, node);
			setupPositioning();
		},
		[setupPositioning],
	);

	return (
		<Portal>
			<Box
				{...boxProps}
				ref={handleRef}
				position="fixed"
				className={styles.root}
				aria-hidden={!isOpen}
			>
				{isOpen ? children : null}
			</Box>
		</Portal>
	);
};

const convertPlacement = (alignment: EAlignment): Placement => {
	switch (alignment) {
		case EAlignment.BOTTOM_LEFT: {
			return 'bottom-start';
		}
		case EAlignment.BOTTOM_RIGHT: {
			return 'bottom-end';
		}
		case EAlignment.TOP_LEFT: {
			return 'top-start';
		}
		case EAlignment.TOP_RIGHT: {
			return 'top-end';
		}
		default: {
			return alignment;
		}
	}
};

export default Positioner;
