import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';

export const component = style({});
globalStyle(`${component}[data-expand] > *`, {
	flexGrow: '1',
});

export const layout = recipe({
	base: sprinkles({
		display: 'flex',
	}),
	variants: {
		direction: {
			inline: sprinkles({
				flexDirection: 'row',
				flexWrap: 'wrap',
			}),
			stack: sprinkles({
				flexDirection: 'column',
			}),
		},
	},
	defaultVariants: {
		direction: 'stack',
	},
});

// Responsive layout utility that leverages sprinkles responsive capabilities directly
export type ResponsiveLayoutProps = Pick<
	Sprinkles,
	'flexDirection' | 'flexWrap' | 'alignItems' | 'justifyContent' | 'gap'
>;

/**
 * Creates responsive flex layouts by accepting sprinkles responsive props directly.
 * This is a specialized subset of sprinkles focused on flex layout properties.
 *
 * @example
 * // Stack on mobile, inline on tablet+
 * createResponsiveLayout({
 *   flexDirection: { mobile: 'column', tablet: 'row' },
 *   flexWrap: { mobile: 'nowrap', tablet: 'wrap' }
 * })
 *
 * // Simple inline layout
 * createResponsiveLayout({
 *   flexDirection: 'row',
 *   flexWrap: 'wrap'
 * })
 */
export const flex = (props: ResponsiveLayoutProps) => {
	return sprinkles({
		display: 'flex',
		...props,
	});
};

/**
 * Creates a vertical stack layout convenince function for use with `className`
 *
 * @param alignItems - Cross-axis alignment of items (default: 'start')
 * @param flexWrap - Whether items should wrap (default: 'wrap')
 * @param gap - Space between items (default: '2')
 * @param justifyContent - Main-axis alignment of items (default: 'start')
 *
 * @example
 * // Basic stack with defaults
 * const basicStack = stack({});
 *
 * // Centered stack with larger gap
 * const centeredStack = stack({
 *   alignItems: 'center',
 *   justifyContent: 'center',
 *   gap: '4'
 * });
 *
 * // Responsive stack with different gaps per breakpoint
 * const responsiveStack = stack({
 *   gap: { mobile: '2', tablet: '4', desktop: '6' }
 * });
 */
export const stack = ({
	alignItems = 'start',
	flexWrap = 'wrap',
	gap = '2',
	justifyContent = 'start',
}: ResponsiveLayoutProps) =>
	sprinkles({
		alignItems,
		display: 'flex',
		flexDirection: 'column',
		flexWrap,
		gap,
		justifyContent,
	});
