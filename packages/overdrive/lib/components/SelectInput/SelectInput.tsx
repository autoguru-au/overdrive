import { ChevronDownIcon } from '@autoguru/icons';
import * as React from 'react';
import { ReactNode } from 'react';

import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../private/InputBase';

export const SelectInput = withEnhancedInput<{
	children: ReactNode[];
},
	HTMLSelectElement>(
	({ field, eventHandlers, suffixed, prefixed, validation, ...rest }) => (

		<Box display='flex' flexWrap='nowrap' alignItems="center" justifyContent='center'>
			<Box
				is="select"
				flexGrow={1}
				{...eventHandlers}
				{...field}
				{...rest}
				autoComplete="off"
			/>
			<Icon
				size="medium"
				icon={ChevronDownIcon}
				className={useBoxStyles({ marginRight: '4', flexShrink: 0 })}
			/>
		</Box>
	),
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);
