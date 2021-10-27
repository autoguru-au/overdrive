import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { ComponentProps, forwardRef, ReactNode, useContext } from 'react';
import { useStyles } from 'react-treat';

import {
	resolveResponsiveStyle_legacy,
	ResponsiveProp,
} from '../../utils/responsiveProps_legacy';
import { Box } from '../Box';

import { ColumnContext } from './Columns';

import * as styleRefs from './Column.treat';

export interface Props extends Omit<ComponentProps<typeof Box>, 'width'> {
	width?: ResponsiveProp<keyof typeof styleRefs.width>;
	noShrink?: boolean;
	grow?: boolean;
	alignSelf?: keyof typeof styleRefs.align;
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
