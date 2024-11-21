import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { ComponentProps, forwardRef, ReactNode, useContext } from 'react';

import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box } from '../Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface Props
	extends Omit<ComponentProps<typeof Box>, 'width' | 'css'> {
	width?: ResponsiveProp<keyof typeof styles.width>;
	noShrink?: boolean;
	grow?: boolean;
	alignSelf?: keyof typeof styles.align;
	className?: string;
	children: ReactNode | ReactNode[];
}

export const Column = forwardRef<HTMLElement, Props>(
	(
		{
			className = '',
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
				is={isList ? 'li' : 'div'}
				order={order}
				flexGrow={grow ? 1 : 0}
				flexShrink={noShrink ? 0 : void 0}
				className={[
					spaceXCls,
					spaceYCls,
					resolveResponsiveStyle(width, styles.width),
					styles.align[alignSelf!],
				]}
			>
				<Box
					ref={ref}
					is={is}
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

export default Column;
