import { style } from '@vanilla-extract/css';

import { gapVar } from '../../styles/vars.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const hr = style({
	borderStyle: 'none',
	boxShadow: `inset 0 0 0 1px ${vars.colours.background.neutral}`,
	height: '1px',
	margin: 0,
	transform: `translateY(calc(${gapVar}/-2))`,
	width: '100%',
});
