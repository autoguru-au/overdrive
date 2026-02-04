import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const tableWrapper = style({
	'@layer': {
		[cssLayerComponent]: {
			marginBottom: tokens.space[3],
			marginTop: tokens.space[3],
			overflowX: 'auto',
		},
	},
});

export const table = style({
	'@layer': {
		[cssLayerComponent]: {
			borderCollapse: 'collapse',
			width: '100%',
		},
	},
});

export const th = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: tokens.color.gamut.gray[100],
			border: `1px solid ${tokens.color.gamut.gray[300]}`,
			fontWeight: tokens.typography.fontWeight.bold,
			padding: `${tokens.space[2]} ${tokens.space[3]}`,
			textAlign: 'left',
		},
	},
});

export const td = style({
	'@layer': {
		[cssLayerComponent]: {
			border: `1px solid ${tokens.color.gamut.gray[300]}`,
			padding: `${tokens.space[2]} ${tokens.space[3]}`,
			textAlign: 'left',
		},
	},
});
