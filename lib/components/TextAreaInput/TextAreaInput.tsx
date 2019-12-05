import React from 'react';

import { withEnhancedInput } from '../InputBase';

export const TextAreaInput = withEnhancedInput<{}, HTMLTextAreaElement>(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => (
		<textarea {...eventHandlers} {...field} {...rest} autoComplete="off" />
	),
	{
		primitiveType: 'textarea',
		withSuffixIcon: false,
		withPrefixIcon: false,
	},
);
