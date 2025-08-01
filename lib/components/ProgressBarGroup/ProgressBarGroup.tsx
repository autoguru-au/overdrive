import * as React from 'react';
import { ComponentProps, Fragment, FunctionComponent } from 'react';

import { Box } from '../Box/Box';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Text } from '../Text/Text';

import * as styles from './ProgressBarGroup.css';

export interface ProgressBarGroupProps
	extends Pick<ComponentProps<typeof ProgressBar>, 'colour'> {
	prefixLabels?: string[];
	suffixLabels?: string[];
	count?: number;
	values: number[];
}

export const ProgressBarGroup: FunctionComponent<ProgressBarGroupProps> = ({
	prefixLabels,
	suffixLabels,
	values,
	count = values.reduce((result, item) => result + item, 0),
	colour,
}) => {
	const hasPrefixLabels = Array.isArray(prefixLabels);
	const hasSuffixLabels = Array.isArray(suffixLabels);

	return (
		<Box
			className={styles.root}
			alignItems="center"
			style={{
				gridTemplateColumns: `${hasPrefixLabels ? 'auto ' : ''}1fr${
					hasSuffixLabels ? ' auto' : ''
				}`,
			}}
			odComponent="progress-bar-group"
		>
			{values.map((value, idx) => (
				<Fragment key={idx}>
					<Text size="3" colour="light" className={styles.label}>
						{hasPrefixLabels ? prefixLabels![idx] : ''}
					</Text>
					<ProgressBar colour={colour} value={value / count} />
					<Text size="3" colour="light">
						{hasSuffixLabels ? suffixLabels![idx] : ''}
					</Text>
				</Fragment>
			))}
		</Box>
	);
};
