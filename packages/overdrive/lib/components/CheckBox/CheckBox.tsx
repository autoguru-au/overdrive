import { CheckIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { noop } from '../../utils';
import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { useTextStyles } from '../Text';
import { CheckableBase } from '../private/CheckableBase';
import { useCheckableStyles } from '../private/CheckableBase/useCheckableStyles';

import * as styleRefs from './CheckBox.treat';

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	name?: string;
	value: string;
	children: ReactNode;

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
		const styles = useStyles(styleRefs);
		const iconStyles = clsx(
			useTextStyles({ colour: 'white' }),
			useBoxStyles({ position: 'absolute' }),
		);
		const { checkableItem } = useCheckableStyles();

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
				handleChange={onChange}>
				{checked ? (
					<Icon
						className={clsx(styles.icon, iconStyles)}
						icon={CheckIcon}
						size="small"
					/>
				) : null}
				<Box
					borderWidth="2"
					borderColour="gray"
					backgroundColour={checked ? 'green600' : 'transparent'}
					className={clsx(checkableItem, styles.base.default, {
						[styles.base.selected]: checked,
					})}
				/>
			</CheckableBase>
		);
	},
);
