import React from 'react';

import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';

import { inlineStyle } from './Flex.css';
import {
	type FlexComponentProps,
	type FlexInlineProps,
	inlinePropMapping,
} from './flex';

export type FlexInlineComponentProps = FlexComponentProps<FlexInlineProps>;

/**
 * A horizontal layout component that arranges items with consistent spacing
 * without wrapping content within additional components.
 *
 * - Supports responsive spacing and alignment
 * - Can be reversed, centered, or justified
 * - Wrapping behavior can be controlled
 *
 * The `inline` function is available to apply the same flex layout option
 * to any html element. Example use
 * `<div className={inline({ gap: '3', end: true })} />`
 *
 * **Note**: Responsive props (`align`, `justify`) take precedence over
 * shortcut props (`center`, `start`, etc.).
 *
 * @example
 * // Basic inline row with centered items
 * <FlexInline center gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FlexInline>
 *
 * @example
 * // Responsive properties
 * <FlexInline
 *   align={['start', 'center']}
 *   gap={{ mobile: '4', desktop: '6' }}
 * >
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 *   <Button>Action 3</Button>
 * </FlexInline>
 */
export const FlexInline = ({
	as,
	children,
	expand, // data attribute instead of style prop

	align,
	center,
	end,
	fullWidth,
	gap = '2',
	noWrap,
	justify,
	reverse,
	spaceBetween,
	start,

	...attrs // html attributes
}: FlexInlineComponentProps) => {
	const { Component, componentProps } = useBox({
		as,
		odComponent: 'flex-inline',
		className: inlineStyle,
		...inlinePropMapping({
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
		}),
		...dataAttrs({ expand }),
	});
	return (
		<Component {...attrs} {...componentProps}>
			{children}
		</Component>
	);
};

FlexInline.displayName = 'FlexInline';
