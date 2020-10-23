import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';

import * as styleRefs from './LoadingBox.treat';

export interface Props
	extends Partial<Pick<BoxStyleProps, 'height' | 'display'>> {
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

export const LoadingBox: FunctionComponent<Props> = ({
	className = '',
	randomWidth = false,
	blinking = true,
	display = 'block',
	height,
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			is="span"
			width={randomWidth ? undefined : 'full'}
			backgroundColour="gray200"
			display={display}
			height={height}
			className={[styles.root, blinking && styles.blinking, className]}
			style={{
				width: randomWidth ? getRandomIntWidth(60, 40) : undefined,
			}}
		/>
	);
};

const getRandomIntWidth = (max: number, min: number) =>
	`${Math.random() * (max - min) + min}%`;
