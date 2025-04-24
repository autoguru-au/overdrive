import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	cursor: 'pointer',

	':hover': {
		backgroundColor: vars.colours.background.light,
	},
});
export const disabled = style({
	cursor: 'not-allowed',
	opacity: '0.3',
});
export const action = style({
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0.1s`,
	willChange: 'transform',
	pointerEvents: 'none',
	opacity: 0,
	selectors: {
		[`${root}:hover &`]: {
			opacity: '1',
			pointerEvents: 'initial',
		},
	},
});
