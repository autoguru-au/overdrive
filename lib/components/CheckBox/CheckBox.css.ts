import {
	globalLayer,
	globalStyle,
	style,
	styleVariants,
} from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

globalLayer(LAYER_ORDER);

/**
 * Figma — Selection controls / Check box (node 438:15383).
 *
 * Every value below is the variable Figma binds, mapped to its Overdrive token:
 *
 * | State                | Fill                             | Border                    | Tick                          |
 * | -------------------- | -------------------------------- | ------------------------- | ----------------------------- |
 * | Default              | `color/background/default`       | `color/border/default`    | —                             |
 * | Hover (unselected)   | `color/brand/subtle`             | `color/brand/solid`       | —                             |
 * | Selected             | `color/brand/solid`              | same                      | `color/foreground/reverse`    |
 * | Disabled unselected  | `color/background/emphasis/inactive` | `color/border/default` | —                             |
 * | Disabled selected    | `color/background/emphasis/inactive` | `color/border/default` | `color/foreground/placeholder` |
 *
 * `radius` is `border/radius/xsmall` at BOTH sizes — the small box does not
 * step its corner down.
 */
const colorAccent = vars.color.brand.solid;
const colorAccentSubtle = vars.color.brand.subtle;
const colorContrast = vars.color.background.default;
const colorLight = vars.color.background.emphasisInactive;
const colorBorder = vars.color.border.default;
const colorTickDisabled = vars.color.foreground.placeholder;

/**
 * The tick colour reads `brand.onSolid`, not Figma's `color/foreground/reverse`
 * directly. Both resolve to white unbranded, but `onSolid` is the pair derived
 * against the fill — a tenant on a pale brand (amber) gets dark ink here, where
 * `foreground.reverse` would leave an invisible tick on its own accent.
 */
const colorTickOnAccent = vars.color.brand.onSolid;

const radius = vars.border.radius.xsmall;
const borderWidth = vars.border.width['1'];
const easing = vars.animation.easing.decelerate;
const boxTransition = `border-color 0.2s ${easing} 0s, background-color 0.2s ${easing} 0s`;
const glyphTransition = `transform 0.2s ${vars.animation.easing.standard}`;

/**
 * Figma draws the box at 20/16 with the tick inset 2px on every side, so the
 * glyph is always its box less one step of the space ladder.
 */
const box = {
	medium: vars.space['5'], // 20px
	small: vars.space['4'], // 16px
} as const;
const glyph = {
	medium: vars.space['4'], // 16px
	small: vars.space['3'], // 12px
} as const;

export const size = styleVariants({
	medium: {
		'@layer': {
			[cssLayerComponent]: {
				height: box.medium,
				width: box.medium,
			},
		},
	},
	small: {
		'@layer': {
			[cssLayerComponent]: {
				height: box.small,
				width: box.small,
			},
		},
	},
});

const hoverBox = {
	backgroundColor: colorAccentSubtle,
	borderColor: colorAccent,
};

export const checkbox = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			backgroundColor: colorContrast,
			borderColor: colorBorder,
			borderRadius: radius,
			borderStyle: 'solid',
			borderWidth,
			boxSizing: 'border-box',
			// The tick is always in the DOM so it can transition; unchecked it is
			// simply not painted. Previously it was hidden by matching the page
			// background, which showed as a white tick once hover gained a fill.
			color: 'transparent',
			display: 'flex',
			justifyContent: 'center',
			transition: boxTransition,
			zIndex: 0,
			selectors: {
				'&[data-active]': {
					backgroundColor: colorAccent,
					borderColor: colorAccent,
					color: colorTickOnAccent,
				},
				[`${nativeInput}:hover ~${checkable} &:not([data-active]):not([data-disabled])`]:
					hoverBox,
				'&[data-disabled]': {
					backgroundColor: colorLight,
					borderColor: colorBorder,
				},
				'&[data-disabled][data-active]': {
					color: colorTickDisabled,
				},
			},
		},
	},
});

/**
 * Deliberately NOT in the component layer. `Icon` sizes itself with unlayered
 * `width`/`height` (`makeResponsiveStyle` emits a plain `style`), and an
 * unlayered rule outranks every layered one — so a layered glyph size would
 * lose and the tick would render at Icon's own size instead of the spec's
 * 16/12px. There is no 12px `icon.size` token to pass instead.
 */
export const icon = style({
	transition: glyphTransition,
	selectors: {
		[`${size.medium} &`]: { height: glyph.medium, width: glyph.medium },
		[`${size.small} &`]: { height: glyph.small, width: glyph.small },
		[`${nativeInput}:hover ~${checkable} ${checkbox}[data-active] &`]: {
			transform: 'scale(0.85)',
		},
	},
});

/** Story-only: hover cannot be snapshot, so the matrix forces its appearance. */
export const storyForceHover = style({});

globalStyle(
	`${storyForceHover} ${checkbox}:not([data-active]):not([data-disabled])`,
	hoverBox,
);
