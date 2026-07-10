import { style } from '@vanilla-extract/css';

import { overdriveTokens as tokens } from '../themes/theme.css';

const width = '2px';

export const focusOutline = {
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: C-P9 superseded — colours.foreground.link is theme-overridden (neutral -> blue500, fleetGuru -> yellow500), intent-like; stays on the legacy contract until the major (docs/ds2026-plan/track-c.md §1.9 C-P9 work order).
	outline: `solid ${width} ${tokens.colours.foreground.link}`,
	outlineOffset: width,
};

export const focusOutlineStyle = style({
	selectors: {
		'&:focus-visible, &[data-focus-visible], [data-focus-visible] &': {
			// eslint-disable-next-line no-restricted-syntax -- RETAINED: same as above.
			outline: `solid ${width} ${tokens.colours.foreground.link}`,
			outlineOffset: width,
		},
	},
});
