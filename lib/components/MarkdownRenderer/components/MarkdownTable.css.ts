import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const tableWrapper = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				overflowX: 'auto',
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						marginBottom: tokens.space[3],
						marginTop: tokens.space[3],
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						marginBottom: tokens.space[1],
						marginTop: tokens.space[1],
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
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

export const th = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.gamut.gray[100],
				border: `${tokens.border.width['1']} solid ${tokens.color.gamut.gray[300]}`,
				fontWeight: tokens.typography.fontWeight.bold,
				textAlign: 'left',
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						padding: `${tokens.space[2]} ${tokens.space[3]}`,
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						padding: `${tokens.space[1]} ${tokens.space[2]}`,
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
	},
});

export const td = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				border: `${tokens.border.width['1']} solid ${tokens.color.gamut.gray[300]}`,
				textAlign: 'left',
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						padding: `${tokens.space[2]} ${tokens.space[3]}`,
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						padding: `${tokens.space[1]} ${tokens.space[2]}`,
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
	},
});
