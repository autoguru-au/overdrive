import cx from 'clsx';
import React, { ChangeEvent, FunctionComponent } from 'react';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from '../Grid';
import { EGridDirection, EWrap } from '../Grid/stories';
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
		<Grid
			width="inherit"
			height="inherit"
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space3}
			gutter={EGridSpace.Space0}
			className={cx([styles.root, className], {
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
			<GridItem
				shrink={1}
				grow={1}
				Component="label"
				children={label}
				className={styles.label}
			/>
		</Grid>
	);
};
