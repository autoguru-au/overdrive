import { style, styleMap } from 'treat';

const lineBottomHeight = '1px';
const size = '20px';

export const root = {
	default: style((theme) => ({
		display: 'inline-block',
		fontSize: theme.typography.size['3'].fontSize,
		lineHeight: theme.typography.size['3'].lineHeight,
		fontWeight: theme.typography.fontWeight.bold,
		padding: `calc(${theme.space['3']} + ${lineBottomHeight}) 0`,
		cursor: 'pointer',
		transition: `color 0.2s ${theme.animation.easing.decelerate} 0s, background-color 0.2s ${theme.animation.easing.decelerate} 0s`,
		color: theme.colours.gamut.gray500,
		border: 'none',
		borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
		outline: 'none',
		background: 'transparent',
		marginRight: theme.space['6'],
		flex: 'auto',
		whiteSpace: 'nowrap',

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
		fontSize: theme.typography.size['2'].fontSize,
		lineHeight: theme.typography.size['2'].lineHeight,
		display: 'inline-block',
		minWidth: size,
		height: size,
		marginLeft: theme.space['2'],
		padding: `0 ${theme.space['1']}`,
		transition: `color 0.2s ${theme.animation.easing.decelerate} 0s, backgroundColor 0.2s ${theme.animation.easing.decelerate} 0s`,
		verticalAlign: 'middle',
		color: theme.colours.gamut.gray900,
		borderRadius: `calc(${size} / 2)`,
		backgroundColor: theme.colours.gamut.gray300,
	},
	active: {
		color: 'white',
		backgroundColor: theme.colours.gamut.green900,
	},
}));
