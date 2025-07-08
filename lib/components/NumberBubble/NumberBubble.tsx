import * as React from 'react';
import { ComponentProps, FunctionComponent, useMemo } from 'react';

import { textStyles } from '../../styles/typography';
import { toPrettyBigNumber } from '../../utils/number';
import { Box, type BoxProps } from '../Box/Box';
import { useBox } from '../Box/useBox/useBox';
import { Text } from '../Text/Text';

export interface NumberBubbleProps
	extends Omit<
		ComponentProps<typeof Box>,
		'borderRadius' | 'position' | 'padding'
	> {
	value: number;
	rawNumbers?: boolean;
	textColour?: ComponentProps<typeof Text>['colour'];
}

type BubbleSize = 'SMALL' | 'MEDIUM' | 'LARGE';
const sizeMap: Record<BubbleSize, BoxProps['size']> = {
	SMALL: '4',
	MEDIUM: '6',
	LARGE: '7',
};

export const NumberBubble: FunctionComponent<NumberBubbleProps> = ({
	value,
	textColour = 'white',
	rawNumbers = false,
	...boxProps
}) => {
	const size = useMemo<BubbleSize>(() => {
		if (value < 10) return 'SMALL';
		if (value >= 10 && value < 100) return 'MEDIUM';
		return 'LARGE';
	}, [value]);
	const { Component, componentProps } = useBox({
		odComponent: 'number-bubble',

		alignItems: 'center',
		backgroundColour: 'gray900',
		borderRadius: 'full',
		display: 'inline-flex',
		justifyContent: 'center',
		size: sizeMap[size],

		...boxProps,
	});
	return (
		<Component {...componentProps}>
			<span
				className={textStyles({
					size: '2',
					colour: textColour,
					strong: true,
				})}
			>
				{rawNumbers ? value : toPrettyBigNumber(value)}
			</span>
		</Component>
	);
};
