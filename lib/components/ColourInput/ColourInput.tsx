import { warning } from '@autoguru/utilities';
import * as React from 'react';

import { sprinkles } from '../../styles';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './ColourInput.css';

export const ColourInput = withEnhancedInput<{}, HTMLInputElement>(
	({
		field,
		eventHandlers,
		validation,
		isLoading,
		suffixed,
		prefixed,
		size,
		...rest
	}) => {
		warning(
			field.value !== '',
			'Colour Input does not support empty values.',
		);

		return (
			<Box
				display="flex"
				flexWrap="nowrap"
				alignItems="center"
				justifyContent="center"
				position="relative"
			>
				<Box
					className={[
						styles.colouredBoxHolder,
						styles.colouredBoxHolderSize[size],
					]}
					display="flex"
					height="full"
					alignItems="center"
					justifyContent="space-around"
					flexShrink="0"
					pointerEvents="none"
					position="absolute"
				>
					<Box
						style={{ backgroundColor: field.value }}
						padding={size === 'medium' ? '3' : '2'}
						borderRadius="1"
					/>
				</Box>
				<Text
					display="block"
					className={[
						styles.valueText,
						styles.valueTextSize[size],
						sprinkles({
							position: 'absolute',
						}),
					]}
				>
					{field.value}
				</Text>
				<Box
					as="input"
					type="color"
					flexGrow="1"
					{...eventHandlers}
					{...field}
					{...rest}
					className={[styles.input, field.className]}
					autoComplete="off"
				/>
			</Box>
		);
	},
	{
		primitiveType: 'color',
		withPrefixIcon: false,
		defaultValue: '#000000',
	},
);
