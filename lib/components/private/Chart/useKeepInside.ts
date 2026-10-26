import type { DependencyList, RefObject } from 'react';

import { isomorphicLayoutEffect } from '../../../utils';

import { keepInside } from './keepInside';

/**
 * Keeps a tooltip inside an area: the box of `areaRef`, or the viewport
 * without `areaRef`.
 *
 * The hook places the tooltip after each render that changes `deps`. While
 * the tooltip shows, it places the tooltip again when the size of the area
 * changes, for example when the window or a dashboard panel gets narrower.
 * A scroll does not move the tooltip, because the tooltip moves with its item.
 */
export const useKeepInside = (
	tooltipRef: RefObject<HTMLElement | null>,
	deps: DependencyList,
	areaRef?: RefObject<HTMLElement | null>,
) => {
	isomorphicLayoutEffect(() => {
		const tooltip = tooltipRef.current;
		const area = areaRef ? areaRef.current : document.documentElement;
		if (!tooltip || !area) return;

		const place = () =>
			keepInside(
				tooltip,
				areaRef
					? area.getBoundingClientRect()
					: {
							left: 0,
							right: area.clientWidth,
							top: 0,
							bottom: area.clientHeight,
						},
			);
		place();

		// Some test environments have no `ResizeObserver`.
		if (typeof ResizeObserver === 'undefined') return;
		const observer = new ResizeObserver(place);
		observer.observe(area);
		return () => observer.disconnect();
	}, deps);
};
