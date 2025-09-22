import React, { forwardRef, useRef } from 'react';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { LoadingBox } from '../LoadingBox/LoadingBox';
import { type OptionItem } from '../OptionGrid/OptionGrid';

import { inputStyle, labelVariants, timeFieldStyle } from './DateTimeInput.css';
import type { CommonSelectorProps } from './types';

export type TimeSelectorTextContent = Record<
	keyof typeof defaultEnglish,
	string
>;

export interface TimeSelectorProps
	extends CommonSelectorProps<string>,
		TestIdProp {
	/**
	 * Available time options for selection
	 */
	timeOptions: OptionItem[];
	/**
	 * Text values for localization
	 */
	lang?: Partial<TimeSelectorTextContent>;
}

const defaultEnglish = {
	timeLabel: 'time',
	select: 'select',
} as const;

/**
 * TimeSelector component for selecting a time from predefined options.
 * Presently, this component is primarily used within the DateTimeInput.
 */
export const TimeSelector = forwardRef<HTMLLabelElement, TimeSelectorProps>(
	(
		{
			timeOptions,
			value,
			defaultValue,
			name,
			onChange,
			disabled = false,
			invalid = false,
			loading = false,
			lang = {},
			testId,
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

		return (
			<label
				className={timeFieldStyle}
				onClick={handleTimeFieldClick}
				onMouseLeave={() => {
					// work-around for :focus-within outline appearing for mouse users
					selectRef?.current?.blur();
				}}
				aria-disabled={isDisabled}
				{...dataAttrs({ invalid, 'od-component': 'time-selector' })}
				{...(testId && { ...dataAttrs({ testId }) })}
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
						value={value ?? defaultValue}
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

TimeSelector.displayName = 'TimeSelector';
