import {
	createVar,
	globalLayer,
	globalStyle,
	style,
	styleVariants,
} from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const colorAccent = vars.color.brand.solid;
const colorAccentSubtle = vars.color.brand.subtle;
const colorContrast = vars.color.background.default;
const colorMid = vars.color.background.inactive;
const colorLight = vars.color.background.emphasisInactive;
const colorBorder = vars.color.border.default;
const colorHandleDisabled = vars.color.foreground.placeholder;

const borderWidth = vars.border.width['1'];
const easing = vars.animation.easing.decelerate;
const trackTransition = `background-color 0.2s ${easing} 0s, border-color 0.2s ${easing} 0s`;
const handleTransition = `background-color 0.2s ${easing} 0s, box-shadow 0.2s ${easing} 0s, transform 0.2s ${easing} 0s`;

const trackHeight = createVar();
const trackWidth = `calc(2 * ${trackHeight} - 2px)`;
const handleTranslate = `translateX(calc(${trackHeight} - 2px))`;

export const base = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'inline-block',
		},
	},
});

export const size = styleVariants({
	medium: {
		'@layer': {
			[cssLayerComponent]: {
				vars: {
					[trackHeight]: vars.space['5'],
				},
			},
		},
	},
	small: {
		'@layer': {
			[cssLayerComponent]: {
				vars: {
					[trackHeight]: vars.space['4'],
				},
			},
		},
	},
});

const hoverTrack = {
	backgroundColor: colorAccentSubtle,
	borderColor: colorAccent,
};

const hoverHandle = {
	boxShadow: vars.elevation.z2,
};

export const toggle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: colorMid,
				borderColor: colorBorder,
				borderRadius: vars.border.radius.pill,
				borderStyle: 'solid',
				borderWidth,
				boxSizing: 'border-box',
				cursor: 'pointer',
				height: trackHeight,
				padding: borderWidth,
				transition: trackTransition,
				width: trackWidth,
				selectors: {
					'&[data-active]': {
						backgroundColor: colorAccent,
						borderColor: colorAccent,
					},
					'&[data-hovered]:not([data-active]):not([data-disabled])':
						hoverTrack,
					'&[data-disabled]': {
						backgroundColor: colorLight,
						borderColor: colorBorder,
						cursor: 'not-allowed',
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);

export const handle = style({
	'@layer': {
		[cssLayerComponent]: {
			aspectRatio: '1',
			backgroundColor: colorContrast,
			borderRadius: vars.border.radius.full,
			height: '100%',
			transition: handleTransition,
			willChange: 'transform',
			selectors: {
				[`${toggle}[data-active] &`]: {
					backgroundColor: vars.color.brand.onSolid,
					transform: handleTranslate,
				},
				[`${toggle}[data-hovered]:not([data-disabled]) &`]: hoverHandle,
				[`${toggle}[data-disabled] &`]: {
					backgroundColor: colorHandleDisabled,
				},
			},
		},
	},
});

export const storyForceHover = style({});

globalStyle(`${storyForceHover} ${toggle}`, hoverTrack);
globalStyle(`${storyForceHover} ${handle}`, hoverHandle);
