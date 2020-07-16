import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { memo, NamedExoticComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import * as styleRefs from './SimplePagination.treat';

export enum EChangeDirection {
	Previous = 'previous',
	Next = 'next',
}

type TOnChangeEventHandler = (event: EChangeDirection) => void;

export interface Props {
	className?: string;
	hasNext?: boolean;
	hasPrevious?: boolean;
	onChange?: TOnChangeEventHandler;
}

export const SimplePagination: NamedExoticComponent<Props> = memo(
	({
		className = '',
		hasNext = false,
		hasPrevious = false,
		onChange = () => undefined,
	}) => {
		const styles = useStyles(styleRefs);
		const cls = clsx([styles.pagination, className]);
		const chevronLeftCls = clsx(styles.pagination, styles.chevron.default, {
			[styles.chevron.disabled]: !hasPrevious,
		});
		const chevronRightCls = clsx(
			styles.pagination,
			styles.chevron.default,
			{
				[styles.chevron.disabled]: !hasNext,
			},
		);
		const handleClick = (direction: EChangeDirection) => () => {
			onChange(direction);
		};

		return (
			<Box is="nav" className={cls} aria-label="pagination">
				<Button
					rounded
					disabled={!hasPrevious}
					size="small"
					variant="secondary"
					className={chevronLeftCls}
					aria-label="previous page"
					onClick={handleClick(EChangeDirection.Previous)}>
					<Icon
						className={styles.icon.default}
						size="medium"
						icon={ChevronLeftIcon}
					/>
				</Button>
				<Button
					rounded
					disabled={!hasNext}
					size="small"
					variant="secondary"
					className={chevronRightCls}
					aria-label="next page"
					onClick={handleClick(EChangeDirection.Next)}>
					<Icon
						className={styles.icon.default}
						size="medium"
						icon={ChevronRightIcon}
					/>
				</Button>
			</Box>
		);
	},
);
