import { MinusIcon, PlusIcon } from '@autoguru/icons';
import React from 'react';
import {
	mergeProps,
	useFocusRing,
	useNumberFormatter,
	useSlider,
	useSliderThumb,
	type AriaSliderProps,
	type AriaSliderThumbProps,
} from 'react-aria';
import { useSliderState } from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './Slider.css';

export interface SliderProps
	extends AriaSliderProps,
		Pick<AriaSliderThumbProps, 'name'>,
		TestIdProp {
	/**
	 * Optional label for the slider
	 */
	label?: string;
	/**
	 * Unit text to display with the value (e.g., 'kms', 'miles', '%')
	 */
	unitText?: string;
	/**
	 * Step value for slider increments
	 * @default 5
	 */
	step?: number;
	/**
	 * Formatting options for the value displayed in the slider
	 */
	formatOptions?: Intl.NumberFormatOptions;
}

interface SliderThumbProps extends AriaSliderThumbProps {
	state: ReturnType<typeof useSliderState>;
	trackRef: React.RefObject<HTMLDivElement | null>;
}

const SliderThumb = ({ state, trackRef, index, name }: SliderThumbProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const { thumbProps, inputProps, isDisabled, isDragging } = useSliderThumb(
		{
			index,
			trackRef,
			inputRef,
			name,
		},
		state,
	);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<div
			{...thumbProps}
			className={styles.thumb}
			{...dataAttrs({
				'focus-visible': isFocusVisible,
				dragging: isDragging,
				disabled: isDisabled,
			})}
		>
			<VisuallyHidden>
				<input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
			</VisuallyHidden>
		</div>
	);
};

/**
 * A slider component that allows users to select a value from a range,
 * supports configurable step values and value unit post-fix. Use the `onChange` handler
 * in most instances for retrieving the current value.
 *
 * @example
 * const handleOnChange = (value) => {
 *   console.log('Distance changed to:', value);
 * };
 *
 * <Slider
 *   label="Distance"
 *   value={distance}
 *   onChange={handleOnChange}
 *   minValue={0}
 *   maxValue={100}
 *   step={5}
 *   unitText="kms"
 * />;
 */
export const Slider = ({
	testId,
	unitText = '',
	step = 5,
	formatOptions,
	...props
}: SliderProps) => {
	const trackRef = React.useRef<HTMLDivElement>(null);
	const numberFormatter = useNumberFormatter(formatOptions);
	const state = useSliderState({
		...props,
		step,
		numberFormatter,
	});
	const { groupProps, trackProps, labelProps, outputProps } = useSlider(
		{
			...props,
			step,
		},
		state,
		trackRef,
	);

	return (
		<Box
			{...groupProps}
			className={styles.container}
			odComponent="slider"
			testId={testId}
		>
			{props.label && (
				<label {...labelProps} className={styles.label}>
					{props.label}
				</label>
			)}

			<div className={styles.valueDisplay}>
				<output {...outputProps} className={styles.valueText}>
					{state.getThumbValueLabel(0)}
					{unitText}
				</output>
			</div>

			<div className={styles.sliderContainer}>
				<Icon icon={MinusIcon} size="medium" />
				<div className={styles.trackContainer}>
					<div
						{...trackProps}
						ref={trackRef}
						className={styles.track}
						{...dataAttrs({ disabled: props.isDisabled })}
					>
						<SliderThumb
							index={0}
							state={state}
							trackRef={trackRef}
							name={props.name}
						/>
					</div>
				</div>
				<Icon icon={PlusIcon} size="medium" />
			</div>
		</Box>
	);
};

Slider.displayName = 'Slider';
