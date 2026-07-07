import { styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const variant = styleVariants({
	primary: {
		// eslint-disable-next-line no-restricted-syntax -- RETAINED: intent-derived ref, reverted by the C-theme-bridge corrective package — never repointed pre-major (docs/ds2026-plan/track-c.md §1.5 + deviation 12).
		color: vars.colours.intent.primary.background.strong,
	},
	secondary: {
		color: vars.color.foreground.primary,
	},
});
