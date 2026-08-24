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
 * Figma `462:2521` — Medium 38x20, Small 30x16, each with a 2px inset and the
 * `z2` handle shadow. Both widths fall out of `toggle`'s existing
 * `2 x height - 2px`, and the inset makes the handle `height - 4px` on its own,
 * so travel reduces to `height - 2px`. See `ControlSize`.
 */
const trackSizes = { medium: vars.space['5'], small: vars.space['4'] } as const;

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
/** DS-2026 travel: the track height less its 2px inset. */
const travel = (height: string) => `translateX(calc(${height} - 2px))`;

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
					//
					// Each size needs its hover rule as well as its resting one:
					// the generic hover selector above scores (0,4,0) — two
					// classes, an attribute and a pseudo-class — which outranks a
					// resting size rule at (0,3,0), so without these the handle
					// would take the legacy 20px travel on hover and overshoot a
					// narrower track. Naming the size class here takes them to
					// (0,5,0).
					[`${track.medium}${toggleOn} &`]: {
						transform: travel(trackSizes.medium),
					},
					[`${track.medium}${toggle}:not([data-disabled]):hover &`]: {
						transform: `${handleScale} ${travel(trackSizes.medium)}`,
					},
					[`${track.small}${toggleOn} &`]: {
						transform: travel(trackSizes.small),
					},
					[`${track.small}${toggle}:not([data-disabled]):hover &`]: {
						transform: `${handleScale} ${travel(trackSizes.small)}`,
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
