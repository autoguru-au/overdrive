import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const label = style({
	textOverflow: 'ellipsis',
	letterSpacing: '0.5px',
	textTransform: 'uppercase',
});

export const labelSize = styleVariants({
	standard: {
		fontSize: vars.typography.size['2'].fontSize,
		lineHeight: vars.typography.size['2'].fontSize,
	},
	large:{
		fontSize: vars.typography.size['4'].fontSize,
		lineHeight: vars.typography.size['4'].fontSize,
	}
});


// TODO: Derive the inverted colours from a token
export const colours = {
	default: styleVariants({
		neutral: {
			backgroundColor: vars.colours.intent.neutral.background.standard,
		},
		green: {
			backgroundColor: vars.colours.intent.success.background.standard,
		},
		blue: {
			backgroundColor: vars.colours.intent.information.background.standard,
		},
		yellow: {
			backgroundColor: vars.colours.intent.warning.background.standard,
		},
		red: {
			backgroundColor: vars.colours.intent.danger.background.standard,
		},
	}),
	inverted: {
		neutral: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.neutral.background.mild,
			},
			text: {
				color: vars.colours.intent.neutral.background.standard,
			},
		}),
		/*green: styleVariants({
			background: {
				backgroundColor: shadedColour(
					vars.colours.intent.success.background,
					vars.shadeIntensity.slight,
					'backward',
					vars.mode === 'dark',
					vars.transparency.intense,
				),
			},
			text: {
				color: shadedColour(
					vars.colours.intent.success.background,
					vars.shadeIntensity.medium,
					'backward',
					vars.mode === 'dark',
				),
			},
		}),
		blue: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.information.background,
			},
			text: {
				color: vars.colours.intent.information.background,
			},
		}),
		yellow: styleVariants({
			background: {
				backgroundColor: shadedColour(
					vars.colours.intent.warning.background,
					vars.shadeIntensity.slight,
					'backward',
					vars.mode === 'dark',
					vars.transparency.intense,
				),
			},
			text: {
				color: shadedColour(
					vars.colours.intent.warning.background,
					vars.shadeIntensity.slight,
					'backward',
					vars.mode === 'dark',
				),
			},
		}),
		red: styleVariants({
			background: {
				backgroundColor: shadedColour(
					vars.colours.intent.danger.background,
					vars.shadeIntensity.slight,
					'backward',
					vars.mode === 'dark',
					vars.transparency.intense,
				),
			},
			text: {
				color: shadedColour(
					vars.colours.intent.danger.background,
					vars.shadeIntensity.slight,
					'backward',
					vars.mode === 'dark',
				),
			},
		}),*/
	},
};
