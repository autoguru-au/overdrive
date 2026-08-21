import { CheckIcon, MinusIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, useEffect, useRef } from 'react';

import type { ControlSize } from '../../types';
import { mergeRefs, noop } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CheckableBase } from '../private/CheckableBase/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './CheckBox.css';

export interface CheckboxProps {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	/**
	 * Box size. `standard` is the pre-2026 24px control and stays the default,
	 * so existing usage is unaffected; `large` (20px) and `small` (16px) are the
	 * two sizes DS-2026 publishes.
	 * @default 'standard'
	 */
	size?: ControlSize;
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
			size = 'standard',
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
						size !== 'standard' && styles.boxSize[size],
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
