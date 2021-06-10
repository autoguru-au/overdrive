import { style, styleMap } from 'treat';
import { shadedColour } from '../../themes/helpers';

const lineBottomHeight = '1px';
const size = '20px';

export const root = {
	default: style(({ space, shadeIntensity, animation, colours, isDark }) => ({
		padding: `calc(${space['3']} + ${lineBottomHeight}) 0`,
		transition: `color 0.2s ${animation.easing.decelerate} 0s, background-color 0.2s ${animation.easing.decelerate} 0s`,
		borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
		flex: 'auto',
		':last-of-type': {
			marginRight: 0,
		},

		':hover': {
			color: shadedColour(colours.intent.primary.background, shadeIntensity.medium, 'backward', isDark),
		},

		':focus': {
			color: shadedColour(colours.intent.primary.background, shadeIntensity.medium, 'backward', isDark),
		},
	})),
	active: style(({ shadeIntensity, colours, isDark }) => ({
		color: shadedColour(colours.intent.primary.background, shadeIntensity.medium, 'backward', isDark),
		borderBottomColor: shadedColour(colours.intent.primary.background, shadeIntensity.medium, 'backward', isDark),
	})),
};

export const item = style({
	display: 'inline-flex',
	width: 'max-content',
	verticalAlign: 'middle',
});

export const indication = styleMap(({ animation }) => ({
	default: {
		minWidth: size,
		height: size,
		lineHeight: size,
		transition: `color 0.2s ${animation.easing.decelerate} 0s, backgroundColor 0.2s ${animation.easing.decelerate} 0s`,
	},
}));
