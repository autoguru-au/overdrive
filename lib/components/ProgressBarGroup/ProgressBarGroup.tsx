import * as React from 'react';
import { ComponentProps, Fragment, FunctionComponent } from 'react';

import { Box } from '../Box';
import { ProgressBar } from '../ProgressBar';
import { Text } from '../Text';

import * as styles from './ProgressBarGroup.css';

export interface Props
	extends Pick<ComponentProps<typeof ProgressBar>, 'colour'> {
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
		>
			{values.map((value, idx) => (
				<Fragment key={idx}>
					<Text size="3" align="right" colour="light">
						{hasPrefixLabels ? prefixLabels![idx] : ''}
					</Text>
					<ProgressBar colour={colour} value={value / count} />
					<Text size="3" align="left" colour="light">
						{hasSuffixLabels ? suffixLabels![idx] : ''}
					</Text>
				</Fragment>
			))}
		</Box>
	);
};
