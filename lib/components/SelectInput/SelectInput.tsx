import React, { memo } from 'react';
import { ChevronDownIcon, Icon } from '../Icon';
import { withEnhancedInput } from '../InputBase';
import styles from './style.scss';
import clsx from 'clsx';

const SelectInputComponent = ({
	field,
	eventHandlers,
	suffixed,
	prefixed,
	validation,
	...rest
}) => (
	<>
		<select {...eventHandlers} {...field} {...rest} autoComplete="off" />
		<Icon
			className={clsx(styles.arrow, { [styles.suffixed]: suffixed })}
			size={25}
			icon={ChevronDownIcon}
		/>
	</>
);

SelectInputComponent.primitiveType = 'select';

export const SelectInput = memo(
	withEnhancedInput(SelectInputComponent, true, false),
);
