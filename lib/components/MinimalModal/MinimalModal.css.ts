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
	borderTopLeftRadius: tokens.border.radius.medium,
	borderTopRightRadius: tokens.border.radius.medium,
});

const borderRoundBottom = style({
	borderBottomLeftRadius: tokens.border.radius.medium,
	borderBottomRightRadius: tokens.border.radius.medium,
});

export const borders = styleVariants({
	center: [borderRoundTop, borderRoundBottom],
	flexEnd: [borderRoundTop],
	flexStart: [borderRoundBottom],
});
