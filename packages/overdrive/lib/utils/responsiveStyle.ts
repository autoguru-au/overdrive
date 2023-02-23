import type {
	CSSProperties,
	StyleRule,
} from '@vanilla-extract/css/dist/vanilla-extract-css.cjs';

import { breakpoints } from '../themes/makeTheme';

export const responsiveStyle = (
	breakpointsEntries: Partial<Record<keyof typeof breakpoints, StyleRule>>,
): CSSProperties => {
	const styles = {};

	for (const [query, style] of Object.entries(breakpointsEntries)) {
		if (query === 'mobile') {
			Object.assign(styles, style);
			continue;
		}

		Object.assign(styles, {
			'@media': {
				// @ts-ignore
				...styles['@media'],
				// @ts-ignore
				[`screen and (min-width: ${breakpoints[query]})`]: style,
			},
		});
	}
	return styles;
};
