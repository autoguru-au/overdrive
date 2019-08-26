import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import { Icon } from '../Icon';
import styles from './style.scss';

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

export const SimplePaginationComponent: FunctionComponent<Props> = ({
	className = '',
	hasNext = false,
	hasPrevious = false,
	onChange = () => void 0,
}) => {
	const cls = clsx([styles.pagination, className]);
	const chevronLeftCls = clsx([styles.chevron], {
		[styles.disabled]: !hasPrevious,
	});
	const chevronRightCls = clsx([styles.chevron], {
		[styles.disabled]: !hasNext,
	});
	const handleClick = (direction: EChangeDirection) => () => {
		onChange(direction);
	};

	return (
		<nav className={cls} aria-label="pagination">
			<Button
				rounded
				disabled={!hasPrevious}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronLeftCls}
				aria-label="previous page"
				onClick={handleClick(EChangeDirection.Previous)}>
				<Icon
					className={styles.icon}
					size={24}
					icon={ChevronLeftIcon}
				/>
			</Button>
			<Button
				rounded
				disabled={!hasNext}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronRightCls}
				aria-label="next page"
				onClick={handleClick(EChangeDirection.Next)}>
				<Icon
					className={styles.icon}
					size={24}
					icon={ChevronRightIcon}
				/>
			</Button>
		</nav>
	);
};

export const SimplePagination = memo(SimplePaginationComponent);
