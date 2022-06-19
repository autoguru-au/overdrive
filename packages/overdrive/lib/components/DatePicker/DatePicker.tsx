import { CalendarIcon, IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, ComponentProps, FunctionComponent } from 'react';

import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import * as iconStyles from '../Icon/Icon.css';
import { ProgressSpinner } from '../ProgressSpinner';

import * as styles from './DatePicker.css';

export interface Props
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'value'>>,
		Pick<ComponentProps<typeof Icon>, 'size'> {
	className?: string;
	disabled?: boolean;
	icon?: IconType;
	isLoading?: boolean;

	onChange(date: string);
}

export const DatePicker: FunctionComponent<Props> = ({
	className = '',
	icon = CalendarIcon,
	size = 'medium',
	disabled = false,
	isLoading = false,
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
				{
					[styles.disabled.default]: disabled,
					[styles.disabled.root]: disabled,
				},
			)}>
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
			{isLoading ? (
				<ProgressSpinner
					className={clsx(
						styles.spinner,
						useBoxStyles({
							position: 'absolute',
						}),
					)}
					size={
						size as ComponentProps<typeof ProgressSpinner>['size']
					}
				/>
			) : (
				<Icon icon={icon} size={size} />
			)}
		</Box>
	);
};
