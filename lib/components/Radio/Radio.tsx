import clsx from 'clsx';
import React, { FunctionComponent, memo, ReactNode, useContext } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';
import { RadioContext } from './RadioGroup';

export interface Props {
	value: string;
	className?: string;
	disabled?: boolean;
	label?: string;
	children?: ReactNode;
}

export const Radio: FunctionComponent<Props> = memo(
	({
		value,
		className = '',
		label = '',
		children = label,
		disabled = false,
	}) => {
		const radioContext = useContext(RadioContext);

		const isChecked = value === radioContext.value;

		const handleClick = () => radioContext.radioSelected(value);

		return (
			<CheckableBase
				inputType="radio"
				className={clsx([styles.radio, className])}
				inputName={radioContext.inputName}
				value={value}
				label={children}
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
	},
);
