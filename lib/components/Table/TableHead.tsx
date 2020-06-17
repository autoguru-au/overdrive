import * as React from 'react';
import { forwardRef, ReactChild } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { useTableContext } from './TableContext';
import * as styleRefs from './TableHead.treat';

interface Props {
	children: ReactChild | ReactChild[];
}

export const TableHead = forwardRef<HTMLTableHeaderCellElement, Props>(
	({ children }, ref) => {
		const styles = useStyles(styleRefs);
		const { stickyHead } = useTableContext();

		return (
			<Box
				ref={ref}
				is="thead"
				backgroundColour="gray100"
				className={stickyHead && styles.sticky}>
				{children}
			</Box>
		);
	},
);
