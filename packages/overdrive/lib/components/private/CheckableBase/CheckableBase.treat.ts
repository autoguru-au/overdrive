import { style, styleMap } from 'treat';
import { shadedColour } from '../../../themes/helpers';

export const root = style(({ animation, colours, shadeIntensity, isDark, transparency }) => ({
	cursor: 'pointer',
	transition: `background-color 0.2s ${animation.easing.decelerate} 0s`,
	':hover': {
		backgroundColor: shadedColour(colours.background.body, shadeIntensity.slight, 'backward', isDark, transparency.medium),
	},
}));

export const label = styleMap(({ typography, shadeIntensity, isDark, transparency }) => ({
	disabled: {
		color: shadedColour(typography.colour.dark, shadeIntensity.slight, 'backward', isDark, transparency.slight),
	},
}));

export const nativeInput = styleMap({
	default: {
		zIndex: 2,
		top: 0,
		left: 0,
		cursor: 'inherit',
		opacity: 0,
	},
	checked: {
		outline: 'none',
	},
});

export const checkable = style((theme) => ({
	width: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
	height: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,

	marginTop: `calc(-1*${theme.space['3']})`,
	marginBottom: `calc(-1*${theme.space['3']})`,
}));

export const checkableItem = style(({ colours,shadeIntensity,isDark }) => ({
	selectors: {
		[`${nativeInput.default}:focus:checked ~${checkable} &`]: {
			boxShadow: `0 0 0 2px ${shadedColour(colours.intent.primary.background, shadeIntensity.slight, 'backward', isDark)}`,
		},
		[`${nativeInput.default}:focus:not(:checked) ~${checkable} >&`]: {
			borderColor: shadedColour(colours.intent.primary.background, shadeIntensity.slight, 'backward', isDark),
		},
	},
}));

export const disabled = style({
	opacity: 0.6,
	pointerEvents: 'none',
});
