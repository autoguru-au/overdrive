import React, { type ElementType } from 'react';

import {
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';
import { type BoxBasedProps, useBox, type UseBoxProps } from '../Box';

export interface ColumnProps<E extends ElementType> extends BoxBasedProps<E> {
	alignSelf?: SprinklesResponsive['alignSelf'];
	order?: SprinklesResponsive['order'];
	width?: SprinklesResponsive['gridColumn'];
}

export const Column = <E extends ElementType>({
	alignSelf,
	className,
	children,
	order,
	width,
	...props
}: ColumnProps<E>) => {
	const { Component, componentProps } = useBox<E>({
		...props,
		className: [
			sprinklesResponsive({ alignSelf, gridColumn: width, order }),
			className,
		],
	} as UseBoxProps<E>);
	return <Component {...componentProps}>{children}</Component>;
};

Column.displayName = 'Column';
