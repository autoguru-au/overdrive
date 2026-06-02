import { globalLayer, style } from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const image = style({
	'@layer': {
		[cssLayerComponent]: {
			borderRadius: tokens.border.radius.md,
			height: 'auto',
			maxWidth: '100%',
		},
	},
});
