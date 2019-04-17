import cx from 'clsx';
import React, { FunctionComponent, memo, useContext } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import { GridItem } from '../Grid';
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
			<GridItem
				shrink={0}
				grow={1}
				Component={CheckableBase}
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
			</GridItem>
		);
	}
);
