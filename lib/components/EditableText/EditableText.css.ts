import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			boxShadow: `inset 0 -1px 0 0 ${vars.typography.colour.muted}`,
			transitionDelay: '0s',
			transitionDuration: '0.2s',
			transitionProperty: 'box-shadow',
			transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
		},
	},
});

export const input = style({
	'@layer': {
		[cssLayerComponent]: {
			width: 'var(--width)',

			'@supports': {
				'(field-sizing: content)': {
					//@ts-expect-error 'field-sizing' property is not yet baseline available
					fieldSizing: 'content',
					width: 'unset',
				},
			},
			selectors: {
				'&[type="date"]': {
					width: '125px', // Firefox native date picker is wider
				},
			},
		},
	},
});

export const text = style({
	'@layer': {
		[cssLayerComponent]: {
			cursor: 'pointer',
		},
	},
});

export const textHidden = style({
	'@layer': {
		[cssLayerComponent]: {
			position: 'absolute',
			visibility: 'hidden',
		},
	},
});
