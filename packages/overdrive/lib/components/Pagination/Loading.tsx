import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo } from 'react';
import { useStyles } from 'react-treat';

import { Icon } from '../Icon';
import { Bubble } from './Bubble';
import * as styleRefs from './Pagination.treat';

export interface Props {
	className?: string;
	placeholderBubblesNum?: number;
}

export const LoadingComponent: FunctionComponent<Props> = ({
	className = '',
	placeholderBubblesNum = 3,
}) => {
	const styles = useStyles(styleRefs);
	const disabledChevCls = clsx(
		styles.activeItem.default,
		styles.chevron.default,
		styles.chevron.disabled,
	);
	return (
		<span className={clsx([styles.root, className])}>
			<span className={disabledChevCls}>
				<Icon
					className={styles.chevron.icon}
					size="medium"
					icon={ChevronLeftIcon}
				/>
			</span>
			{new Array(placeholderBubblesNum).fill('').map((_, index) => (
				<Bubble
					key={index}
					children=""
					className={styles.bubble.disabled}
				/>
			))}
			<span className={disabledChevCls}>
				<Icon
					className={styles.chevron.icon}
					size="medium"
					icon={ChevronRightIcon}
				/>
			</span>
		</span>
	);
};

export const PaginationLoading = memo(LoadingComponent);
