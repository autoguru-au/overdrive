import React, { Fragment, FunctionComponent } from 'react';

import { ProgressBar } from '../ProgressBar';
import { Text } from '../Typography/Text';
import styles from './ProgressBarGroup.scss';

interface Props {
	prefixLabels?: string[];
	suffixLabels?: string[];
	count?: number;
	values: number[];
}

export const ProgressBarGroup: FunctionComponent<Props> = ({
	prefixLabels,
	suffixLabels,
	values,
	count = values.reduce((result, item) => result + item, 0),
}) => {
	const hasPrefixLabels = Array.isArray(prefixLabels);
	const hasSuffixLabels = Array.isArray(suffixLabels);

	return (
		<div
			className={styles.root}
			style={{
				gridTemplateColumns: `${hasPrefixLabels ? 'auto ' : ''}1fr${
					hasSuffixLabels ? ' auto' : ''
				}`,
			}}>
			{values.map((value, idx) => (
				<Fragment key={idx}>
					<Text size={3} align="right">
						{hasPrefixLabels ? prefixLabels[idx] : ''}
					</Text>
					<ProgressBar value={value / count} />
					<Text size={3} align="left">
						{hasSuffixLabels ? suffixLabels[idx] : ''}
					</Text>
				</Fragment>
			))}
		</div>
	);
};
