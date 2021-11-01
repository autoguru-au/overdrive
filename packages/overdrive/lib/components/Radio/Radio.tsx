import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box';
import { CheckableBase } from '../private/CheckableBase';
import { useCheckableStyles } from '../private/CheckableBase/useCheckableStyles';

import { useRadioContext } from './RadioGroup';

import * as styles from './Radio.css';

export interface Props {
	value: string;
	className?: string;
	disabled?: boolean;
	children: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, Props>(
	({ value, className = '', children, disabled = false }, ref) => {
		const { checkableItem } = useCheckableStyles();
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
				handleClick={handleClick}>
				<Box
					borderRadius="pill"
					position="absolute"
					borderWidth="2"
					borderColour="gray"
					className={clsx(
						checkableItem,
						styles.circle.default,
						styles.circle.outer,
						{
							[styles.circle.selected]: isChecked,
						},
					)}
				/>
				<Box
					borderRadius="pill"
					position="absolute"
					borderColour="gray"
					borderWidth="none"
					className={clsx(
						styles.circle.default,
						styles.circle.inner,
						{
							[styles.circle.selected]: isChecked,
							[styles.circle.selectedInner]: isChecked,
						},
					)}
				/>
			</CheckableBase>
		);
	},
);
