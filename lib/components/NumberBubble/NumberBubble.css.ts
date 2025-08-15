import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';

export const numberStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			transform: 'translateY(-0.51px)',
		},
	},
});
