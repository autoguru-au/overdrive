import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { elementReset } from '../../styles/elementReset.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const toggleButtonGroup = style([
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
				display: 'inline-grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
				width: '100%',
			},
		},
	},
]);

export const button = style([
	elementReset.button,
	{
		selectors: {
			// // Hover styles for unselected state
			// ':hover:not([data-selected="true"]):not(:disabled)': {
			// 	backgroundColor: vars.colours.intent.neutral.mild,
			// },
		},
	},
]);

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
					display: 'inline-grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
					width: '100%',
					appearance: 'none',
					borderStyle: 'none',
					MozAppearance: 'none',
					userSelect: 'none',
					WebkitAppearance: 'none',
					selectors: {
						'&+&': {
							borderLeft: `1px solid ${vars.border.colours.gray}`,
						},
						[selectors.hover]: {
							cursor: 'pointer',
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
		disabled: {
			true: {
				cursor: 'not-allowed',
				opacity: 0.5,
			},
		},
	},
	// compoundVariants: [
	// 	{
	// 		variants: { selected: true, disabled: true },
	// 		style: {
	// 			// backgroundColor: vars.colours.intent.dark.background,
	// 			// color: vars.colours.intent.dark.foreground,
	// 			opacity: 0.5,
	// 		},
	// 	},
	// ],
	defaultVariants: {
		selected: false,
		disabled: false,
	},
});
