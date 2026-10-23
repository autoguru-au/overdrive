import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

/*
 * Staggered row-entrance animation — slide-up with fade.
 *
 * Opt in by passing `staggerIndex={i}` to a <TableRow>; that applies
 * the `rowEntering` class and sets the `--staggerIndex` CSS variable.
 * TableRow uses `display: contents` so we can't animate the row box
 * itself — the global selector targets the row's gridcell children.
 *
 * Hence `backwards` rather than `both`. `backwards` holds the `from` frame
 * through the stagger delay, so rows stay hidden until their turn, then retains
 * nothing — the cell falls back to its base style. `both` would retain the `to`
 * frame forever, and a retained frame is an animated value: the interpolation
 * stack normalises even `transform: none` to the identity transform list, so
 * every cell computes to `matrix(1, 0, 0, 1, 0, 0)` and becomes a stacking
 * context for the life of the page. The `to` frame matches the base style, so
 * nothing moves when the fill drops.
 *
 * @see AG-22173, AG-22531
 */

export const staggerIndex = createVar();

const slideUp = keyframes({
	from: {
		opacity: 0,
		transform: 'translateY(12px)',
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)',
	},
});

export const rowEntering = style({});

globalStyle(`${rowEntering} > [role="gridcell"]`, {
	animation: `${slideUp} 300ms ${vars.animation.easing.decelerate} backwards`,
	animationDelay: `calc(${staggerIndex} * 50ms)`,
});
