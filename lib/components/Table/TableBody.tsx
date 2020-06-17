import * as React from 'react';
import { forwardRef } from 'react';

import { Box } from '../Box';

export const TableBody = forwardRef<HTMLTableSectionElement>(
	({ children }, ref) => (
		<Box ref={ref} is="tbody">
			{children}
		</Box>
	),
);
