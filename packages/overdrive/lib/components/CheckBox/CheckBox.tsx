import { CheckIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Icon } from '../Icon';
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

export const CheckBox: FunctionComponent<Props> = memo(
	({
		value,
		className = '',
		name = '',
		disabled = false,
		checked = false,
		onClick = () => undefined,
		onChange = () => undefined,
		children,
	}) => {
		const styles = useStyles(styleRefs);
		const { checkable, checkableItem } = useCheckableStyles();

		return (
			<CheckableBase
				inputType="checkbox"
				className={clsx([styles.checkbox, className])}
				inputName={name}
				value={value}
				label={children}
				disabled={disabled}
				checked={checked}
				handleClick={onClick}
				handleChange={onChange}
			>
				<div className={checkable}>
					{checked && (
						<Icon
							className={styles.icon}
							icon={CheckIcon}
							size="small"
						/>
					)}
					<div
						className={clsx(checkableItem, styles.base.default, {
							[styles.base.selected]: checked,
						})}
					/>
				</div>
			</CheckableBase>
		);
	},
);
