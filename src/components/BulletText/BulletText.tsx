import cx from 'clsx';
import React, { FunctionComponent } from 'react';
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

	const Tag = ordered ? 'ol' : 'li';

	return (
		<Tag className={cls}>
			<div className={styles.bullet}>
				<span className={styles.bulletText} children={bullet} />
			</div>
			<Text children={children} />
		</Tag>
	);
};
