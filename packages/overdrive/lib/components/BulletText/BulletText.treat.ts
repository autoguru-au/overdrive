import { style } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const bullet = style((theme) => ({
	lineHeight: theme.typography.size['2'].lineHeight,
	width: theme.space['6'],
	height: theme.space['6'],
}));

export const primary = style(
	({ colours, shadeIntensity, isDark, transparency }) => ({
		backgroundColor: shadedColour(
			colours.intent.primary.background,
			null,
			'forward',
			isDark,
			transparency.intense,
		),
	}),
);

export const secondary = style(({ colours }) => ({
	backgroundColor: colours.background.light,
}));

export const primaryText = style(({ colours }) => ({
	color: colours.intent.primary.background,
}));

export const secondaryText = style(({ typography }) => ({
	color: typography.colour.dark,
}));
