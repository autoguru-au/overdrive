import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const bullet = style({
	width: vars.space['6'],
	height: vars.space['6'],
	lineHeight: vars.typography.size['2'].lineHeight,
});

export const primary = style({
	backgroundColor: vars.colours.intent.primary.background.mild,
});

export const secondary = style({
	backgroundColor: vars.colours.background.light,
});

export const primaryText = style({
	color: vars.colours.intent.primary.background.standard,
});

export const secondaryText = style({
	color: vars.typography.colour.dark,
});
