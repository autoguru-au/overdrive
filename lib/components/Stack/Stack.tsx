import React, { Children, type ElementType, type ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { SprinklesResponsive } from '../../styles/sprinkles.css';
import { Box, useBox, type UseBoxProps } from '../Box';

import * as styles from './Divider.css';

export interface StackProps<E extends ElementType = 'div'>
	extends Pick<UseBoxProps<E>, 'className'> {
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
	 * Sets the horizontal alignment of items within the stack. Accepts responsive values
	 */
	alignItems?: SprinklesResponsive['alignItems'];
	/**
	 * Show a divider element between each item
	 */
	dividers?: boolean;
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

const Divider = () => <hr className={styles.hr} />;

/**
 * Stack arranges child elements vertically, one below the other.
 * It allows you to control the spacing between items, alignment, and optionally add dividers.
 * Useful for creating vertical lists, forms, or sections.
 *
 * @example
 * <Stack>
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 *   <Text>Item 3</Text>
 * </Stack>
 *
 * @example
 * <Stack space="4" dividers>
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </Stack>
 *
 * @example
 * <Stack alignItems="center" space="3">
 *   <Card>Card 1</Card>
 *   <Card>Card 2</Card>
 * </Stack>
 */
export const Stack = <E extends ElementType = 'div'>({
	space = '2',
	children,
	alignItems,
	width,
	dividers = false,
	...props
}: StackProps<E>) => {
	const { Component, componentProps, SemanticChild } = useBox<E>({
		display: 'flex',
		flexDirection: 'column',
		gap: space,
		width,
		...props,
	} as UseBoxProps<E>);

	const items = flattenChildren(children);
	// If there are not multiple children, return the bare item
	if (items.length < 2) {
		return <>{items}</>;
	}

	const Item = ({ children }: React.PropsWithChildren) => (
		<Box
			alignItems={alignItems}
			as={SemanticChild}
			display="flex"
			flexDirection="column"
			width="full"
		>
			{children}
		</Box>
	);

	return (
		<Component {...componentProps}>
			{Children.map(items, (child, idx) => (
				<Item>
					{dividers && idx > 0 && <Divider />}
					{child}
				</Item>
			))}
		</Component>
	);
};
