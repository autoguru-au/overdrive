import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

const MAX_TEXT_INPUT_LENGTH = 2000;

export const TextInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'type' | 'maxLength'>>
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
			as="input"
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type={rest.type ?? 'text'}
			maxLength={rest.maxLength || MAX_TEXT_INPUT_LENGTH}
		/>
	),
	{
		primitiveType: 'text',
	},
);

export default TextInput;
