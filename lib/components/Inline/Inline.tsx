import type { ElementType, JSX } from 'react';
import * as React from 'react';
import { Children, isValidElement, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { SprinklesResponsive } from '../../styles/sprinkles.css';
import { Box, useBox, type UseBoxProps } from '../Box';
import { Text } from '../Text';

export type InlineDivider = ReactNode | boolean;
export interface InlineProps<E extends ElementType = 'div'> {
	alignX?: SprinklesResponsive['justifyContent'];
	alignY?: SprinklesResponsive['alignItems'];
	as?: E;
	children: ReactNode;
	dividers?: InlineDivider;
	noWrap?: boolean;
	space?: SprinklesResponsive['gap'];
	width?: SprinklesResponsive['width'];
}

const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<React.ElementType>;

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

	const { Component, componentProps } = useBox<E>({
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

	const itemTag = LIST_TAGS.includes(
		`${Component}` as keyof JSX.IntrinsicElements,
	)
		? 'li'
		: 'div';

	return (
		<Component {...componentProps}>
			{Children.map(
				items,
				(child, idx) =>
					child && (
						<Box
							alignItems={alignY}
							as={itemTag}
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
