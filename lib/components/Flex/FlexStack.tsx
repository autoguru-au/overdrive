import React from 'react';

import { useBox } from '../Box/useBox/useBox';

import {
	type FlexComponentProps,
	type FlexStackProps,
	stackPropMapping,
} from './flex';

export type FlexStackComponentProps = FlexComponentProps<FlexStackProps>;

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
export const FlexStack = ({
	as,
	children,

	align,
	center,
	end,
	gap,
	justify,
	reverse,
	spaceBetween,
	start,

	...attrs // html attributes
}: FlexStackComponentProps) => {
	const { Component, componentProps } = useBox({
		as,
		odComponent: 'flex-stack',
		...stackPropMapping({
			align,
			center,
			end,
			gap,
			justify,
			reverse,
			spaceBetween,
			start,
		}),
	});
	return (
		<Component {...attrs} {...componentProps}>
			{children}
		</Component>
	);
};

FlexStack.displayName = 'FlexStack';
