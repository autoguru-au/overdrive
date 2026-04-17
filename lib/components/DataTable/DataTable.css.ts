import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const scrollContainer = style({
	'::-webkit-scrollbar': {
		backgroundColor: 'transparent',
		height: 6,
	},
	'::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		backgroundColor: vars.colours.gamut.gray300,
		borderRadius: vars.border.radius['sm'],
		overflow: 'hidden',
	},
	'::-webkit-scrollbar-track': {
		backgroundColor: vars.colours.gamut.gray100,
		border: `1px solid ${vars.colours.gamut.gray200}`,
	},
	'::-webkit-scrollbar-button': {
		display: 'none',
	},
	selectors: {
		['&::-webkit-scrollbar-track:hover']: {
			backgroundColor: vars.colours.gamut.gray300,
		},
		['&::-webkit-scrollbar-thumb:hover']: {
			backgroundColor: vars.colours.gamut.gray400,
			border: `1px solid ${vars.colours.gamut.gray400}`,
		},
		['&:focus-visible']: {
			outline: `2px solid ${vars.colours.intent.primary.background.standard}`,
			outlineOffset: '-2px',
		},
	},
});

export const innerWrapper = style({});

/*
 * Scroll-driven sticky header reveal. The shadow and background only
 * appear once the user scrolls, driven by animation-timeline: scroll().
 * The animation completes in the first 1px of scroll so the effect
 * snaps in immediately when content passes under the header.
 */
const stickyReveal = keyframes({
	from: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
	},
	to: {
		backgroundColor: vars.colours.background.body,
		boxShadow: vars.elevation['1'],
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

/*
 * Row entrance animation — staggered slide-up with fade.
 *
 * Apply `rowEntering` as className on a <TableRow> and set the
 * `staggerIndex` CSS variable to the row's index via assignInlineVars.
 * The animation targets child gridcells since TableRow uses
 * display:contents (no box to animate directly).
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
