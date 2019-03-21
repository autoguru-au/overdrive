import cx from 'clsx';
import React, { FunctionComponent, memo, useContext } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';
import { RadioContext } from './RadioGroup';

export interface IProps {
	className?: string;
	disabled?: boolean;
	label?: string;
	value: string;
}

export const Radio: FunctionComponent<IProps> = memo(
	({ className = '', value, label, disabled }) => {
		const radioContext = useContext(RadioContext);

		const isChecked = value === radioContext.value;

		const handleClick = () => radioContext.radioSelected(value);

		return (
			<CheckableBase
				inputType="radio"
				className={cx([styles.radio, className])}
				inputName={radioContext.inputName}
				value={value}
				label={label}
				disabled={disabled}
				checked={isChecked}
				handleClick={handleClick}>
				<div
					className={cx([checkableClass], {
						[styles.selected]: isChecked,
					})}>
					<div className={styles.outerCircle} />
					<div className={styles.innerCircle} />
				</div>
			</CheckableBase>
		);
	}
);
