import cx from 'clsx';
import React, { FunctionComponent, ReactElement } from 'react';
import { Text } from '../Text';
import styles from './style.scss';

export interface IProps {
	bullet?: string | ReactElement;
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
	bullet: Bullet,
}) => {
	const cls = cx([styles.root, className], {
		[styles.variantPrimary]: !!variant && variant === EVariant.Primary,
		[styles.variantSecondary]: !!variant && variant === EVariant.Secondary,
	});

	const Tag = ordered ? 'ol' : 'li';

	return (
		<Tag className={cls}>
			{React.isValidElement(Bullet) ? (
				<div className={styles.customBullet}>{Bullet}</div>
			) : (
				<div className={styles.bullet}>
					<span
						className={styles.bulletText}
						children={Bullet || '•'}
					/>
				</div>
			)}
			<Text children={children} />
		</Tag>
	);
};
