import { style, styleVariants } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const inputContainer = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'grid',
			position: 'relative',
		},
	},
});

export const input = style({
	'@layer': {
		[cssLayerComponent]: {
			cursor: 'pointer',
			gridArea: '1 / 1',
			opacity: 0,
			position: 'relative',
			zIndex: 1,
			selectors: {
				'&::-webkit-calendar-picker-indicator': {
					background: 'transparent',
					color: 'transparent',
					cursor: 'pointer',
					height: '100%',
					left: 0,
					position: 'absolute',
					top: 0,
					width: '100%',
				},
			},
		},
	},
});

export const inputOverlay = style({
	'@layer': {
		[cssLayerComponent]: {
			gridArea: '1 / 1',
			pointerEvents: 'none',
			zIndex: 0,
		},
	},
});

export const contents = styleVariants({
	default: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				display: 'grid',
				gridGap: vars.space['1'],
				gridTemplateColumns: 'auto',
				justifyContent: 'flex-start',
			},
		},
	},
	withLabel: {
		'@layer': {
			[cssLayerComponent]: {
				gridTemplateColumns: 'auto auto',
			},
		},
	},
});

export const disabled = styleVariants({
	cursor: {
		'@layer': {
			[cssLayerComponent]: {
				cursor: 'not-allowed',
			},
		},
	},
	native: {
		'@layer': {
			[cssLayerComponent]: {
				opacity: '0.3',
			},
		},
	},
});
