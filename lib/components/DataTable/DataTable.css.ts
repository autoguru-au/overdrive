import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const scrollContainer = style({
	selectors: {
		['&:focus-visible']: {
			// eslint-disable-next-line no-restricted-syntax -- RETAINED: intent-derived ref, reverted by the C-theme-bridge corrective package — never repointed pre-major (docs/ds2026-plan/track-c.md §1.5 + deviation 12).
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
 *
 * Guarded behind @supports because browsers without animation-timeline
 * support would otherwise treat the `animation` shorthand as a 0s
 * time-based animation and, combined with `animation-fill-mode: both`,
 * apply the end-state background immediately on render.
 */
const stickyReveal = keyframes({
	from: {
		backgroundColor: 'transparent',
	},
	to: {
		backgroundColor: vars.color.background.default,
	},
});

globalStyle(`${scrollContainer} [role="columnheader"]`, {
	'@supports': {
		'(animation-timeline: scroll())': {
			animation: `${stickyReveal} linear both`,
			animationRange: '0px 1px',
			animationTimeline: 'scroll()',
		},
	},
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
