import { ChevronLeft, ChevronRight } from '@autoguru/icons';
import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import { Icon } from '../Icon';
import styles from './style.scss';

export enum EChangeDirection {
	Previous = 'previous',
	Next = 'next',
}

type TOnChangeEventHandler = (event: EChangeDirection) => void;

export interface IProps {
	className?: string;
	hasNext: boolean;
	hasPrevious: boolean;
	onChange?: TOnChangeEventHandler;
}

export const SimplePaginationComponent: FunctionComponent<IProps> = ({
	className = '',
	hasNext,
	hasPrevious,
	onChange = () => void 0,
}) => {
	const cls = cx([styles.pagination, className]);
	const chevronLeftCls = cx([styles.chevron], {
		[styles.disabled]: !hasPrevious,
	});
	const chevronRightCls = cx([styles.chevron], {
		[styles.disabled]: !hasNext,
	});
	const handleClick = (direction: EChangeDirection) => () => {
		onChange(direction);
	};

	return (
		<div className={cls}>
			<Button
				rounded={true}
				disabled={!hasPrevious}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronLeftCls}
				onClick={handleClick(EChangeDirection.Previous)}>
				<Icon className={styles.icon} size={24} icon={ChevronLeft} />
			</Button>
			<Button
				rounded={true}
				disabled={!hasNext}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronRightCls}
				onClick={handleClick(EChangeDirection.Next)}>
				<Icon className={styles.icon} size={24} icon={ChevronRight} />
			</Button>
		</div>
	);
};

export const SimplePagination = memo(SimplePaginationComponent);
