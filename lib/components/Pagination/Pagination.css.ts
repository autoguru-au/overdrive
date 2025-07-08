import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const paginationBubbleSize = '36px';

export const disabled = style({
	color: vars.colours.background.neutral,
});

export const selectedItem = style({
	transition: 'none',
});

export const activeItem = style({
	transition: `background-color 0.2s ${vars.animation.easing.decelerate} 0s, box-shadow 0.2s ${vars.animation.easing.decelerate} 0s`,
	cursor: 'pointer',
	width: paginationBubbleSize,
	height: paginationBubbleSize,
	lineHeight: `calc(${paginationBubbleSize} - 3px)`,

	selectors: {
		[`&:not(${selectedItem}):hover`]: {
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.background.strong}, ${vars.elevation['1']}`,
			backgroundColor: vars.colours.background.body,
		},
		[`&:not(${selectedItem}):active`]: {
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.background.strong}, ${vars.elevation['1']}`,
			backgroundColor: vars.colours.background.body,
		},
	},
});
