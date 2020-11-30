import { style, styleMap } from 'treat';

export const label = style(({ typography }) => ({
	lineHeight: typography.size['2'].fontSize,
	textOverflow: 'ellipsis',
	letterSpacing: '0.5px',
	textTransform: 'uppercase',
}));

// TODO: Derive the inverted colours from a token
export const colours = {
	default: styleMap((theme) => ({
		neutral: {
			backgroundColor: theme.colours.intent.neutral.background,
		},
		green: {
			backgroundColor: theme.colours.intent.success.background,
		},
		blue: {
			backgroundColor: theme.colours.intent.information.background,
		},
		yellow: {
			backgroundColor: theme.colours.intent.warning.background,
		},
		red: {
			backgroundColor: theme.colours.intent.danger.background,
		},
	})),
	inverted: {
		neutral: styleMap((theme) => ({
			background: {
				backgroundColor: theme.colours.gamut.gray200,
			},
			text: {
				color: theme.colours.gamut.gray800,
			},
		})),
		green: styleMap((theme) => ({
			background: {
				backgroundColor: theme.colours.gamut.green200,
			},
			text: {
				color: theme.colours.gamut.green900,
			},
		})),
		blue: styleMap((theme) => ({
			background: {
				backgroundColor: theme.colours.gamut.blue200,
			},
			text: {
				color: theme.colours.gamut.blue900,
			},
		})),
		yellow: styleMap((theme) => ({
			background: {
				backgroundColor: theme.colours.gamut.yellow200,
			},
			text: {
				color: theme.colours.gamut.yellow900,
			},
		})),
		red: styleMap((theme) => ({
			background: {
				backgroundColor: theme.colours.gamut.red200,
			},
			text: {
				color: theme.colours.gamut.red800,
			},
		})),
	},
};
