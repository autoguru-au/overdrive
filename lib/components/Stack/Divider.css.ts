import { style } from '@vanilla-extract/css';

import { gapVar } from '../../styles/vars.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const hr = style({
	transform: `translateY(calc(${gapVar}/-2))`,
	margin: 0,
	borderStyle: 'none',
	boxShadow: `inset 0 0 0 1px ${vars.colours.background.neutral}`,
	width: '100%',
	height: '1px',
});
