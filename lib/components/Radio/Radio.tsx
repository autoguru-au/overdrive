import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import type { ControlSize } from '../../types';
import { Box } from '../Box';
import { CheckableBase } from '../private/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './Radio.css';
import { useRadioContext } from './RadioGroup';

export interface RadioProps {
	value: string;
	className?: string;
	disabled?: boolean;
	/** Overrides `RadioGroup`'s size, for the rare mixed-size case. */
	size?: ControlSize;
	children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ value, className = '', children, disabled = false, size }, ref) => {
		const radioContext = useRadioContext();
		const resolvedSize = size ?? radioContext.size ?? 'standard';
		const sized = resolvedSize !== 'standard';

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
					className={clsx(
						checkableIndicator,
						styles.radio,
						sized && styles.ring[resolvedSize],
						{ [styles.radioSelected]: isChecked },
					)}
				/>
				<Box
					className={clsx(
						styles.inner,
						sized && styles.dot[resolvedSize],
						{ [styles.innerSelected]: isChecked },
					)}
				/>
			</CheckableBase>
		);
	},
);

Radio.displayName = 'Radio';
