import React from 'react';

import { withEnhancedInput } from '../InputBase';

export const TextInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'type'>>
>(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => (
		<input
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type={rest.type || 'text'}
		/>
	),
	{
		primitiveType: 'text',
	},
);
