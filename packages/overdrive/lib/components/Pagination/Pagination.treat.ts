import { style } from 'treat';

const paginationBubbleSize = '36px';

export const disabled = style((theme) => ({
	color: theme.colours.gamut.gray300,
}));

export const selectedItem = style(() => ({
	transition: 'none',
}));

export const activeItem = style((theme) => ({
	lineHeight: `calc(${paginationBubbleSize} - 3px)`,
	width: paginationBubbleSize,
	height: paginationBubbleSize,
	cursor: 'pointer',
	transition: `background-color 0.2s ${theme.animation.easing.decelerate} 0s`,

	selectors: {
		[`&:not(${selectedItem}):hover`]: {
			backgroundColor: theme.colours.gamut.gray100,
		},
		[`&:not(${selectedItem}):active`]: {
			backgroundColor: theme.colours.gamut.gray200,
		},
	},
}));
