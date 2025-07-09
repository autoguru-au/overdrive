import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	cursor: 'pointer',
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',

	':hover': {
		backgroundColor: vars.colours.background.light,
	},
});
export const disabled = style({
	cursor: 'not-allowed',
	opacity: '0.3',
});
export const action = style({
	opacity: 0,
	pointerEvents: 'none',
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0.1s`,
	willChange: 'transform',
	selectors: {
		[`${root}:hover &`]: {
			opacity: '1',
			pointerEvents: 'initial',
		},
	},
});
