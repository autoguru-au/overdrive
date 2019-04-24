import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from '../Grid';
import { Text } from '../Text';
import styles from './style.scss';

export interface IProps {
	bullet?: string;
	ordered?: boolean;
	variant?: EVariant;
	className?: string;
}

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

export const BulletText: FunctionComponent<IProps> = ({
	variant = EVariant.Primary,
	className = '',
	children,
	ordered = false,
	bullet = '•',
}) => {
	const cls = cx([styles.root, className], {
		[styles.variantPrimary]: !!variant && variant === EVariant.Primary,
		[styles.variantSecondary]: !!variant && variant === EVariant.Secondary,
	});

	return (
		<Grid
			width="100%"
			height={null}
			direction={'row'}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={'nowrap'}
			padding={EGridSpace.Space0}
			gutter={EGridSpace.Space4}
			Component={ordered ? 'ol' : 'li'}
			className={cls}>
			<GridItem
				className={styles.bullet}
				shrink={0}
				grow={0}
				basis="var(--bullet--size)">
				<span className={styles.bulletText} children={bullet} />
			</GridItem>
			<GridItem
				Component={Text}
				shrink={1}
				grow={1}
				children={children}
			/>
		</Grid>
	);
};
