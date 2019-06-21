import React, { memo } from 'react';
import { ChevronDownIcon, Icon } from '../Icon';
import { withEnhancedInput } from '../InputBase';
import styles from './style.scss';

function SelectInputComponent({ field, eventHandlers, validation, ...rest }) {
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
}

SelectInputComponent.primitiveType = 'select';

export const SelectInput = memo(withEnhancedInput(SelectInputComponent));
