import { ChevronDownIcon } from '@autoguru/icons';
import * as React from 'react';
import { ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../private/InputBase';
import * as styleRefs from './SelectInput.treat';

export const SelectInput = withEnhancedInput<
	{
		children: ReactNode[];
	},
	HTMLSelectElement
>(
	({ field, eventHandlers, suffixed, prefixed, validation, ...rest }) => {
		const styles = useStyles(styleRefs);

		return (
			<Box className={styles.root}>
				<Box
					is="select"
					{...eventHandlers}
					{...field}
					{...rest}
					autoComplete="off"
				/>
				<Icon
					size="medium"
					icon={ChevronDownIcon}
					className={styles.icon}
				/>
			</Box>
		);
	},
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);
