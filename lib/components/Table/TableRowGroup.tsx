import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

export interface TableRowGroupProps extends TestIdProp {
	/** The rows of this group — `TableRow` elements. */
	children: ReactNode | ReactNode[];
}

export const TableRowGroup = forwardRef<
	HTMLTableSectionElement,
	TableRowGroupProps
>(({ children, testId }, ref) => (
	<Box
		as="tbody"
		ref={ref}
		role="rowgroup"
		display="contents"
		odComponent="table-row-group"
		testId={testId}
	>
		{children}
	</Box>
));

TableRowGroup.displayName = 'TableRowGroup';
