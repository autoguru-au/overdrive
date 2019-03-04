import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

const NumberInputComponent = withEnhancedInput(function NumberInput({
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
			type="number"
		/>
	);
});

export const NumberInput = memo(NumberInputComponent);
