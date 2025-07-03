import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';

export type ResponsiveFlexProps = Pick<
	Sprinkles,
	| 'flexDirection'
	| 'flexWrap'
	| 'alignItems'
	| 'justifyContent'
	| 'gap'
	| 'order'
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
export const flex = (props: ResponsiveFlexProps) => {
	return sprinkles({
		display: 'flex',
		...props,
	});
};
