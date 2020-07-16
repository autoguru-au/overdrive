import { style, styleMap } from 'treat';

export const root = style((theme) => {
	const padding = theme.space['3'];

	return {
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: `${padding} ${padding} ${padding} 0`,
		cursor: 'pointer',
	};
});

export const tappable = style({
	position: 'relative',
	outline: 'none',
	// @ts-ignore
	'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
});

export const label = styleMap((theme) => ({
	default: {
		fontSize: theme.typography.size['4'].fontSize,
		lineHeight: theme.typography.size['4'].lineHeight,
		position: 'relative',
		width: '100%',
		paddingLeft: `calc(${theme.space['4']} + ${theme.space['1']} + (${theme.space['3']} * 2))`,
	},
	disabled: {
		color: theme.colours.gamut.gray500,
		pointerEvents: 'none',
	},
}));

export const nativeInput = styleMap({
	default: {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		margin: 0,
		padding: 0,
		cursor: 'inherit',
		opacity: 0,
	},
	disabled: {
		pointerEvents: 'none',
	},
	checked: {
		outline: 'none',
	},
});

export const focusRect = style((theme) => ({
	position: 'absolute',
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	transition: `background-color 0.2s ${theme.animation.easing.decelerate} 0s, box-shadow 0.2s  ${theme.animation.easing.decelerate} 0s`,
	pointerEvents: 'none',
	borderRadius: '4px',
	boxShadow: 'none',

	selectors: {
		[`${nativeInput.default}:hover ~&`]: {
			backgroundColor: theme.colours.gamut.gray100,
		},
		[`${nativeInput.default}:active >&`]: {
			backgroundColor: theme.colours.gamut.gray200,
		},
	},
}));

export const checkable = style((theme) => ({
	position: 'absolute',
	zIndex: 1,
	top: `calc(50% - (${theme.space['4']} + (${theme.space[3]} * 2)) * 0.5)`,
	left: theme.space['1'],
	width: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
	height: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
}));

export const checkableItem = style((theme) => ({
	selectors: {
		[`${nativeInput.default}:focus:checked ~${checkable} &`]: {
			boxShadow: `0 0 0 2px ${theme.colours.gamut.green900}`,
		},
		[`${nativeInput.default}:focus:not(:checked) ~${checkable} >&`]: {
			borderColor: theme.colours.gamut.green900,
		},
	},
}));
