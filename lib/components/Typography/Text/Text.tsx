import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import sharedStyles from '../shared.scss';
import { TSizeScale } from '../types';
import styles from './style.scss';

export interface IProps {
	className?: string;
	muted?: boolean;
	strong?: boolean;
	is?: 'p' | 'span';
	size?: TSizeScale;
}

export const Text: FunctionComponent<IProps> = ({
	children,
	className = '',
	muted = false,
	strong = false,
	is: Component = 'span',
	size = 3,
}) => (
	<Component
		className={cx(
			[styles.root, sharedStyles[`sizeScale${size}`], className],
			{
				[styles.muted]: muted,
				[styles.strong]: strong,
			}
		)}
		children={children}
	/>
);
