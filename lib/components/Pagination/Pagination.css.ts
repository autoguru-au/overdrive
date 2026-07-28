import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const paginationBubbleSize = '36px';

export const disabled = style({
	color: vars.color.background.inactive,
});

export const selectedItem = style({
	transition: 'none',
});

export const activeItem = style({
	cursor: 'pointer',
	height: paginationBubbleSize,
	lineHeight: `calc(${paginationBubbleSize} - 3px)`,
	transition: `background-color 0.2s ${vars.animation.easing.decelerate} 0s, box-shadow 0.2s ${vars.animation.easing.decelerate} 0s`,
	width: paginationBubbleSize,

	selectors: {
		[`&:not(${selectedItem}):hover`]: {
			backgroundColor: vars.color.background.default,
			boxShadow: `inset 0 0 0 1px ${vars.color.intent.primary.background.strong}, ${vars.elevation.z1}`,
		},
		[`&:not(${selectedItem}):active`]: {
			backgroundColor: vars.color.background.default,
			boxShadow: `inset 0 0 0 1px ${vars.color.intent.primary.background.strong}, ${vars.elevation.z1}`,
		},
	},
});
