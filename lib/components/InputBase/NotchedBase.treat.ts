import { style, styleMap } from 'treat';
import { Theme } from 'treat/theme';

export const root = style((theme) => ({
	position: 'relative',
	width: '100%',
	padding: 0,
	transition: `fill 0.2s ${theme.animation.easing.decelerate} 0s`,
}));

const borderDefaults = style((theme) => ({
	borderWidth: '1px',
	borderStyle: 'solid',
	display: 'inline-flex',
	transition: `border-color 0.2s ${theme.animation.easing.decelerate} 0s`,
	pointerEvents: 'none',
}));

export const borders = {
	root: styleMap((theme) => ({
		default: {
			position: 'absolute',
			zIndex: 2,
			top: 0,
			right: 0,
			left: 0,
			display: 'flex',
			width: '100%',
			height: '100%',
			textAlign: 'left',
			pointerEvents: 'none',
			borderRadius: theme.space['1'],
			boxShadow:
				'0 1px 10px 0 rgba(0,0,0,.03), 0 4px 5px 0 rgba(0,0,0,.03), 0 2px 4px -1px rgba(0,0,0,.05)',
		},
		disabled: { boxShadow: 'none' },
	})),
	leading: [
		borderDefaults,
		style((theme) => ({
			width: theme.space['2'],
			borderRight: 'none',
			borderRadius: `${theme.space['1']} 0 0 ${theme.space['1']}`,
		})),
	],
	middle: [
		borderDefaults,
		style((theme) => ({
			transition: `width 0.15s ${theme.animation.easing.decelerate}, border-color 0.2s ${theme.animation.easing.decelerate} 0s`,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderLeftWidth: 0,
		})),
	],
	trailing: [
		borderDefaults,
		style((theme) => ({
			flexGrow: 1,
			borderLeft: 'none',
			borderRadius: `0 ${theme.space['1']} ${theme.space['1']} 0`,
		})),
	],
};

export const placeholder = {
	default: style((theme) => ({
		fontSize: theme.typography.size['4'].fontSize,
		lineHeight: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'inline',
		margin: 0,
		padding: 0,
		transition: `color 0.2s ${theme.animation.easing.decelerate} 0s, transform 0.2s ${theme.animation.easing.decelerate} 0s`,
		transformOrigin: 'top left',
		whiteSpace: 'nowrap',
		pointerEvents: 'none',
	})),
	empty: style((theme) => ({ color: theme.colours.gamut.gray400 })),
};

const active_scaling_factor = 0.7777;
const calcPlaceholderTranslate = (
	notched: Boolean,
	prefixed: Boolean,
	theme: Theme,
): string => {
	if (notched) {
		return `calc(${theme.space['2']} + ${theme.space['2']}), calc(-0.5 * ${active_scaling_factor} * ${theme.typography.size['4'].fontSize})`;
	}

	return `${
		prefixed
			? `calc(${theme.space['7']} + ${theme.space['3']})`
			: theme.typography.size['4'].fontSize
	}, calc((${theme.space['8']} - ${
		theme.typography.size['4'].fontSize
	}) / 2)`;
};

export const placeholderPlacement = styleMap((theme) => ({
	default: {
		transform: `translate(${calcPlaceholderTranslate(
			false,
			false,
			theme,
		)}) scale(1)`,
	},
	defaultPrefixed: {
		transform: `translate(${calcPlaceholderTranslate(
			false,
			true,
			theme,
		)}) scale(1)`,
	},
	shifted: {
		zIndex: 2,
		transform: `translate(${calcPlaceholderTranslate(
			true,
			false,
			theme,
		)}) scale(${active_scaling_factor})`,
	},
}));
