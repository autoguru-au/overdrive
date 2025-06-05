import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box/Box';
import { CheckableBase } from '../private/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './Radio.css';
import { useRadioContext } from './RadioGroup';

export interface RadioProps {
	value: string;
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ value, className = '', children, disabled = false }, ref) => {
		const radioContext = useRadioContext();

		const isChecked = value === radioContext.value;

		const handleClick = () => radioContext.radioSelected?.(value);

		return (
			<CheckableBase
				ref={ref}
				inputType="radio"
				className={className}
				inputName={radioContext.inputName}
				value={value}
				label={children}
				disabled={disabled}
				checked={isChecked}
				handleClick={handleClick}
			>
				<Box
					className={clsx(checkableIndicator, styles.radio, {
						[styles.radioSelected]: isChecked,
					})}
				/>
				<Box
					className={clsx(styles.inner, {
						[styles.innerSelected]: isChecked,
					})}
				/>
			</CheckableBase>
		);
	},
);

Radio.displayName = 'Radio';

export default Radio;
