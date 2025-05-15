import React, { type RefObject } from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

import { useNumberInputBehaviours } from './useNumberInputBehaviours';

const isEdge: boolean =
	typeof navigator !== 'undefined' && /edge/i.test(navigator.userAgent);

const type = isEdge ? 'text' : 'number';

const MAX_NUMBER_INPUT_VALUE = 2_147_483_647;

type InputAttributes = Pick<
	React.InputHTMLAttributes<HTMLInputElement>,
	'min' | 'max' | 'onChange' | 'onFocus' | 'onBlur' | 'step' | 'value'
>;

interface Props extends InputAttributes {
	preventMouseWheel?: boolean;
}

export const NumberInput = withEnhancedInput<Props>(
	({
		field: { ref, ...incomingFieldProps },
		eventHandlers,
		validation,
		isLoading,
		suffixed,
		prefixed,
		preventMouseWheel = false,
		size,
		onChange: incomingOnChange,
		onFocus: incomingOnFocus,
		onBlur: incomingOnBlur,
		max,
		...rest
	}) => {
		const { value, inputRef, onFocus, onBlur, onChange } =
			useNumberInputBehaviours({
				ref: ref as RefObject<HTMLInputElement>,
				preventMouseWheel,
				onFocus: eventHandlers.onFocus,
				onBlur: eventHandlers.onBlur,
				onChange: eventHandlers.onChange,
				value: incomingFieldProps.value,
			});

		return (
			<Box
				as="input"
				ref={inputRef}
				{...eventHandlers}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
				{...incomingFieldProps}
				{...rest}
				autoComplete="off"
				type={type}
				value={value}
				max={max || MAX_NUMBER_INPUT_VALUE}
			/>
		);
	},
	{
		primitiveType: type,
	},
);
