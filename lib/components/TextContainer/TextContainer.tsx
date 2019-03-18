import React, { FunctionComponent, ReactElement } from 'react';
import styles from './style.scss';

export interface IProps {
	heading?: ReactElement | null;
}

export const TextContainer: FunctionComponent<IProps> = ({
	heading = null,
	children,
}) => (
	<article className={styles.root}>
		{!!heading && <header>{heading}</header>}
		{children}
	</article>
);
