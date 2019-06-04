import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

const LoadingBoxComponent: FunctionComponent<IProps> = ({
	className = '',
	randomWidth = false,
	blinking = true,
}) => (
	<span
		className={clsx([styles.root, className], {
			[styles.blinking]: blinking,
		})}
		style={{ width: randomWidth ? getRandomIntWidth(60, 40) : void 0 }}
	/>
);

const getRandomIntWidth = (max: number, min: number) =>
	`${Math.random() * (max - min) + min}%`;

export const LoadingBox = memo(LoadingBoxComponent);
