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
			// Deliberately `inline-block`, not `inline-flex`. Flex would let a
			// label passed as children sit beside the track rather than below
			// it, but it also makes the track a shrinkable flex item and shifts
			// layout for anything that passes children — reverted after review
			// (PR #1381). A consumer that wants them side by side supplies its
			// own flex wrapper, as `storyLabel` does.
			display: 'inline-block',
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
 * Medium 38x20, Small 30x16, each with a 2px inset and the `z2` handle
 * shadow. Both widths fall out of `toggle`'s existing
 * `2 x height - inset`, and the inset makes the handle `height - 2 x inset` on
 * its own, so it needs no size of its own. See `ControlSize`.
 */
const trackSizes = { medium: vars.space['5'], small: vars.space['4'] } as const;

/**
 * The inset between track edge and handle. `width` and `travel` both derive
 * from it: for the handle to sit inset by the same amount at either end,
 * `width = 2 x height - inset` and `travel = height - inset`.
 */
const TRACK_INSET = vars.space['0']; // 2px

export const track = styleVariants(trackSizes, (size) => ({
	'@layer': {
		[cssLayerComponent]: {
			height: size,
			padding: TRACK_INSET,
			width: `calc(2 * ${size} - ${TRACK_INSET})`,
		},
	},
}));

const handleScale = 'scale(0.95)';
const handleTranslate = `translateX(calc(${handleSize} - 4px))`;
/** DS-2026 travel: the track height less its inset. */
const travel = (trackHeight: string) =>
	`translateX(calc(${trackHeight} - ${TRACK_INSET}))`;

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

/** The DS-2026 handle carries the `z2` shadow. */
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
