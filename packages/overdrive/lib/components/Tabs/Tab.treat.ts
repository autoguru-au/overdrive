import { style, styleMap } from 'treat';

const lineBottomHeight = '1px';
const size = '20px';

export const root = {
	default: style((theme) => ({
		padding: `calc(${theme.space['3']} + ${lineBottomHeight}) 0`,
		transition: `color 0.2s ${theme.animation.easing.decelerate} 0s, background-color 0.2s ${theme.animation.easing.decelerate} 0s`,
		borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
		flex: 'auto',
		':last-of-type': {
			marginRight: 0,
		},

		':hover': {
			color: theme.colours.gamut.green900,
		},

		':focus': {
			color: theme.colours.gamut.green900,
		},
	})),
	active: style((theme) => ({
		color: theme.colours.gamut.green900,
		borderBottomColor: theme.colours.gamut.green900,
	})),
};

export const item = style({
	display: 'inline-block',
	width: 'max-content',
	verticalAlign: 'middle',
});

export const indication = styleMap((theme) => ({
	default: {
		minWidth: size,
		height: size,
		transition: `color 0.2s ${theme.animation.easing.decelerate} 0s, backgroundColor 0.2s ${theme.animation.easing.decelerate} 0s`,
	},
}));
