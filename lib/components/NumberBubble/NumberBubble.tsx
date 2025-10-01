import React, { useMemo } from 'react';

import { textStyles } from '../../styles/typography';
import { toPrettyBigNumber } from '../../utils/number';
import { useBox, type UseBoxPropsDefault } from '../Box/useBox/useBox';
import { type TextProps } from '../Text/Text';

export interface NumberBubbleProps
	extends Pick<UseBoxPropsDefault, 'backgroundColor' | 'backgroundColour'> {
	value: number;
	rawNumbers?: boolean;
	textColor?: TextProps['color'];
	textColour?: TextProps['colour'];
}

type BubbleSize = 'SMALL' | 'MEDIUM' | 'LARGE';
const sizeMap: Record<BubbleSize, UseBoxPropsDefault['size']> = {
	SMALL: '4',
	MEDIUM: '6',
	LARGE: '7',
};

export const NumberBubble = ({
	backgroundColor,
	backgroundColour = backgroundColor ? undefined : 'gray900',
	rawNumbers = false,
	textColor,
	textColour = textColor ? undefined : 'white',
	value,
}: NumberBubbleProps) => {
	const size = useMemo<BubbleSize>(() => {
		if (value < 10) return 'SMALL';
		if (value >= 10 && value < 100) return 'MEDIUM';
		return 'LARGE';
	}, [value]);
	const { Component, componentProps } = useBox({
		odComponent: 'number-bubble',

		alignItems: 'center',
		backgroundColor,
		backgroundColour,
		borderRadius: 'full',
		display: 'inline-flex',
		justifyContent: 'center',
		size: sizeMap[size],
	});
	return (
		<Component {...componentProps}>
			<span
				className={textStyles({
					size: '2',
					color: textColor,
					colour: textColour,
					strong: true,
				})}
			>
				{rawNumbers ? value : toPrettyBigNumber(value)}
			</span>
		</Component>
	);
};
