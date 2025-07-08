import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';

export const bubbleText = style({
	'@layer': {
		[cssLayerComponent]: {
			transform: 'translateY(-0.525px)',
		},
	},
});
