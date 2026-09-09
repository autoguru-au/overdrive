import type { ReactNode } from 'react';
import * as React from 'react';
import { AriaAttributes, forwardRef } from 'react';

import { ThemeTokens as Tokens } from '../../themes';
import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import * as styles from './TableCell.css';
import { useTableContext, useTableRowContext } from './context';

export interface TableCellProps
	extends Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Tokens['space'];

	/**
	 * Controls whether this cell displays a hover background effect.
	 * When omitted, inherits from parent `TableRow` (which defaults to `true`).
	 */
	hover?: boolean;

	children?: ReactNode | null;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
	(
		{
			padding: incomingPadding,
			align = 'left',
			hover: incomingHover,
			'aria-label': ariaLabel,
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
