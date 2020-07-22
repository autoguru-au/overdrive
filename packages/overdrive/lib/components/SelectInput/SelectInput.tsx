import { ChevronDownIcon } from '@autoguru/icons';
import * as React from 'react';
import { ReactNode } from 'react';

import { Box, useBoxStyles } from '../Box';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../private/InputBase';

export const SelectInput = withEnhancedInput<
	{
		children: ReactNode[];
	},
	HTMLSelectElement
>(
	({ field, eventHandlers, suffixed, prefixed, validation, ...rest }) => (
		<Columns noWrap>
			<Column grow width="auto" alignSelf="centre">
				<Box
					is="select"
					{...eventHandlers}
					{...field}
					{...rest}
					autoComplete="off"
				/>
			</Column>
			<Column noShrink alignSelf="centre">
				<Icon
					size="medium"
					icon={ChevronDownIcon}
					className={useBoxStyles({ marginRight: '4' })}
				/>
			</Column>
		</Columns>
	),
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);
