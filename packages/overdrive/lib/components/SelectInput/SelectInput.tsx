import { ChevronDownIcon } from '@autoguru/icons';
import * as React from 'react';
import { ReactNode } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './SelectInput.css';

export const SelectInput = withEnhancedInput<
	{
		children?: ReactNode[];
	},
	HTMLSelectElement
>(
	({
		field,
		eventHandlers,
		suffixed,
		prefixed,
		validation,
		isLoading,
		size,
		fieldIcon = ChevronDownIcon,
		...rest
	}) => (
		<Box
			display="flex"
			flexWrap="nowrap"
			alignItems="center"
			justifyContent="center"
			position="relative"
		>
			<Box
				is="select"
				flexGrow={1}
				{...eventHandlers}
				{...field}
				{...rest}
				className={[styles.input, styles.paddedInput, field.className]}
				autoComplete="off"
			/>
			{isLoading ? null : (
				<Box
					className={styles.arrow}
					display="flex"
					alignItems="center"
					height="full"
					marginRight={size === 'medium' ? '4' : '2'}
					flexShrink={0}
					pointerEvents="none"
					position="absolute"
				>
					<Icon size="medium" icon={fieldIcon} />
				</Box>
			)}
		</Box>
	),
	{
		primitiveType: 'select',
		withSuffixIcon: false,
	},
);

export default SelectInput;
