import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box';

export interface Props {
	children: ReactNode | ReactNode[];
}

export const TableRowGroup = forwardRef<HTMLDivElement, Props>(
	({ children }, ref) => (
		<Box ref={ref} role="rowgroup" display="contents">
			{children}
		</Box>
	),
);
