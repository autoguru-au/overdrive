import { ChevronDownIcon } from '@autoguru/icons';
import * as React from 'react';
import { ReactNode } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../private/InputBase';
import { useStyles } from 'react-treat';
import * as styleRefs from './SelectInput.treat';

export const SelectInput = withEnhancedInput<
	{
		children: ReactNode[];
		c
	},
	HTMLSelectElement
>(
	({ field, eventHandlers, suffixed, prefixed, validation, ...rest }) => {

		const styles = useStyles(styleRefs);
		return (
			<Box
				display="flex"
				flexWrap="nowrap"
				alignItems="center"
				justifyContent="center"
				position="relative">
				<Box
					is="select"
					flexGrow={1}
					{...eventHandlers}
					{...field}
					{...rest}
					className={[styles.input, styles.paddedInput, field.className]}
					autoComplete="off"
				/>
				<Box
					className={styles.arrow}
					display="flex"
					alignItems="center"
					height="full"
					marginRight= '4'
					flexShrink={0}
					pointerEvents='none'
					position='absolute'>
					<Icon
						size="medium"
						icon={ChevronDownIcon}
					/>
				</Box>

			</Box>
		);
	},
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);
