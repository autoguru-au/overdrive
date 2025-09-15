import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';

export const segmentStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			fontVariantNumeric: 'tabular-nums',
			userSelect: 'none',
			selectors: {
				[selectors.focusVisible]: {
					outlineOffset: '3px',
				},
				'&:nth-child(even)': {
					padding: '0 2.5px',
				},
			},
		},
	},
});
