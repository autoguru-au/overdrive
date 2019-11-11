import clsx from 'clsx';
import React, { memo } from 'react';

import { Text } from '../Typography';
import styles from './style.scss';

export enum EBadgeColour {
	Neutral = 'neutral',
	Green = 'green',
	Blue = 'blue',
	Yellow = 'yellow',
	Red = 'red',
}

export interface Props {
	colour?: EBadgeColour;
	className?: string;
	look?: 'standard' | 'inverted' | 'minimal';
	label: string;
}

export const Badge = memo<Props>(
	({
		label,
		colour = EBadgeColour.Neutral,
		look = 'standard',
		className = '',
	}) => (
		<Text
			is="span"
			size={2}
			className={clsx(
				styles.root,
				{
					[styles.neutral]: colour === EBadgeColour.Neutral,
					[styles.green]: colour === EBadgeColour.Green,
					[styles.blue]: colour === EBadgeColour.Blue,
					[styles.yellow]: colour === EBadgeColour.Yellow,
					[styles.red]: colour === EBadgeColour.Red,
					[styles.invert]: look === 'inverted',
					[styles.minimal]: look === 'minimal',
				},
				className,
			)}>
			{label}
		</Text>
	),
);
