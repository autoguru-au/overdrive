import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
}

const LinearProgressIndicatorComponent: FunctionComponent<IProps> = ({
	className = '',
}) => {
	const cls = cx([styles.root, className]);

	return (
		<div className={cls}>
			<div className={styles.linearProgressBar}>
				<span className={styles.linearProgressBarInner} />
			</div>
		</div>
	);
};

export const LinearProgressIndicator = memo(LinearProgressIndicatorComponent);
