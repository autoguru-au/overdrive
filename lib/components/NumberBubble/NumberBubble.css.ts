import { style } from '@vanilla-extract/css';

import { cssLayerComponent, ensureLayerOrder } from '../../styles/layers.css';

ensureLayerOrder();

export const numberStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			transform: 'translateY(-0.51px)',
		},
	},
});
