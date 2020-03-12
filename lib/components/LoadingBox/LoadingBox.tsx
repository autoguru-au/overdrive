import clsx from 'clsx';
import * as React from 'react';
import { memo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './LoadingBox.treat';

interface Props {
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

export const LoadingBox = memo<Props>(
	({ className = '', randomWidth = false, blinking = true }) => {
		const styles = useStyles(styleRefs);

		return (
			<Box
				is="span"
				backgroundColour="gray200"
				className={clsx([styles.root, className], {
					[styles.blinking]: blinking,
				})}
				style={{
					width: randomWidth ? getRandomIntWidth(60, 40) : void 0,
				}}
			/>
		);
	},
);

const getRandomIntWidth = (max: number, min: number) =>
	`${Math.random() * (max - min) + min}%`;
