import { style } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const root = style(({ typography, shadeIntensity, isDark }) => ({
	transitionDelay: '0s',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	boxShadow: `inset 0 -2px 0 0 ${shadedColour(
		typography.colour.primary,
		shadeIntensity.slight,
		'forward',
		isDark,
	)}`,
	':hover': {
		boxShadow: `inset 0 -1.6em 0 0 ${shadedColour(
			typography.colour.primary,
			shadeIntensity.medium,
			'forward',
			isDark,
		)}`,
	},
}));

export const muted = style(({ typography, shadeIntensity, isDark }) => ({
	':hover': {
		color: 'white',
		boxShadow: `inset 0 -1.6em 0 0 ${shadedColour(
			typography.colour.primary,
			shadeIntensity.slight,
			'forward',
			isDark,
		)}`,
	},
}));
