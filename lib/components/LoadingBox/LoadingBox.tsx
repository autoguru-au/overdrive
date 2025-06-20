import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './LoadingBox.css';

export interface LoadingBoxProps
	extends Omit<ComponentProps<typeof Box>, 'width'> {
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

export const LoadingBox: FunctionComponent<LoadingBoxProps> = ({
	className = '',
	randomWidth = false,
	blinking = true,
	backgroundColour = 'gray200',
	display = 'block',
	as = 'span',
	...boxStyles
}) => (
	<Box
		as={as}
		display={display}
		width={randomWidth ? undefined : 'full'}
		backgroundColour={backgroundColour}
		{...boxStyles}
		className={[styles.root, blinking && styles.blinking, className]}
		style={{
			width: randomWidth ? getRandomIntWidth(60, 40) : undefined,
		}}
		odComponent="loading-box"
	/>
);

const getRandomIntWidth = (max: number, min: number) =>
	`${Math.random() * (max - min) + min}%`;
