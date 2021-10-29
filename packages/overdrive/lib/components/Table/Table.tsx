import type { ReactChild } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';

import type { TableContext } from './context';
import { TableContextProvider } from './context';

import * as styleRefs from './Table.treat';

export interface Props extends Partial<TableContext> {
	columnTemplate: string;

	children: ReactChild | ReactChild[];
}

/*
Worth noting we use the aria role grid here instead of table, as we have areas
	of interactivity, ie our potential buttons, or sorter headers.

@see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export const Table = forwardRef<HTMLDivElement, Props>(
	({ children, padding = '4', stickyHead = false, columnTemplate }, ref) => {
		const styles = useStyles(styleRefs);

		return (
			<TableContextProvider padding={padding} stickyHead={stickyHead}>
				<Box
					ref={ref}
					role='grid'
					width='full'
					style={{ gridTemplateColumns: columnTemplate }}
					className={styles.root}>
					{children}
				</Box>
			</TableContextProvider>
		);
	},
);
