import { warning } from '@autoguru/utilities';
import React, { memo } from 'react';

import { withEnhancedInput } from '../InputBase';

function DateInputComponent({ field, eventHandlers, validation, ...rest }) {
	warning(field.value === '', `Date Input does not support empty values.`);

	return (
		<input
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type="date"
		/>
	);
}

DateInputComponent.primitiveType = 'date';

export const DateInput = memo(withEnhancedInput(DateInputComponent));

// @deprecated
export const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date
		.getDate()
		.toString()
		.padStart(2, '0');

	return `${year}-${month}-${day}`;
};
