import clsx from 'clsx';
import React, { memo, ReactNode } from 'react';
import { ChevronDownIcon } from '@autoguru/icons';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../InputBase';
import styles from './style.scss';

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
	withEnhancedInput<
		{
			children: ReactNode[] | ReactNode;
		},
		HTMLSelectElement
	>(SelectInputComponent, {
		withSuffixIcon: false,
		withForcedSuffixIconPadding: true,
	}),
);
