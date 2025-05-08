import { invariant } from '@autoguru/utilities';
import React, { type ElementType, type Ref, useContext } from 'react';

import {
	Box,
	type BoxBasedProps,
	type StyleProps,
	useBox,
	UseBoxProps,
} from '../Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface ColumnProps<E extends ElementType>
	extends BoxBasedProps,
		styles.ColumnRecipeVariants {
	order?: StyleProps['order'];
	ref?: Ref<E>;
	width?: styles.SprinklesColumnWidthResponsive['flexBasis'];
}

/**
 * Used within a `Columns` container. This component is designed to be a flex
 * item and must be used as a direct child of the `Columns` component. It
 * relies on the `ColumnContext` provided by the parent `Columns` component
 * for spacing and list item rendering.
 */
export const Column = <E extends ElementType>({
	alignSelf,
	children,
	grow = false,
	noShrink = false,
	order,
	ref,
	width,
	...boxProps
}: ColumnProps<E>) => {
	const columnsContext = useContext(ColumnContext);
	invariant(
		columnsContext !== null,
		'Column must be wrapped inside a Columns element',
	);

	const { isList, spaceXCls, spaceYCls } = columnsContext;
	const { Component, componentProps } = useBox<E>({
		...(boxProps as UseBoxProps<E>),
		display: 'flex',
		height: 'full',
		width: 'full',
	});

	return (
		<Box
			as={isList ? 'li' : 'div'}
			order={order}
			flexGrow={grow ? 1 : 0}
			flexShrink={noShrink ? 0 : void 0}
			className={[
				spaceXCls,
				spaceYCls,
				styles.sprinklesColumnWidthResponsive({ flexBasis: width }),
				styles.columnStyle({
					alignSelf,
					grow,
					noShrink,
				}),
			]}
		>
			<Component {...componentProps} ref={ref}>
				{children}
			</Component>
		</Box>
	);
};

Column.displayName = 'Column';
