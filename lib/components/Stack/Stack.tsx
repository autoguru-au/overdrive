import clsx from 'clsx';
import React, { Children, type ReactNode, useMemo } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { Sprinkles } from '../../styles/sprinkles.css';
import { Box, type BoxProps } from '../Box/Box';

import * as styles from './Stack.css';

export interface StackProps
	extends Pick<BoxProps, 'as' | 'width' | 'alignItems'> {
	children: ReactNode | ReactNode[];
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

export const LIST_MAP = {
	ol: 'li',
	ul: 'li',
} as const;

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
	alignItems,
	as = 'div',
	className,
	children,
	dividers = false,
	space = '2',
	width,
}: StackProps) => {
	const items = useMemo(() => flattenChildren(children), [children]);

	if (items.length === 0) {
		return null;
	}

	const childEl =
		typeof as === 'string' && as in LIST_MAP
			? LIST_MAP[as as keyof typeof LIST_MAP]
			: 'div';

	return (
		<Box
			as={as}
			className={clsx(dividers && styles.stackWithDividers, className)}
			display="flex"
			flexDirection="column"
			gap={space}
			odComponent="stack"
			width={width}
		>
			{Children.map(
				items,
				(child, idx) =>
					child && (
						<Box
							alignItems={alignItems}
							as={childEl}
							display={alignItems ? 'flex' : undefined}
							flexDirection={alignItems ? 'column' : undefined}
						>
							{dividers && idx > 0 && <Divider />}
							{child}
						</Box>
					),
			)}
		</Box>
	);
};
