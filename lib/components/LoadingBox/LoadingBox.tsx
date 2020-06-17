import * as React from 'react';
import { memo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';
import * as styleRefs from './LoadingBox.treat';

export interface Props extends Pick<BoxStyleProps, 'height' | 'display'> {
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

export const LoadingBox = memo<Props>(
	({
		className = '',
		randomWidth = false,
		blinking = true,
		display,
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
				className={[
					styles.root,
					blinking && styles.blinking,
					className,
				]}
				style={{
					width: randomWidth ? getRandomIntWidth(60, 40) : undefined,
				}}
			/>
		);
	},
);

const getRandomIntWidth = (max: number, min: number) =>
	`${Math.random() * (max - min) + min}%`;
