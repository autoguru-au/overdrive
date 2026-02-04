import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';
import { MONOSPACE_FONT_FAMILY } from '../MarkdownRenderer.css';

export const inlineCode = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.color.gamut.gray[200],
			borderRadius: tokens.border.radius.sm,
			fontFamily: MONOSPACE_FONT_FAMILY,
			fontSize: tokens.typography.size[3].fontSize,
			padding: `${tokens.space[1]} ${tokens.space[1]}`,
		},
	},
});
