import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import styles from './style.scss';

export enum EVariant {
	default = 'default',
	four = 'four',
}

export interface IProps {
	variant?: EVariant;
	borderColour?: string;
	strokeWidth?: 1 | 4;
	distance?: 0 | 1 | 2 | 3 | 4 | 5;
	className?: string;
}

export const Box: FunctionComponent<IProps> = ({
	variant = EVariant.default,
	borderColour = 'gray-300',
	strokeWidth = 1,
	distance = 0,
	children,
	className = '',
}) => (
	<div
		className={cx([
			styles.root,
			styles[`variant--${variant}`],
			styles[`borderColour--${borderColour}`],
			styles[`strokeWidth--${strokeWidth}`],
			styles[`distance--${distance}`],
			className,
		])}>
		{children}
	</div>
);
