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
export const FlexInline = ({
	as,
	children,
	expand, // data attribute instead of style prop

	align,
	center,
	end,
	gap,
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
