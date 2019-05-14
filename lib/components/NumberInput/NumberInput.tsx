import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

const isEdge =
	/edge/i.test(navigator.userAgent);
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
			type={!isEdge ? 'number' : 'text'}
		/>
	);
});

export const NumberInput = memo(NumberInputComponent);
