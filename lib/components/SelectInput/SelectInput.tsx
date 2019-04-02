import React, { memo } from 'react';
import { ChevronDownIcon, Icon } from '../Icon';
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
			<Icon className={styles.arrow} size={25} icon={ChevronDownIcon} />
		</>
	);
});

export const SelectInput = memo(SelectInputComponent);
