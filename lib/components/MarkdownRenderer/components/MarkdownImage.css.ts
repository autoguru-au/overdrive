import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const image = style({
	'@layer': {
		[cssLayerComponent]: {
			borderRadius: tokens.border.radius.md,
			height: 'auto',
			maxWidth: '100%',
		},
	},
});
