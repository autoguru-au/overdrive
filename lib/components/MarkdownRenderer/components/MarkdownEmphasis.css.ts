import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';

export const emphasis = style({
	'@layer': {
		[cssLayerComponent]: {
			fontStyle: 'italic',
		},
	},
});
