import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface Props extends ButtonHTMLAttributes<Element> {
	className?: string;
	selected?: boolean;
	gap?: boolean;
	children;
}

export const BubbleComponent: FunctionComponent<Props> = ({
	className = '',
	selected = false,
	gap = false,
	children,
	...rest
}) => {
	const cls = clsx([styles.bubble, className], {
		[styles.selected]: selected,
		[styles.gap]: gap,
	});

	return (
		<button className={cls} {...rest}>
			{gap ? '...' : children}
		</button>
	);
};

export const Bubble = memo(BubbleComponent);
