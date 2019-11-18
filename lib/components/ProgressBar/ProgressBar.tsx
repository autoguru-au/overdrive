import { clamp } from '@autoguru/utilities';
import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';

import { Text } from '../Typography';
import styles from './ProgressBar.scss';

type Colours = 'red' | 'green' | 'blue' | 'yellow' | 'neutral';

interface Props {
	value?: number;
	prefixText?: string;
	suffixText?: string;
	colour?: Colours;
}

const ProgressBarComponent: FunctionComponent<Props> = ({
	value = 0,
	prefixText,
	suffixText,
	colour = 'green',
}) => (
	<div className={styles.root}>
		{Boolean(prefixText) && (
			<Text size={3} className={styles.prefixText}>
				{prefixText}
			</Text>
		)}
		<div className={styles.barBackdrop}>
			<div
				className={clsx(styles.barCurrentStatus, {
					[styles.red]: colour === 'red',
					[styles.green]: colour === 'green',
					[styles.blue]: colour === 'blue',
					[styles.yellow]: colour === 'yellow',
					[styles.neutral]: colour === 'neutral',
				})}
				style={{
					width: `${clamp(value, 0, 1) * 100}%`,
				}}
			/>
		</div>
		{Boolean(suffixText) && (
			<Text size={3} className={styles.suffixText}>
				{suffixText}
			</Text>
		)}
	</div>
);

export const ProgressBar = memo(ProgressBarComponent);
