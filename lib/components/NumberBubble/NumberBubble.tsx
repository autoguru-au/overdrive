import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, useMemo } from 'react';

import { toPrettyBigNumber } from '../../utils/number';
import { Box, boxStyles } from '../Box';
import { Text } from '../Text';

import * as styles from './NumberBubble.css';

export interface Props
	extends Omit<
		ComponentProps<typeof Box>,
		'borderRadius' | 'position' | 'padding'
	> {
	value: number;
	rawNumbers?: boolean;
	textColour?: ComponentProps<typeof Text>['colour'];
}

type BubbleSize = 'SMALL' | 'MEDIUM' | 'LARGE' | 'X_LARGE';
const valuePaddingMap: Record<
	BubbleSize,
	ComponentProps<typeof Box>['padding']
> = {
	SMALL: '2',
	MEDIUM: '3',
	LARGE: '4',
	X_LARGE: '5',
};

export const NumberBubble: FunctionComponent<Props> = ({
	value,
	textColour = 'white',
	rawNumbers = false,
	...boxProps
}) => {
	const size = useMemo<BubbleSize>(() => {
		if (value > 9 && value < 100) return 'MEDIUM';
		if (value > 99 && value < 9999) return 'LARGE';
		if (value >= 9999) return 'LARGE';
		return 'SMALL';
	}, [value]);
	return (
		<Box
			borderRadius="full"
			backgroundColour="gray900"
			display="inline-block"
			position="relative"
			padding={valuePaddingMap[size]}
			{...boxProps}
		>
			<Text
				size="2"
				strong
				className={clsx(
					styles.bubbleText,
					boxStyles({
						position: 'absolute',
					}),
				)}
				colour={textColour}
			>
				{rawNumbers ? value : toPrettyBigNumber(value)}
			</Text>
		</Box>
	);
};

export default NumberBubble;
