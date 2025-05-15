import { CheckIcon, MinusIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, useEffect, useRef } from 'react';

import { mergeRefs, noop } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { CheckableBase } from '../private/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './CheckBox.css';

export interface CheckboxProps {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	/**
	 * Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native
	 * input control. Toggling logic is left up to the parent component
	 */
	isIndeterminate?: boolean;
	name?: string;
	value: string;
	children?: ReactNode;
	onClick?(checked: boolean): void;
	onChange?(checked: boolean): void;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			value,
			className = '',
			name = '',
			disabled = false,
			checked = false,
			isIndeterminate = false,
			onClick = noop,
			onChange = noop,
			children,
		},
		ref,
	) => {
		const internalRef = useRef<HTMLInputElement>(null);

		useEffect(() => {
			if (internalRef.current) {
				internalRef.current.indeterminate = isIndeterminate;
			}
		}, [isIndeterminate]);

		return (
			<CheckableBase
				ref={mergeRefs([ref, internalRef])}
				inputType="checkbox"
				className={className}
				inputName={name}
				value={value}
				label={children}
				disabled={disabled}
				checked={checked}
				handleClick={onClick}
				handleChange={onChange}
			>
				<Box
					className={clsx(
						styles.checkbox.default,
						checkableIndicator,
						{
							[styles.checkbox.selected]:
								checked || isIndeterminate,
						},
					)}
					{...dataAttrs({
						indeterminate: isIndeterminate,
					})}
				>
					<Icon
						icon={isIndeterminate ? MinusIcon : CheckIcon}
						size="medium"
						className={styles.icon}
					/>
				</Box>
			</CheckableBase>
		);
	},
);

CheckBox.displayName = 'Checkbox';
