import { style } from '@vanilla-extract/css';

import { cssLayerComponent, ensureLayerOrder } from '../../../styles/layers.css';

ensureLayerOrder();

export const emphasis = style({
	'@layer': {
		[cssLayerComponent]: {
			fontStyle: 'italic',
		},
	},
});
