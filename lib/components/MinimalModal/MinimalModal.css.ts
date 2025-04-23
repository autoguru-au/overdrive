import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as tokens } from '../../themes/theme.css';

export const container = style({
	outline: '0',
});

export const content = style({
	overflowY: 'auto',
	overscrollBehavior: 'contain',
});

const borderRoundTop = style({
	borderTopLeftRadius: tokens.border.radius['2xl'],
	borderTopRightRadius: tokens.border.radius['2xl'],
});

const borderRoundBottom = style({
	borderBottomLeftRadius: tokens.border.radius['2xl'],
	borderBottomRightRadius: tokens.border.radius['2xl'],
});

export const borders = styleVariants({
	center: [borderRoundTop, borderRoundBottom],
	flexEnd: [borderRoundTop],
	flexStart: [borderRoundBottom],
});
