import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { TSizeScale } from '../types';
import styles from './style.scss';

interface Props {
	className?: string;
	is?: 'p' | 'span';
	muted?: boolean;
	size?: TSizeScale;
	strong?: boolean;
	white?: boolean;
	align?: 'left' | 'center' | 'right';
}

export const Text: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'span',
	muted = false,
	size = 4,
	strong = false,
	white = false,
	align = 'left',
}) => (
	<Component
		className={clsx(
			[styles.root, styles[`sizeScale${size}`]],
			{
				[styles.muted]: muted,
				[styles.strong]: strong,
				[styles.white]: white,
				[styles.alignLeft]: align === 'left',
				[styles.alignCenter]: align === 'center',
				[styles.alignRight]: align === 'right',
			},
			className,
		)}>
		{children}
	</Component>
);
