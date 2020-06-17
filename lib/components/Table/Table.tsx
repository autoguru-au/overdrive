import * as React from 'react';
import { forwardRef, ReactChild } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './Table.treat';
import type { TableContext } from './TableContext';
import { TableContextProvider } from './TableContext';

interface Props extends Partial<TableContext> {
	children: ReactChild | ReactChild[];
}

export const Table = forwardRef<HTMLTableElement, Props>(
	({ children, padding = '4', stickyHead = false }, ref) => {
		const styles = useStyles(styleRefs);

		return (
			<TableContextProvider padding={padding} stickyHead={stickyHead}>
				<Box
					ref={ref}
					is="table"
					width="full"
					className={stickyHead && styles.sticky}>
					{children}
				</Box>
			</TableContextProvider>
		);
	},
);
