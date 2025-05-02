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
		...props,
	} as UseBoxProps<E>);

	return (
		<Component {...componentProps} data-od-component="columns">
			{children}
		</Component>
	);
};

Columns.displayName = 'Columns';
