import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import styles from './style.scss';

export interface IProps {
	variant?: EVariant | null;
	className?: string;
	muted?: boolean;
}

export enum EVariant {
	Mobile = 'mobile',
	Desktop = 'desktop',
}

export const Text: FunctionComponent<IProps> = ({
	variant = null,
	className = '',
	muted = false,
	children,
}) => (
	<p
		className={cx([styles.root, className], {
			[styles.muted]: muted,
			[styles.variantMobile]: !!variant && variant === EVariant.Mobile,
			[styles.variantDesktop]: !!variant && variant === EVariant.Desktop,
		})}
		children={children}
	/>
);
