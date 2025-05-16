import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box/Box';

export interface TableRowGroupProps {
	children: ReactNode | ReactNode[];
}

export const TableRowGroup = forwardRef<HTMLDivElement, TableRowGroupProps>(
	({ children }, ref) => (
		<Box ref={ref} role="rowgroup" display="contents">
			{children}
		</Box>
	),
);

TableRowGroup.displayName = 'TableRowGroup';
