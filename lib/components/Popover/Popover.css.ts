import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

export const overlayStyle = style([
	sprinkles({
		borderRadius: 'md',
		borderWidth: '1',
		borderStyle: 'solid',
		borderColour: 'light',
		padding: '4',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.colours.background.body,
				boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
				minWidth: '280px',
			},
		},
	},
]);

export const triggerStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			background: 'transparent',
			border: 'none',
			cursor: 'pointer',
			padding: 0,
		},
	},
});

export const fullScreenStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.colours.background.body,
			bottom: 0,
			left: 0,
			position: 'fixed',
			right: 0,
			top: 0,
		},
	},
});
