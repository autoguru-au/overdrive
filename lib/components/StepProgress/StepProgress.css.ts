import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/**
 * Circle diameters, taken from the Figma `Step` set. The space ladder carries
 * the only 32px/24px steps in the system, so the diameters ride on it rather
 * than on a magic number.
 */
const CIRCLE_SIZE = {
	large: vars.space['7'], // 32px
	small: vars.space['6'], // 24px
} as const;

/**
 * The vertical connector cell is a fixed 32px tall at both sizes, so a vertical
 * sequence keeps the same rhythm whichever step size it is drawn at. Verified
 * against the Figma `Step progress` frames: every `Layout=Vertical` variant
 * measures `steps x circle + (steps - 1) x 32`.
 */
const VERTICAL_CONNECTOR_LENGTH = vars.space['7']; // 32px

/** The drawn part of a connector — the caret glyph and the vertical rule. */
const CONNECTOR_GLYPH_LENGTH = vars.space['5']; // 20px

/**
 * The accent the current step takes on a dark surface. Figma binds it to
 * `primary/500`, whose swatch label reads #00dd95 while its variable reads
 * #00DDA5 — the master plan's open question Q1 records that mismatch and rules
 * the variable canonical, which is this ramp entry.
 *
 * It is the ramp rather than a semantic token because no branded accent token
 * exists yet: `color.brand.solid` resolves to gray-900, invisible on a dark
 * surface. `primary/*` is a tenant ramp, so this wants the same per-tenant
 * treatment `color.link.*` just received. Repoint it when that token lands.
 */
const DARK_SELECTED_FILL = vars.color.gamut.green['500'];

export const step = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				display: 'inline-flex',
				gap: vars.space['2'],
			},
		},
	},

	variants: {
		arrangement: {
			vertical: {
				'@layer': {
					[cssLayerComponent]: { flexDirection: 'column' },
				},
			},
			horizontal: {
				'@layer': {
					[cssLayerComponent]: { flexDirection: 'row' },
				},
			},
		},
	},

	defaultVariants: {
		arrangement: 'vertical',
	},
});

export type StyledStepProgressItemProps = NonNullable<
	RecipeVariants<typeof step>
>;

export const circle = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				borderRadius: vars.border.radius.pill,
				borderStyle: 'solid',
				borderWidth: vars.border.width['1'],
				display: 'inline-flex',
				flexShrink: 0,
				justifyContent: 'center',
			},
		},
	},

	variants: {
		size: {
			large: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size['4'].fontSize,
						height: CIRCLE_SIZE.large,
						lineHeight: vars.typography.size['4'].lineHeight,
						width: CIRCLE_SIZE.large,
					},
				},
			},
			small: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size['3'].fontSize,
						height: CIRCLE_SIZE.small,
						lineHeight: vars.typography.size['3'].lineHeight,
						width: CIRCLE_SIZE.small,
					},
				},
			},
		},

		selected: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						fontWeight: vars.typography.fontWeight.bold,
					},
				},
			},
			false: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.default,
						// An unselected circle is a white disc with a grey ring
						// on both polarities — the ring reads against a dark
						// surface without going white.
						borderColor: vars.color.border.default,
						color: vars.color.foreground.primary,
						fontWeight: vars.typography.fontWeight.semiBold,
					},
				},
			},
		},

		onDark: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		{
			// Only the selected circle changes with polarity.
			variants: { selected: true, onDark: false },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.reverse,
						borderColor: vars.color.background.reverse,
						color: vars.color.foreground.reverse,
					},
				},
			},
		},
		{
			variants: { selected: true, onDark: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: DARK_SELECTED_FILL,
						borderColor: DARK_SELECTED_FILL,
						color: vars.color.foreground.reverse,
					},
				},
			},
		},
	],

	defaultVariants: {
		size: 'large',
		selected: false,
		onDark: false,
	},
});

export const label = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				textAlign: 'center',
			},
		},
	},

	variants: {
		size: {
			large: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size['4'].fontSize,
						lineHeight: vars.typography.size['4'].lineHeight,
					},
				},
			},
			small: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size['3'].fontSize,
						lineHeight: vars.typography.size['3'].lineHeight,
					},
				},
			},
		},

		selected: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						fontWeight: vars.typography.fontWeight.semiBold,
					},
				},
			},
			false: {
				'@layer': {
					[cssLayerComponent]: {
						fontWeight: vars.typography.fontWeight.normal,
					},
				},
			},
		},

		onDark: {
			true: {},
			false: {
				'@layer': {
					[cssLayerComponent]: {
						color: vars.color.foreground.primary,
					},
				},
			},
		},
	},

	compoundVariants: [
		{
			// On a dark surface the current step's label takes the accent, and
			// the rest go white.
			variants: { selected: false, onDark: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						color: vars.color.foreground.reverse,
					},
				},
			},
		},
		{
			variants: { selected: true, onDark: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						color: DARK_SELECTED_FILL,
					},
				},
			},
		},
	],

	defaultVariants: {
		size: 'large',
		selected: false,
		onDark: false,
	},
});

export const list = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				display: 'flex',
				listStyle: 'none',
				margin: 0,
				padding: 0,
			},
		},
	},

	variants: {
		layout: {
			// Figma butts the connector cells straight up against the steps —
			// the glyph's own bearing supplies the breathing room — so neither
			// axis carries a gap.
			horizontal: {
				'@layer': {
					[cssLayerComponent]: {
						alignItems: 'flex-start',
						flexDirection: 'row',
					},
				},
			},
			vertical: {
				'@layer': {
					[cssLayerComponent]: {
						alignItems: 'flex-start',
						flexDirection: 'column',
					},
				},
			},
		},
	},

	defaultVariants: {
		layout: 'horizontal',
	},
});

export const item = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'inherit',
			display: 'flex',
			flexDirection: 'inherit',
		},
	},
});

/**
 * The cell between two steps. It is sized to the circle on the cross axis so
 * the connector lines up with the circles rather than with the labels beneath
 * them.
 */
export const connector = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				color: vars.color.border.default,
				display: 'flex',
				flexShrink: 0,
				justifyContent: 'center',
			},
		},
	},

	variants: {
		layout: {
			horizontal: {
				'@layer': {
					[cssLayerComponent]: {
						width: CONNECTOR_GLYPH_LENGTH,
					},
				},
			},
			vertical: {
				'@layer': {
					[cssLayerComponent]: {
						height: VERTICAL_CONNECTOR_LENGTH,
					},
				},
			},
		},

		size: {
			large: {},
			small: {},
		},
	},

	compoundVariants: [
		{
			variants: { layout: 'horizontal', size: 'large' },
			style: {
				'@layer': {
					[cssLayerComponent]: { height: CIRCLE_SIZE.large },
				},
			},
		},
		{
			variants: { layout: 'horizontal', size: 'small' },
			style: {
				'@layer': {
					[cssLayerComponent]: { height: CIRCLE_SIZE.small },
				},
			},
		},
		{
			variants: { layout: 'vertical', size: 'large' },
			style: {
				'@layer': {
					[cssLayerComponent]: { width: CIRCLE_SIZE.large },
				},
			},
		},
		{
			variants: { layout: 'vertical', size: 'small' },
			style: {
				'@layer': {
					[cssLayerComponent]: { width: CIRCLE_SIZE.small },
				},
			},
		},
	],

	defaultVariants: {
		layout: 'horizontal',
		size: 'large',
	},
});

/** The rule drawn in a vertical connector cell. */
export const connectorLine = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: 'currentColor',
			height: CONNECTOR_GLYPH_LENGTH,
			width: vars.border.width['1'],
		},
	},
});
