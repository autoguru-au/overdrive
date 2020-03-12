import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../InputBase';

export const TextInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'type'>>
>(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => (
		<Box
			is="input"
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type={rest.type ?? 'text'}
		/>
	),
	{
		primitiveType: 'text',
	},
);
