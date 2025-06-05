import { CalendarIcon, IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, ComponentProps, FunctionComponent } from 'react';

import { Box } from '../Box/Box';
import { useBoxStyles } from '../Box/useBoxStyles';
import { Icon } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text } from '../Text/Text';

import * as styles from './DatePicker.css';

type SizeScale = 'small' | 'medium' | 'large';

export interface DatePickerProps
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'value'>> {
	size?: SizeScale;
	className?: string;
	disabled?: boolean;
	icon?: IconType;
	isLoading?: boolean;
	valueLabel?: string;

	onChange(date: string);
}

const textSizeMap: Record<SizeScale, ComponentProps<typeof Text>['size']> = {
	small: '2',
	medium: '3',
	large: '5',
};
export const DatePicker: FunctionComponent<DatePickerProps> = ({
	className = '',
	icon = CalendarIcon,
	size = 'medium',
	disabled = false,
	isLoading = false,
	valueLabel,
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
			className={clsx(className, {
				[styles.disabled.default]: disabled,
				[styles.disabled.root]: disabled,
			})}
		>
			<Box
				position="absolute"
				height="full"
				width="full"
				is="input"
				disabled={disabled}
				onChange={onChangeEvent}
				className={clsx(
					{
						[styles.disabled.default]: disabled,
					},
					styles.input,
				)}
				type="date"
				{...inputProps}
			/>
			<Box
				className={clsx(styles.contents.default, {
					[styles.contents.withLabel]: Boolean(valueLabel),
				})}
			>
				{isLoading ? (
					<ProgressSpinner
						className={clsx(
							styles.spinner,
							useBoxStyles({
								position: 'absolute',
							}),
						)}
						size={
							size as ComponentProps<
								typeof ProgressSpinner
							>['size']
						}
					/>
				) : (
					<Icon icon={icon} size={size} />
				)}
				{valueLabel && (
					<Text size={textSizeMap[size as string]}>{valueLabel}</Text>
				)}
			</Box>
		</Box>
	);
};

export default DatePicker;
