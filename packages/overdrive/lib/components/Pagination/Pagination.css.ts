import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

const paginationBubbleSize = '36px';

export const disabled = style({
	color: vars.colours.background.neutral,
});

export const selectedItem = style({
	transition: 'none',
});

export const activeItem = style({
	lineHeight: `calc(${paginationBubbleSize} - 3px)`,
	width: paginationBubbleSize,
	height: paginationBubbleSize,
	cursor: 'pointer',
	transition: `background-color 0.2s ${vars.animation.easing.decelerate} 0s, box-shadow 0.2s ${vars.animation.easing.decelerate} 0s`,

	selectors: {
		[`&:not(${selectedItem}):hover`]: {
			backgroundColor: vars.colours.background.body,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.background.strong}, ${vars.elevation['1']}`,
		},
		[`&:not(${selectedItem}):active`]: {
			backgroundColor: vars.colours.background.body,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.background.strong}, ${vars.elevation['1']}`,
		},
	},
});
