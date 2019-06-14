import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import styles from './style.scss';

export const checkableClass = styles.checkable;

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label: ReactNode;
	inputName: string;
	inputType: string;
	value: string;

	handleClick(event): void;

	handleChange?(checked: boolean): void;
}

export const CheckableBase: FunctionComponent<Props> = ({
	className = '',
	label = '',
	checked = false,
	disabled = false,
	inputType,
	inputName,
	value,
	children,
	handleClick,
	handleChange,
}) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof handleChange === 'function') {
			handleChange(e.currentTarget.checked);
		}
	};

	return (
		<div
			className={clsx([styles.root, className], {
				[styles.checked]: checked,
				[styles.disabled]: disabled === true,
			})}>
			<input
				name={inputName}
				value={value}
				checked={checked}
				disabled={disabled}
				type={inputType}
				className={styles.nativeInput}
				onClick={handleClick}
				onChange={onChange}
			/>
			{children}
			<div className={styles.focusRect} />

			<label className={styles.label}>{label}</label>
		</div>
	);
};
