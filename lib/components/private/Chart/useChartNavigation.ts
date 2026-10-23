import { type KeyboardEvent, type PointerEvent, useState } from 'react';

/** Arrow keys and the index step that each one applies. */
const STEP_KEYS: Record<string, number> = {
	ArrowRight: 1,
	ArrowDown: 1,
	ArrowLeft: -1,
	ArrowUp: -1,
};

/** Marks the items, so that the key handler can find them in order. */
const ITEM_SELECTOR = '[data-chart-item]';

export interface ChartItemProps {
	'data-chart-item': '';
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
	containerProps: { onKeyDown: (event: KeyboardEvent<Element>) => void };
	/** Spread on each item, in display order. */
	getItemProps: (index: number) => ChartItemProps;
}

/** Gives the index of the item with the key, or `null` if no item has it. */
const indexOf = (
	keys: readonly string[],
	key: string | null,
): number | null => {
	const index = key === null ? -1 : keys.indexOf(key);
	return index === -1 ? null : index;
};

/**
 * Keyboard and pointer behaviour for the marks of a chart (columns or slices).
 *
 * - The chart is one tab stop (roving tab index). The arrow keys move focus
 *   between the items and wrap at the ends. Home and End go to the first and
 *   the last item.
 * - A hovered item is active. If no item is hovered, the focused item is
 *   active. A touch does not hover, so a tap activates the item through focus.
 *   Focus clears the hover, so the last input wins.
 * - Escape closes the details of the active item until the next hover or
 *   focus change.
 *
 * The state keeps the item keys, not the indexes, because the charts keep the
 * DOM items by key. If the data adds, removes or moves items, the state stays
 * on the same item.
 */
export const useChartNavigation = (
	keys: readonly string[],
): ChartNavigation => {
	const [hoveredKey, setHoveredKey] = useState<string | null>(null);
	const [focusedKey, setFocusedKey] = useState<string | null>(null);
	const [tabStopKey, setTabStopKey] = useState<string | null>(null);
	const [dismissed, setDismissed] = useState(false);

	const count = keys.length;
	const hovered = indexOf(keys, hoveredKey);
	const focused = indexOf(keys, focusedKey);

	// A removed item does not send `pointerleave`, and some browsers send no
	// `blur`. So the state of a removed item goes, and does not come back
	// with the item.
	if (hoveredKey !== null && hovered === null) setHoveredKey(null);
	if (focusedKey !== null && focused === null) setFocusedKey(null);

	const activeIndex = dismissed ? null : (hovered ?? focused);
	// If the tab stop item goes, the first item gets the tab stop.
	const currentStop = indexOf(keys, tabStopKey) ?? 0;

	const onKeyDown = (event: KeyboardEvent<Element>) => {
		if (count === 0) return;

		if (event.key === 'Escape') {
			if (activeIndex === null) return;
			// Only this chart consumes the key, so an enclosing modal stays open.
			event.stopPropagation();
			setDismissed(true);
			return;
		}

		// Keep the browser and screen reader shortcuts, for example Alt+ArrowLeft.
		if (event.altKey || event.ctrlKey || event.metaKey) return;

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
		setHoveredKey(null);
		setTabStopKey(keys[next]);
		event.currentTarget
			.querySelectorAll<HTMLElement | SVGElement>(ITEM_SELECTOR)
			[next]?.focus();
	};

	const getItemProps = (index: number): ChartItemProps => ({
		'data-chart-item': '',
		tabIndex: index === currentStop ? 0 : -1,
		onFocus: () => {
			setFocusedKey(keys[index]);
			setTabStopKey(keys[index]);
			// Tab into the chart while the pointer is on another item.
			setHoveredKey(null);
			setDismissed(false);
		},
		onBlur: () => setFocusedKey(null),
		onPointerEnter: (event) => {
			if (event.pointerType === 'touch') return;
			setHoveredKey(keys[index]);
			setDismissed(false);
		},
		onPointerLeave: () => setHoveredKey(null),
	});

	return {
		activeIndex,
		focusedIndex: focused,
		containerProps: { onKeyDown },
		getItemProps,
	};
};
