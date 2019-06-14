import clsx from 'clsx';
import React, { FunctionComponent, memo, ReactNode } from 'react';
import { CheckIcon } from '../../icons';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	name?: string;
	value: string;
	children?: ReactNode;

	onClick?(checked: boolean): void;

	onChange?(checked: boolean): void;
}

export const CheckBox: FunctionComponent<Props> = memo(
	({
		value,
		className = '',
		name = '',
		label = '',
		disabled = false,
		checked = false,
		onClick = () => void 0,
		onChange = () => void 0,
		children = label,
	}) => (
		<CheckableBase
			inputType="checkbox"
			className={clsx([styles.checkbox, className])}
			inputName={name}
			value={value}
			label={children}
			disabled={disabled}
			checked={checked}
			handleClick={onClick}
			handleChange={onChange}>
			<div
				className={clsx(checkableClass, styles.base, {
					[styles.selected]: checked,
				})}>
				{checked && <CheckIcon />}
				<div className={styles.box} />
			</div>
		</CheckableBase>
	),
);
