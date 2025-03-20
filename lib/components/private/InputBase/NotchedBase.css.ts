import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../../themes/theme.css';

import type { InputSize } from './withEnhancedInput.css';

const active_scaling_factor = 0.7777;
export const root = style({
	transition: `fill 0.2s ${vars.animation.easing.decelerate} 0s`,
});

export const labelStyle = styleVariants({
	base: {
		textWrap: 'nowrap',
	},
	small: {
		fontSize: vars.typography.size['4'].fontSize,
	},
	medium: {
		fontSize: vars.typography.size['4'].fontSize,
	},
	large: {
		fontSize: vars.typography.size['7'].fontSize,
	},
});

const defaultBorderWidth = vars.border.width['1'];
const largeBorderWidth = vars.border.width['2'];

const borderRegionDefaults = style({
	borderWidth: defaultBorderWidth,
	borderStyle: 'solid',
	display: 'inline-flex',
	transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const borderVisualDefaults = style({
	borderRadius: vars.border.radius['2'],
});

export const notchGapPlaceholder = styleVariants({
	base: {
		visibility: 'hidden',
	},
	small: {
		fontSize: `calc(${vars.typography.size['4'].fontSize} * ${active_scaling_factor})`,
	},
	medium: {
		fontSize: `calc(${vars.typography.size['4'].fontSize} * ${active_scaling_factor})`,
	},
	large: {
		fontSize: `calc(${vars.typography.size['7'].fontSize} * ${active_scaling_factor})`,
	},
});

export const borders = {
	root: {
		default: [
			borderVisualDefaults,
			style({
				zIndex: 2,
				top: 0,
				right: 0,
				left: 0,
			}),
		],
		disabled: '',
	},
	complete: [borderVisualDefaults, borderRegionDefaults],
	leading: [
		borderRegionDefaults,
		style({
			width: vars.space['2'],
			borderRight: 'none',
			borderRadius: `${vars.border.radius['2']} 0 0 ${vars.border.radius['2']}`,
		}),
	],
	middle: [
		borderRegionDefaults,
		style({
			transition: `width 0.15s ${vars.animation.easing.decelerate}, border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
			borderTopStyle: 'none',
			borderRightStyle: 'none',
			borderLeftStyle: 'none',
		}),
	],
	trailing: [
		borderRegionDefaults,
		style({
			flexGrow: 1,
			borderLeft: 'none',
			borderRadius: `0 ${vars.border.radius['2']} ${vars.border.radius['2']} 0`,
		}),
	],
};

export const bordersAttach = {
	complete: styleVariants({
		NONE: {
			borderRadius: `${vars.border.radius['2']}`,
		},
		LEFT: {
			borderRadius: `0 ${vars.border.radius['2']} ${vars.border.radius['2']} 0`,
		},
		TOP: {
			borderRadius: `0 0 ${vars.border.radius['2']} ${vars.border.radius['2']}`,
		},
		RIGHT: {
			borderRadius: `${vars.border.radius['2']} 0 0 ${vars.border.radius['2']}`,
		},
		BOTTOM: {
			borderRadius: `${vars.border.radius['2']} ${vars.border.radius['2']} 0 0`,
		},
		ALL: {
			borderRadius: 0,
		},
	}),
	flatCorners: styleVariants({
		TOP_LEFT: {
			borderTopLeftRadius: 0,
		},
		TOP_RIGHT: {
			borderTopRightRadius: 0,
		},
		BOTTOM_RIGHT: {
			borderBottomRightRadius: 0,
		},
		BOTTOM_LEFT: {
			borderBottomLeftRadius: 0,
		},
	}),
};

export type BordersAttach = keyof typeof bordersAttach.complete;

export const bordersMerged = {
	complete: styleVariants({
		NONE: {
			borderWidth: defaultBorderWidth,
		},
		LEFT: {
			borderLeftColor: 'transparent',
		},
		TOP: {
			borderTopColor: 'transparent',
		},
		RIGHT: {
			borderRightColor: 'transparent',
		},
		BOTTOM: {
			borderBottomColor: 'transparent',
		},
		ALL: {
			borderColor: 'transparent',
		},
	}),
	flatCorners: styleVariants({
		TOP_LEFT: {
			borderTopLeftRadius: 0,
		},
		TOP_RIGHT: {
			borderTopRightRadius: 0,
		},
		BOTTOM_RIGHT: {
			borderBottomRightRadius: 0,
		},
		BOTTOM_LEFT: {
			borderBottomLeftRadius: 0,
		},
	}),
};

export type BordersMerged = keyof typeof bordersMerged.complete;

export const placeholder = styleVariants({
	default: {
		lineHeight: 1,
		top: 0,
		left: 0,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, transform 0.2s ${vars.animation.easing.decelerate} 0s`,
		transformOrigin: 'top left',
	},
	mutedLabelStyles: {
		color: vars.typography.colour.muted,
	},
	disabled: {
		color: vars.colours.background.neutral,
	},
});

const calcPlaceholderTranslate = (
	notched: boolean,
	prefixed: boolean,
	size: InputSize,
): string => {
	const typography = vars.typography.size[size === 'large' ? '7' : '4'];
	const vertPadding = vars.space['2'];

	if (notched) {
		return `calc(${vertPadding} + ${vertPadding}), calc(-0.5 * ${active_scaling_factor} * ${typography.fontSize})`;
	}

	if (size === 'medium') {
		const offsetX = prefixed
			? `calc(${vars.space['7']} + ${vars.space['3']})`
			: typography.fontSize;

		return `${offsetX}, calc((${vars.space['8']} - ${
			typography.fontSize
		}) / 2)`;
	}

	if (size === 'large') {
		const offsetX = prefixed ? '64px' : typography.fontSize;
		return `${offsetX}, 25px`;
	}

	const offsetX = prefixed
		? `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`
		: vars.space['2'];

	return `${offsetX}, calc(${vars.space['2']} + 2px)`;
};

export const placeholderPlacement: Record<InputSize, Record<string, string>> = {
	small: styleVariants({
		default: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				false,
				'small',
			)}) scale(1)`,
		},
		defaultPrefixed: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				true,
				'small',
			)}) scale(1)`,
		},
		shifted: {
			zIndex: 2,
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'small',
			)}) scale(${active_scaling_factor})`,
		},
	}),
	medium: styleVariants({
		default: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				false,
				'medium',
			)}) scale(1)`,
		},
		defaultPrefixed: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				true,
				'medium',
			)}) scale(1)`,
		},
		shifted: {
			zIndex: 2,
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'medium',
			)}) scale(${active_scaling_factor})`,
		},
	}),
	large: styleVariants({
		default: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				false,
				'large',
			)}) scale(1)`,
		},
		defaultPrefixed: {
			transform: `translate(${calcPlaceholderTranslate(
				false,
				true,
				'large',
			)}) scale(1)`,
		},
		shifted: {
			zIndex: 2,
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'large',
			)}) scale(${active_scaling_factor})`,
		},
	}),
};

export const largeBorder = style({
	borderWidth: largeBorderWidth,
});

export const largeBorderY = style({
	borderTopWidth: largeBorderWidth,
	borderBottomWidth: largeBorderWidth,
});
