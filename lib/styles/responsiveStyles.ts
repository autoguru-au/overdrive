import type { CSSProperties, StyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

import { breakpoints, type Breakpoints } from '../themes/makeTheme';

import { responsiveConditions } from './sprinkles.css';

/**
 * Type for defining styles for each breakpoint
 */
export type ResponsiveStyleMap = Partial<Record<Breakpoints, StyleRule>>;

/**
 * Creates a single responsive style class that applies different styles at different breakpoints
 *
 * @param styles - Object defining styles for each breakpoint
 * @returns A single vanilla-extract style class with responsive behavior
 *
 * @example
 * ```typescript
 * const styles = createResponsiveClass({
 *   mobile: { padding: '16px', fontSize: '14px' },
 *   tablet: { padding: '24px', fontSize: '16px' },
 *   desktop: { padding: '32px', fontSize: '18px' }
 * });
 *
 * // Usage in a component
 * <div className={styles}>Responsive content</div>
 * ```
 */
export const createResponsiveClass = (styles: ResponsiveStyleMap): string => {
	const responsiveStyle: CSSProperties = {};

	// Build the responsive style object
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
	return style(responsiveStyle);
};
