import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

export const TextInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'type'>>
>(
	({
		field,
		eventHandlers,
		validation,
		suffixed,
		prefixed,
		isLoading,
		size,
		...rest
	}) => (
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

export default TextInput;
