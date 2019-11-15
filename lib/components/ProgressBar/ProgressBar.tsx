import { clamp } from '@autoguru/utilities';
import React, { FunctionComponent, memo } from 'react';

import { Text } from '../Typography';
import styles from './ProgressBar.scss';

interface Props {
	percentage?: number;
	prefixText?: string;
	suffixText?: string;
}
const ProgressBarComponent: FunctionComponent<Props> = ({
	percentage = 0,
	prefixText,
	suffixText,
}) => (
	<div className={styles.progressBar}>
		{Boolean(prefixText) && (
			<Text size={3} className={styles.prefixText}>
				{prefixText}
			</Text>
		)}
		<div className={styles.barBackdrop}>
			<div
				className={styles.barCurrentStatus}
				style={{
					backgroundColor: '#00dd95',
					width: clamp(percentage, 0, 1) * 100 + '%',
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
