import React, { FunctionComponent, ReactElement } from 'react';
import styles from './style.scss';

export interface Props {
	heading?: ReactElement | null;
}

export const TextContainer: FunctionComponent<Props> = ({
	heading = null,
	children,
}) => (
	<article className={styles.root}>
		{Boolean(heading) && <header>{heading}</header>}
		{children}
	</article>
);
