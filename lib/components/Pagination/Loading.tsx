import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, Icon } from '../Icon';
import styles from './style.scss';
import { Bubble } from './Bubble';

export interface IProps {
	className?: string;
	placeholderBubblesNum?: number;
}

export const LoadingComponent: FunctionComponent<IProps> = ({
	className = '',
	placeholderBubblesNum = 3,
}) => {
	const disabledChevCls = clsx([styles.chevron, styles.disabled]);

	return (
		<span className={clsx([styles.loading, className])}>
			<Icon
				size={25}
				icon={ChevronLeftIcon}
				className={disabledChevCls}
			/>
			{new Array(placeholderBubblesNum).fill('').map((_, index) => (
				<Bubble key={index} className={styles.disabled} children={''} />
			))}
			<Icon
				size={25}
				icon={ChevronRightIcon}
				className={disabledChevCls}
			/>
		</span>
	);
};

export const PaginationLoading = memo(LoadingComponent);
