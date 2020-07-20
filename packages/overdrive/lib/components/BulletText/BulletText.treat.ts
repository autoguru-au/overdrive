import { style } from 'treat';

export const bullet = style((theme) => ({
	lineHeight: theme.typography.size['2'].lineHeight,
	width: theme.space['6'],
	height: theme.space['6'],
}));
