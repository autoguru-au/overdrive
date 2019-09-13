import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';

import { Icon } from '../Icon';
import { Bubble } from './Bubble';
import styles from './style.scss';

export interface Props {
	className?: string;
	placeholderBubblesNum?: number;
}

export const LoadingComponent: FunctionComponent<Props> = ({
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
				<Bubble key={index} children="" className={styles.disabled} />
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
