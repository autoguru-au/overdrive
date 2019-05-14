import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	muted?: boolean;
	size?: ESize;
}

export enum ESize {
	Detail1 = 'detail-1',
	Detail2 = 'detail-2',
	Detail3 = 'detail-3',
}

const cssSizeMap: Map<ESize, string> = new Map([
	[ESize.Detail1, styles.detail1],
	[ESize.Detail2, styles.detail2],
	[ESize.Detail3, styles.detail3],
]);

export const DetailText: FunctionComponent<IProps> = ({
	children,
	className = '',
	muted = false,
	size = ESize.Detail1,
}) => (
	<span
		className={cx([styles.root, cssSizeMap.get(size), className], {
			[styles.muted]: muted,
		})}
		children={children}
	/>
);
