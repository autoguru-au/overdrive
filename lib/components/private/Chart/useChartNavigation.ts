import { type KeyboardEvent, type PointerEvent, useRef, useState } from 'react';

/** Arrow keys and the index step that each one applies. */
const STEP_KEYS: Record<string, number> = {
	ArrowRight: 1,
	ArrowDown: 1,
	ArrowLeft: -1,
	ArrowUp: -1,
};

export interface ChartItemProps {
	ref: (element: Element | null) => void;
	tabIndex: number;
	onFocus: () => void;
	onBlur: () => void;
	onPointerEnter: (event: PointerEvent) => void;
	onPointerLeave: () => void;
}

export interface ChartNavigation {
	/** The item that shows its details: the hovered item, else the focused item. */
	activeIndex: number | null;
	/** The item that has focus, or `null` when focus is outside the chart. */
	focusedIndex: number | null;
	/** Spread on the element that contains the items. */
	containerProps: { onKeyDown: (event: KeyboardEvent) => void };
	/** Spread on each item. */
	getItemProps: (index: number) => ChartItemProps;
}

/**
 * Keyboard and pointer behaviour for the marks of a chart (columns or slices).
 *
 * - The chart is one tab stop (roving tab index). The arrow keys move focus
 *   between the items and wrap at the ends. Home and End go to the first and
 *   the last item.
 * - A hovered item is active. If no item is hovered, the focused item is
 *   active. A touch does not hover, so a tap activates the item through focus.
 * - Escape closes the details of the active item until the next hover or
 *   focus change.
 */
export const useChartNavigation = (count: number): ChartNavigation => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
	const [tabStop, setTabStop] = useState(0);
	const [dismissed, setDismissed] = useState(false);
	const items = useRef<Array<Element | null>>([]);

	const activeIndex = dismissed ? null : (hoveredIndex ?? focusedIndex);
	const currentStop = Math.min(tabStop, Math.max(0, count - 1));

	const onKeyDown = (event: KeyboardEvent) => {
		if (count === 0) return;

		if (event.key === 'Escape') {
			if (activeIndex === null) return;
			// Only this chart consumes the key, so an enclosing modal stays open.
			event.stopPropagation();
			setDismissed(true);
			return;
		}

		let next: number | undefined;
		if (event.key in STEP_KEYS) {
			next = (currentStop + STEP_KEYS[event.key] + count) % count;
		} else if (event.key === 'Home') {
			next = 0;
		} else if (event.key === 'End') {
			next = count - 1;
		}

		if (next === undefined) return;
		event.preventDefault();
		setTabStop(next);
		(items.current[next] as HTMLElement | SVGElement | null)?.focus();
	};

	const getItemProps = (index: number): ChartItemProps => ({
		ref: (element) => {
			items.current[index] = element;
		},
		tabIndex: index === currentStop ? 0 : -1,
		onFocus: () => {
			setFocusedIndex(index);
			setTabStop(index);
			setDismissed(false);
		},
		onBlur: () => setFocusedIndex(null),
		onPointerEnter: (event) => {
			if (event.pointerType === 'touch') return;
			setHoveredIndex(index);
			setDismissed(false);
		},
		onPointerLeave: () => setHoveredIndex(null),
	});

	return {
		activeIndex,
		focusedIndex,
		containerProps: { onKeyDown },
		getItemProps,
	};
};
