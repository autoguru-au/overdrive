import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { forwardRef, ReactNode, useContext } from 'react';

import { Box, type BoxProps } from '../Box/Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface ColumnProps
	extends Omit<BoxProps, 'alignSelf' | 'width' | 'css'>,
		styles.ColumnRecipeVariants {
	width?: styles.SprinklesColumnWidth['flexBasis'];
	className?: string;
	children: ReactNode | ReactNode[];
}

export const Column = forwardRef<HTMLElement, ColumnProps>(
	(
		{
			className,
			children,
			width,
			alignSelf,
			is,
			noShrink = false,
			grow = false,
			order,

			...boxProps
		},
		ref,
	) => {
		const columnsContext = useContext(ColumnContext);
		invariant(
			columnsContext !== null,
			'Column must be wrapped inside a Columns element',
		);

		const { isList, spaceXCls, spaceYCls } = columnsContext;

		return (
			<Box
				as={isList ? 'li' : 'div'}
				order={order}
				className={[
					spaceXCls,
					spaceYCls,
					styles.sprinklesColumnWidthResponsive({ flexBasis: width }),
					styles.columnStyle({ alignSelf, grow, noShrink }),
				]}
			>
				<Box
					ref={ref}
					as={is}
					display="flex"
					width="full"
					height="full"
					className={className}
					{...boxProps}
				>
					{children}
				</Box>
			</Box>
		);
	},
);

Column.displayName = 'Column';
