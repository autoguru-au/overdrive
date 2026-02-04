import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const taskListItem = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'flex-start',
			display: 'flex',
			gap: tokens.space[2],
			listStyle: 'none',
		},
	},
});

export const checkbox = style({
	'@layer': {
		[cssLayerComponent]: {
			accentColor: tokens.color.gamut.blue[600],
			marginTop: '0.25em',
		},
	},
});
