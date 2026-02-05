import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';

export const strikethrough = style({
	'@layer': {
		[cssLayerComponent]: {
			textDecoration: 'line-through',
		},
	},
});
