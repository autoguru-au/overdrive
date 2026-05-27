import { globalLayer, style } from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';

globalLayer(LAYER_ORDER);

export const numberStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			transform: 'translateY(-0.51px)',
		},
	},
});
