import type { CSSProperties, StyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

import { breakpoints, type Breakpoints } from '../themes/makeTheme';

import { cssLayerMap, type CSSLayers } from './layers.css';
import { responsiveConditions } from './sprinkles.css';

/**
 * Type for defining styles for each breakpoint
 */
export type ResponsiveStyleMap = Partial<Record<Breakpoints, StyleRule>>;

/**
 * Creates a single responsive style class that applies different styles at different breakpoints
 *
 * @param styles - Object defining styles for each breakpoint
 * @param layer - Optional CSS layer name to apply the styles within
 * @returns A single vanilla-extract style class with responsive behavior
 *
 * @example
 * ```typescript
 * const styles = responsiveStyles({
 *   mobile: { padding: '16px', fontSize: '14px' },
 *   tablet: { padding: '24px', fontSize: '16px' },
 *   desktop: { padding: '32px', fontSize: '18px' }
 * });
 *
 * // With CSS layer
 * const layeredStyles = responsiveStyles({
 *   mobile: { padding: '16px', fontSize: '14px' },
 *   tablet: { padding: '24px', fontSize: '16px' },
 *   desktop: { padding: '32px', fontSize: '18px' }
 * }, 'component');
 *
 * // Usage in a component
 * <div className={styles}>Responsive content</div>
 * ```
 */
export const responsiveStyles = (
	styles: ResponsiveStyleMap,
	layer?: CSSLayers,
) => {
	const responsiveStyle: CSSProperties = {};

	for (const [breakpoint, styleRule] of Object.entries(styles)) {
		if (breakpoint in breakpoints) {
			const breakpointKey = breakpoint as Breakpoints;

			if (breakpointKey === breakpoints[0]) {
				// Default (mobile) styles are applied directly
				Object.assign(responsiveStyle, styleRule);
			} else {
				// Larger breakpoints use media queries
				const mediaQuery =
					responsiveConditions[breakpointKey]['@media'];

				if (!responsiveStyle['@media']) {
					responsiveStyle['@media'] = {};
				}

				(responsiveStyle['@media'] as Record<string, StyleRule>)[
					mediaQuery
				] = styleRule;
			}
		}
	}

	if (layer) {
		return style({
			'@layer': {
				[cssLayerMap[layer]]: responsiveStyle,
			},
		});
	}

	return style(responsiveStyle);
};
