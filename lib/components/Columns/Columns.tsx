import React, { type ElementType } from 'react';

import {
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';
import { type PolymorphicBoxProps, useBox, type UseBoxProps } from '../Box';

import * as styles from './Columns.css';
import type { ColumnWrapperVariants } from './Columns.css';

export interface ColumnsBaseProps extends ColumnWrapperVariants {
	/**
	 * Sets the space (gap) between columns and rows.
	 * Responsive prop. Overridden by `spaceX` and `spaceY`.
	 */
	space?: SprinklesResponsive['gap'];
	/**
	 * Sets the horizontal space (column-gap) between columns.
	 * Responsive prop.
	 */
	spaceX?: SprinklesResponsive['columnGap'];
	/**
	 * Sets the vertical space (row-gap) between rows when columns wrap.
	 * Responsive prop.
	 */
	spaceY?: SprinklesResponsive['rowGap'];
}

export type StyledColumnsProps<E extends ElementType> = PolymorphicBoxProps<
	E,
	ColumnsBaseProps
>;

/**
 * `Columns` is a layout component used to arrange child elements horizontally in columns.
 * It provides control over spacing between columns (and rows when wrapping), alignment, and wrapping behavior.
 * It's ideal for creating grid-like layouts or distributing content horizontally.
 *
 * @example
 * // Basic usage with uniform spacing
 * <Columns space="4">
 *   <Column width="1/3"><Card>Column 1</Card></Column>
 *   <Column width="1/3"><Card>Column 2</Card></Column>
 *   <Column width="1/3"><Card>Column 3</Card></Column>
 * </Columns>
 *
 * @example
 * // Responsive spacing and alignment
 * <Columns spaceX={['2', '4']} spaceY="3" align="center">
 *   <Column width={['full', '1/2']}><Button>Button 1</Button></Column>
 *   <Column width={['full', '1/2']}><Button>Button 2</Button></Column>
 * </Columns>
 *
 * @example
 * // Preventing wrapping
 * <Columns noWrap space="5">
 *   <Item>Item A</Item>
 *   <Item>Item B</Item>
 *   <Item>Item C</Item>
 * </Columns>
 */
export const Columns = <E extends ElementType>({
	align = 'stretch',
	as,
	children,
	className,
	noWrap,
	space,
	spaceX,
	spaceY,
	wrappingDirection = 'default',
	...props
}: StyledColumnsProps<E>) => {
	const { Component, componentProps } = useBox({
		as,
		className: [
			styles.columnWrapper({
				align,
				noWrap,
				wrappingDirection,
			}),
			sprinklesResponsive({
				gap: space,
				columnGap: spaceX,
				rowGap: spaceY,
			}),
			className,
		],
		odComponent: 'columns',
		...props,
	} as UseBoxProps<E>);

	return <Component {...componentProps}>{children}</Component>;
};

Columns.displayName = 'Columns';
