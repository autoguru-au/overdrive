import { warning } from '@autoguru/utilities';
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
	invert?: boolean; // @deprecated
	label: string;
}

export const Badge = memo<Props>(
	({
		label,
		colour = EBadgeColour.Neutral,
		invert = undefined,
		look = 'standard',
		className = '',
	}) => {
		warning(
			typeof invert === 'undefined',
			'Invert is now deprecated, please use look="inverted"',
		);

		if (typeof invert !== 'undefined') {
			look = 'inverted';
		}

		return (
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
		);
	},
);
