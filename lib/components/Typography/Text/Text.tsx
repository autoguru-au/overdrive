import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { TSizeScale } from '../types';
import styles from './style.scss';

export interface Props {
	className?: string;
	is?: 'p' | 'span';
	muted?: boolean;
	size?: TSizeScale;
	strong?: boolean;
	white?: boolean;
}

export const Text: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'span',
	muted = false,
	size = 3,
	strong = false,
	white = false,
}) => (
	<Component
		children={children}
		className={clsx(
			[styles.root, styles[`sizeScale${size}`]],
			{
				[styles.muted]: muted,
				[styles.strong]: strong,
				[styles.white]: white,
			},
			className,
		)}
	/>
);
