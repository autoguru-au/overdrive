import React, { Children, type ReactNode, useMemo } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { Sprinkles } from '../../styles/sprinkles.css';
import { calcChildElement } from '../../utils/elements';
import { useBox, type UseBoxProps } from '../Box/useBox/useBox';

import * as styles from './Divider.css';

export interface StackProps
	extends Pick<UseBoxProps, 'as' | 'width' | 'alignItems'> {
	children: ReactNode;
	className?: string;
	/**
	 * Show a divider element between each item
	 */
	dividers?: boolean;
	/**
	 * Defines the gap between list items. Accepts responsive values
	 * @default '2'
	 */
	space?: Sprinkles['padding'];
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
export const Stack = ({
	as = 'div',
	children,
	className,

	alignItems,
	dividers = false,
	space: gap = '2',
	width,
}: StackProps) => {
	const { Component, componentProps } = useBox({
		as,
		className,
		odComponent: 'stack',

		display: 'flex',
		flexDirection: 'column',
		gap,
		width,
	});

	const items = useMemo(() => flattenChildren(children), [children]);
	const childAs = calcChildElement(as);

	const { Component: ChildComponent, componentProps: childComponentProps } =
		useBox({
			as: childAs,

			alignItems,
			display: alignItems ? 'flex' : undefined,
			flexDirection: alignItems ? 'column' : undefined,
		});

	if (items.length === 0) return null;

	return (
		<Component {...componentProps}>
			{Children.map(
				items,
				(child, idx) =>
					child && (
						<ChildComponent {...childComponentProps}>
							{dividers && idx > 0 && <Divider />}
							{child}
						</ChildComponent>
					),
			)}
		</Component>
	);
};
