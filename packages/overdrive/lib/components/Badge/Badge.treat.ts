import { style, styleMap } from 'treat';
import { shadedColour } from '../../themes/helpers';

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
		neutral: styleMap(
			({ colours, shadeIntensity, isDark, transparency }) => ({
				background: {
					backgroundColor: shadedColour(
						colours.intent.neutral.background,
						shadeIntensity.slight,
						'backward',
						isDark,
						transparency.intense,
					),
				},
				text: {
					color: colours.intent.neutral.background,
				},
			}),
		),
		green: styleMap(
			({ colours, shadeIntensity, isDark, transparency }) => ({
				background: {
					backgroundColor: shadedColour(
						colours.intent.success.background,
						shadeIntensity.slight,
						'backward',
						isDark,
						transparency.intense,
					),
				},
				text: {
					color: shadedColour(
						colours.intent.success.background,
						shadeIntensity.medium,
						'backward',
						isDark,
					),
				},
			}),
		),
		blue: styleMap(({ colours, shadeIntensity, isDark, transparency }) => ({
			background: {
				backgroundColor: shadedColour(
					colours.intent.information.background,
					shadeIntensity.slight,
					'backward',
					isDark,
					transparency.intense,
				),
			},
			text: {
				color: shadedColour(
					colours.intent.information.background,
					shadeIntensity.slight,
					'backward',
					isDark,
				),
			},
		})),
		yellow: styleMap(
			({ colours, shadeIntensity, isDark, transparency }) => ({
				background: {
					backgroundColor: shadedColour(
						colours.intent.warning.background,
						shadeIntensity.slight,
						'backward',
						isDark,
						transparency.intense,
					),
				},
				text: {
					color: shadedColour(
						colours.intent.warning.background,
						shadeIntensity.slight,
						'backward',
						isDark,
					),
				},
			}),
		),
		red: styleMap(({ colours, shadeIntensity, isDark, transparency }) => ({
			background: {
				backgroundColor: shadedColour(
					colours.intent.danger.background,
					shadeIntensity.slight,
					'backward',
					isDark,
					transparency.intense,
				),
			},
			text: {
				color: shadedColour(
					colours.intent.danger.background,
					shadeIntensity.slight,
					'backward',
					isDark,
				),
			},
		})),
	},
};
