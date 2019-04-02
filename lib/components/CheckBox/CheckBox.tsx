import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';
import { CheckIcon } from '../../icons';

export interface IProps {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	name?: string;
	value: string;

	onClick?(checked: boolean): void;

	onChange?(checked: boolean): void;
}

export const CheckBox: FunctionComponent<IProps> = memo(
	({
		value,
		className = '',
		name = '',
		label = '',
		disabled = false,
		checked = false,
		onClick = () => void 0,
		onChange = () => void 0,
	}) => (
		<CheckableBase
			inputType="checkbox"
			className={cx([styles.checkbox, className])}
			inputName={name}
			value={value}
			label={label}
			disabled={disabled}
			checked={checked}
			handleClick={onClick}
			handleChange={onChange}>
			<div
				className={cx(checkableClass, {
					[styles.selected]: checked,
				})}>
				{checked && <CheckIcon />}
				<div className={styles.box} />
			</div>
		</CheckableBase>
	)
);
