import { createVar, globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/** Position of the value on the track, as a percentage from the start. */
export const markerPosition = createVar();

/** Length of a zone, as a percentage of the track. */
export const zoneSize = createVar();

/** The sizes are the sizes of the pricing gauge in the FMO booking MFE. */
const ZONE_HEIGHT = vars.space['3']; // 12px
const MARKER_HEIGHT = vars.space['5']; // 20px
/** A 4px core with a 1px border on each side. */
const MARKER_WIDTH = `calc(${vars.space['1']} + ${vars.border.width['1']} * 2)`; // 6px
/** The space between two zones. It shows the surface below the meter. */
const ZONE_GAP = vars.border.width['2']; // 2px

/** Header, body and footer, from top to bottom. */
export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			flexDirection: 'column',
			gap: vars.space['1'],
			minWidth: 0,
		},
	},
});

/** The track is as high as the marker, so that the marker stays in the flow. */
export const track = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'flex',
			height: MARKER_HEIGHT,
			position: 'relative',
		},
	},
});

export const zones = style({
	'@layer': {
		[cssLayerComponent]: {
			borderRadius: vars.border.radius.pill,
			display: 'flex',
			flexGrow: 1,
			// The zone colours carry the meaning, so they stay in forced colours mode.
			forcedColorAdjust: 'none',
			height: ZONE_HEIGHT,
			overflow: 'hidden',
		},
	},
});

export const zone = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				boxSizing: 'border-box',
				flex: `0 0 ${zoneSize}`,
				selectors: {
					// A transparent border inside the zone width keeps each zone
					// boundary at its value, and the surface shows in the gap.
					'& + &': {
						backgroundClip: 'padding-box',
						borderInlineStart: `${ZONE_GAP} solid transparent`,
					},
				},
			},
		},
	},
	variants: {
		intent: {
			neutral: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.inactive,
					},
				},
			},
			success: {
				'@layer': {
					[cssLayerComponent]: {
						// `success.backgroundStrong` is green-800. The design uses green-600.
						backgroundColor: vars.color.success.foreground,
					},
				},
			},
			warning: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.warning.backgroundStrong,
					},
				},
			},
			danger: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.alert.backgroundStrong,
					},
				},
			},
		},
	},
});

export type ZoneVariants = NonNullable<RecipeVariants<typeof zone>>;

/** The centre of the marker is on the value, and the marker stays on the track. */
export const marker = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: vars.color.background.default,
			border: `${vars.border.width['1']} solid ${vars.color.border.strong}`,
			borderRadius: vars.border.radius.pill,
			boxSizing: 'border-box',
			height: MARKER_HEIGHT,
			insetBlockStart: 0,
			insetInlineStart: `clamp(0%, calc(${markerPosition} - ${MARKER_WIDTH} / 2), calc(100% - ${MARKER_WIDTH}))`,
			position: 'absolute',
			width: MARKER_WIDTH,
		},
	},
});
