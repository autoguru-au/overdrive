import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

/*
 * Staggered row-entrance animation — slide-up with fade.
 *
 * Opt in by passing `staggerIndex={i}` to a <TableRow>; that applies
 * the `rowEntering` class and sets the `--staggerIndex` CSS variable.
 * TableRow uses `display: contents` so we can't animate the row box
 * itself — the global selector targets the row's gridcell children.
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
	animation: `${slideUp} 300ms ${vars.animation.easing.decelerate} both`,
	animationDelay: `calc(${staggerIndex} * 50ms)`,
});
