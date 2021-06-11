import { styleMap } from 'treat';

export const star = styleMap(({ colours }) => ({
	default: {
		color: colours.intent.shine.foreground,
	},
	empty: {
		color: colours.intent.shine.background,
	},
}));
