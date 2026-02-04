import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';
import { MONOSPACE_FONT_FAMILY } from '../MarkdownRenderer.css';

export const codeBlock = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.color.gamut.gray[900],
			borderRadius: tokens.border.radius.md,
			color: tokens.color.gamut.white,
			fontFamily: MONOSPACE_FONT_FAMILY,
			fontSize: tokens.typography.size[3].fontSize,
			lineHeight: tokens.typography.size[3].lineHeight,
			marginBottom: tokens.space[3],
			marginTop: tokens.space[3],
			overflowX: 'auto',
			padding: tokens.space[4],
		},
	},
});

export const codeBlockInner = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: 'transparent',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			padding: 0,
		},
	},
});
