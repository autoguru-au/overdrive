import { invariant } from '@autoguru/utilities';
import React, { forwardRef, useContext } from 'react';

import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box, type BoxProps } from '../Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface ColumnProps extends Omit<BoxProps, 'width'> {
	width?: ResponsiveProp<keyof typeof styles.width>;
	noShrink?: boolean;
	grow?: boolean;
}

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
	(
		{
			as,
			className,
			children,
			width,
			alignSelf,
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
				alignSelf={alignSelf}
				order={order}
				flexGrow={grow ? 1 : 0}
				flexShrink={noShrink ? 0 : undefined}
				className={[
					spaceXCls,
					spaceYCls,
					resolveResponsiveStyle(width, styles.width),
				]}
			>
				<Box
					ref={ref}
					as={as}
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

export default Column;
