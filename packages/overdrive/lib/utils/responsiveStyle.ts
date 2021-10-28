import type { CSSProperties, StyleWithSelectors } from '@vanilla-extract/css/dist/declarations/src/types';

import { breakpoints } from '../themes/base/tokens';

export const responsiveStyle = (
	breakpointsEntries: Partial<Record<keyof typeof breakpoints, StyleWithSelectors>>,
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
