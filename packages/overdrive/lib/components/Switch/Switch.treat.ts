import { style, styleMap } from 'treat';

const handleSize = '24px';
const handleOffset = '2px';
const borderSize = '1px';

export const root = style((theme) => ({
	fontSize: theme.typography.size['5'].fontSize,
	lineHeight: theme.typography.size['5'].fontSize,
	position: 'relative',
	width: `calc((2 * ${handleSize}) + ${handleOffset} - 2 * ${borderSize})`,
	height: `calc(${handleSize} + (${handleOffset} * 2))`,
	cursor: 'pointer',
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	border: `${borderSize} solid ${theme.colours.gamut.gray300}`,
	borderRadius: `calc(${handleSize} + ${handleOffset})`,
	backgroundColor: theme.colours.gamut.gray100,
}));

export const handleRoot = style((theme) => ({
	borderColor: theme.colours.gamut.gray200,
}));

export const handle = styleMap((theme) => ({
	default: {
		position: 'absolute',
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(${handleOffset} - ${borderSize})`,
		width: `${handleSize}`,
		height: `${handleSize}`,
		padding: 0,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		color: 'white',
		border: `${borderSize} solid ${theme.colours.gamut.gray300}`,
		borderRadius: '50%',
		outline: 'none',
		backgroundColor: 'white',
		boxShadow: theme.elevation['2'],
		willChange: 'transform',
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
	},
}));

export const toggled = style((theme) => ({
	borderColor: theme.colours.gamut.green700,
	backgroundColor: theme.colours.gamut.green600,
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
