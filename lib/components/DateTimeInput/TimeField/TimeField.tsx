import React, { forwardRef, useRef } from 'react';

import type { TestIdProp } from '../../../types';
import { dataAttrs } from '../../../utils/dataAttrs';
import { LoadingBox } from '../../LoadingBox/LoadingBox';
import { type OptionItem } from '../../OptionGrid/OptionGrid';
import {
	inputStyle,
	labelVariants,
	timeFieldStyle,
} from '../DateTimeInput.css';
import type { CommonSelectorProps } from '../types';

export type TimeFieldTextContent = Record<keyof typeof defaultEnglish, string>;

export interface TimeFieldProps
	extends CommonSelectorProps<string>,
		TestIdProp {
	/**
	 * Available time options for selection
	 */
	timeOptions: OptionItem[];
	/**
	 * Text values for localization
	 */
	lang?: Partial<TimeFieldTextContent>;
}

const defaultEnglish = {
	timeLabel: 'time',
	select: 'select',
} as const;

/**
 * TimeField is a sub-component for selecting a time from predefined options.
 * Presently, this component is primarily used within the DateTimeInput.
 */
export const TimeField = forwardRef<HTMLLabelElement, TimeFieldProps>(
	(
		{
			defaultValue,
			disabled = false,
			invalid = false,
			lang = {},
			loading = false,
			name,
			onChange,
			testId,
			timeOptions,
			value,
		},
		ref,
	) => {
		const selectRef = useRef<HTMLSelectElement>(null);
		const isDisabled = disabled || loading;

		const textValues = { ...defaultEnglish, ...lang };

		const handleTimeFieldClick = () => {
			if (
				'showPicker' in HTMLSelectElement.prototype &&
				selectRef.current
			) {
				try {
					// programmatically trigger the select menu
					selectRef.current.showPicker();
				} catch {
					// browser doesn't support triggering menu
				}
			}
		};

		const valueProps =
			value === undefined
				? { defaultValue: defaultValue ?? '' }
				: { value };

		return (
			<label
				className={timeFieldStyle}
				onClick={handleTimeFieldClick}
				onMouseLeave={() => {
					// work-around for :focus-within outline appearing for mouse users
					selectRef?.current?.blur();
				}}
				aria-disabled={isDisabled}
				{...dataAttrs({
					invalid,
					loading,
					'od-component': 'time-field',
					testId,
				})}
				ref={ref}
			>
				<div
					className={labelVariants({
						disabled,
						invalid,
					})}
				>
					{textValues.timeLabel}
				</div>
				{loading ? (
					<LoadingBox height="6" />
				) : (
					<select
						name={name}
						className={inputStyle}
						{...valueProps}
						disabled={isDisabled}
						onChange={(
							event: React.ChangeEvent<HTMLSelectElement>,
						) => {
							if (!isDisabled) {
								onChange?.(event.target.value);
							}
						}}
						onClick={(event: React.MouseEvent) => {
							event.stopPropagation();
						}}
						ref={selectRef}
					>
						<option value="" disabled>
							{textValues.select}
						</option>
						{timeOptions.map((option) => (
							<option key={option.name} value={option.name}>
								{option.label}
							</option>
						))}
					</select>
				)}
			</label>
		);
	},
);

TimeField.displayName = 'TimeField';
