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
	const { thumbProps, inputProps } = useSliderThumb(
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
			{...dataAttrs({ 'focus-visible': isFocusVisible })}
		>
			<VisuallyHidden>
				<input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
			</VisuallyHidden>
		</div>
	);
};

/**
 * A slider component that allows users to select a value from a range.
 * Built with React Aria for accessibility and supports configurable steps, value display, and increment/decrement buttons.
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

	// const handleDecrement = () => {
	// 	if (state.isDisabled) return;
	// 	const newValue = Math.max(props.minValue ?? 0, currentValue - step);
	// 	state.setThumbValue(0, newValue);
	// };

	// const handleIncrement = () => {
	// 	if (state.isDisabled) return;
	// 	const newValue = Math.min(props.maxValue ?? 100, currentValue + step);
	// 	state.setThumbValue(0, newValue);
	// };

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
