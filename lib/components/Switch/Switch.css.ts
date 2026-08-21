import { globalLayer, style, styleVariants } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const colorAccent = vars.color.brand.solid;
const colorContrast = vars.color.background.default;
const colorMid = vars.colours.background.neutral;
const colorLight = vars.colours.background.light;
const height = vars.space['6'];
const handleSize = '24px';

export const base = style({
	'@layer': {
		[cssLayerComponent]: {
			// As `inline-block` the track and a label passed as children each
			// sat on their own baseline, leaving them out of line. No prop for
			// the override: `className` lands here, and an unlayered consumer
			// class beats this layered rule. Spacing stays the consumer's.
			alignItems: 'center',
			display: 'inline-flex',
		},
	},
});

export const toggle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: colorMid,
				borderRadius: vars.border.radius.pill,
				cursor: 'pointer',
				height: height,
				padding: '3px 4px',
				transition:
					'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
				width: `calc(2 * ${height} - 2px)`,
				selectors: {
					'&:not([data-disabled]):hover': {
						backgroundColor: colorAccent,
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);

export const toggleOn = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: colorAccent,
		},
	},
});

export const disabled = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: colorLight,
			cursor: 'not-allowed',
		},
	},
});

/**
 * Figma `462:2521` — Large 38x20, Small 30x16, each with a 2px inset and the
 * `z2` handle shadow. Both widths fall out of `toggle`'s existing
 * `2 x height - 2px`, and the inset makes the handle `height - 4px` on its own,
 * so travel reduces to `height - 2px`. See `ControlSize`.
 */
const trackSizes = { large: vars.space['5'], small: vars.space['4'] } as const;

export const track = styleVariants(trackSizes, (size) => ({
	'@layer': {
		[cssLayerComponent]: {
			height: size,
			padding: vars.space['0'], // 2px
			width: `calc(2 * ${size} - 2px)`,
		},
	},
}));

const handleScale = 'scale(0.95)';
const handleTranslate = `translateX(calc(${handleSize} - 4px))`;

export const handle = styleVariants({
	default: {
		'@layer': {
			[cssLayerComponent]: {
				aspectRatio: '1',
				backgroundColor: colorContrast,
				borderRadius: vars.border.radius.full,
				height: '100%',
				transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
				willChange: 'transform',
				selectors: {
					[`${toggle}:not([data-disabled]):hover &`]: {
						transform: handleScale,
					},
				},
			},
		},
	},
	// active needs to come after default in compiled css
	// eslint-disable-next-line vanilla-extract/alphabetical-order
	active: {
		'@layer': {
			[cssLayerComponent]: {
				selectors: {
					[`${toggleOn} &`]: {
						// on the brand track, so on-brand rather than page
						backgroundColor: vars.color.brand.onSolid,
						transform: handleTranslate,
					},
					[`${toggle}:not([data-disabled]):hover &`]: {
						transform: `${handleScale} ${handleTranslate}`,
					},
					// The DS-2026 tracks are narrower, so they travel less. Both
					// classes sit on the same element, hence no space.
					[`${track.large}${toggleOn} &`]: {
						transform: `translateX(calc(${trackSizes.large} - 2px))`,
					},
					[`${track.small}${toggleOn} &`]: {
						transform: `translateX(calc(${trackSizes.small} - 2px))`,
					},
				},
			},
		},
	},
});

/** `z2` is the shadow Figma binds to the DS-2026 handle. */
export const handleElevation = style({
	'@layer': {
		[cssLayerComponent]: {
			boxShadow: vars.elevation.z2,
		},
	},
});

export const storyLabel = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			gap: vars.space['2'],
		},
	},
});
