import React, {
	Children,
	isValidElement,
	type ElementType,
	type ReactNode,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { SprinklesResponsive } from '../../styles/sprinkles.css';
import { Box, useBox, type UseBoxProps } from '../Box';
import { Text } from '../Text';

export type InlineDivider = ReactNode | boolean;
export interface InlineProps<E extends ElementType = 'div'> {
	/**
	 * Sets the horizontal alignment
	 */
	alignX?: SprinklesResponsive['justifyContent'];
	/**
	 * Sets the vertical alignment
	 * @default 'center'
	 */
	alignY?: SprinklesResponsive['alignItems'];
	/**
	 * The HTML element
	 * @default 'div'
	 */
	as?: E;
	/**
	 * The content to be rendered inside the Inline component, usually multiple child elements
	 */
	children: ReactNode;
	/**
	 * A divider element to render between each child. Accepts `true`/`false` for default separator or custom JSX
	 */
	dividers?: InlineDivider;
	/**
	 * Control wrapping - `true` prevents items from wrapping to the next line when they overflow the container width
	 * @default false (items wrap)
	 */
	noWrap?: boolean;
	/**
	 * Defines the gap between list items. Accepts responsive values
	 * @default '2'
	 */
	space?: SprinklesResponsive['gap'];
	/**
	 * Sets the width of the Inline container. Accepts responsive values
	 */
	width?: SprinklesResponsive['width'];
}

const renderDivider = (dividers: InlineDivider) => {
	if (!dividers) return null;
	if (typeof dividers === 'boolean') return <Text>•</Text>;
	if (isValidElement(dividers)) return dividers;
	return <Text>{dividers}</Text>;
};

export const Inline = <E extends ElementType = 'div'>({
	alignX,
	alignY = 'center',
	children,
	dividers,
	noWrap,
	space = '2',
	width,
	...props
}: InlineProps<E>) => {
	const divider = renderDivider(dividers);

	const { Component, componentProps, ChildComponent } = useBox<E>({
		alignItems: alignY,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: noWrap ? 'nowrap' : 'wrap',
		gap: space,
		justifyContent: alignX,
		position: 'relative',
		width,
		...props,
	} as UseBoxProps<E>);

	const items = flattenChildren(children);
	// If there are not multiple children, return the bare item
	if (items.length < 2) {
		return <>{items}</>;
	}

	return (
		<Component {...componentProps}>
			{Children.map(
				items,
				(child, idx) =>
					child && (
						<Box
							alignItems={alignY}
							as={ChildComponent}
							display="flex"
							gap={space}
							flexWrap="nowrap"
						>
							{child}
							{dividers && idx !== items.length - 1 && (
								<Box aria-hidden>{divider}</Box>
							)}
						</Box>
					),
			)}
		</Component>
	);
};
