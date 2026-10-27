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

/** Tells if the style makes the element the containing block of its fixed descendants. */
const holdsFixed = (style: CSSStyleDeclaration) =>
	[
		style.transform,
		style.translate,
		style.rotate,
		style.scale,
		style.perspective,
		style.filter,
	].some((value) => (value || 'none') !== 'none') ||
	/paint|layout|strict|content/.test(style.contain) ||
	/transform|translate|perspective|filter/.test(style.willChange);

/**
 * Gives the visible area for a fixed element: the viewport, cut by each
 * ancestor that clips its overflow. Only the ancestors from the containing
 * block of the element up cut it, for example from an ancestor with a
 * transform. Without such an ancestor, the area is the viewport.
 */
export const visibleBounds = (element: HTMLElement): Required<Bounds> => {
	const root = element.ownerDocument.documentElement;
	const bounds = {
		left: 0,
		top: 0,
		right: root.clientWidth,
		bottom: root.clientHeight,
	};
	let contained = false;
	for (
		let node = element.parentElement;
		node && node !== root;
		node = node.parentElement
	) {
		const style = getComputedStyle(node);
		if (!contained) contained = holdsFixed(style);
		if (
			!contained ||
			(style.overflowX === 'visible' && style.overflowY === 'visible')
		) {
			continue;
		}
		const box = node.getBoundingClientRect();
		bounds.left = Math.max(bounds.left, box.left);
		bounds.top = Math.max(bounds.top, box.top);
		bounds.right = Math.min(bounds.right, box.right);
		bounds.bottom = Math.min(bounds.bottom, box.bottom);
	}
	return bounds;
};

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
