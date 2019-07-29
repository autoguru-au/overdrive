import clsx from 'clsx';
import React, { FunctionComponent, ReactElement } from 'react';
import styles from './style.scss';

export interface Props {
	heading?: ReactElement | null;
	className?: string;
}

export const TextContainer: FunctionComponent<Props> = ({
	heading = null,
	className = '',
	children,
}) => (
	<article className={clsx(styles.root, className)}>
		{Boolean(heading) && <header>{heading}</header>}
		{children}
	</article>
);
