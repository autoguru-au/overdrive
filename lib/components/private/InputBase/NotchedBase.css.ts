import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../../themes/theme.css';

const active_scaling_factor = 0.7777;
export const root = style({
	transition: `fill 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const defaultBorderWidth = '1px';
const borderRegionDefaults = style({
	borderWidth: defaultBorderWidth,
	borderStyle: 'solid',
	display: 'inline-flex',
	transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const borderVisualDefaults = style({
	borderRadius: vars.border.radius['1'],
	boxShadow: vars.elevation['2'],
});

export const notchGapPlaceholder = style({
	visibility: 'hidden',
	fontSize: `calc(${vars.typography.size['4'].fontSize} * ${active_scaling_factor})`,
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
		disabled: style({ boxShadow: 'none' }),
	},
	complete: [borderVisualDefaults, borderRegionDefaults],
	leading: [
		borderRegionDefaults,
		style({
			width: vars.space['2'],
			borderRight: 'none',
			borderRadius: `${vars.border.radius['1']} 0 0 ${vars.border.radius['1']}`,
		}),
	],
	middle: [
		borderRegionDefaults,
		style({
			transition: `width 0.15s ${vars.animation.easing.decelerate}, border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderLeftWidth: 0,
		}),
	],
	trailing: [
		borderRegionDefaults,
		style({
			flexGrow: 1,
			borderLeft: 'none',
			borderRadius: `0 ${vars.border.radius['1']} ${vars.border.radius['1']} 0`,
		}),
	],
};

export const bordersAttach = {
	complete: styleVariants({
		NONE: {
			borderRadius: `${vars.border.radius['1']}`,
		},
		LEFT: {
			borderRadius: `0 ${vars.border.radius['1']} ${vars.border.radius['1']} 0`,
		},
		TOP: {
			borderRadius: `0 0 ${vars.border.radius['1']} ${vars.border.radius['1']}`,
		},
		RIGHT: {
			borderRadius: `${vars.border.radius['1']} 0 0 ${vars.border.radius['1']}`,
		},
		BOTTOM: {
			borderRadius: `${vars.border.radius['1']} ${vars.border.radius['1']} 0 0`,
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

type Size = 'small' | 'medium';

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
});

const calcPlaceholderTranslate = (
	notched: Boolean,
	prefixed: Boolean,
	size: Size,
): string => {
	if (notched) {
		return `calc(${vars.space['2']} + ${vars.space['2']}), calc(-0.5 * ${active_scaling_factor} * ${vars.typography.size['4'].fontSize})`;
	}

	return size === 'medium'
		? `${
				prefixed
					? `calc(${vars.space['7']} + ${vars.space['3']})`
					: vars.typography.size['4'].fontSize
			}, calc((${vars.space['8']} - ${
				vars.typography.size['4'].fontSize
			}) / 2)`
		: `${
				prefixed
					? `calc(${vars.space['2']} + ${vars.space['5']} + ${vars.space['2']})`
					: vars.space['2']
			}, calc(${vars.space['2']} + 2px)`;
};

export const placeholderPlacement: Record<Size, Record<string, string>> = {
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
};
