import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { ComponentProps, forwardRef, ReactNode, useContext } from 'react';

import { resolveResponsiveStyle_legacy, ResponsiveProp } from '../../utils/responsiveProps_legacy';
import { Box } from '../Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';


export interface Props extends Omit<ComponentProps<typeof Box>, 'width'> {
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
				flexGrow={grow ? 1 : 0}
				flexShrink={noShrink ? 0 : void 0}
				className={[
					spaceXCls,
					spaceYCls,
					resolveResponsiveStyle_legacy(width, styles.width),
					styles.align[alignSelf!],
				]}>
				<Box
					ref={ref}
					is={is}
					display="flex"
					width="full"
					height="full"
					className={className}
					{...boxProps}>
					{children}
				</Box>
			</Box>
		);
	},
);
