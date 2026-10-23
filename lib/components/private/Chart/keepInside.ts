/**
 * Limits in viewport coordinates, for example from `getBoundingClientRect`.
 * Without `top` and `bottom`, the vertical position does not change.
 */
export interface Bounds {
	left: number;
	right: number;
	top?: number;
	bottom?: number;
}

/** Gives the move that keeps a span between two limits. If the span is longer, it aligns to the start limit. */
const shiftInto = (start: number, end: number, min: number, max: number) =>
	Math.max(Math.min(0, max - end), min - start);

/**
 * Moves a tooltip so that it stays inside the bounds. Call it after each
 * render that shows, moves or changes the tooltip.
 *
 * The tooltip gets the width of the bounds as its maximum width. Thus long
 * text wraps and the tooltip fits, for example on a narrow screen.
 */
export const keepInside = (
	element: HTMLElement,
	{ left, right, top, bottom }: Bounds,
) => {
	element.style.removeProperty('transform');
	element.style.setProperty('max-width', `${right - left}px`);
	const box = element.getBoundingClientRect();
	const x = shiftInto(box.left, box.right, left, right);
	const y =
		top === undefined || bottom === undefined
			? 0
			: shiftInto(box.top, box.bottom, top, bottom);
	if (x !== 0 || y !== 0) {
		element.style.setProperty('transform', `translate(${x}px, ${y}px)`);
	}
};
