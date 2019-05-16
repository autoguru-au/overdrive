import cx from 'clsx';
import React, { ElementType, FunctionComponent } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	component?: ElementType;
	muted?: boolean;
}

export const Text: FunctionComponent<IProps> = ({
	children,
	className = '',
	component: Component = 'p',
	muted,
}) => (
	<Component
		className={cx([styles.root, className], {
			[styles.muted]: muted,
		})}
		children={children}
	/>
);
