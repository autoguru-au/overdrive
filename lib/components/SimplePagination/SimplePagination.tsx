import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from '../Grid';
import { EGridDirection, EWrap } from '../Grid/stories';
import { ChevronLeftIcon, ChevronRightIcon, Icon } from '../Icon';
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
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Center}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space0}
			gutter={EGridSpace.Space3}
			Component={'span'}
			className={cls}>
			<GridItem
				display="inline-block"
				shrink={0}
				grow={0}
				Component={Button}
				rounded={true}
				disabled={!hasPrevious}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronLeftCls}
				onClick={handleClick(EChangeDirection.Previous)}>
				<Icon
					className={styles.icon}
					size={24}
					icon={ChevronLeftIcon}
				/>
			</GridItem>
			<GridItem
				display="inline-block"
				shrink={0}
				grow={0}
				Component={Button}
				rounded={true}
				disabled={!hasNext}
				size={EButtonSize.Small}
				variant={EButtonVariant.Secondary}
				className={chevronRightCls}
				onClick={handleClick(EChangeDirection.Next)}>
				<Icon
					className={styles.icon}
					size={24}
					icon={ChevronRightIcon}
				/>
			</GridItem>
		</Grid>
	);
};

export const SimplePagination = memo(SimplePaginationComponent);
