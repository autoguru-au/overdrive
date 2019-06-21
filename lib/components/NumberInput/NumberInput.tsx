import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

const isEdge: boolean = navigator && /edge/i.test(navigator.userAgent);

const type = isEdge ? 'text' : 'number';

function NumberInputComponent({ field, eventHandlers, validation, ...rest }) {
	return (
		<input
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type={type}
		/>
	);
}

NumberInputComponent.primitiveType = type;

export const NumberInput = memo(withEnhancedInput(NumberInputComponent));
