import type { ReactNode } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

import * as styles from './Table.css';
import type { TableContext } from './context';
import { TableContextProvider } from './context';

export interface TableProps extends Partial<TableContext>, TestIdProp {
	/**
	 * The grid track definition for the table's columns, passed straight to
	 * `grid-template-columns` — one track per column.
	 *
	 * @example columnTemplate="auto 2fr 1fr auto"
	 */
	columnTemplate: string;

	/** The rows of the table — `TableRowGroup` elements. */
	children: ReactNode | ReactNode[];
}

/*
Worth noting we use the aria role grid here instead of table, as we have areas
	of interactivity, ie our potential buttons, or sorter headers.

@see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
	(
		{ children, padding = '4', stickyHead = false, columnTemplate, testId },
		ref,
	) => (
		<TableContextProvider padding={padding} stickyHead={stickyHead}>
			<Box
				as="table"
				ref={ref}
				role="grid"
				width="full"
				style={{ gridTemplateColumns: columnTemplate }}
				className={styles.root}
				odComponent="table"
				testId={testId}
			>
				{children}
			</Box>
		</TableContextProvider>
	),
);

Table.displayName = 'Table';
