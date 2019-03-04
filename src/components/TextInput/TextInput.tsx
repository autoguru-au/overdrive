import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

const TextInputComponent = withEnhancedInput(function TextInput({
	field,
	eventHandlers,
	validation,
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
});

export const TextInput = memo(TextInputComponent);
