import { warning } from '@autoguru/utilities';
import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

export const DateInput = withEnhancedInput<Partial<Pick<HTMLInputElement, 'min' | 'max'>>>(
	({
		 field,
		 eventHandlers,
		 validation,
		 isLoading,
		 suffixed,
		 prefixed,
		 ...rest
	 }) => {
		warning(
			field.value !== '',
			'Date Input does not support empty values.',
		);

		return (
			<Box
				is='input'
				{...eventHandlers}
				{...field}
				{...rest}
				autoComplete='off'
				type='date'
			/>
		);
	},
	{
		primitiveType: 'date',
	},
);
