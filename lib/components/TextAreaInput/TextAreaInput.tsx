import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

function TextAreaInputComponent({ field, eventHandlers, validation, ...rest }) {
	return (
		<textarea {...eventHandlers} {...field} {...rest} autoComplete="off" />
	);
}

TextAreaInputComponent.primitiveType = 'textarea';

export const TextAreaInput = memo(withEnhancedInput(TextAreaInputComponent));
