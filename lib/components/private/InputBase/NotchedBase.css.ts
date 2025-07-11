import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../../themes/theme.css';

import type { InputSize } from './withEnhancedInput.css';

const active_scaling_factor = 0.7777;
export const root = style({
	transition: `fill 0.2s ${vars.animation.easing.decelerate} 0s`,
});

export const labelStyle = styleVariants({
	base: {
		textWrap: 'nowrap',
	},
	large: {
		fontSize: vars.typography.size['7'].fontSize,
	},
	medium: {
		fontSize: vars.typography.size['4'].fontSize,
	},
	small: {
		fontSize: vars.typography.size['4'].fontSize,
	},
});

const defaultBorderWidth = vars.border.width['1'];
const largeBorderWidth = vars.border.width['2'];

const borderRegionDefaults = style({
	borderStyle: 'solid',
	borderWidth: defaultBorderWidth,
	display: 'inline-flex',
	transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const borderVisualDefaults = style({
	borderRadius: vars.border.radius['md'],
});

export const notchGapPlaceholder = styleVariants({
	base: {
		visibility: 'hidden',
	},
	large: {
		fontSize: `calc(${vars.typography.size['7'].fontSize} * ${active_scaling_factor})`,
	},
	medium: {
		fontSize: `calc(${vars.typography.size['4'].fontSize} * ${active_scaling_factor})`,
	},
	small: {
		fontSize: `calc(${vars.typography.size['4'].fontSize} * ${active_scaling_factor})`,
	},
});

export const borders = {
	root: {
		default: [
			borderVisualDefaults,
			style({
				left: 0,
				right: 0,
				top: 0,
				zIndex: 2,
			}),
		],
		disabled: '',
	},
	complete: [borderVisualDefaults, borderRegionDefaults],
	leading: [
		borderRegionDefaults,
		style({
			borderRadius: `${vars.border.radius['md']} 0 0 ${vars.border.radius['md']}`,
			borderRight: 'none',
			width: vars.space['2'],
		}),
	],
	middle: [
		borderRegionDefaults,
		style({
			borderLeftStyle: 'none',
			borderRightStyle: 'none',
			borderTopStyle: 'none',
			transition: `width 0.15s ${vars.animation.easing.decelerate}, border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		}),
	],
	trailing: [
		borderRegionDefaults,
		style({
			borderLeft: 'none',
			borderRadius: `0 ${vars.border.radius['md']} ${vars.border.radius['md']} 0`,
			flexGrow: 1,
		}),
	],
};

export const bordersAttach = {
	complete: styleVariants({
		ALL: {
			borderRadius: 0,
		},
		BOTTOM: {
			borderRadius: `${vars.border.radius['md']} ${vars.border.radius['md']} 0 0`,
		},
		LEFT: {
			borderRadius: `0 ${vars.border.radius['md']} ${vars.border.radius['md']} 0`,
		},
		NONE: {
			borderRadius: `${vars.border.radius['md']}`,
		},
		RIGHT: {
			borderRadius: `${vars.border.radius['md']} 0 0 ${vars.border.radius['md']}`,
		},
		TOP: {
			borderRadius: `0 0 ${vars.border.radius['md']} ${vars.border.radius['md']}`,
		},
	}),
	flatCorners: styleVariants({
		BOTTOM_LEFT: {
			borderBottomLeftRadius: 0,
		},
		BOTTOM_RIGHT: {
			borderBottomRightRadius: 0,
		},
		TOP_LEFT: {
			borderTopLeftRadius: 0,
		},
		TOP_RIGHT: {
			borderTopRightRadius: 0,
		},
	}),
};

export type BordersAttach = keyof typeof bordersAttach.complete;

export const bordersMerged = {
	complete: styleVariants({
		ALL: {
			borderColor: 'transparent',
		},
		BOTTOM: {
			borderBottomColor: 'transparent',
		},
		LEFT: {
			borderLeftColor: 'transparent',
		},
		NONE: {
			borderWidth: defaultBorderWidth,
		},
		RIGHT: {
			borderRightColor: 'transparent',
		},
		TOP: {
			borderTopColor: 'transparent',
		},
	}),
	flatCorners: styleVariants({
		BOTTOM_LEFT: {
			borderBottomLeftRadius: 0,
		},
		BOTTOM_RIGHT: {
			borderBottomRightRadius: 0,
		},
		TOP_LEFT: {
			borderTopLeftRadius: 0,
		},
		TOP_RIGHT: {
			borderTopRightRadius: 0,
		},
	}),
};

export type BordersMerged = keyof typeof bordersMerged.complete;

export const placeholder = styleVariants({
	default: {
		left: 0,
		lineHeight: 1,
		top: 0,
		transformOrigin: 'top left',
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, transform 0.2s ${vars.animation.easing.decelerate} 0s`,
	},
	disabled: {
		color: vars.colours.background.neutral,
	},
	mutedLabelStyles: {
		color: vars.typography.colour.muted,
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
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'small',
			)}) scale(${active_scaling_factor})`,
			zIndex: 2,
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
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'medium',
			)}) scale(${active_scaling_factor})`,
			zIndex: 2,
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
			transform: `translate(${calcPlaceholderTranslate(
				true,
				false,
				'large',
			)}) scale(${active_scaling_factor})`,
			zIndex: 2,
		},
	}),
};

export const largeBorder = style({
	borderWidth: largeBorderWidth,
});

export const largeBorderY = style({
	borderBottomWidth: largeBorderWidth,
	borderTopWidth: largeBorderWidth,
});
