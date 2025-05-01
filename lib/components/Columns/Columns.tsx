// import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

import {
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';
import { useBox, type UseBoxProps } from '../Box';

import * as styles from './Columns.css';
import type { ColumnWrapperVariants } from './Columns.css';

export interface ColumnsProps extends UseBoxProps, ColumnWrapperVariants {
	children?: ReactNode;
	space?: SprinklesResponsive['gap'];
	spaceX?: SprinklesResponsive['columnGap'];
	spaceY?: SprinklesResponsive['rowGap'];
}

export const Columns = forwardRef<HTMLDivElement, ColumnsProps>(
	(
		{
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
		},
		ref,
	) => {
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
			ref,
			...props,
		});

		return <Component {...componentProps}>{children}</Component>;
	},
);

Columns.displayName = 'Columns';

export default Columns;
