import { style, styleMap } from 'treat';

const handleSize = '24px';
const handleOffset = '2px';
const borderSize = '1px';

export const root = style((theme) => ({
	width: `calc((2 * ${handleSize}) + ${handleOffset} - 2 * ${borderSize})`,
	height: `calc(${handleSize} + (${handleOffset} * 2))`,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	border: `${borderSize} solid ${theme.colours.gamut.gray300}`,
}));

export const handle = styleMap(() => ({
	default: {
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(${handleOffset} - ${borderSize})`,
		width: `${handleSize}`,
		height: `${handleSize}`,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
	},
}));

export const toggled = style((theme) => ({
	borderColor: theme.colours.gamut.green700,
}));

export const disabled = styleMap((theme) => ({
	default: {
		selectors: {
			'&[aria-disabled=true]': {
				cursor: 'not-allowed',
				borderColor: theme.colours.gamut.gray200,
				backgroundColor: theme.colours.gamut.gray100,
			},
		},
	},
	toggled: {
		selectors: {
			'&[aria-disabled=true]': {
				borderColor: theme.colours.gamut.green200,
				backgroundColor: theme.colours.gamut.green200,
			},
		},
	},
}));
