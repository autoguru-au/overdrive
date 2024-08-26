import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

const handleSize = '24px';
const handleOffset = '3px';
const borderSize = '1px';

export const handle = styleVariants({
	default: {
		borderColor: vars.border.colours.light,
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(${handleOffset} - ${borderSize})`,
		width: `${handleSize}`,
		height: `${handleSize}`,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
		selectors: {
			'&:hover': {
				transform: 'scale(0.8)',
			},
		},
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
		selectors: {
			'&:hover': {
				transform: `translateX(calc(${handleSize} - (2 * ${handleOffset}))) scale(0.8)`,
			},
		},
	},
});

export const toggled = style({
	borderColor: vars.border.colours.dark,
	backgroundColor: vars.border.colours.dark,
	
});

export const untoggled = style({
	borderColor: vars.border.colours.light,
	backgroundColor: vars.border.colours.light,
	selectors: {
		'&:hover': {
			backgroundColor: vars.border.colours.gray,
		},
	},
});

export const disabled = styleVariants({
	default: {
		selectors: {
			'&[aria-disabled=true]': {
				cursor: 'not-allowed',
				borderColor: vars.border.colours.light,
				backgroundColor: 'white',
			},
		},
	},
	toggled: {
		selectors: {
			'&[aria-disabled=true]': {
				borderColor: vars.border.colours.light,
				backgroundColor: 'white',
			},
		},
	},
});

export const root = style({
	width: `calc((2 * ${handleSize}) + ${handleOffset} - 2 * ${borderSize})`,
	height: `calc(${handleSize} + (${handleOffset} * 2))`,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	border: `${borderSize} solid ${vars.border.colours.light}`,
	selectors: {
		[`&:not(${disabled.default}):not(${disabled.toggled}):focus`]: {
			borderColor: vars.colours.intent.information.background.standard,
		},
	},
});
