import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

const TextAreaInputComponent = withEnhancedInput(function TextAreaInput({
	field,
	eventHandlers,
	validation,
	...rest
}) {
	return (
		<textarea {...eventHandlers} {...field} {...rest} autoComplete="off" />
	);
});

export const TextAreaInput = memo(TextAreaInputComponent);
