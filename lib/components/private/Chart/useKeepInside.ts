import type { DependencyList, RefObject } from 'react';

import { isomorphicLayoutEffect } from '../../../utils';

import { keepInside, visibleBounds } from './keepInside';

export interface KeepInsideOptions {
	/**
	 * The area that holds the tooltip. Without it, the area is the visible part
	 * of the viewport for a fixed tooltip (see `visibleBounds`).
	 */
	areaRef?: RefObject<HTMLElement | null>;
	/**
	 * Puts the tooltip at its anchor before the hook moves it into the area,
	 * for example a fixed tooltip. The hook also calls it on each scroll,
	 * because a scroll moves the anchor but not a fixed tooltip.
	 */
	place?: (tooltip: HTMLElement) => void;
}

/**
 * Keeps a tooltip inside an area: the box of `areaRef`, or the visible part of
 * the viewport without `areaRef`.
 *
 * The hook places the tooltip after each render that changes `deps`. While
 * the tooltip shows, it places the tooltip again when the size of the area
 * changes, for example when the window or a dashboard panel gets narrower.
 * Without `place`, a scroll does not move the tooltip, because the tooltip
 * moves with its item.
 */
export const useKeepInside = (
	tooltipRef: RefObject<HTMLElement | null>,
	deps: DependencyList,
	{ areaRef, place }: KeepInsideOptions = {},
) => {
	isomorphicLayoutEffect(() => {
		const tooltip = tooltipRef.current;
		const area = areaRef ? areaRef.current : document.documentElement;
		if (!tooltip || !area) return;

		const update = () => {
			place?.(tooltip);
			keepInside(
				tooltip,
				areaRef ? area.getBoundingClientRect() : visibleBounds(tooltip),
			);
		};
		update();

		// The capture phase also gets the scroll of a scroll container.
		const scroll = { capture: true, passive: true };
		if (place) window.addEventListener('scroll', update, scroll);
		// Some test environments have no `ResizeObserver`.
		const observer =
			typeof ResizeObserver === 'undefined'
				? null
				: new ResizeObserver(update);
		observer?.observe(area);
		return () => {
			observer?.disconnect();
			if (place) window.removeEventListener('scroll', update, scroll);
		};
	}, deps);
};
