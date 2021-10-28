import { Tokens } from '../themes/tokens';

import type { CSSProperties, StyleWithSelectors } from '@vanilla-extract/css/dist/declarations/src/types';
import { vars } from '../themes/base/vars.css';

export const responsiveStyle = (
	breakpoints: Partial<Record<keyof Tokens['breakpoints'], StyleWithSelectors>>,
): CSSProperties => {

	// console.log({ responsiveStyle: breakpoints });
	const styles = {};

	for (const [query, style] of Object.entries(breakpoints)) {
		if (query === 'mobile') {
			Object.assign(styles, style);
			continue;
		}

		Object.assign(styles, {
			'@media': {
				// @ts-ignore
				...styles['@media'],
				// @ts-ignore
				[`screen and (min-width: ${vars.breakpoints[query]}px)`]: style,
			},
		});
	}

	//console.log({ styles });

	return styles;
};
