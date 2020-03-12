import { style, styleMap } from 'treat';

const paginationBubbleSize = '36px';

export const root = style({
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	boxSizing: 'border-box',
});

export const bubble = styleMap(theme => ({
	default: {
		fontWeight: theme.typography.fontWeight.bold,
		color: theme.colours.gamut.gray500,
		backgroundColor: 'transparent',
	},
	gap: {
		pointerEvents: 'none',
	},
	disabled: {
		pointerEvents: 'none',
		backgroundColor: theme.colours.gamut.gray200,
		color: theme.colours.gamut.gray300,
	},
}));

export const activeItem = {
	default: style(theme => ({
		fontSize: theme.typography.size['3'].fontSize,
		lineHeight: `calc(${paginationBubbleSize} - 3px)`,
		display: 'flex',
		overflow: 'hidden',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		width: paginationBubbleSize,
		height: paginationBubbleSize,
		marginRight: theme.space['3'],
		cursor: 'pointer',
		userSelect: 'none',
		transition: `background-color 0.2s ${theme.animation.easing.decelerate} 0s`,
		textAlign: 'center',
		borderRadius: '50%',

		':last-child': {
			marginRight: 0,
		},
		':hover': {
			backgroundColor: theme.colours.gamut.gray100,
		},

		':active': {
			backgroundColor: theme.colours.gamut.gray200,
		},
	})),
	selected: style(theme => ({
		transition: 'none',
		color: 'white',
		backgroundColor: theme.colours.gamut.green900,
	})),
};

export const chevron = styleMap(theme => ({
	default: {
		color: theme.colours.gamut.gray500,
		backgroundColor: 'transparent',

		':last-child': {
			marginRight: 0,
		},
	},
	disabled: {
		color: theme.colours.gamut.gray300,
		pointerEvents: 'none',
	},
	icon: {
		display: 'grid',
	},
}));
