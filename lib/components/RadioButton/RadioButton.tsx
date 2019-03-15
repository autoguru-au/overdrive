import cx from 'clsx';
import React, { memo } from 'react';
import styles from './style.scss';
import { usingCheckable } from '../CheckableBase';

const handleClick = (_: boolean, setChecked: (checked: boolean) => void) => {
	setChecked(true);
};

const RadioButtonComponent = usingCheckable(
	({ checked, className }) => {
		const cls = cx([styles.radio, className], {
			[styles.selected]: checked,
		});

		return (
			<div className={cls}>
				<div className={styles.outerCircle} />
				<div className={styles.innerCircle} />
			</div>
		);
	},
	'radio',
	handleClick
);

export const RadioButton = memo(RadioButtonComponent);
