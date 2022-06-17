import { CalendarIcon, IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, ComponentProps, FunctionComponent } from 'react';

import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { Box } from '../Box';
import { Icon } from '../Icon';
import * as iconStyles from '../Icon/Icon.css';

import * as styles from './DatePicker.css';

export interface Props
	extends Pick<HTMLInputElement, 'min' | 'max' | 'value'>,
		Pick<ComponentProps<typeof Icon>, 'size'> {
	className?: string;
	disabled?: boolean;

	onChange(date: string);

	icon?: IconType;
}

export const DatePicker: FunctionComponent<Props> = ({
	className = '',
	icon = CalendarIcon,
	size = 'medium',
	disabled = false,
	onChange,
	...inputProps
}) => {
	const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === 'function') {
			onChange(event.currentTarget.value);
		}
	};
	return (
		<Box
			position="relative"
			overflow="hidden"
			className={clsx(
				resolveResponsiveStyle(size, iconStyles.size),
				className,
				{ [styles.disabled]: disabled },
			)}>
			<Box
				position="absolute"
				height="full"
				width="full"
				is="input"
				disabled={disabled}
				onChange={onChangeEvent}
				className={clsx(styles.input, { [styles.disabled]: disabled })}
				type="date"
				{...inputProps}
			/>
			<Icon icon={icon} size={size} />
		</Box>
	);
};
