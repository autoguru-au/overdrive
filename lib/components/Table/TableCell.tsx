import type { ReactNode } from 'react';
import * as React from 'react';
import { AriaAttributes, forwardRef } from 'react';

import { ThemeTokens as Tokens } from '../../themes';
import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Text';

import * as styles from './TableCell.css';
import { useTableContext } from './context';

export interface Props extends Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Tokens['space'];

	children?: ReactNode | null;
}

export const TableCell = forwardRef<HTMLDivElement, Props>(
	(
		{
			padding: incomingPadding,
			align = 'left',
			'aria-label': ariaLabel,
			children,
		},
		ref,
	) => {
		const tableContext = useTableContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		return (
			<Box
				ref={ref}
				role="gridcell"
				// TODO: look into use of `scope` prop on non table headinging cells
				// scope="row"
				display="flex"
				alignItems="center"
				position="relative"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={padding}
				borderBottomWidth="1"
				aria-label={ariaLabel}
				className={styles.root}
			>
				{typeof children === 'string' ||
				typeof children === 'number' ? (
					<Text as="span" colour="dark" display="block" size="3">
						{children}
					</Text>
				) : (
					children
				)}
			</Box>
		);
	},
);

TableCell.displayName = 'TableCell';

export default TableCell;
