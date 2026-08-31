import { CheckIcon, MinusIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, useEffect, useRef } from 'react';

import type { TestIdProp } from '../../types';
import { mergeRefs, noop } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CheckableBase } from '../private/CheckableBase/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './CheckBox.css';

export interface CheckboxProps extends TestIdProp {
	/** Additional class name applied to the root element */
	className?: string;
	/** Controlled checked state of the checkbox */
	checked?: boolean;
	/** Disables the checkbox, preventing all interaction */
	disabled?: boolean;
	/**
	 * Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native
	 * input control. Toggling logic is left up to the parent component
	 */
	isIndeterminate?: boolean;
	/** Name of the underlying native input, as submitted with its form */
	name?: string;
	/** Value of the underlying native input, as submitted with its form */
	value: string;
	/** Label content rendered beside the checkbox */
	children?: ReactNode;
	/** Called when the checkbox is clicked, with the current checked state */
	onClick?(checked: boolean): void;
	/** Called when the checked state changes, with the new checked state */
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
			testId,
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
				odComponent="check-box"
				testId={testId}
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
