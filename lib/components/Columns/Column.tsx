import React, { type ElementType, type Ref } from 'react';

import { type SprinklesResponsive } from '../../styles/sprinkles.css';
import { Box, type BoxBasedProps, useBox, type UseBoxProps } from '../Box';

export interface ColumnProps<E extends ElementType> extends BoxBasedProps<E> {
	alignSelf?: SprinklesResponsive['alignSelf'];
	justifyContent?: SprinklesResponsive['justifyContent'];
	order?: SprinklesResponsive['order'];
	ref?: Ref<E>;
	width?: SprinklesResponsive['gridColumn'];
}

export const Column = <E extends ElementType>({
	alignSelf,
	children,
	justifyContent,
	order,
	width,
	...props
}: ColumnProps<E>) => {
	const { Component, componentProps } = useBox<E>({
		...props,
		justifyContent: 'center',
		display: 'flex',
		height: 'full',
		width: 'full',
	} as UseBoxProps<E>);

	return (
		<Box
			alignSelf={alignSelf}
			gridColumn={width}
			justifyContent={justifyContent}
			order={order}
		>
			<Component {...componentProps}>{children}</Component>
		</Box>
	);
};

Column.displayName = 'Column';
