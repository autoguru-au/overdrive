import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import styles from './style.scss';

export const checkableClass = styles.checkable;

export interface IProps {
	className?: string;
	checked?: boolean;
	label?: string;
	inputName: string;
	inputType: string;
	value: string;

	handleClick(event): void;

	handleChange?(event): void;
}

export const CheckableBase: FunctionComponent<IProps> = ({
	className = '',
	label = '',
	checked = false,
	inputType,
	inputName,
	value,
	children,
	handleClick,
	handleChange,
}) => (
	<div
		className={cx([styles.root, className], {
			[styles.checked]: checked,
		})}>
		{children}
		<input
			name={inputName}
			value={value}
			checked={checked}
			onClick={handleClick}
			onChange={handleChange}
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
