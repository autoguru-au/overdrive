import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

export const TextAreaInput = withEnhancedInput<{}, HTMLTextAreaElement>(
	({
		field,
		eventHandlers,
		validation,
		isLoading,
		suffixed,
		prefixed,
		size,
		...rest
	}) => (
		<Box
			is="textarea"
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
		/>
	),
	{
		primitiveType: 'textarea',
		withSuffixIcon: false,
		withPrefixIcon: false,
	},
);

export default TextAreaInput;
