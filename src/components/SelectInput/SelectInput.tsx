import { ChevronDown } from '@autoguru/icons';
import React, { memo } from 'react';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../InputBase';
import styles from './style.scss';

const SelectInputComponent = withEnhancedInput(function SelectInput({
	field,
	eventHandlers,
	validation,
	...rest
}) {
	return (
		<>
			<select
				{...eventHandlers}
				{...field}
				{...rest}
				autoComplete="off"
			/>
			<Icon className={styles.arrow} size={25} icon={ChevronDown} />
		</>
	);
});

export const SelectInput = memo(SelectInputComponent);
