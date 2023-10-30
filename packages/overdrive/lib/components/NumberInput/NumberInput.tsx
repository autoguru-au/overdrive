import * as React from 'react';
import { FocusEventHandler, FormEventHandler } from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

import { useNumberInputBehaviours } from './useNumberInputBehaviours';

const isEdge: boolean =
	typeof navigator !== 'undefined' && /edge/i.test(navigator.userAgent);

const type = isEdge ? 'text' : 'number';

interface Props
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'step'>>,
		Pick<HTMLInputElement, 'value'> {
	preventMouseWheel?: boolean;
	onChange?: FormEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
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
		...rest
	}) => {
		const { value, inputRef, onFocus, onBlur, onChange } =
			useNumberInputBehaviours({
				ref,
				preventMouseWheel,
				onFocus: eventHandlers.onFocus,
				onBlur: eventHandlers.onBlur,
				onChange: eventHandlers.onChange,
				value: incomingFieldProps.value,
			});

		return (
			<Box
				is="input"
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
			/>
		);
	},
	{
		primitiveType: type,
	},
);

export default NumberInput;
