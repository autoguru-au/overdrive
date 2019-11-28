import { clamp } from '@autoguru/utilities';
import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';

import styles from './ProgressBar.scss';

type Colours = 'red' | 'green' | 'blue' | 'yellow' | 'neutral';

interface Props {
	value?: number;
	colour?: Colours;
}

const ProgressBarComponent: FunctionComponent<Props> = ({
	value = 0,
	colour = 'green',
}) => (
	<div className={styles.root}>
		<div
			className={clsx(styles.bar, {
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
);

export const ProgressBar = memo(ProgressBarComponent);
