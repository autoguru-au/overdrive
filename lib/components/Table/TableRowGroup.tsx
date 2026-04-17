import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box/Box';

export interface TableRowGroupProps {
	children: ReactNode | ReactNode[];
}

export const TableRowGroup = forwardRef<
	HTMLTableSectionElement,
	TableRowGroupProps
>(({ children }, ref) => (
	<Box as="tbody" ref={ref} role="rowgroup" display="contents">
		{children}
	</Box>
));

TableRowGroup.displayName = 'TableRowGroup';
