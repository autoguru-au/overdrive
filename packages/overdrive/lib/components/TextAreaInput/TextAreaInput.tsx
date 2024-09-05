import * as React from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

const MAX_TEXT_AREA_INPUT_LENGTH = 4000;

export const TextAreaInput = withEnhancedInput<
	Partial<Pick<HTMLTextAreaElement, 'type' | 'maxLength'>>
>(
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
			maxLength={rest.maxLength || MAX_TEXT_AREA_INPUT_LENGTH}
		/>
	),
	{
		primitiveType: 'textarea',
		withSuffixIcon: false,
		withPrefixIcon: false,
	},
);

export default TextAreaInput;
