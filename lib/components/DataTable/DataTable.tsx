import type { ReactNode } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';

import { Box } from '../Box/Box';
import { Table, type TableProps } from '../Table/Table';

import * as styles from './DataTable.css';

export interface DataTableProps extends Omit<TableProps, 'ref'> {
	/** Minimum width before horizontal scroll activates. CSS value, e.g. '800px'. */
	minWidth?: string;

	/** Accessible label for the scrollable region. */
	'aria-label'?: string;

	children: ReactNode | ReactNode[];
}

/**
 * A responsive data table wrapper that enables horizontal scrolling on narrow
 * containers. Composes the existing `Table` component inside a scrollable
 * region with keyboard-accessible overflow.
 */
export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
	(
		{
			minWidth,
			'aria-label': ariaLabel = 'Data table',
			children,
			columnTemplate,
			padding,
			stickyHead,
		},
		ref,
	) => (
		<Box
			ref={ref}
			role="region"
			aria-label={ariaLabel}
			tabIndex={0}
			overflowX="auto"
			className={styles.scrollContainer}
			odComponent="data-table"
		>
			<Box
			className={styles.innerWrapper}
			style={minWidth ? { minWidth } : undefined}
		>
				<Table
					columnTemplate={columnTemplate}
					padding={padding}
					stickyHead={stickyHead}
				>
					{children}
				</Table>
			</Box>
		</Box>
	),
);

DataTable.displayName = 'DataTable';
