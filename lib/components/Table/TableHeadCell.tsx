import { ArrowUpIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type { AriaAttributes, MouseEventHandler } from 'react';
import * as React from 'react';
import { forwardRef, useCallback } from 'react';
import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import { Box } from '../Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';
import { Icon } from '../Icon';
import { Text } from '../Typography/Text';
import { VisuallyHidden } from '../VisuallyHidden';
import { useTableContext } from './TableContext';
import * as styleRefs from './TableHeadCell.treat';

type Sort = 'asc' | 'desc' | 'none';

type ChangeCallback = (sort: Sort) => void;

interface SortProps extends Pick<AriaAttributes, 'aria-label'> {
	sortDirection: Sort;
	onClick: MouseEventHandler;
}

interface Props extends Partial<Pick<SortProps, 'sortDirection'>> {
	padding?: keyof Theme['space'];
	align?: BoxStyleProps['textAlign'];
	onChange?: ChangeCallback;
	children?: string | null;
}

const shiftSort = (sort: Sort): Sort => {
	if (sort === 'asc') return 'desc';

	if (sort === 'desc') return 'none';

	return 'asc';
};

const sortToAria = (sort: Sort): AriaAttributes['aria-sort'] => {
	if (sort === 'asc') return 'ascending';

	if (sort === 'desc') return 'descending';

	return 'none';
};

export const TableHeadCell = forwardRef<HTMLTableCellElement, Props>(
	(
		{
			children,
			padding: incomingPadding,
			align = 'left',
			sortDirection,
			onChange,
		},
		ref,
	) => {
		const tableContext = useTableContext();
		const styles = useStyles(styleRefs);

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		const sortClickHandler = useCallback(() => {
			if (typeof onChange === 'function') {
				onChange(shiftSort(sortDirection ?? 'asc'));
			}
		}, [onChange]);

		const sorter =
			undefined === sortDirection ? null : (
				<Icon
					icon={ArrowUpIcon}
					size="small"
					className={clsx([
						styles.sorter,
						sortDirection === 'asc'
							? styles.sortDirection.up
							: styles.sortDirection.down,
					])}
				/>
			);

		const child = (
			<Box className={styles.label} alignItems="center">
				{align === 'right' && sorter}
				<Text strong size="2" is="span" colour="muted">
					{children}
					{sortDirection ? (
						<VisuallyHidden is="span">
							{' '}
							sorted {sortToAria(sortDirection)}
						</VisuallyHidden>
					) : null}
				</Text>
				{(align === 'left' || align === 'center') && sorter}
			</Box>
		);

		return (
			<Box
				ref={ref}
				is="th"
				scope="col"
				padding={padding}
				backgroundColour="gray100"
				borderColourBottom="light"
				borderWidthBottom="1"
				textAlign={align}
				aria-sort={
					sortDirection ? sortToAria(sortDirection) : undefined
				}
				className={tableContext.stickyHead && styles.sticky}
				onClick={sortDirection ? sortClickHandler : undefined}>
				{sortDirection ? (
					<Box
						is="button"
						tabIndex={-1}
						display="inlineBlock"
						className={styles.textSelect}>
						{child}
					</Box>
				) : (
					child
				)}
			</Box>
		);
	},
);
