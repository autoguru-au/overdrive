import { invariant } from '@autoguru/utilities';
import React, { type Ref, useContext } from 'react';

import { Box, type StyleProps, type BoxBasedProps } from '../Box';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface ColumnProps
	extends BoxBasedProps<'div'>,
		styles.ColumnRecipeVariants {
	order?: StyleProps['order'];
	ref?: Ref<HTMLDivElement>;
	width?: styles.SprinklesColumnWidthResponsive['flexBasis'];
}

/**
 * Used within a `Columns` container. This component is designed to be a flex
 * item and must be used as a direct child of the `Columns` component. It
 * relies on the `ColumnContext` provided by the parent `Columns` component
 * for spacing and list item rendering.
 */
export const Column = ({
	as,
	alignSelf,
	children,
	className = '',
	grow = false,
	noShrink = false,
	order,
	ref,
	width,
	...boxProps
}: ColumnProps) => {
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
			flexGrow={grow ? 1 : 0}
			flexShrink={noShrink ? 0 : void 0}
			className={[
				spaceXCls,
				spaceYCls,
				styles.sprinklesColumnWidthResponsive({ flexBasis: width }),
				styles.columnStyle({
					alignSelf,
					grow,
					noShrink,
				}),
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
};

Column.displayName = 'Column';
