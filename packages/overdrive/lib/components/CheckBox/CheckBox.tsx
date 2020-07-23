import { CheckIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { CheckableBase } from '../private/CheckableBase';
import { useCheckableStyles } from '../private/CheckableBase/useCheckableStyles';
import { useTextStyles } from '../Text';
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
		const iconStyles = clsx(
			useTextStyles({ colour: 'white' }),
			useBoxStyles({position: 'absolute'}),
		);
		const { checkableItem } = useCheckableStyles();

		return (
			<CheckableBase
				inputType="checkbox"
				className={className}
				inputName={name}
				value={value}
				label={children}
				disabled={disabled}
				checked={checked}
				handleClick={onClick}
				handleChange={onChange}>
					{checked && (
						<Icon
							className={clsx(styles.icon, iconStyles)}
							icon={CheckIcon}
							size="small"
						/>
					)}
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
