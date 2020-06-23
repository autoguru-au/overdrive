import { ArrowUpIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type { AriaAttributes, MouseEventHandler } from 'react';
import * as React from 'react';
import { forwardRef, useCallback } from 'react';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Typography/Text';
import { VisuallyHidden } from '../VisuallyHidden';
import { useTableContext } from './context';
import * as styleRefs from './TableHeadCell.treat';

type Sort = 'asc' | 'desc' | 'none';

type ChangeCallback = (sort: Sort) => void;

interface SortProps extends Pick<AriaAttributes, 'aria-label'> {
	sortDirection: Sort;
	onClick: MouseEventHandler;
}

interface Props
	extends Partial<Pick<SortProps, 'sortDirection'>>,
		Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Theme['space'];

	onChange?: ChangeCallback;

	children?: string | null;
}

// Moves the sort forward, asc->desc->none->asc->...
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

export const TableHeadCell = forwardRef<HTMLDivElement, Props>(
	(
		{
			align = 'left',
			onChange,
			padding: incomingPadding,
			sortDirection,
			'aria-label': ariaLabel,
			children,
		},
		ref,
	) => {
		const tableContext = useTableContext();
		const styles = useStyles(styleRefs);

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		const sortClickHandler = useCallback(() => {
			if (typeof onChange === 'function') {
				onChange(shiftSort(sortDirection ?? 'none'));
			}
		}, [onChange, sortDirection]);

		const shouldSort = typeof sortDirection === 'string';

		const sorter = (
			<Icon
				icon={ArrowUpIcon}
				size="small"
				className={clsx([
					styles.sorter.root,
					styles.sorter[sortDirection ?? 'none'],
				])}
			/>
		);

		const child = (
			<Inline
				alignY="center"
				alignX={alignmentToFlexAlignment(align)}
				space="1">
				{align === 'right' && shouldSort ? sorter : null}
				<Text strong size="2" is="span" colour="muted">
					{children}
					{shouldSort ? (
						<VisuallyHidden is="span">
							{' '}
							sorted {sortToAria(sortDirection!)}
						</VisuallyHidden>
					) : null}
				</Text>
				{(align === 'left' || align === 'center') && shouldSort
					? sorter
					: null}
			</Inline>
		);

		return (
			<Box
				ref={ref}
				role="columnheader"
				scope="col"
				display="flex"
				alignItems="center"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={padding}
				backgroundColour="gray100"
				borderColourBottom="light"
				borderWidthBottom="1"
				aria-sort={shouldSort ? sortToAria(sortDirection!) : undefined}
				aria-label={ariaLabel}
				className={tableContext.stickyHead && styles.sticky}
				onClick={sortDirection ? sortClickHandler : undefined}>
				{sortDirection ? (
					<Box
						is="button"
						display="block"
						width="full"
						tabIndex={-1}
						className={styles.sorterButton}>
						{child}
					</Box>
				) : (
					child
				)}
			</Box>
		);
	},
);
