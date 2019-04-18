import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
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
import { Bubble } from './Bubble';

export interface IProps {
	className?: string;
	placeholderBubblesNum?: number;
}

export const LoadingComponent: FunctionComponent<IProps> = ({
	className = '',
	placeholderBubblesNum = 3,
}) => {
	const disabledChevCls = cx([styles.chevron, styles.disabled]);

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
			className={cx([styles.loading, className])}>
			<GridItem
				grow={0}
				shrink={0}
				Component={Icon}
				size={25}
				icon={ChevronLeftIcon}
				display="inline-block"
				className={disabledChevCls}
			/>
			{new Array(placeholderBubblesNum).fill('').map((_, index) => (
				<GridItem
					Component={Bubble}
					grow={0}
					shrink={0}
					key={index}
					className={styles.disabled}
					children={''}
				/>
			))}
			<GridItem
				grow={0}
				shrink={0}
				Component={Icon}
				size={25}
				icon={ChevronRightIcon}
				display="inline-block"
				className={disabledChevCls}
			/>
		</Grid>
	);
};

export const PaginationLoading = memo(LoadingComponent);
