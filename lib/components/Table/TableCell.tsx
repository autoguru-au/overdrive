import type { ReactNode } from 'react';
import * as React from 'react';
import { AriaAttributes, forwardRef } from 'react';

import { ThemeTokens as Tokens } from '../../themes';
import type { TestIdProp } from '../../types';
import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import * as styles from './TableCell.css';
import { useTableContext, useTableRowContext } from './context';

export interface TableCellProps
	extends Partial<Pick<AriaAttributes, 'aria-label'>>,
		TestIdProp {
	/**
	 * Horizontal alignment of the cell content.
	 * Defaults to `'left'`.
	 */
	align?: Alignment;

	/**
	 * Padding applied to the cell, as a space token.
	 * When omitted, inherits from the parent `Table` (which defaults to `'4'`).
	 */
	padding?: keyof Tokens['space'];

	/**
	 * Controls whether hovering this cell paints the hover background.
	 * When omitted, inherits from the parent `TableRow` (which defaults to
	 * `true`). With the row's hover on, the wash covers the whole row; a cell
	 * that turns hover on inside a `hover={false}` row washes just itself.
	 */
	hover?: boolean;

	/**
	 * Cell content. Strings and numbers are wrapped in a `Text` element;
	 * any other node is rendered as-is.
	 */
	children?: ReactNode | null;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
	(
		{
			padding: incomingPadding,
			align = 'left',
			hover: incomingHover,
			'aria-label': ariaLabel,
			testId,
			children,
		},
		ref,
	) => {
		const tableContext = useTableContext();
		const rowContext = useTableRowContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';
		const hover = incomingHover ?? rowContext?.hover ?? true;

		return (
			<Box
				as="td"
				ref={ref}
				role="gridcell"
				display="flex"
				alignItems="center"
				position="relative"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={padding}
				borderBottomWidth="1"
				aria-label={ariaLabel}
				className={styles.root}
				odComponent="table-cell"
				testId={testId}
				{...dataAttrs({ hover })}
			>
				{typeof children === 'string' ||
				typeof children === 'number' ? (
					<Text as="span" color="primary" display="block" size="3">
						{children}
					</Text>
				) : (
					children
				)}
			</Box>
		);
	},
);

TableCell.displayName = 'TableCell';
