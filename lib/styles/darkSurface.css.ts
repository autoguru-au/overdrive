import { style } from '@vanilla-extract/css';

import { overdriveTokens as tokens } from '../themes/theme.css';

/**
 * Opt a dark-filled region into the dark-surface link colour.
 *
 * A tenant brand reaches the app as one inline CSS var on the provider, so a
 * single link colour has to serve both a white page and a gray-900 header —
 * and no value clears 4.5:1 on both. `useColorOverrides` derives two from the
 * same hue; applying this class repoints the link vars for its subtree to the
 * second.
 *
 * Focus rings follow without any change to `focusOutline`, which reads
 * `colours.foreground.link` and so resolves against whatever the nearest scope
 * declares.
 *
 * @example
 * <Box as="header" backgroundColor="gray900" color="white" className={darkSurface}>
 */
export const darkSurface = style({
	vars: {
		// eslint-disable-next-line no-restricted-syntax -- RETAINED: these are the vars today's links and `focusOutline` actually read; the scope has to redeclare them until C-final deletes the legacy contract (docs/ds2026-plan/track-c.md §1.9).
		[tokens.colours.foreground.link]: tokens.color.interactive.linkOnDark,
		// eslint-disable-next-line no-restricted-syntax -- RETAINED: same as above; read by TextLink and the `colour="link"` sprinkle.
		[tokens.typography.colour.link]: tokens.color.interactive.linkOnDark,
		[tokens.color.interactive.link]: tokens.color.interactive.linkOnDark,
	},
});
