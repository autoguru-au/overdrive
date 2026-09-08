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

/**
 * The box sizes DS-2026 publishes. `medium` (20px) is the default and the size
 * every unqualified CheckBox in the library renders at; `small` (16px) is for
 * dense layouts.
 *
 * Shared in intent with Radio and Switch — promote to `lib/types` once those
 * two carry a size of their own (AG-21694, AG-21696).
 */
export type CheckBoxSize = 'medium' | 'small';

export interface CheckboxProps extends TestIdProp {
	/** Flexible className applied to the root element */
	className?: string;
	/**
	 * Accessible name for the box. Required when rendering without
	 * `children`, which otherwise leaves the control with no name at all.
	 */
	'aria-label'?: string;
	/** id of the element naming this box, as an alternative to `aria-label` */
	'aria-labelledby'?: string;
	/** Whether the box is ticked. Controlled — pair it with `onChange` */
	checked?: boolean;
	/** Removes the control from the tab order and blocks interaction */
	disabled?: boolean;
	/**
	 * Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native
	 * input control. Toggling logic is left up to the parent component
	 */
	isIndeterminate?: boolean;
	/** Name given to the native input, for form submission and grouping */
	name?: string;
	/** Value submitted with the form when this box is ticked */
	value: string;
	/** Label content. A string is wrapped in `Text`; a node is rendered as given */
	children?: ReactNode;
	/**
	 * Box size, per the DS-2026 selection-control spec.
	 * @default 'medium'
	 */
	size?: CheckBoxSize;
	/** Fired on click, with the box's state at the time of the click */
	onClick?(checked: boolean): void;
	/** Fired when the ticked state changes, with the new state */
	onChange?(checked: boolean): void;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			value,
			className = '',
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledBy,
			name = '',
			disabled = false,
			checked = false,
			isIndeterminate = false,
			size = 'medium',
			testId,
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
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				className={className}
				inputName={name}
				value={value}
				label={children}
				disabled={disabled}
				checked={checked}
				odComponent="checkbox"
				testId={testId}
				handleClick={onClick}
				handleChange={onChange}
			>
				<Box
					className={clsx(
						styles.checkbox.default,
						styles.size[size],
						checkableIndicator,
						{
							[styles.checkbox.selected]:
								checked || isIndeterminate,
						},
					)}
					{...dataAttrs({
						size,
						indeterminate: isIndeterminate,
					})}
				>
					<Icon
						icon={isIndeterminate ? MinusIcon : CheckIcon}
						size="small"
						className={styles.icon}
					/>
				</Box>
			</CheckableBase>
		);
	},
);

CheckBox.displayName = 'CheckBox';
