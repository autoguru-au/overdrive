import cx from 'clsx';
import React, { memo } from 'react';
import styles from './style.scss';
import { usingCheckable } from '../CheckableBase';

const RadioButtonComponent = usingCheckable(({ checked, className }) => {
	const cls = cx([styles.radio, className], {
		[styles.selected]: checked,
	});

	return (
		<div className={cls}>
			<div className={styles.outerCircle} />
			<div className={styles.innerCircle} />
		</div>
	);
}, 'radio');

export const RadioButton = memo(RadioButtonComponent);
