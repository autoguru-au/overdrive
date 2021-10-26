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
		green: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.success.background.mild,
			},
			text: {
				color: vars.colours.intent.success.background.standard,
			},
		}),
		blue: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.information.background.mild,
			},
			text: {
				color: vars.colours.intent.information.background.standard,
			},
		}),
		yellow: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.warning.background.mild,
			},
			text: {
				color: vars.colours.intent.warning.background.standard,
			},
		}),
		red: styleVariants({
			background: {
				backgroundColor: vars.colours.intent.danger.background.mild,
			},
			text: {
				color: vars.colours.intent.danger.background.standard,
			},
		}),
	},
};
