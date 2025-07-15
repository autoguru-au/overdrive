import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { gapVar } from '../../styles/vars.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const hr = style({
	'@layer': {
		[cssLayerComponent]: {
			borderStyle: 'none',
			boxShadow: `inset 0 0 0 1px ${vars.colours.background.neutral}`,
			height: '1px',
			margin: 0,
			transform: `translateY(calc(2*${gapVar} / -2))`,
			width: '100%',
		},
	},
});

export const stackWithDividers = style({
	'@layer': {
		[cssLayerComponent]: {
			// double the flex gap to match spacing of original implementation
			gap: `calc(2*${gapVar})`,
		},
	},
});
