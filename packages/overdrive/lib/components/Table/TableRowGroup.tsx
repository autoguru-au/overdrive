import * as React from 'react';
import { forwardRef, ReactChild } from 'react';

import { Box } from '../Box';

export interface Props {
	children: ReactChild | ReactChild[];
}

export const TableRowGroup = forwardRef<HTMLDivElement, Props>(
	({ children }, ref) => (
		<Box ref={ref} role='rowgroup' display='contents'>
			{children}
		</Box>
	),
);
