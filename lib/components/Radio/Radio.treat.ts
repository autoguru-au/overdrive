import { style, styleMap } from 'treat';

export const radioGroup = style({
	position: 'relative',
	display: 'flex',
	alignContent: 'stretch',
	alignItems: 'stretch',
	flexDirection: 'column',
	justifyContent: 'stretch',
	padding: 0,
});

export const radio = style({
	display: 'flex',
});

export const circle = styleMap(theme => ({
	default: {
		position: 'absolute',
		transition: `border-color 0.2s ${theme.animation.easing.decelerate} 0s`,
		borderRadius: '50%',
	},
	outer: {
		top: theme.space['3'],
		left: theme.space['3'],
		width: theme.space['4'],
		height: theme.space['4'],
		border: `2px solid ${theme.colours.gamut.gray300}`,
	},
	inner: {
		top: `calc(${theme.space['3']} + (${theme.space['4']} - ${theme.space['2']}) * 0.5)`,
		left: `calc(${theme.space['3']} + (${theme.space['4']} - ${theme.space['2']}) * 0.5)`,
		width: '$coreSize',
		height: '$coreSize',
		border: `0 solid ${theme.colours.gamut.gray300}`,
	},
	selectedInner: {
		borderWidth: `calc(${theme.space['2']} / 2)`,
	},
	selected: {
		borderColor: theme.colours.gamut.green600,
	},
}));
