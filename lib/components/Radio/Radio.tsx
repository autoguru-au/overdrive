import clsx from 'clsx';
import React, { FunctionComponent, memo, useContext } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';
import { RadioContext } from './RadioGroup';

export interface IProps {
	value: string;
	className?: string;
	disabled?: boolean;
	label?: string;
}

export const Radio: FunctionComponent<IProps> = memo(
	({ value, className = '', label = '', disabled = false }) => {
		const radioContext = useContext(RadioContext);

		const isChecked = value === radioContext.value;

		const handleClick = () => radioContext.radioSelected(value);

		return (
			<CheckableBase
				inputType="radio"
				className={clsx([styles.radio, className])}
				inputName={radioContext.inputName}
				value={value}
				label={label}
				disabled={disabled}
				checked={isChecked}
				handleClick={handleClick}>
				<div
					className={clsx([checkableClass], {
						[styles.selected]: isChecked,
					})}>
					<div className={styles.outerCircle} />
					<div className={styles.innerCircle} />
				</div>
			</CheckableBase>
		);
	}
);
