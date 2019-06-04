import clsx from 'clsx';
import React, { FunctionComponent, isValidElement, ReactNode } from 'react';
import { Text } from '../Typography/Text';
import styles from './style.scss';

export interface IProps {
	bullet?: ReactNode;
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
	bullet: Bullet = '•',
}) => {
	const Tag = ordered ? 'ol' : 'li';

	return (
		<Tag
			className={clsx(
				styles.root,
				{
					[styles.variantPrimary]: variant === EVariant.Primary,
					[styles.variantSecondary]: variant === EVariant.Secondary,
				},
				className
			)}>
			{isValidElement(Bullet) ? (
				<div className={styles.customBullet}>{Bullet}</div>
			) : (
				<div className={styles.bullet}>
					<span className={styles.bulletText} children={Bullet} />
				</div>
			)}
			<Text is="span">{children}</Text>
		</Tag>
	);
};
