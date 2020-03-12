import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, forwardRef, ReactElement, useContext } from 'react';
import { useStyles } from 'react-treat';

import {
	resolveResponsiveStyle,
	ResponsiveProp,
} from '../../utils/responsiveProps';
import { Box } from '../Box';
import * as styleRefs from './Column.treat';
import { ColumnContext } from './Columns';

interface Props extends Omit<ComponentProps<typeof Box>, 'width'> {
	width?: ResponsiveProp<
		| '1/2'
		| '1/3'
		| '2/3'
		| '1/4'
		| '3/4'
		| '1/5'
		| '2/5'
		| '3/5'
		| '4/5'
		| 'full'
		| 'auto'
	>;
	noShrink?: boolean;
	grow?: boolean;
	alignSelf?: 'top' | 'centre' | 'bottom' | 'stretch';
	className?: string;
	children: ReactElement | ReactElement[];
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

			...boxProps
		},
		ref,
	) => {
		const styles = useStyles(styleRefs);
		const columnsContext = useContext(ColumnContext);
		invariant(
			columnsContext !== null,
			'Column must be wrapped inside a Columns element',
		);

		const { isList, spaceXCls, spaceYCls } = columnsContext;

		return (
			<Box
				is={isList ? 'li' : 'div'}
				className={clsx(
					spaceXCls,
					spaceYCls,
					resolveResponsiveStyle(width, styles.width),
					noShrink && styles.shrinkOff,
					grow && styles.growOn,
					styles.align[alignSelf!],
				)}>
				<Box
					ref={ref}
					is={is}
					className={clsx(styles.content, className)}
					{...boxProps}>
					{children}
				</Box>
			</Box>
		);
	},
);
