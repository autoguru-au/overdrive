import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const inlineCode = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.color.gamut.gray[200],
			borderRadius: tokens.border.radius.sm,
			fontFamily: 'monospace',
			fontSize: '0.875em',
			padding: '0.15em 0.4em',
		},
	},
});
