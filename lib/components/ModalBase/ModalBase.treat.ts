import { style, styleMap } from 'treat';

export const portal = styleMap(theme => ({
	default: {
		position: 'fixed',
		zIndex: 10,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'none',
		height: '100%',
		pointerEvents: 'none',

		'::before': {
			position: 'fixed',
			zIndex: -1,
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'block',
			content: "' '",
			transition: `opacity 0.2s ${theme.animation.easing.decelerate} 0s`,
			pointerEvents: 'none',
			opacity: 0,
			backgroundColor: theme.colours.gamut.gray900,
		},
	},
	open: {
		display: 'block',
		pointerEvents: 'auto',
		'::before': {
			pointerEvents: 'auto',
			opacity: 0.8,
		},
	},
}));

export const panel = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-end',
	height: '100%',
	outline: 'none',
});

export const content = style({
	display: 'flex',
	alignContent: 'flex-end',
	alignItems: 'flex-end',
	flexDirection: 'row',
	justifyContent: 'center',
	boxSizing: 'border-box',
	height: 'auto',
});

export const alignment = style(theme =>
	theme.utils.responsiveStyle({
		desktop: {
			alignItems: 'center',
		},
	}),
);
