import cx from 'clsx';
import React, { FunctionComponent, SyntheticEvent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
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
	const onChange = (e: SyntheticEvent) => {
		if (typeof handleChange === 'function') {
			handleChange((e.currentTarget as HTMLInputElement).checked);
		}
	};

	return (
		<div
			className={cx([styles.root, className], {
				[styles.checked]: checked,
				[styles.disabled]: disabled === true,
			})}>
			{children}
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

			<div className={styles.focusRect} />

			{!!(typeof label === 'string' && label.length > 0) && (
				<DetailText
					size={EDetailTextSize.Detail2}
					children={label}
					className={styles.label}
				/>
			)}
		</div>
	);
};
