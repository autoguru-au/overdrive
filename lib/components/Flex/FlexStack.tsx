import React from 'react';

import { useBox } from '../Box/useBox/useBox';

import {
	type FlexComponentProps,
	type FlexStackProps,
	stackPropMapping,
} from './flex';

export type FlexStackComponentProps = FlexComponentProps<FlexStackProps>;

/**
 * A vertical layout component that arranges children in a column with
 * consistent spacing without wrapping contint within additional components.
 *
 * - Supports responsive spacing and alignment
 * - Can be reversed, centered, or justified
 *
 * The `stack` function is available to apply the same flex layout option
 * to any html element. Example use
 * `<div className={stack({ gap: '3', center: true })} />`
 *
 * **Note**: Responsive props (`align`, `justify`) take precedence over
 * shortcut props (`center`, `start`, etc.).
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
	gap = '2',
	justify,
	minWidth,
	reverse,
	start,
	width,

	...attrs // html attributes
}: FlexStackComponentProps) => {
	const { Component, componentProps } = useBox({
		...attrs,
		as,
		odComponent: 'flex-stack',
		...stackPropMapping({
			align,
			center,
			end,
			gap,
			justify,
			minWidth,
			reverse,
			start,
			width,
		}),
	});
	return <Component {...componentProps}>{children}</Component>;
};

FlexStack.displayName = 'FlexStack';
