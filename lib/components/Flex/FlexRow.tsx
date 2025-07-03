import React, { type PropsWithChildren } from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
import type { SimpleAsProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';

import { component as componentStyle } from './Flex.css';
import type { ResponsiveFlexProps } from './flex';

export interface RowProps {
	/** Cross-axis horizontal alignment of items (_responsive_) */
	align?: ResponsiveFlexProps['justifyContent'];
	/** Shortcut center horizontal alignment */
	center?: boolean;
	/** Shortcut end/bottom alignment */
	end?: boolean;
	/** Child elements should fill available space */
	expand?: boolean;
	/** Item horizontal spacing (_responsive_)*/
	gap?: ResponsiveFlexProps['gap'];
	/** Prevent items from wrapping to the next row */
	noWrap?: boolean;
	/** Main-axis (horizontal) alignment of items (_responsive_) */
	justify?: ResponsiveFlexProps['alignItems'];
	/** Reverse item order */
	reverse?: boolean;
	/** Shortcut `space-between` justification */
	spaceBetween?: boolean;
	/** Shortcut start/top alignment */
	start?: boolean;
}

const rowPropMapping = ({
	align = 'start',
	center,
	end,
	gap = '2',
	noWrap,
	justify,
	reverse,
	spaceBetween,
	start,
}: RowProps) =>
	({
		alignItems: justify,
		display: 'flex',
		flexDirection: (reverse && 'row-reverse') || 'row',
		flexWrap: noWrap === true ? 'nowrap' : 'wrap',
		gap,
		justifyContent:
			(start && 'start') ||
			(center && 'center') ||
			(end && 'end') ||
			(spaceBetween && 'space-between') ||
			align,
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
export const row = (props: RowProps) => sprinkles(rowPropMapping(props));

export interface FlexRowProps
	extends RowProps,
		PropsWithChildren,
		SimpleAsProp {}

/**
 * A horizontal layout component that arranges items with consistent spacing.
 *
 * @example
 * // Basic row centred
 * <FlexRow center gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FlexRow>
 *
 * @example
 * // Responsive properties
 * <FlexRow
 *   align={['start', 'center']}
 *   gap={{ mobile: '4', desktop: '6' }}
 * >
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 *   <Button>Action 3</Button>
 * </FlexRow>
 */
export const FlexRow = ({ as, children, expand, ...props }: FlexRowProps) => {
	const { Component, componentProps } = useBox({
		as,
		odComponent: 'flex-row',
		className: componentStyle,
		...rowPropMapping(props),
		...dataAttrs({ expand }),
	});
	return <Component {...componentProps}>{children}</Component>;
};

FlexRow.displayName = 'FlexRow';
