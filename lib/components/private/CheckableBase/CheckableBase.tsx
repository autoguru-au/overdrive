import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';
import * as styleRefs from './CheckableBase.treat';

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
	const styles = useStyles(styleRefs);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof handleChange === 'function') {
			handleChange(e.currentTarget.checked);
		}
	};

	const nakedLabel = ['string', 'number'].includes(typeof label);

	return (
		<Box className={clsx(styles.root, styles.tappable, className)}>
			<input
				name={inputName}
				value={value}
				checked={checked}
				disabled={disabled}
				type={inputType}
				className={clsx(styles.tappable, styles.nativeInput.default, {
					[styles.nativeInput.disabled]: disabled,
					[styles.nativeInput.checked]: checked,
				})}
				onClick={handleClick}
				onChange={onChange}
			/>
			{children}
			<div className={styles.focusRect} />

			<label
				className={clsx(styles.tappable, styles.label.default, {
					[styles.label.disabled]: disabled,
				})}>
				{nakedLabel ? <Text is="span">{label}</Text> : label}
			</label>
		</Box>
	);
};
