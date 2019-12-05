import { warning } from '@autoguru/utilities';
import React from 'react';

import { withEnhancedInput } from '../InputBase';

export const DateInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => {
		warning(
			field.value !== '',
			'Date Input does not support empty values.',
		);

		return (
			<input
				{...eventHandlers}
				{...field}
				{...rest}
				autoComplete="off"
				type="date"
			/>
		);
	},
	{
		primitiveType: 'date',
	},
);
