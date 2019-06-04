import clsx from 'clsx';
import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './style.scss';

export const checkableClass = styles.checkable;

export interface IProps {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	inputName: string;
	inputType: string;
	value: string;

	handleClick(event): void;

	handleChange?(checked: boolean): void;
}

export const CheckableBase: FunctionComponent<IProps> = ({
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
				onClick={handleClick}
				onChange={onChange}
				type={inputType}
				className={styles.nativeInput}
			/>
			{children}
			<div className={styles.focusRect} />
			{!!(typeof label === 'string' && label.length > 0) && (
				<label children={label} className={styles.label} />
			)}
		</div>
	);
};
