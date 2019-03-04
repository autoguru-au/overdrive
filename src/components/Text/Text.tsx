import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import styles from './style.scss';

export interface IProps {
	variant?: EVariant | null;
	className?: string;
}

export enum EVariant {
	Mobile = 'mobile',
	Desktop = 'desktop',
}

export const Text: FunctionComponent<IProps> = ({
	variant = null,
	className = '',
	children,
}) => {
	const cls = cx([styles.root, className], {
		[styles.variantMobile]: !!variant && variant === EVariant.Mobile,
		[styles.variantDesktop]: !!variant && variant === EVariant.Desktop,
	});

	return <p className={cls} children={children} />;
};
