import { CheckIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { noop } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { CheckableBase } from '../private/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './CheckBox.css';
export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
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
			onClick = noop,
			onChange = noop,
			children,
		},
		ref,
	) => {
		return (
			<CheckableBase
				ref={ref}
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
							[styles.checkbox.selected]: checked,
						},
					)}
				>
					<Icon
						icon={CheckIcon}
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
