import { CheckIcon, MinusIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, {
	forwardRef,
	type MouseEvent,
	type ReactNode,
	useEffect,
	useRef,
} from 'react';

import type { OdComponentProp, TestIdProp } from '../../types';
import { mergeRefs, noop } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { CheckableBase } from '../private/CheckableBase/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './CheckBox.css';

export interface CheckboxProps extends OdComponentProp, TestIdProp {
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
	size?: keyof typeof styles.size;
	/**
	 * Fired on click, with the click event — it is forwarded straight to the
	 * native input. For the ticked state use `onChange`, which receives it.
	 */
	onClick?(event: MouseEvent<HTMLInputElement>): void;
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
			odComponent = 'checkbox',
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
				odComponent={odComponent}
				testId={testId}
				handleClick={onClick}
				handleChange={onChange}
			>
				<Box
					className={clsx(
						styles.checkbox,
						styles.size[size],
						checkableIndicator,
					)}
					{...dataAttrs({
						size,
						active: checked || isIndeterminate,
						disabled,
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
