import { style } from '@vanilla-extract/css';

import { cssLayerComponent, ensureLayerOrder } from '../../../styles/layers.css';

ensureLayerOrder();

export const strikethrough = style({
	'@layer': {
		[cssLayerComponent]: {
			textDecoration: 'line-through',
		},
	},
});
