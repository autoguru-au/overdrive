import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';

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

export const verticalCenterStyle = sprinkles({
	alignSelf: 'center',
	display: 'flex',
	justifyContent: 'center',
});
