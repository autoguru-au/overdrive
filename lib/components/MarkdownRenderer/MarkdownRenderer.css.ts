import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			fontFamily: tokens.typography.fontFamily,
			fontSize: tokens.typography.size[4].fontSize,
			lineHeight: tokens.typography.size[4].lineHeight,
			wordBreak: 'break-word',
		},
	},
});
