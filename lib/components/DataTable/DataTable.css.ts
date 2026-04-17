import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const scrollContainer = style({
	selectors: {
		['&:focus-visible']: {
			outline: `2px solid ${vars.colours.intent.primary.background.standard}`,
			outlineOffset: '-2px',
		},
	},
});

export const innerWrapper = style({});

/*
 * Scroll-driven sticky header background. The background only appears
 * once the user scrolls, driven by animation-timeline: scroll().
 * The animation completes in the first 1px of scroll so the effect
 * snaps in immediately when content passes under the header.
 */
const stickyReveal = keyframes({
	from: {
		backgroundColor: 'transparent',
	},
	to: {
		backgroundColor: vars.colours.background.body,
	},
});

globalStyle(`${scrollContainer} [role="columnheader"]`, {
	animation: `${stickyReveal} linear both`,
	animationRange: '0px 1px',
	animationTimeline: 'scroll()',
});

/*
 * Constrain the TableCell ::before hover pseudo-elements within DataTable.
 * Without this, left/right: -1000% inflates scrollWidth to ~7400px inside
 * the overflowX:auto scroll container. Pinning to 0 keeps the hover
 * background within each cell instead of spanning the full row — a
 * necessary trade-off to prevent phantom horizontal scroll.
 */
globalStyle(`${innerWrapper} [role="gridcell"]::before`, {
	left: 0,
	right: 0,
});
