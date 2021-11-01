import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

const handleSize = '24px';
const handleOffset = '2px';
const borderSize = '1px';

export const root = style({
	width: `calc((2 * ${handleSize}) + ${handleOffset} - 2 * ${borderSize})`,
	height: `calc(${handleSize} + (${handleOffset} * 2))`,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	border: `${borderSize} solid ${vars.border.colours.light}`,
});

export const handle = styleVariants({
	default: {
		borderColor: vars.border.colours.gray,
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(${handleOffset} - ${borderSize})`,
		width: `${handleSize}`,
		height: `${handleSize}`,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
		borderColor: vars.colours.intent.primary.background.strong,
	},
});

export const toggled = style({
	borderColor: vars.colours.intent.primary.background.strong,
	backgroundColor: vars.colours.intent.primary.background.standard,
});

export const disabled = styleVariants({
	default: {
		selectors: {
			'&[aria-disabled=true]': {
				cursor: 'not-allowed',
				borderColor: vars.border.colours.light,
				backgroundColor: vars.border.colours.light,
			},
		},
	},
	toggled: {
		selectors: {
			'&[aria-disabled=true]': {
				borderColor: vars.border.colours.light,
				backgroundColor: vars.colours.intent.primary.background.mild,
			},
		},
	},
});
