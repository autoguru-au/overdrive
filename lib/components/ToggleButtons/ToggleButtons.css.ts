import { recipe } from '@vanilla-extract/recipes';

import { elementReset } from '../../styles/elementReset.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const toggleButtonGroup = recipe({
	base: [
		sprinkles({
			borderColour: 'gray',
			borderRadius: 'md',
			borderStyle: 'solid',
			borderWidth: '1',
			overflow: 'hidden',
		}),
		{
			'@layer': {
				[cssLayerComponent]: {
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
				},
			},
		},
	],
	variants: {
		iconOnly: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						display: 'block',
						width: 'fit-content',
					},
				},
			},
			false: {},
		},
	},
	defaultVariants: {
		iconOnly: false,
	},
});

export const toggleButton = recipe({
	base: [
		elementReset.button,
		sprinkles({
			backgroundColor: 'page',
			color: 'normal',
			p: '3',
			textWrap: 'nowrap',
		}),
		{
			'@layer': {
				[cssLayerComponent]: {
					appearance: 'none',
					borderStyle: 'none',
					MozAppearance: 'none',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					userSelect: 'none',
					WebkitAppearance: 'none',
					selectors: {
						'&+&': {
							borderLeft: `1px solid ${vars.border.colours.gray}`,
						},
						[selectors.hover]: {
							cursor: 'pointer',
						},
						[selectors.disabled]: {
							cursor: 'not-allowed',
							opacity: 0.5,
						},
					},
				},
			},
		},
	],
	variants: {
		selected: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.surface.hard,
						color: vars.color.content.inverse,
					},
				},
			},
			false: {
				'@layer': {
					[cssLayerComponent]: {
						color: vars.color.content.soft,
					},
				},
			},
		},
		iconOnly: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						width: 'fit-content',
					},
				},
			},
			false: {},
		},
	},
	defaultVariants: {
		selected: false,
		iconOnly: false,
	},
});
