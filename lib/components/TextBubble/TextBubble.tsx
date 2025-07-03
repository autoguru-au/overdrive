import clsx from 'clsx';
import React, { type FunctionComponent, useMemo } from 'react';

import { sprinkles } from '../../styles';
import { Box, type BoxProps } from '../Box/Box';
import { Text, type TextProps } from '../Text/Text';

import * as styles from './TextBubble.css';

export interface TextBubbleProps
	extends Omit<BoxProps, 'borderRadius' | 'position' | 'padding'> {
	label: string;
	rawNumbers?: boolean;
	textColour?: TextProps['colour'];
}

type BubbleSize = 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE';
const valuePaddingMap: Record<BubbleSize, BoxProps['padding']> = {
	SMALL: '3',
	MEDIUM: '4',
	LARGE: '5',
	X_LARGE: '6',
};

export const TextBubble: FunctionComponent<TextBubbleProps> = ({
	textColour = 'white',
	rawNumbers = false,
	label,
	...boxProps
}) => {
	const size = useMemo<BubbleSize>(() => {
		const size = label.length;
		switch (size) {
			case 1: {
				return 'SMALL';
			}
			case 2: {
				return 'MEDIUM';
			}
			case 3: {
				return 'LARGE';
			}
			default: {
				return 'X_LARGE';
			}
		}
	}, [label]);
	return (
		<Box
			borderRadius="full"
			backgroundColour="gray900"
			display="inline-block"
			position="relative"
			padding={valuePaddingMap[size]}
			odComponent="text-bubble"
			{...boxProps}
		>
			<Text
				size="2"
				strong
				noWrap
				className={clsx(
					styles.bubbleText,
					sprinkles({
						position: 'absolute',
						overflow: 'hidden',
						width: 'full',
						paddingX: '1',
					}),
				)}
				colour={textColour}
			>
				{label}
			</Text>
		</Box>
	);
};
