import React, { type PropsWithChildren } from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
import type { SimpleAsProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';

import type { ResponsiveFlexProps } from './flex';

export interface StackProps {
	/** Cross-axis horizontal alignment of items (_responsive_) */
	align?: ResponsiveFlexProps['alignItems'];
	/** Shortcut center horizontal alignment */
	center?: boolean;
	/** Shortcut end/right alignment */
	end?: boolean;
	/** Item vertical spacing (_responsive_)*/
	gap?: ResponsiveFlexProps['gap'];
	/** Main-axis (vertical) alignment of items (_responsive_) */
	justify?: ResponsiveFlexProps['justifyContent'];
	/** Reverse item order */
	reverse?: boolean;
	/** Shortcut `space-between` justification */
	spaceBetween?: boolean;
	/** Shortcut start/left alignment */
	start?: boolean;
}

const stackPropMapping = ({
	align,
	center,
	end,
	gap = '2',
	justify,
	reverse,
	spaceBetween,
	start,
}: StackProps) =>
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
		justifyContent:
			justify ?? ((spaceBetween && 'space-between') || undefined),
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
export const stack = (props: StackProps) => sprinkles(stackPropMapping(props));

export interface FlexStackProps
	extends StackProps,
		PropsWithChildren,
		SimpleAsProp {}

/**
 * A vertical layout component that arranges children in a column with consistent spacing.
 * Built on top of the Box component with flexbox layout.
 *
 * **Note**: Explicit props (`align`, `justify`) take precedence over shortcut props (`center`, `start`, etc.).
 *
 * @example
 * // Basic stack
 * <FlexStack>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FlexStack>
 *
 * @example
 * // Full-width content with gap
 * <FlexStack fullWidth gap="4">
 *   <Text>Content 1</Text>
 *   <Text>Content 2</Text>
 *   <Text>Content 3</Text>
 * </FlexStack>
 *
 * @example
 * // Responsive stack with different alignments
 * <FlexStack
 *   align={['start', 'center']}
 *   gap={{ mobile: '2', desktop: '4' }}
 * >
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 *   <Button>Action 3</Button>
 * </FlexStack>
 */
export const FlexStack = ({ as, children, ...props }: FlexStackProps) => {
	const { Component, componentProps } = useBox({
		as,
		odComponent: 'flex-stack',
		...stackPropMapping(props),
	});
	return <Component {...componentProps}>{children}</Component>;
};

FlexStack.displayName = 'FlexStack';
