import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const segment = style({
	'@layer': {
		component: {
			borderRadius: '2px',
			outline: 'none',
			padding: '2px 1px',
			textAlign: 'center',
			selectors: {
				'&[data-placeholder="true"]': {
					color: vars.typography.colour.muted,
				},
				'&:focus': {
					backgroundColor: vars.colours.gamut.blue100,
					color: vars.colours.gamut.blue700,
				},
			},
		},
	},
});
