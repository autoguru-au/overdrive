import { ChevronDownIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { Icon } from '../Icon';
import { withEnhancedInput } from '../InputBase';
import styles from './style.scss';

export const SelectInput = withEnhancedInput<
	{
		children: ReactNode[];
	},
	HTMLSelectElement
>(
	({ field, eventHandlers, suffixed, prefixed, validation, ...rest }) => (
		<>
			<select
				{...eventHandlers}
				{...field}
				{...rest}
				autoComplete="off"
			/>
			<Icon
				className={clsx(styles.arrow, { [styles.suffixed]: suffixed })}
				size={25}
				icon={ChevronDownIcon}
			/>
		</>
	),
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);
