import type { ReactChild } from 'react';
import * as React from 'react';
import { AriaAttributes, forwardRef } from 'react';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Text';
import { useTableContext } from './context';
import * as styleRefs from './TableCell.treat';

export interface Props extends Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Theme['space'];

	children?: ReactChild | null;
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
		const styles = useStyles(styleRefs);
		const tableContext = useTableContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		return (
			<Box
				ref={ref}
				role="gridcell"
				scope="row"
				display="flex"
				alignItems="center"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={padding}
				borderColourBottom="light"
				borderWidthBottom="1"
				aria-label={ariaLabel}
				className={styles.root}>
				{typeof children === 'string' ||
				typeof children === 'number' ? (
					<Text
						is="span"
						align={align}
						colour="dark"
						display="block"
						size="3">
						{children}
					</Text>
				) : (
					children
				)}
			</Box>
		);
	},
);
