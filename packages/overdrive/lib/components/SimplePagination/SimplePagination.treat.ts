import { style, styleMap } from 'treat';

export const pagination = style({
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	boxSizing: 'border-box',
});

export const chevron = styleMap((theme) => ({
	default: {
		position: 'relative',
		marginRight: theme.space['6'],
		color: theme.colours.gamut.gray500,
		fill: 'currentColor',
		':last-child': {
			marginRight: 0,
		},
	},
	disabled: {
		pointerEvents: 'none',
	},
}));

export const icon = styleMap((theme) => ({
	default: {
		position: 'absolute',
		display: 'grid',
		top: `calc(50% - (${theme.icon.size.medium} * 0.5))`,
		left: `calc(50% - (${theme.icon.size.medium} * 0.5))`,
	},
	disabled: {
		fill: 'currentColor',
		pointerEvents: 'none',
	},
}));
