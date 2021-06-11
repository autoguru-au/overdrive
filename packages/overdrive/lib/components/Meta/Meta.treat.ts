import { styleMap } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const variant = styleMap(
	({ colours, typography, shadeIntensity, isDark }) => ({
		primary: {
			color: shadedColour(
				colours.intent.primary.background,
				shadeIntensity.medium,
				'backward',
				isDark,
			),
		},
		secondary: {
			color: typography.colour.dark,
		},
	}),
);
