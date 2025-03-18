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

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	name?: string;
	value: string;
	children?: ReactNode;
	onClick?(checked: boolean): void;
	onChange?(checked: boolean): void;
}

export const CheckBox = forwardRef<HTMLInputElement, Props>(
	(
		{
			value,
			className = '',
			name = '',
			disabled = false,
			checked = false,
			indeterminate = false,
			onClick = noop,
			onChange = noop,
			children,
		},
		ref,
	) => {
		const internalRef = useRef<HTMLInputElement>(null);

		useEffect(() => {
			if (internalRef.current) {
				internalRef.current.indeterminate = indeterminate;
			}
		}, [indeterminate]);

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
								checked || indeterminate,
						},
					)}
					{...dataAttrs({
						indeterminate: indeterminate,
					})}
				>
					<Icon
						icon={indeterminate ? MinusIcon : CheckIcon}
						size="medium"
						className={styles.icon}
					/>
				</Box>
			</CheckableBase>
		);
	},
);

CheckBox.displayName = 'Checkbox';

export default CheckBox;
