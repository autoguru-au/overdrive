import { style, styleMap } from 'treat';

export const label = style((theme) => ({
	fontSize: theme.typography.size['2'].fontSize,
	lineHeight: theme.typography.size['2'].fontSize,
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	fontWeight: theme.typography.fontWeight.semiBold,
	letterSpacing: '0.5px',
	textTransform: 'uppercase',
}));

// TODO: Derive the inverted colours from a token
export const colours = {
	neutral: styleMap((theme) => ({
		default: {
			backgroundColor: theme.colours.intent.neutral.background,
			color: theme.typography.colour.white,
		},
		inverted: {
			backgroundColor: theme.colours.gamut.gray200,
			color: theme.colours.gamut.gray800,
		},
	})),
	green: styleMap((theme) => ({
		default: {
			backgroundColor: theme.colours.intent.success.background,
			color: theme.typography.colour.white,
		},
		inverted: {
			backgroundColor: theme.colours.gamut.green200,
			color: theme.colours.gamut.green900,
		},
	})),
	blue: styleMap((theme) => ({
		default: {
			backgroundColor: theme.colours.intent.information.background,
			color: theme.typography.colour.white,
		},
		inverted: {
			backgroundColor: theme.colours.gamut.blue200,
			color: theme.colours.gamut.blue900,
		},
	})),
	yellow: styleMap((theme) => ({
		default: {
			backgroundColor: theme.colours.intent.warning.background,
			color: theme.typography.colour.white,
		},
		inverted: {
			backgroundColor: theme.colours.gamut.yellow200,
			color: theme.colours.gamut.yellow900,
		},
	})),
	red: styleMap((theme) => ({
		default: {
			backgroundColor: theme.colours.intent.danger.background,
			color: theme.typography.colour.white,
		},
		inverted: {
			backgroundColor: theme.colours.gamut.red200,
			color: theme.colours.gamut.red800,
		},
	})),
};
