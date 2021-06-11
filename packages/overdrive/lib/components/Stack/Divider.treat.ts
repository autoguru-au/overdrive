import { style } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const line = style(
	({ colours, shadeIntensity, isDark, transparency }) => ({
		height: '1px',
		boxShadow: `inset 0 0 0 1px ${shadedColour(
			colours.background.neutral,
			shadeIntensity.intense,
			'forward',
			isDark,
			transparency.medium,
		)}`,
	}),
);
