import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

function TextInputComponent({
	field,
	eventHandlers,
	validation,
	suffixed,
	prefixed,
	...rest
}) {
	return (
		<input
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type="text"
		/>
	);
}

TextInputComponent.primitiveType = 'text';

export const TextInput = memo(
	withEnhancedInput<{}, HTMLInputElement>(TextInputComponent),
);
