import { style, styleMap } from 'treat';
import { shadedColour } from '../../themes/helpers';

export const disabled = style({ cursor: 'not-allowed' });

export const root = style(({ colours, shadeIntensity, isDark }) => ({
	width: 'max-content',
	selectors: {
		[`&:not(${disabled}):focus`]: {
			borderColor: shadedColour(colours.intent.information.background, shadeIntensity.medium, 'forward', isDark)
		},
	},
}));

export const handle = styleMap(({ space, animation, colours, shadeIntensity, isDark, transparency }) => ({
	default: {
		width: space[6],
		height: space[6],
		transition: `background-color 0.1s ${animation.easing.standard}`,
		selectors: {
			[`${root}:not(${disabled}) &:hover`]: {
				backgroundColor: shadedColour(colours.intent.primary.background, shadeIntensity.medium, 'backward', isDark),
			},
			[`${root}:not(${disabled}) &:active`]: {
				backgroundColor: shadedColour(colours.intent.primary.background, shadeIntensity.intense, 'backward', isDark),
			},
		},
	},
	disabled: {
		borderColor: shadedColour(colours.background.neutral, shadeIntensity.intense, 'forward', isDark, transparency.medium),
		backgroundColor: shadedColour(colours.background.neutral, shadeIntensity.intense, 'forward', isDark, transparency.medium),
	},
}));

export const label = style(({ space }) => ({
	minWidth: space['8'],
}));
