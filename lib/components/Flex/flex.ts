import type { ComponentPropsWithoutRef } from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
import type { SimpleAsProp } from '../../types';

export type FlexComponentProps<T> = Omit<
	ComponentPropsWithoutRef<'div'>,
	keyof Sprinkles | keyof T | 'style'
> &
	SimpleAsProp &
	T;

export interface FlexInlineProps {
	/**
	 * Main-axis horizontal alignment of items (_responsive_)
	 * @default start
	 */
	align?: Sprinkles['justifyContent'];
	/** Shortcut center horizontal alignment */
	center?: boolean;
	/** Shortcut end/bottom alignment */
	end?: boolean;
	/** Child elements should fill available space */
	expand?: boolean;
	/** Adds 100% width */
	fullWidth?: boolean;
	/** Item horizontal spacing (_responsive_)*/
	gap?: Sprinkles['gap'];
	/** Prevent items from wrapping to the next row */
	noWrap?: boolean;
	/** Cross-axis vertical alignment of items (_responsive_) */
	justify?: Sprinkles['alignItems'];
	/** Reverse item order */
	reverse?: boolean;
	/** Shortcut `space-between` justification */
	spaceBetween?: boolean;
	/** Shortcut start/top alignment */
	start?: boolean;
}

export const inlinePropMapping = ({
	align,
	center,
	end,
	fullWidth,
	gap,
	noWrap,
	justify,
	reverse,
	spaceBetween,
	start,
}: FlexInlineProps) =>
	({
		alignItems: justify,
		display: 'flex',
		flexDirection: (reverse && 'row-reverse') || 'row',
		flexWrap: noWrap === true ? 'nowrap' : 'wrap',
		gap,
		justifyContent:
			align ??
			((start && 'start') ||
				(center && 'center') ||
				(end && 'end') ||
				(spaceBetween && 'space-between') ||
				'start'),
		width: fullWidth === true ? 'full' : undefined,
	}) satisfies Sprinkles;

/**
 * Creates a horizontal layout, convenience function for use with `className`.
 * Accepts responsive values
 *
 * @example
 * // Basic row with defaults
 * const simple = row();
 *
 * // Centered row with responsive gap
 * const centered = row({
 *   align: 'center',
 *   justify: 'center',
 *   gap: { mobile: '2', tablet: '4', desktop: '6' }
 * });
 */
export const inline = (props: FlexInlineProps) =>
	sprinkles(inlinePropMapping(props));

// ---

export interface FlexStackProps {
	/** Cross-axis horizontal alignment of items (_responsive_) */
	align?: Sprinkles['alignItems'];
	/** Shortcut center horizontal alignment */
	center?: boolean;
	/** Shortcut end/right alignment */
	end?: boolean;
	/** Item vertical spacing (_responsive_)*/
	gap?: Sprinkles['gap'];
	/** Main-axis vertical alignment of items (_responsive_) */
	justify?: Sprinkles['justifyContent'];
	/** Reverse item order */
	reverse?: boolean;
	/** Shortcut start/left alignment */
	start?: boolean;
}

export const stackPropMapping = ({
	align,
	center,
	end,
	gap,
	justify,
	reverse,
	start,
}: FlexStackProps) =>
	({
		alignItems:
			align ??
			((start && 'start') ||
				(center && 'center') ||
				(end && 'end') ||
				undefined),
		display: 'flex',
		flexDirection: (reverse && 'column-reverse') || 'column',
		gap,
		justifyContent: justify,
	}) satisfies Sprinkles;

/**
 * Creates a vertical layout, convenience function for use with `className`.
 * Accepts responsive values
 *
 * @example
 * // Basic stack with defaults
 * const simple = stack();
 *
 * // Centered stack with responsive gap
 * const centered = stack({
 *   align: 'center',
 *   justify: 'center',
 *   gap: { mobile: '2', tablet: '4', desktop: '6' }
 * });
 *
 * // Full width stack items
 * const responsiveStack = stack({
 * 	 align: 'stretch',
 * });
 */
export const stack = (props: FlexStackProps) =>
	sprinkles(stackPropMapping(props));
