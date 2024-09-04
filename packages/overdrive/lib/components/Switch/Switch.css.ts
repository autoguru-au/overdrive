import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

const handleSize = '24px';
const handleOffset = '3px';
const borderSize = '1px';
const transparency = '0.5';

export const handle = styleVariants({
	disabled: {
		border: `${borderSize} solid ${vars.colours.intent.primary.background.mild}`,
	},
	default: {
		borderSize: `${borderSize}`, //ball
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(1.5 * ${handleOffset})`,
		width: `calc(${handleSize} - (2 * ${handleOffset}))`,
		height: `calc(${handleSize} - (2 * ${handleOffset}))`,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
		selectors: {
			'&:hover': {
				transform: 'scale(0.8889)',
			},
		},
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
		selectors: {
			'&:hover': {
				transform: `translateX(calc(${handleSize} - (2 * ${handleOffset}))) scale(0.8889)`,
			},
		},
	},
});

export const toggled = style({
	border: `${borderSize} solid ${vars.colours.intent.primary.background.standard}`,
	backgroundColor: vars.colours.intent.primary.background.standard,
});

export const untoggled = style({
	border: `${borderSize} solid ${vars.colours.intent.primary.background.mild}`,
	backgroundColor: vars.colours.intent.primary.background.mild,
	opacity: `${transparency}`,
	transition: 'opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	selectors: {
		'&:hover': {
			borderColor: vars.colours.intent.primary.background.standard,
			backgroundColor: vars.colours.intent.primary.background.standard,
			opacity: `${transparency}`
		},
	},
});

export const disabled = styleVariants({
	default: {
		selectors: {
			'&[aria-disabled=true]': {
				cursor: 'not-allowed',
				border: `${borderSize} solid ${vars.colours.intent.primary.background.mild}`,
				backgroundColor: 'white',
			},
		},
	},
	toggled: {
		selectors: {
			'&[aria-disabled=true]': {
				cursor: 'not-allowed',
				opacity: `${transparency}`,
				border: `${borderSize} solid ${vars.colours.intent.primary.background.mild}`,
				backgroundColor: 'white',
			},
		},
	},
});

export const focus = style({
	outline: `calc(${handleOffset} - ${borderSize}) solid ${vars.colours.intent.brand.background.standard}`
});

export const root = style({
	width: `calc((2 * ${handleSize}) - 2 * ${borderSize})`, //pill
	height: `${handleSize}`,
	top: `calc(${handleOffset} - ${borderSize})`,
	left: `calc(1.5 * ${handleOffset})`,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	selectors: {
		[`&:not(${disabled.default}):not(${disabled.toggled}):focus`]: {
			borderColor: vars.colours.intent.information.background.standard,
		},
	},
});
